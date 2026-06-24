import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const token = authHeader.split(" ")[1]; // extract the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // verify it
    req.user = await User.findById(decoded.id).select("-password"); // attach user
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
