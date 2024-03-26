import jwt from "jsonwebtoken";
import { TryCatch } from "./error.js";
import { User } from "../models/user.js";
import dotenv from "dotenv";
dotenv.config();
export const isUserExist = TryCatch(async (req, res, next) => {
    const { token } = req.cookies;
    console.log("inside auth", token);
    if (!token || token === null) {
        return res.status(401).json({
            message: "Please login first",
        });
    }
    const decoded = jwt.verify(token, "secret");
    let authUser = (await User.findById(decoded.userId));
    req.user = authUser;
    next();
});
