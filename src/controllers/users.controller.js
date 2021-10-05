const userModel = require("../models/users.model");

const userController = {
  getAll: (req, res) => {
    userModel
      .getAll()
      .then((result) => {
        // res.json(result.rows);
        res.render("users/list.ejs", {
          data: result.rows,
        });
      })
      .catch((err) => {
        res.render("users/error.ejs");
      });
  },
  pageInsert: (req, res) => {
    res.render("users/insert.ejs");
  },
  insert: (req, res) => {
    const body = {
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
    };
    userModel
      .insert(body)
      .then((result) => {
        res.redirect("/users");
      })
      .catch((err) => {
        res.render("users/error.ejs");
      });
  },
  destroy: (req, res) => {
    const id = req.params.id;
    userModel
      .delete(id)
      .then((result) => {
        res.redirect("/users");
      })
      .catch((err) => {
        res.render("users/error.ejs");
      });
  },
  pageDetail: (req, res) => {
    const id = req.params.id;
    userModel
      .detail(id)
      .then((result) => {
        res.render("users/detail.ejs", { data: result.rows[0] });
      })
      .catch((err) => {
        res.render("users/error.ejs");
      });
  },
  pageEdit: (req, res) => {
    const id = req.params.id;
    userModel
      .detail(id)
      .then((result) => {
        res.render("users/edit.ejs", { data: result.rows[0] });
      })
      .catch((err) => {
        res.render("users/error.ejs");
      });
  },
  edit: (req, res) => {
    const id = req.params.id;
    const body = {
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
    };
    userModel
      .edit(id, body)
      .then((result) => {
        res.redirect("/users");
      })
      .catch((err) => {
        res.render("users/error.ejs");
      });
  },
};

module.exports = userController;
