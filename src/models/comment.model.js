const mongoose = require("mongoose")
const Schema = mongoose.Schema
const commentSchema = new Schema({
    
postId: {
    type: Schema.Types.ObjectId, 
    ref: 'Posts'
},
userWriterId: {
    type: Schema.Types.ObjectId, 
    ref: 'Users'
},
comment: {
    type: String,
    require: true
},
date: {
    type: Date,
    require: true
}

})

module.exports = mongoose.model("Comment", commentSchema)