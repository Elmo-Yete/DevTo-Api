const express = require("express");
const router = express.Router();
const { create, extract } = require("../usecases/user.usecase");

router.post("/", async (req, res) => {
  try {
    const user = await create(req.body);
    res.status(201);
    res.json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(err.status || 500);
    res.json({
      success: false,
      message: err.message,
    });
  }
});

router.get("/name", async (req, res) => {
  console.log(req.body);
  try {
    const user = await extract(req.body.email);
    // console.log(req.body.email);
    res.status(201);
    res.json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(404);
    res.json({
      success: false,
      message: "No se encontro el usuario",
    });
  }
});

module.exports = router;
