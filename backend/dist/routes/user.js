import express from "express";
import { Login, Logout, SignUp, authUser } from "../controllers/user.js";
import { isUserExist } from "../middlewares/auth.js";
const router = express.Router();
router.post("/signup", SignUp);
router.post("/login", Login);
router.post("/logout", Logout);
router.get("/me", isUserExist, authUser);
export default router;
