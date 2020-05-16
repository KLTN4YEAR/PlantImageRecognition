class Post {
  constructor(db, data) {
    this.db = db;
    this.data = data;
  }

  async create() {
    const post = this.data;
    return await this.db.Post.create(post)
  }

  async getInfoPost() {
    const postId = this.data.postId;
    return await this.db.Post.findById(postId)
      .populate('postedBy', '_id fullName avatar email')
  }
}

module.exports = {
  Post
};
