import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function DashedHeading({
  heading,
  headClass = "",
  para,
  paraClass = "",
  children,
  scrollAnimate = "top 85%",
    className=""
}) {
  const wrapperRef = useRef(null);

  useGSAP(() => {
    const paraEl = wrapperRef.current.querySelector(".dashed-para");
    const headEl = wrapperRef.current.querySelector(".dashed-head");

    gsap.to(headEl, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "ease-in",
      scrollTrigger: {
        trigger: headEl,
        start: scrollAnimate,
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(paraEl, {
      y: 0,
      opacity: 1,
      delay: 0.35,
      duration: 1,
      ease: "ease-in",
      scrollTrigger: {
        trigger: paraEl,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div ref={wrapperRef} className={`group py-5 ${className}`}>
      <h4
        className={`${headClass} dashed-head relative font-orbitron capitalize font-semibold text-4xl tracking-[4px] w-full opacity-0 translate-y-10 `}
      >
        {heading}
        <div className="absolute left-0 right-0 bottom-2 -z-10 w-full h-4 bg-accent-second/85 opacity-35 group-hover:h-10 transition-all duration-300"></div>
      </h4>

      <p
        className={`${paraClass} dashed-para tracking-[3%] font-light w-full opacity-0 translate-y-10`}
      >
        {para}
      </p>
      {children}
    </div>
  );
}

export default DashedHeading;
