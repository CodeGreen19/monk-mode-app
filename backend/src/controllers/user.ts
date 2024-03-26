import { TryCatch } from "../middlewares/error.js";
import { User } from "../models/user.js";
import { UserType } from "../types/type.js";
import ErrorHandler from "../utils/utilityClass.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// create a new user
export const SignUp = TryCatch(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  // generate token
  const token = jwt.sign({ userId: user._id }, "secret", {
    expiresIn: "14d",
  });
  res
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 14 * 24 * 60 * 60 * 1000,
    })
    .status(201)
    .json({ message: "User Created Successfully" });
});

// login
export const Login = TryCatch(async (req, res, next) => {
  const { email, password } = req.body;

  const user: UserType | null = await User.findOne({ email });
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const token = jwt.sign({ userId: user._id }, "secret", {
    expiresIn: "14d",
  });
  res
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 14 * 24 * 60 * 60 * 1000,
    })
    .status(200)
    .json({ message: "Login successful" });
});

//me
export const authUser = TryCatch(async (req, res, next) => {
  res.json({ message: "user logged in", user: req.user });
});

// logout
export const Logout = TryCatch(async (req, res, next) => {
  res.clearCookie("token").status(200).json({ message: "Logout successful" });
});
