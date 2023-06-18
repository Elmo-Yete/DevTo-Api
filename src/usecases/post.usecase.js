const Post = require("../models/post.model")
const User = require("../models/user.model")

const createPost = async (body,id) => {
    const token = await User.findOne({id})
    if (!token) throw createError(401,"Invalid data")

    const post = Post.create(body)
    return post
}

module.exports = {createPost}