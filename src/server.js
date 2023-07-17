const express = require("express");
const routerUser = require("./routes/user.route");
const routerAuth = require("./routes/auth.route");
const routerCPost = require("./routes/post.route");
const routerComment = require("./routes/comment.route");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", routerUser);
app.use("/auth", routerAuth);
app.use("/post", routerCPost);
app.use("/comment", routerComment);

module.exports = app;
