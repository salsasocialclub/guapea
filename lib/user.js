class User extends Entity {
  constructor({ id, name, registrationDate }) {
    this.id = id;
    this.name = name;
    this.registrationDate = registrationDate;
  }
}

module.exports = User;
