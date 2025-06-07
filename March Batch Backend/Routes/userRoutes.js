const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
} = require("../Controllers/userController");

const userRoutes = express.Router();

userRoutes.get("/", getUsers);

userRoutes.get("/:userId", getUserById);

userRoutes.post("/", createUser);

module.exports = userRoutes;
