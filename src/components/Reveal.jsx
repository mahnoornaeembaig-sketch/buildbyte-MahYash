import { motion } from "framer-motion";

export const Reveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      // THE FIX IS HERE: Lowered amount to 0.1 and added a negative bottom margin
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
      className="w-full" // Added this to prevent the div from collapsing on mobile
    >
      {children}
    </motion.div>
  );
};