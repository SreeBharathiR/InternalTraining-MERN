// userRoutes.js
import { Router } from "express";
import {
  createStudentUser,
  getAllStudentUser,
  getStudentByEmail,
  getStudentById,
  UpdateStudentUser,
} from "../Controllers/userController.js";

const userRoutes = Router();

userRoutes.get("/", getAllStudentUser);
userRoutes.get("/email", getStudentByEmail);
userRoutes.get("/:id", getStudentById);
userRoutes.put("/:id", UpdateStudentUser);
userRoutes.post("/", createStudentUser);

export default userRoutes;
