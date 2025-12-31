import { useRef, useLayoutEffect, useEffect, useId, useState } from "react";
import { motion } from "framer-motion";
import "./CurvedLoop.css";

const CurvedLoop = ({
  marqueeText = "",
  speed = 1,
  className = "",
  curveAmount = 300,
  direction = "left",
}) => {
  const measureRef = useRef(null);
  const textPathRef = useRef(null);
  const containerRef = useRef(null);

  const [spacing, setSpacing] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const uid = useId();
  const pathId = `curve-${uid}`;
  const pathD = `M-100,40 Q500,${40 + curveAmount} 1540,40`;

  const text = (marqueeText.replace(/\s+$/, "") || marqueeText) + "\u00A0";

  useLayoutEffect(() => {
    if (measureRef.current) {
      setSpacing(measureRef.current.getComputedTextLength());
    }
  }, [text, className]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!spacing || !isVisible || !textPathRef.current) return;

    let animationFrame;
    let currentOffset = -spacing;

    const step = () => {
      const delta = direction === "right" ? speed : -speed;
      currentOffset += delta;

      if (currentOffset <= -spacing) currentOffset += spacing;
      if (currentOffset > 0) currentOffset -= spacing;

      textPathRef.current.setAttribute("startOffset", currentOffset + "px");
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [spacing, speed, direction, isVisible]);

  const totalText = spacing
    ? Array(Math.ceil(1800 / spacing) + 2)
        .fill(text)
        .join("")
    : text;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      ref={containerRef}
      className="curved-loop-jacket"
      style={{ visibility: isVisible ? "visible" : "hidden" }}
    >
      <svg className="curved-loop-svg" viewBox="0 0 1440 120">
        <text
          ref={measureRef}
          xmlSpace="preserve"
          style={{ visibility: "hidden", opacity: 0, pointerEvents: "none" }}
        >
          {text}
        </text>

        <defs>
          <path id={pathId} d={pathD} fill="none" stroke="transparent" />
        </defs>

        {isVisible && spacing > 0 && (
          <text fontWeight="bold" xmlSpace="preserve" className={className}>
            <textPath ref={textPathRef} href={`#${pathId}`} xmlSpace="preserve">
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
    </motion.div>
  );
};

export default CurvedLoop;
