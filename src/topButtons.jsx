import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function TopButtons({ href }) {
  if (!href) throw new Error("href is required");

  return (
    <div className="flex flex-row items-center justify-between">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-darkLight text-white rounded-[8px] border-2 border-darkBorder p-3"
        onClick={() => window.location.replace(href)}
      >
        <FaArrowLeftLong />
      </motion.button>
    </div>
  );
}
