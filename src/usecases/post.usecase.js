const Post = require("../models/post.model")

const deletePost = async (id) => {
    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  };

const createPost = async (body) => {
  console.log("estes es el body", body);
    const post = Post.create(body)
    return post
}

const actPost = (id, data) => {
  const postAct = Post.findByIdAndUpdate(id, data, { returnDocument: "after" })
  return postAct
}

const listPost = async (filters) => {
<<<<<<< HEAD
  const post = await Post.find({ postTitle: { $regex: `${filters}`, $options: "i" }})
=======
  const post = await Post.find({ postTitle: { $regex: `${filters}`, $options: "i" }}).populate('userCreatorId', {
    name: 1,
    profilePicture: 1
  } && 'comments',{
    comment: 1,
    date:1
  })
  console.log("esto es el post", post)
>>>>>>> develop
  return post
}

const filterPost = (id) => {
  const postId = Post.findById(id)
  return postId
}

module.exports = { createPost, deletePost, actPost, listPost, filterPost }