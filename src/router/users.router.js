const express = require("express");
const {
  getAll,
  pageInsert,
  insert,
  destroy,
  pageDetail,
  pageEdit,
  edit,
} = require("../controllers/users.controller");

const userRouter = express.Router();

userRouter
  .get("/users", getAll)
  .get("/insert-user", pageInsert)
  .post("/insert-user", insert)
  .get("/delete-user/:id", destroy)
  .get("/detail-user/:id", pageDetail)
  .get("/edit-user/:id", pageEdit)
  .post("/edit-user/:id", edit);

module.exports = userRouter;
