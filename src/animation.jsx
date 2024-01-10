import { motion } from "framer-motion";

export default function PageAnimation({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto pt-20"
    >
      {children}
    </motion.main>
  );
}
