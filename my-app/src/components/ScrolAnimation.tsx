"use client";

import {motion} from "framer-motion";

function ScrollAnimation({children}: {children: React.ReactNode}) {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true}}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimation;
