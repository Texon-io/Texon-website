import { useRef, useLayoutEffect, useEffect, useId, useState } from "react";
import {motion} from "framer-motion";
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
    const pathRef = useRef(null);
    const containerRef = useRef(null);

    const [spacing, setSpacing] = useState(0);
    const [isVisible, setIsVisible] = useState(false); // <--- lazy load
    const uid = useId();
    const pathId = `curve-${uid}`;
    const pathD = `M-100,40 Q500,${40 + curveAmount} 1540,40`;

    const text = (marqueeText.replace(/\s+$/, "") || marqueeText) + "\u00A0";

    // Measure text length
    useLayoutEffect(() => {
        if (measureRef.current) {
            setSpacing(measureRef.current.getComputedTextLength());
        }
    }, [text, className]);

    // Observe if in viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    // Initialize startOffset
    useEffect(() => {
        if (!spacing || !isVisible) return;
        if (textPathRef.current) {
            const initial = -spacing;
            textPathRef.current.setAttribute("startOffset", initial + "px");
        }
    }, [spacing, isVisible]);

    // Animation loop
    useEffect(() => {
        if (!spacing || !isVisible) return;
        const step = () => {
            if (textPathRef.current) {
                const delta = direction === "right" ? speed : -speed;
                let currentOffset = parseFloat(
                    textPathRef.current.getAttribute("startOffset") || "0"
                );
                let newOffset = currentOffset + delta;

                const wrapPoint = spacing;
                if (newOffset <= -wrapPoint) newOffset += wrapPoint;
                if (newOffset > 0) newOffset -= wrapPoint;

                textPathRef.current.setAttribute("startOffset", newOffset + "px");
            }
            requestAnimationFrame(step);
        };
        const frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, [spacing, speed, direction, isVisible]);

    const totalText = spacing
        ? Array(Math.ceil(1800 / spacing) + 2).fill(text).join("")
        : text;

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity:1}}
            transition={{ duration: 1,
                ease: "easeOut",}}
            ref={containerRef}
            className="curved-loop-jacket"
            style={{ visibility: isVisible ? "visible" : "hidden" }}
        >
            <svg className="curved-loop-svg" viewBox="0 0 1440 120">
                {/* Hidden measure text */}
                <text
                    ref={measureRef}
                    xmlSpace="preserve"
                    style={{ visibility: "hidden", opacity: 0, pointerEvents: "none" }}
                >
                    {text}
                </text>

                {/* Path */}
                <defs>
                    <path
                        ref={pathRef}
                        id={pathId}
                        d={pathD}
                        fill="none"
                        stroke="transparent"
                    />
                </defs>

                {/* Moving text */}
                {isVisible && spacing > 0 && (
                    <text fontWeight="bold" xmlSpace="preserve" className={className}>
                        <textPath
                            ref={textPathRef}
                            href={`#${pathId}`}
                            startOffset={-spacing + "px"}
                            xmlSpace="preserve"
                        >
                            {totalText}
                        </textPath>
                    </text>
                )}
            </svg>
        </motion.div>
    );
};

export default CurvedLoop;
