import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/admin.middleware.js";

import {
  getProducts,
  createProduct,
  updateProduct,
  markAsSold,
} from "../controller/product.controller.js";
const router = express.Router();
router.put("/:id/sold", protect, adminOnly, markAsSold);

router.get("/", getProducts); // GET /api/v1/products
router.post("/", createProduct); // POST /api/v1/products
router.put("/:id", updateProduct);
router.post("/", protect, adminOnly, createProduct);
export default router;
