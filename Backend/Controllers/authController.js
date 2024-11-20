import Auth from "../Models/Auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export async function Signup(req, res, next) {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Auth.create({ email, password: hashedPassword });
    return res.status(201).json({
      message: "Success",
      user,
    });
  } catch (err) {
    next(err);
  }
}
export async function login(req, res, next) {
  const { email, password } = req.body;
  const user = await Auth.findOne({ email });
  console.log(user);
  if (!user) {
    return res.status(400).json({
      message: "Invalid Credentials",
    });
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({
      message: "Invalid Credentials",
    });
  }
  const token = jwt.sign(
    { userId: user._id, email: user.email, role: user.role }, //payload
    process.env.JWT_SECRETKEY, //scret key
    { expiresIn: process.env.JWT_EXPIRETIME } //option
  );
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 60000, //1hr in ms
  });
  res.status(200).json({
    message: "Logined successfully",
  });
}
export async function logout(req, res) {
  res.cookie("jwt", "", {
    httpOnly: true,
  });
  res.status(200).json({
    message: "Logged Out Succesfully",
  });
}

// export async function authorizeAdmin(req, res, next) {
//   if (req.user.role !== "admin") {
//     return res.status(403).json({
//       message: "You don't have access for this end point",
//     });
//   }
//   next();
// }

export function authorize(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "You don't have access for this end point",
      });
    }
    next();
  };
}
