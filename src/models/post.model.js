//* Hacer el schema mongoose y el modelo

const mongoose = require ("mongoose")
const Schema = mongoose.Schema;
const postSchema = new Schema ({
    userCreatorId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    Title:{
        type: String,
        maxlength:100,
        required:true
    },
    Content: {
        type: String,
        minlength:10,
        maxlegnth: 250,
        required:true
    },
    Image: {
        type: String,
        minlength:10,
        required:true
    },
    Time: {
        type: Number,
        required:true
    },
    Tags:[
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
        type: Number,
    },
    marks: {
        type: Number, 
    }, 
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'comments'
        }
    ]
})
//* El modelo se exporta
module.exports = mongoose.model("posts",postSchema,"Posts");