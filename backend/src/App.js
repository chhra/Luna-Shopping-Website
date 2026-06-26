import express from "express";
import cors from "cors";
import userRoutes from "../routes/user.route.js";

const app = express();

// CORS first, before any routes
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5175",
      "https://luna-shopping-website.vercel.app/", // ← your live frontend
    ],
    credentials: true,
  }),
);

app.use(express.json());
app.use("/api/v1/users", userRoutes);

export default app;
