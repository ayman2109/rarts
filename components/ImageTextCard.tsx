import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

const ImageTextCard = ({
  src,
  title,
  description,
  progress,
}: {
  src: string;
  title: string;
  description: string;
  progress: MotionValue<number>; // ✅ FIXED TYPE
}) => {
  // ✅ Proper animation derivation from MotionValue
  const scale = useTransform(progress, [0, 1], [1, 0.92]);
  const y = useTransform(progress, [0, 1], [0, -100]);

  return (
    <motion.div
      style={{ scale, y }}
      className="sticky top-16 sm:top-24 md:top-32
     w-full h-[70vh] sm:h-[50vh] md:h-[70vh]  overflow-hidden shadow-xl
      rounded-xl   bg-black"
    >
      {/* ✅ Image */}
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ✅ Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          {title}
        </h1>

        <p className="text-white mt-6 text-lg sm:text-xl max-w-3xl">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ImageTextCard;
