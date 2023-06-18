const express = require ("express");
const { createPost } = require("../usecases/post.usecase")
const auth = require ("../middlewares/auth.middleware")

const router = express.Router();


router.post("/", auth, async (req, res)=> {
    try {
        const post = await createPost(req.body) // intenta hacer post con cratePost
        res.status(201)
        res.json({
            succes:true,
            data:post
        })
    } catch (error) {
        res.status(eror.status || 500)
        res.json({
            succes:false,
            message:error.message
        })
    }
})

module.exports = router;