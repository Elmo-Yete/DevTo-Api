const Comments = require("../models/comment.model");
const {filterPost} = require("./post.usecase.js")

const create = async (data) => {
    const post = await filterPost(data.postId)
    const comment = await Comments.create(data)
    
    post.comments.push(comment)
    post.save()
    return comment;
};

const listComments = async () => {
    const comment = await Comments.find().populate('comments', {
        comment: 1,
        date: 1
    });
    return comment
}

module.exports = { create, listComments}



