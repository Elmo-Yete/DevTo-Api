const express = require("express");
const routerUser = require("./routes/user.route")
const routerAuth = require("./routes/auth.route")
// const cors = require("cors");


const app = express();

app.use(express.json());

app.use("/users", routerUser)
app.use("/auth", routerAuth)

module.exports = app