class UserLeavesVenue {
  constructor({ userId, venueId, database }) {
    this.userId = userId;
    this.venueId = venueId;
    this.database = database;
  }

  execute() {
  }
}

module.exports = UserLeavesVenue;
