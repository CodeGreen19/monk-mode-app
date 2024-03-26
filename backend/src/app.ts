import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors";

const app = express();
dotenv.config();

// connect mongo db
connectDB();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from your frontend
    credentials: true, // Include cookies in cross-origin requests (if applicable)
  })
);
//basic endpoint
app.get("/", (req, res) => {
  res.send({ status: 200 });
});

//endpoints
import { errorMiddleware } from "./middlewares/error.js";
import userRoute from "./routes/user.js";
import cookieParser from "cookie-parser";

app.use("/api/user", userRoute);

// use error middle were
app.use(errorMiddleware);

// server listening
app.listen(process.env.PORT, () =>
  console.log(`server is listening port ${process.env.PORT}`)
);
