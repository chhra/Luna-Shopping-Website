import { Router } from "express";
import { protect } from "../middleware/auth.middleware.js";

import {
  loginUser,
  registerUser,
  logoutUser,
  getMe,
} from "../controller/user.controller.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.get("/me", protect, getMe);

export default router;
