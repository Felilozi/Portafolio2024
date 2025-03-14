"use client";

import { transitionVariantPage } from "@/utils/motion-transitions";

import { motion, AnimatePresence } from "framer-motion";

const TransitionPage = () => {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          className="fixed top-0 bottom-0 right-full min-h-fit max-w-2xl min-w-[320px] z-30 bg-[#0B625A]"
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
