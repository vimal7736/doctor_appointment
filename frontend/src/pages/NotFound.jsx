import React from "react";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  // Framer Motion Variants for Animations
  const numberVariants = {
    initial: { y: 0, opacity: 1 },
    animate: {
      y: [0, 30, -10, 500], // Falling effect
      rotate: [0, 20, -10, 360], // Rotating effect
      opacity: [1, 1, 0.5, 0], // Fading effect
    },
    transition: {
      duration: 2, // Total duration
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-primary to-gray-100 flex flex-col justify-center items-center p-6">
      <div className="relative flex justify-center items-center mb-8">
        <motion.div
          className="text-9xl font-bold text-gray-800"
          variants={numberVariants}
          initial="initial"
          animate="animate"
          transition="transition"
        >
          4
        </motion.div>
        <motion.div
          className="text-9xl font-bold text-gray-800"
          variants={numberVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
        >
          0
        </motion.div>
        <motion.div
          className="text-9xl font-bold text-gray-800"
          variants={numberVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 3, ease: "easeInOut", delay: 0.4 }}
        >
          4
        </motion.div>
      </div>

      <div className="text-center">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Page Not Found
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Looks like you’re lost in space! The page you’re looking for doesn’t
          exist.
        </motion.p>
        <motion.a
          href="/"
          className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          Go Back Home
        </motion.a>
      </div>
    </div>
  );
};

export default NotFoundPage;
