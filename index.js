require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./src/server");
const { DB_USERNAME, DB_PASSWORD, DB_URL, DB_NAME } = process.env;
const dataBaseUrl = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_URL}/${DB_NAME}`;

const port = process.env.PORT || 8080;

mongoose
  .connect(dataBaseUrl)
  .then(() => {
    console.log("Estamos conectados a BD");
    app.listen(port, () => {
      console.log("Nuestro servidor esta levantado");
    });
  })
  .catch((err) => {
    console.log("error", err);
  });
