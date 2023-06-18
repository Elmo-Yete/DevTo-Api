const express = require("express");
const router = express.Router();
const { create, deletePost } = require("../usecases/user.usecase");
const auth = require("../middlewares/auth.middleware")

router.delete("/:id", auth, async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedPost = await deletePost(id);
  
      let status = 200;
      const responseParams = {
        success: true,
        message: "Post has been deleted",
      };
  
      if (!deletedPost) {
        responseParams.success = false;
        responseParams.message = "Post has not been found";
        status = 404;
      }
  
      res.status(status);
      res.json(responseParams);
    } catch (err) {
      res.status(400);
      res.json({
        success: false,
        message: err.message,
      });
    }
  });
  

router.post("/", async (req, res) => {
    try{
        const user = await create(req.body);
        res.status(201);
        res.json({
            success: true,
            data: user
        })
    }catch(err){
        res.status(err.status || 500)
        res.json({
            success: false,
            messge: err.message
        })
    }
})

module.exports = router;