import express from "express";
import cors from "cors";
import userRoutes from "../routes/user.route.js";

const app = express();

// CORS first, before any routes
app.use(
  cors({
    origin: "http://localhost:5175",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());
app.use("/api/v1/users", userRoutes);

export default app;
