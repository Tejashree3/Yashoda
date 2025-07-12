import React from "react";
import { motion } from "framer-motion";

// Props:
// - title: main heading
// - subtitle: optional subtitle (rendered via <span>)
// - emphasis: optional word in <em>
// - color: underline color (default: #b80000)

const Header = ({ title, subtitle, emphasis, color = "#b80000" }) => {
  return (
    <div className="one relative">
      <h1 className="relative text-center uppercase font-[Raleway] font-light text-[40px] text-[#080808] transition-all duration-400 ease-in-out pb-[10px]">
        {title}{" "}
        {emphasis && <em className="not-italic font-semibold">{emphasis}</em>}
        {subtitle && (
          <span className="block text-[0.5em] leading-[1.3]">{subtitle}</span>
        )}
        {/* === Overlapping Underlines (Same Position) === */}
        {/* Static bottom line */}
        <span
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: "100px",
            height: "1px",
            backgroundColor: color,
          }}
        />
        {/* Animated top bar (on top of bottom line) */}
        <motion.span
          className="absolute -bottom-[2px] left-[49%] -translate-x-1/2 z-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: "28px",
            height: "5px",
            backgroundColor: color,
            transformOrigin: "center",
          }}
        />
      </h1>
    </div>
  );
};

export default Header;
