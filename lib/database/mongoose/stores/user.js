const User = require('../../../user');
const UserModel = require('../../../../db/mongoose/models/user');
const errors = require('../../errors');

class UserStore {
  async create(user) {
    const model = this._objectToModel(user);

    await model.save();

    return model.id;
  }

  async findById(userId) {
    const model = await UserModel.findById(userId);

    if (!model) throw new errors.UserModelNotFound(userId);

    return this._modelToObject(model);
  }

  async update(user) {
  }

  _modelToObject(model) {
    let user = null;

    try {
      user = new User({
        id: model.id,
        name: model.name,
      });
    } catch (error) {
      throw new errors.UserEntityNotCreated(model.id, error.stack);
    }

    return user;
  }

  _objectToModel(user) {
    let model = null;

    try {
      model = new UserModel({
        name: user.name,
      });
    } catch (error) {
      throw new errors.UserModelNotCreated(model.id, error.stack);
    }

    return model;
  }
}

module.exports = UserStore;
