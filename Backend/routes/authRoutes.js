import express from "express";
import { login, logout, Signup } from "../Controllers/authController.js";
const authRouter = express.Router();
authRouter.post("/signup", Signup);
authRouter.get("/login", login);
authRouter.get("/logout", logout);
export default authRouter;
