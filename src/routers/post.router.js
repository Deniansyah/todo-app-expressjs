const express = require("express");
const { detail, list } = require('../controllers/post.controller')
const { auth, isAdmin } = require("../middlewares/auth");

const router = express.Router();

router
    .get("/post", auth, list)
    .get("/post/:id", auth, isAdmin, detail)

module.exports = router