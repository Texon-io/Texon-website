import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { twMerge } from "tailwind-merge";

gsap.registerPlugin(ScrollTrigger);

export default function HighlightParagraph({ highlight, className = "", children, del }) {
    const paraRef = useRef(null);

    useEffect(() => {
        const el = paraRef.current;
        gsap.to(el, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 1.35,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
    }, []);

    return (
        <p
            ref={paraRef}
            className={twMerge(
                "text-gray-400 opacity-0 translate-y-20 max-w-sm text-lg/8 md:text-xl/10",
                className
            )}
        >
            {children} <span className="text-main-text font-medium">{highlight}</span>
        </p>
    );
}
