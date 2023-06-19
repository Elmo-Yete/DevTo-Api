const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
    postId: {
        type: String,
        require: true,
        unique: true
    },
    userWriter: {
        type: String,
        require: true,
        unique: true
    },
    comment: {
        type: String,
    },
    date: {
        type: Date,
        require: true
    }
})

module.exports = mongoose.model("comments", commentsSchema, "Comments")