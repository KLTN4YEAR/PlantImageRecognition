class Post {
    constructor(db, data) {
      this.db = db;
      this.data = data;
    }

    create() {
      const post = this.data;
      return this.db.Post.create(post).then(() => {
        return post;
      });
    }
    
  }
  
  module.exports = {
    Post
  };
  