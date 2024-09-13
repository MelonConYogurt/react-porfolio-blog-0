/* eslint-disable @next/next/no-img-element */

"use client";

import {motion} from "framer-motion";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function AvatarAnimation({src, alt, width, height}: Props) {
  return (
    <motion.img
      className="rounded-full"
      src={src}
      alt={alt}
      width={width}
      height={height}
      whileHover={{
        scale: [1, 1.1, 1.1, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["50%", "50%", "20%", "20%", "50%"],
      }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
    />
  );
}

export default AvatarAnimation;
