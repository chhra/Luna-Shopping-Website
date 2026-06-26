import express from "express";
import cors from "cors";
import userRoutes from "../routes/user.route.js";

const app = express();

// CORS first, before any routes
app.use(
  cors({
    origin: "https://luna-shopping-website.vercel.app", // your actual Vercel URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.use(express.json());
app.use("/api/v1/users", userRoutes);

export default app;
