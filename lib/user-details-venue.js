// UserDetailsVenue shows info about a venue:
// - Name
// - Location
// - Last activity / Last visit
// - Male visitors in the last 12 hours
// - Female visitors in the last 12 hours
class UserDetailsVenue {
  constructor({ userId, venueId, database }) {
    this.userId = userId;
    this.venueId = venueId;
    this.database = database;
  }

  execute() {
    /*
    this.userStore = userStore;
    this.venueStore = venueStore;
    this.clubStore = clubStore;
    */
  }
}

module.exports = UserDetailsVenue;
