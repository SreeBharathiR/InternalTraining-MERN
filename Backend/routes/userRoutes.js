// userRoutes.js
import { Router } from "express";
import {
  createStudentUser,
  getAllStudentUser,
  getStudentByEmail,
  getStudentById,
  UpdateStudentUser,
} from "../Controllers/userController.js";
import protect from "../middlewares/protect.js";
const userRoutes = Router();

userRoutes.get("/", protect, getAllStudentUser);
userRoutes.get("/email", getStudentByEmail);
userRoutes.get("/:id", getStudentById);
userRoutes.put("/:id", UpdateStudentUser);
userRoutes.post("/", createStudentUser);

export default userRoutes;
