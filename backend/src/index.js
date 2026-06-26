import dotenv from "dotenv";
import connectDB from "../config/database.js";
import app from "./app.js";
import productRoutes from "../routes/product.route.js";
import dns from "dns";
//change DNS
// change DNS
dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config({ path: "./.env" });

app.use("/api/v1/products", productRoutes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port:${process.env.PORT}`);
    });
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};

startServer();
