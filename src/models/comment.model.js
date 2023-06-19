const mongoose = require("mongoose")
const { modelName } = require("./user.model")
const commentSchema = new mongoose.Schema({
    
postId: {
    type: Schema.Type.ObjectId, 
    ref: 'Posts'
},
userWriterId: {
    type: Schema.Type.ObjectId, 
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