const Entity = require('./entity');

class Club extends Entity {
  constructor({ id, name, location }) {
    this.id = id;
    this.name = name;
    this.location = location;
  }
}

module.exports = Club;
