const express = require ("express");
const {createPost} = require("../usecases/post.usecase")

const router = express.Router();


router.post("/", async (req,res)=> {
    try {
        const post = await createPost(req.body)
        res.status(201)
        res.json({
            succes:true,
            data:post
        })
    } catch (error) {
        res.status(400)
        res.json({
            succes:false,
            message:error.message
        })
    }
})

module.exports = router;