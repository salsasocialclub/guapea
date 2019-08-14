// UserListsVenues shows all the venues in a zone/city
// that has been visited at least once by a club member
//
// NOTES:
// - How are venues registered?
class UserListsVenues {
  constructor({ userId, database }) {
    this.userId = userId;
    this.database = database;
    this.location = [20.6668205, -103.3918228]  // GDL [lat, lon]
    this.radius = 5000; // In meters
  }

  execute() {
    const user = await this.database.users.findById(userId);

    const venues = this.database.venues.findCloseToLocation(
      this.location, this.radius
    );
  }
}

module.exports = UserListsVenues;
