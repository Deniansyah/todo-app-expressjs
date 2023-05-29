const { selectAllUsers } = require("../models/users.model");

exports.readAllUsers = (req, res) => {
  selectAllUsers((err, data) => {
    console.log(err)
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Errror"
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "List data of users mana?",
        results: data.rows,
      });
    }
  })
}

exports.createUser = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "User created successfully",
  });
};

exports.updateUser = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "User updated successfully",
  });
};

exports.deleteUser = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Delete user is successfully",
  });
};

exports.readUser = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Detail User",
  });
};