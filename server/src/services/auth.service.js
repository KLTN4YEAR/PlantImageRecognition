class Auth {
  constructor(db, data) {
    this.db = db;
    this.data = data;
  }

  
  async getInfoGoogle() {
    return await this.db.User.findOne({ "google.googleId": this.data.googleId });
  }

  async getInfoFacebook() {
    return await this.db.User.findOne({ "google.facebookId": this.data.facebookId });
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
        facebookId: this.data.facebookId,
        email: this.data.email
      }
    }

    return user;
  }

  async createAccount() {
    const user = this.getAccount();
    return await this.db.User.create(user);
  }
  
}

module.exports = {
  Auth
};
