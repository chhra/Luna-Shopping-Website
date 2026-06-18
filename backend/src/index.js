import dotenv from "dotenv";
import connectDB from "../config/database.js";
import app from "./app.js";
import productRoutes from "../routes/product.route.js";
app.use("/api/v1/products", productRoutes);
dotenv.config({
  path: "./.env",
});

const startServer = async () => {
  try {
    await connectDB();
    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port:${process.env.PORT} `);
    });
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};

startServer();
