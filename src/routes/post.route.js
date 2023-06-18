const express = require ("express");
const { createPost, deletePost} = require("../usecases/post.usecase")
const auth = require ("../middlewares/auth.middleware")

const router = express.Router();

router.delete("/:id", auth, async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedPost = await deletePost(id);
  
      res.status (200);
      res.json({
        sucess:true,
        message: "Post has been deleted"
      })
      
  
      /*if (!deletedPost) {
        const error = new Error("Post not found")
            err.status = 404
            throw error
      }*/
    } catch (err) {
      res.status(401);
      res.json({
        success: false,
        message: err.message,
      });
    }
  });

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