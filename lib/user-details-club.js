// UserDetailsClub
// - Club ID
// - Club Name
// - Club Image
// - Creation date
// - Number of members ?
//
// GET /clubs/:clubId
// GET /clubs/:clubId/members
class UserDetailsClub {
  constructor({ userId, clubId, database }) {
    this.userId = userId;
    this.clubId = clubId;
    this.database = database;
  }

  execute() {
  }
}

module.exports = UserDetailsClub;
