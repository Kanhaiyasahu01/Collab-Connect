import React from "react";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import avatar1 from "../../assets/avatar2.jpg";
import { FaEnvelope } from "react-icons/fa";
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bg-richblack-900 text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to={'/'}>
        <div className="text-2xl font-bold flex items-center gap-2">
          <img src={logo} alt="logo" />
        </div>
        </Link>

        {/* Links */}
        <div className="flex gap-6 items-center">
        {location.pathname.startsWith("/dashboard") && (
            <Link
              to="/dashboard"
              className=" hover:text-yellow-500 transition-colors duration-300"
            >
            <p>Projects</p>
            </Link>
          )}
          {location.pathname.startsWith("/dashboard") && (
            <Link
              to="/dashboard/competition"
              className=" hover:text-yellow-500 transition-colors duration-300"
            >
            <p>Competition</p>
            </Link>
          )}
          {location.pathname.startsWith("/dashboard") && (
            <Link
              to="/dashboard/mates"
              className=" hover:text-yellow-500 transition-colors duration-300"
            >
            <p>Mates</p>
            </Link>
          )}{" "}
          {location.pathname.startsWith("/dashboard") && (
            <Link
              to="/dashboard/messages"
              className=" hover:text-yellow-500 transition-colors duration-300"
            >
              <FaEnvelope className="w-6 h-6" />
            </Link>
          )}
          <Link
            to={"/faqs"}
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            FAQs
          </Link>
          <Link
            to={"/about-us"}
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link to={"/dashboard"}>
            <div className="flex items-center gap-3">
              <img
                src={avatar1} // Replace with the user's avatar image URL
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              {/* Replace with actual user name */}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
