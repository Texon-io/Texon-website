import { motion } from "framer-motion";

function FocalBlur({
  size = 644,
  color = "bg-accent-second",
  opacity = "opacity-15",
  blur = "blur-[300px]",
  className = "",
}) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0.1 }}
      animate={{
        scale: [0.9, 1.05, 0.9],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className={`
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[30%]
        rounded-full -z-10
        ${color} ${opacity} ${blur}
        ${className}
      `}
      style={{
        width: size,
        height: size,
      }}
    />
  );
}

export default FocalBlur;
