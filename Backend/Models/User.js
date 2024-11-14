import mongoose from "mongoose";
//creating schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
//creating model
const User = mongoose.model("studentuser", userSchema);
export default User;
