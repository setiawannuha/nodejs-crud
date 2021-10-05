const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./src/router/users.router");

const { PORT } = require("./src/helpers/env");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // menghubungkan form ejs ke express

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(userRouter);

const APP_PORT = PORT || 3000;
app.listen(APP_PORT, () => {
  console.log(`service running on port ${APP_PORT}`);
});
