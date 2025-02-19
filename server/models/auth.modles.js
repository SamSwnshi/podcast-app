import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true,
    },
    password: {
      type: String,
      required: [true, "Password is Requried!"],
    },
  },
  { timestamp: true }
);

const User = mongoose.model("User", userSchema);

export default User;
