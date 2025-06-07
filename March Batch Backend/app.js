const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoutes");
const morgan = require("morgan");
dotenv.config();

const server = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((e) => {
    console.log("Error: Not connected to DB");
  });

server.use(morgan("dev"));
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "New Server in this port with get method" });
});

server.use("/users", userRoutes);

server.listen(process.env.PORT, () => {
  console.log("Server is running...");
});

// const connect=async()=>{
//   try{
//     await
//   }catch(e){}
// }
