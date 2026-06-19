import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts); // GET /api/v1/products
router.post("/", createProduct); // POST /api/v1/products
router.put("/:id", updateProduct);
export default router;
