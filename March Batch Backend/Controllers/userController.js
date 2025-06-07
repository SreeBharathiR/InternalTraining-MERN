const User = require("../Models/User");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "Success", users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    res.status(200).json({ message: "Success", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  const userData = req.body;
  console.log(userData);
  try {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const newUser = await User.create(userData);
    res.status(201).json({ message: "User Created", newUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
