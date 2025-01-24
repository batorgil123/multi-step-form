import React from "react";
import { motion } from "framer-motion";
const Formfinish = (props) => {
  const { handleBackStep } = props;
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.2 }}
      className="w-[480px] h-[193px] bg-white rounded-2xl p-8 flex flex-col "
    >
      <div className="text-[26px] text-foreground font-semibold">
        You're All Set 🔥
      </div>
      <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">
        We have received your submission. Thank you!
      </p>
      <button
        className="mt-[30px] w-[128px] h-[44px] border rounded-xl flex items-center justify-center  hover:bg-gray-200 hover:shadow-lg transform transition-all duration-[0.3s]"
        onClick={handleBackStep}
      >
        prev
      </button>
    </motion.div>
  );
};
export default Formfinish;
