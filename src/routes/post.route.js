const express = require("express");
const {
  createPost,
  deletePost,
  actPost,
  listPost,
  filterPost,
} = require("../usecases/post.usecase");
const auth = require("../middlewares/auth.middleware");

const router = express.Router();

router.delete("/:id", auth, async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPost = await deletePost(id);

    res.status(200);
    res.json({
      sucess: true,
      message: "Post has been deleted",
    });

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

router.post("/", auth, async (req, res) => {
  try {
    const post = await createPost(req.body); // intenta hacer post con cratePost
    res.status(201);
    res.json({
      succes: true,
      data: post,
    });
  } catch (error) {
    res.status(eror.status || 500);
    res.json({
      succes: false,
      message: error.message,
    });
  }
});

router.patch("/:id", auth, async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const postAct = await actPost(id, req.body);
    console.log("body", req.body);
    if (!postAct) {
      const error = new Error("User not found");
      error.status = 404;
      throw error;
    }
    res.json({
      success: true,
      data: postAct,
    });
  } catch (err) {
    res.status(404);
    res.json({
      success: false,
      message: err.message,
    });
  }
});

router.get("/", async (req, res) => {
  const query = req.query.postTitle || "";
  try {
    const post = await listPost(query).populate('userCreatorId');
    res.json({
      success: true,
      data: post,
    });
  } catch (err) {
    res.status(err.status || 500).json({
      success: false,
      message: err.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const postfilter = await filterPost(id);
    res.json({
      success: true,
      data: postfilter,
    });
  } catch (err) {
    res.status(err.status || 500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
