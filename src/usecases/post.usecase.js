const Post = require("../models/post.model")

const deletePost = async (id) => {
    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  };

const createPost = async (body) => {
    await Post.collection.createIndex({ userCreator: 1 });
    const post = Post.create(body)
    return post
}


const actPost = (id, data) => {
  const postAct = Post.findByIdAndUpdate(id, data, { returnDocument: "after" })
  return postAct
}

const listPost = async (filters) => {
  const post = await Post.find({ postTitle: { $regex: `${filters}`, $options: "i" }})
  console.log("esto es el post", post)
  return post
}

const filterPost = (id) => {
  const postId = Post.findById(id)
  return postId
}

module.exports = { createPost, deletePost, actPost, listPost, filterPost }