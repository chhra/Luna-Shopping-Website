import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user } = useAuth();
  const imgVariant = {
    hover: {
      scale: 1.1,
      rotate: 3,
      boxShadow: "5px 5px 5px rgba(232, 43, 175, 0.114)",
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
  };
  return (
    <div className="Homecontainer">
      <h1 className="HomeTitle">
        <i>Closet of Dreams</i>
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
      <div className="about">
        <h2>Follow us on Instagram & Tiktok!</h2>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/luna.s_outfits?igsh=dnBpZHJsdWE1Z2Nt&utm_source=qr"
            target="_blank"
          >
            <motion.img
              variants={imgVariant}
              whileHover="hover"
              src="/images/insta.jpg"
            />
          </a>
          <a
            href="https://www.tiktok.com/@lunas.closet54?_r=1&_t=ZS-97X8udWi7gC"
            target="_blank"
          >
            <motion.img
              variants={imgVariant}
              whileHover="hover"
              src="/images/tiktok.jpg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
