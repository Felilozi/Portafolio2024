"use client";

import { transitionVariantPage } from "@/utils/motion-transitions";

import { motion, AnimatePresence } from "framer-motion";

const TransitionPage = () => {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          className="fixed top-0 bottom-0 right-full h-screen w-screen z-30 bg-[#3B817A]"
          variants={transitionVariantPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}

        ></motion.div>
      </div>
    </AnimatePresence>
  );
};
export default TransitionPage;
