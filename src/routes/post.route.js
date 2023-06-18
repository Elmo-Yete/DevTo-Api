const express = require ("express");
const {createPost} = require("../usecases/post.usecase")
const auth = require ("../middlewares/auth.middleware")

const router = express.Router();


router.post("/post",auth, async (req,res)=> {
    console.log("si entra al end",req.body)
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
            message:("huevos")
        })
    }
})

module.exports = router;