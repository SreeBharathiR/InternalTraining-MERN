import express from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import errorController from "./middlewares/errorController.js";

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

app.use("/studentusers", userRoutes);
app.use(errorHandler);
app.use("*", errorController);
