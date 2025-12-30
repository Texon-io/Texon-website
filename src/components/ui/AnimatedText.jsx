import { motion } from "framer-motion";

function AnimatedText({
  as: Tag = "p",
  className = "",
  children,
  align = "center", // center, left, right
  delay = 0,
  stagger = 0.18,
  mode = "all", // all | word
}) {
  if (mode === "word") {
    const words = String(children).split(" ");

    return (
      <div
        className={`${className} flex flex-wrap ${align === "center" ? "justify-center" : align === "right" ? "flex-start" : "flex-end"}`}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: delay + i * stagger, // stagger per word
            }}
            className="mx-2"
          >
            {word}
          </motion.span>
        ))}
      </div>
    );
  }

  // mode === "all"
  return (
    <motion.div
      as={Tag}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedText;
