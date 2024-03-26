import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect(
    // "mongodb+srv://codegreen19s:DpKpWVSD80UpOy7l@cluster0.e4yipoj.mongodb.net/my-progress"
    "mongodb://localhost:27017/monk-mode-app");
    console.log("Connected with MongoDB");
};
