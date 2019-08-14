const sinon = require('sinon');
const mongoose = require('mongoose');
const { assert, expect } = require('chai');

require('../store_test_helper');

const errors = require('../../../../database/errors');

suite('Mongoose UserStore #findById()', () => {
  suiteSetup(() => {
    sandbox = sinon.createSandbox();
  });

  suiteTeardown(() => {});

  setup(() => {
    userModel = createUserModel({
      name: 'User Test',
    });

    return userModel.save();
  });

  teardown(() => {
    sandbox.restore();

    return userModel.delete();
  });

  test('finds the user for the requested id', async () => {
    const expectedUser = createUser({
      id: userModel.id,
      name: userModel.name,
    });

    const user = await database.users.find(userModel.id);

    assert.deepEqual(expectedUser, user);
  });

  test('throws a user model not found error ' +
       'when the given user id does not exist', (done) => {
    const nonExistentId = mongoose.Types.ObjectId();

    database.users.find(nonExistentId)
      .catch((error) => {
        expect(error).to.be.instanceof(errors.UserModelNotFound);
        done();
      });
  });

  test('throws a user entity not created error ' +
       'when an error occurs while casting the user model', (done) => {
    sandbox.stub(database.user, '_modelToObject')
      .throws(new errors.UserEntityNotCreated());

    database.users.find(userModel.id)
      .catch((error) => {
        expect(error).to.be.instanceof(errors.UserEntityNotCreated);
        done();
      });
  });
});
