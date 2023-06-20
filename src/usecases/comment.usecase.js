const Comments = require("../models/comments.model");

const create = async (data) => {
    const comment = Comments.create(data);
    return comment;
};


const listComments = async () => {
    const comment = await Comments.find()
    return comment
}

module.exports = { create, listComments}