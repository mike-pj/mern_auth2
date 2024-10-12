import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log(err);
})

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    });
 }
)