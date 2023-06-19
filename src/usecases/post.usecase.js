const Post = require("../models/post.model")

const deletePost = async (id) => {
    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  };

const createPost = async (body) => {
    const post = Post.create(body)
    return post
}


const actPost = (id, data) => {
  const postAct = Post.findByIdAndUpdate(id, data, { returnDocument: "after" })
  return postAct
}

const listPost = () => {
  const post = Post.find()
  return post
}

const filterPost = (id) => {
  const postId = Post.findById(id)
  return postId
}

module.exports = { createPost, deletePost, actPost, listPost, filterPost }