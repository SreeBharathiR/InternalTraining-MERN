import express from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import morgan from "morgan";
import {
  createStudentUser,
  getAllStudentUser,
  getStudentByEmail,
  getStudentById,
  UpdateStudentUser,
} from "./Controllers/userController.js";

const app = express();
app.use(morgan("dev"));
config();
app.use(express.json());
app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
app.get("/", (req, res) => {
  res.status(200).json({ message: "Successfully response gained" });
});
const DBConnection = async () => {
  try {
    await connect(process.env.MONGODB_URL);
    console.log("Connected to DataBase");
  } catch (err) {
    console.log("Error :Not able to connect with DB ", err.message);
  }
};
DBConnection();

app.get("/studentusers", getAllStudentUser);
app.get("/studentusers/email", getStudentByEmail);
app.put("/studentusers/:id", UpdateStudentUser);
app.get("/studentusers/:id", getStudentById);
app.post("/studentusers", createStudentUser);
