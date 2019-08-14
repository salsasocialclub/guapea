const mongoose = require('mongoose');

const UserStore = require('./stores/user');
const VenueStore = require('./stores/venue');

class MongooseDatabase {
  constructor({
    scheme, host, port, user, password, database, options,
  }) {
    this.scheme = scheme;
    this.host = host;
    this.port = port;
    this.user = user;
    this.password = password;
    this.database = database;
    this.connection = null;

    this.connect(options);

    this.users = new UserStore();
    this.venues = new VenueStore();
  }

  buildURI() {
    let uri = `${this.scheme}://`;

    if (this.user && this.password) {
      uri += `${this.user}:${this.password}@`;
    }

    uri += this.host;

    if (this.port) {
      uri += `:${this.port}`;
    }

    uri += `/${this.database}`;

    return uri;
  }

  connect(options) {
    if (!this.connection) {
      this.connection = mongoose
        .connect(this.buildURI(), options)
        .catch(error =>
          console.log(`Error while connecting to Mongo: ${error}`)
        );
    }

    return this.connection;
  }

  disconnect() {
    if (this.connection) {
      return this.connection
        .then(_ => _.connection.close());
    }
  }
}

module.exports = MongooseDatabase;
