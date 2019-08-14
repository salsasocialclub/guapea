// UserListsClubMembersVisits returns the last N visits in the last 12 hours
// starting from an index:
// - Club ID
// - Club Name
// - Visits:
//   - Member (ID + Name)
//   - Venue (ID + location + Name)
//   - Time
//
// GET /clubs/:clubId/visits?index=x
// GET /clubs/:clubId/member/:memberId
// GET /clubs/:clubId/member/:memberId/visits
class UserListsClubMembersVisits {
  constructor({ userId, clubId, index, database }) {
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
