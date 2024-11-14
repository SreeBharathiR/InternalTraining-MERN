import User from "../Models/User.js";
export async function getAllStudentUser(req, res) {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Success",
      users,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}
export async function getStudentById(req, res) {
  console.log(req.params.id);
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      message: "Success",
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}
export async function getStudentByEmail(req, res) {
  console.log(req.body.email);
  try {
    const user = await User.findOne({ email: req.body.email });

    res.status(200).json({
      message: "Success",
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.stack,
    });
  }
}
export async function createStudentUser(req, res) {
  const { name, email, password } = req.body;
  try {
    const IsUserExits = await User.findOne({ email: req.body.email });
    if (!IsUserExits) {
      const user = await User.create({ name, email, password });

      return res.status(201).json({
        message: "Success",
        user,
      });
    }
    res.status(400).json({
      message: "User Aldready exist",
    });
  } catch (err) {
    res.status(500).json({
      message: err.stack,
    });
  }
}
export async function UpdateStudentUser(req, res) {
  const { name, email, password } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      name,
      email,
      password,
    });

    res.status(200).json({
      message: "Success",
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.stack,
    });
  }
}
