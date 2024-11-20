import mongoose from "mongoose";
const authSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password required"],
      minlength: [6, "Password must be atleast 6 characters"],
    },
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const Auth = mongoose.model("authUser", authSchema);
export default Auth;
