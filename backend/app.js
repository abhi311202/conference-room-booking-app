import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectMongo from "./config/mongoClient.js";
import adminRoutes from "./Modules/Admin/Routes/adminRoutes.js";
import userRoutes from "./Modules/User/Routes/userRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// DB connection
connectMongo();

// API Routes
app.get("/a", (req, res) => {
  res.send("Hello Abi!");
});

app.use("/Admin", adminRoutes);
app.use("/User", userRoutes);

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
