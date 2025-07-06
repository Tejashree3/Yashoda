import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = ["Home", "Pages", "Services", "Projects", "Blogs", "Contact"];

  return (
    <nav className="relative z-50">
      {/* Navbar */}
      <div className="bg-white shadow-md px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-orange-600">Industrify</div>

        <ul className="hidden md:flex gap-6 text-sm font-semibold">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer ${item === "Home" ? "text-orange-500" : ""}`}
            >
              {item}
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
            className="text-2xl cursor-pointer"
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
            className="absolute top-[60px] left-0 w-full bg-white shadow-md px-4 py-4 md:hidden"
          >
            <ul className="flex flex-col gap-4 text-sm font-semibold">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className={`cursor-pointer ${item === "Home" ? "text-orange-500" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
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
