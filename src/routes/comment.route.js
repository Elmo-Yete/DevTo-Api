const express = require("express");
const { create, listComments } = require("../usecases/comment.usecase")
const router = express.Router();

router.post("/", auth, async (req, res) => {
    try {
      const comment = (await create(req.body)) // intenta hacer post con cratePost
      res.status(201).json({ // Envia la respuesta al cliente
        success: true,
        data: comment,
      });
    } catch (error) {
      res.status(error.status || 500);
      res.json({
        succes: false,
        message:error.message,
      });
    }
  });

  router.get("/", async (req, res) => {
    try {
      const post = await listComments();
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