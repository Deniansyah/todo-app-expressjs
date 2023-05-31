const { selectAllUsers, insertUser, changeUser, dropUser, selectUser } = require("../models/users.model");

exports.readAllUsers = (req, res) => {
  selectAllUsers((err, data) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Something wrong in controller database",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "List data of users",
        results: data.rows,
      });
    }
  })
}

exports.createUser = (req, res) => {
  insertUser(req.body, (err, data) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Something wrong in controller database",
      });
    } else {
      return res.status(200).json({
        status: true,
        message: "User created success",
        results: data.rows[0],
      });
    }
  })
};

exports.updateUser = (req, res) => {
  changeUser(req.params.id, req.body, (err, data) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Something wrong in controller database",
      });
    } else {
      return res.status(200).json({
        status: true,
        message: "Updated detail user",
        results: data.rows[0],
      });
    }
  });
};

exports.deleteUser = (req, res) => {
  dropUser(req.params.id, (err, data) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Something wrong in controller database",
      });
    } else {
      res.status(200).json({
        status: true,
        message: "Delete data user id = " + req.params.id + " success",
      });
    }
  });
};

exports.readUser = (req, res) => {
  selectUser(req.params.id, (err, data) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Something wrong in controller database",
      });
    } else {
      res.status(200).json({
        status: true,
        message: "Detail User",
        results: data.rows[0],
      });
    }
  });
};