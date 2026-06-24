import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user } = useAuth(); // ← ADD THIS

  return (
    <div className="Homecontainer">
      <h1 className="HomeTitle">
        <i>Your Dreamy Closet</i>
      </h1>
      <p className="HomeText">
        <i>Browse, choose, dream, wear</i>
      </p>

      {!user && (
        <div className="ButtonContainer">
          <Link to="/login">
            <button className="relative px-6 py-3 font-semibold text-pink-300 border-2 border-pink-300 overflow-hidden group rounded-xl cursor-pointer">
              <span className="absolute inset-0 w-full h-full bg-pink-300 transform scale-x-0 origin-left rounded-tr-full rounded-br-full group-hover:scale-x-100 transition-transform duration-800 ease-in-out z-0"></span>
              <span className="absolute inset-0 w-full h-full bg-pink-300 transform scale-x-0 origin-right rounded-tl-full group-hover:scale-x-100 transition-transform duration-800 ease-in-out z-0"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-800">
                Login
              </span>
            </button>
          </Link>
          <Link to="/signup">
            <button className="relative px-6 py-3 font-semibold text-pink-300 border-2 border-pink-300 overflow-hidden group rounded-xl cursor-pointer">
              <span className="absolute inset-0 w-full h-full bg-pink-300 transform scale-x-0 origin-left rounded-tr-full rounded-br-full group-hover:scale-x-100 transition-transform duration-800 ease-in-out z-0"></span>
              <span className="absolute inset-0 w-full h-full bg-pink-300 transform scale-x-0 origin-right rounded-tl-full group-hover:scale-x-100 transition-transform duration-800 ease-in-out z-0"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-800">
                Sign up
              </span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
export default Home;
