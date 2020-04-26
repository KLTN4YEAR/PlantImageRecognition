class Users {
  constructor(db, data) {
    this.db = db;
    this.data = data;
  }

  getAccount() {
    let user={
      fullName: this.data.fullName,
      avatar: this.data.avatar,
      birthday: this.data.birthday,
    }

    if(this.data.googleId){
      user.google={
        googleId: this.data.googleId,
        email: this.data.email
      }
    }
    else{
      user.facebook={
        googleId: this.data.facebookId,
        email: this.data.email
      }
    }

    return user;
  }
  
  createAccount() {
    const user = this.getAccount();
    return this.db.Users.create(user).then(() => {
      return user;
    });
  }
  
}

module.exports = {
  Users
};
