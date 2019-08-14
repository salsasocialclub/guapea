const club = require('../../../club');
const clubModel = require('../../../../db/mongoose/models/club');
const errors = require('../../errors');

class clubStore {
  async create(club) {
    const model = this._objectToModel(club);

    await model.save();

    return model.id;
  }

  async findById(clubId) {
    const model = await clubModel.findById(clubId);

    if (!model) throw new errors.clubModelNotFound(clubId);

    return this._modelToObject(model);
  }

  async update(club) {
  }

  _modelToObject(model) {
    let club = null;

    try {
      club = new club({
        id: model.id,
        name: model.name,
      });
    } catch (error) {
      throw new errors.clubEntityNotCreated(model.id, error.stack);
    }

    return club;
  }

  _objectToModel(club) {
    let model = null;

    try {
      model = new clubModel({
        name: club.name,
      });
    } catch (error) {
      throw new errors.clubModelNotCreated(model.id, error.stack);
    }

    return model;
  }
}

module.exports = clubStore;
