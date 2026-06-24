import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // basic validation

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are important!" });
    }
    //check
    const existing = await User.findOne({ emil: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ message: "user already exists!" });
    }
    // create user
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password,
    });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(201).json({
      message: "User registered",
      token,
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    //checking if the user already exists
    const { email, password } = req.body;
    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!user)
      return res.status(400).json({
        message: "User not found",
      });

    //compare passwords
    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({
        message: "Invalid credentials",
      });
    // create a token containing the user's id
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }, // token valid for 7 days
    );
    res.status(200).json({
      messafe: "User Logged in",
      token, // ← send the token to the frontend
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    console.log("LOGIN ERROR:", error); // ← prints the real cause to your terminal
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message, // ← sends it back in Postman too
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({
      email,
    });
    if (!user)
      return res.status(404).json({
        messsage: "User not found",
      });
    res.status(200).json({
      messsage: "Logout successful",
    });
  } catch (error) {
    console.log("LOGIN ERROR:", error); // ← prints the real cause to your terminal
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message, // ← sends it back in Postman too
    });
  }
};
export const getMe = async (req, res) => {
  res.status(200).json({ user: req.user });
};
export { registerUser, loginUser, logoutUser };
