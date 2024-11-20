// userRoutes.js
import { Router } from "express";
import {
  createStudentUser,
  getAllStudentUser,
  getStudentByEmail,
  getStudentById,
  UpdateStudentUser,
} from "../Controllers/userController.js";

import { authorize } from "../Controllers/authController.js";
const userRoutes = Router();

userRoutes.get("/", authorize("admin", "manager"), getAllStudentUser);
userRoutes.get("/email", authorize("admin", "manager"), getStudentByEmail);
userRoutes.get("/:id", authorize("admin"), getStudentById);
userRoutes.put("/:id", authorize("admin"), UpdateStudentUser);
userRoutes.post("/", authorize("admin"), createStudentUser);

export default userRoutes;
