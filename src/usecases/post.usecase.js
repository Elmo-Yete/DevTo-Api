const Post = require("../models/post.model")



const createPost = async (body) => {
    const post = Post.create(body)
    return post
}

module.exports = { createPost }