class User {
  constructor(db, data) {
    this.db = db;
    this.data = data;
  }

  async getInfo() {
    const userId = this.data.userId;
    return await this.db.User.findOne({ _id: userId });
  }
}

module.exports = {
  User
};
