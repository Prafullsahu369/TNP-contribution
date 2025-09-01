import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Performance", path: "/performance" },
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "Certificate", path: "/certificate" },
    { name: "Practice", path: "/practice" },
    { name: "Jobs", path: "/jobs" },
  ];

  return (
    <header className="bg-white shadow-md  w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-3">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
           src="tnp logo.png" 
           alt="RGPV Logo" 
           className="w-12" 
           />
        </NavLink>

        {/* left section */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-red-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-red-600"
                    : "text-gray-600 hover:text-black"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* right Setion */}
        <div className="flex items-center gap-4 text-xl">
          <IoNotifications className="cursor-pointer hover:text-red-600" />
          <FaUserCircle className="cursor-pointer hover:text-red-600" />

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Responsiveness */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-2/3 bg-white shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <ul className="flex flex-col gap-4 px-6 py-6">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block py-2 font-medium ${
                    isActive ? "text-red-600" : "text-gray-700"
                  } hover:text-black`
                }
                onClick={() => setIsOpen(false)} // close menu after click
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
