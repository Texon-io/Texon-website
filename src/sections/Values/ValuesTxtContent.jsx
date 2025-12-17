import HighlightParagraph from "@/components/ui/HighlightParagraph.jsx";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function ValuesTxtContent() {
  const headingRef = useRef(null);

  useGSAP(() => {
    const el = headingRef.current;
    gsap.to(el, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.35,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <div className="grid text-center md:text-start md:grid-cols-2 gap-12 md:gap-52 mb-20">
      <h2
        ref={headingRef}
        className="text-3xl md:text-4xl font-medium leading-tight font-orbitron opacity-0 translate-y-20"
      >
        Made for creators <br />
        who turn ideas into impact
      </h2>

      <HighlightParagraph
        highlight="Bring your ideas to life."
        className="justify-self-center md:justify-self-end"
      >
        Texon powers ambitious teams with bold creativity, fast execution, and
        unmatched quality.
      </HighlightParagraph>
    </div>
  );
}
