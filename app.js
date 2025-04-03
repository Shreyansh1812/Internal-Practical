import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import resumeRoutes from "./routes/resumeRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.use("/api", resumeRoutes);  // Add this line

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
