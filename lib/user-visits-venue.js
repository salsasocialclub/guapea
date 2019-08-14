class UserVisitsVenue {
  constructor({ userId, venueId, userLocation, database }) {
    this.userId = userId;
    this.venueId = venueId;
    this.userLocation = userLocation;
    this.database = database;
  }

  execute() {
  }
}

module.exports = UserVisitsVenue;
