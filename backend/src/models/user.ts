import mongoose, { Schema } from "mongoose";
import { UserType } from "../types/type.js";

const UserSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const User = mongoose.model<UserType>("User", UserSchema);
