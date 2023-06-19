//* Hacer el schema mongoose y el modelo

const mongoose = require ("mongoose")

const postSchema = new mongoose.Schema ({
    userCreatorId: {
        type: Schema.Type.ObjectId, 
        ref: 'Users'
    },
    postTitle:{
        type: String,
        maxlength:100,
        required:true
    },
    postContent: {
        type: String,
        minlength:10,
        maslegnth: 250,
        required:true
    },
    postImage: {
        type: String,
        minlength:10,
        maxlength:100,
        required:true
    },
    postlectureTime: {
        type: Number,
        required:true
    },
    postTags:[
        {
            type:String,
            required:true
        },
    ],
    date:{
        type: Date,
        required:true
    },
    heartReactions: {
        type: Number
    },
    marks: {
        type: Number
    }
})
//* El modelo se exporta
module.exports = mongoose.model("posts",postSchema,"Posts");