import express from "express";
import {
  getProducts,
  createProduct,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts); // GET /api/v1/products
router.post("/", createProduct); // POST /api/v1/products
export default router;
