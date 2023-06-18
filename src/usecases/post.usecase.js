const Post = require("../models/post.model")

const deletePost = async (id) => {
    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  };

const createPost = async (body) => {
    const post = Post.create(body)
    return post
}

module.exports = { createPost, deletePost }