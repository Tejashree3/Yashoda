import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../asset/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Product",
    "Gallery",
    "Contact",
  ];

  const getPath = (item) =>
    item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;

  return (
    <nav className="relative z-50">
      {/* Navbar */}
      <div className=" shadow-md px-20 py-2 flex justify-between items-center">
        <NavLink to="/">
          <img src={logo} className="w-16 h-16" alt="Logo" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-md font-semibold">
          {menuItems.map((item) => (
            <li key={item}>
              <NavLink
                to={getPath(item)}
                className={({ isActive }) =>
                  `cursor-pointer ${
                    isActive ? "text-[#40afe0]" : "text-text_navbar"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Icon */}
        <div className="md:hidden">
          <motion.div
            key={isOpen ? "close" : "open"}
            initial={{ rotate: 0 }}
            animate={{ rotate: 180 }}
            exit={{ rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl cursor-pointer text-text_navbar"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[60px] left-0 w-full bg-background shadow-md px-4 py-4 md:hidden"
          >
            <ul className="flex flex-col gap-4 text-sm font-semibold">
              {menuItems.map((item) => (
                <li key={item}>
                  <NavLink
                    to={getPath(item)}
                    className={({ isActive }) =>
                      `cursor-pointer ${
                        isActive ? "text-orange-500" : "text-text_navbar"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
