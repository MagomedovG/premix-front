"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({title, time}) {
  const [show, setShow] = useState(true);
  const name = title.split("");

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), time); // время показа
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-[#264653] z-50"
          initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(8px)",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div className="flex space-x-1 text-sm md:text-4xl font-bold text-white">
            {name.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
