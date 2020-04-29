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

  async getInfoPost() {
    const postId = this.data._id;
    return await this.db.Post.findById(postId);
  }

}

module.exports = {
  Post
};
