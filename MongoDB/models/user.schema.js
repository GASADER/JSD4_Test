import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const userSchema = new mongoose.Schema({
  // postId: { 
  //   type: Number,
  //   unique: true,
  //   required: true,
  //   default: () => Math.floor(Math.random() * 1000)
  // },
  UserId: { type: String, required: true},
  postId: { type: String, required: true, unique: true, default: uuidv4 },
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  post_status: { type: Boolean, required: true }
  // birthDate: { type: String, required: true },
  // gender: { type: String, enum: ["male", "female", "other"], required: true },
  // city: { type: String, required: true },
  // height: { type: Number, required: true },
  // weight: { type: Number, required: true },
  // profileName: { type: String, required: true },
  // profileImage: { type: String, required: true },
});

 const User = mongoose.model("User", userSchema);

export default User;
