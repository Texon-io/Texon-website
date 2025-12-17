import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import FocalBlur from "@/components/ui/FocalBlur.jsx";
import AnimatedText from "@/components/ui/AnimatedText.jsx";
import CurvedLoop from "@/sections/Hero/CurvedLoop.jsx";

function Hero() {
  const [showCurvedLoop, setShowCurvedLoop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCurvedLoop(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id={`hero`} className={`relative hero-section  h-[50vh] sm:h-[80vh]`}>
      {/*hero Section Intro Text*/}
      <div
        className={`hero-intro text-center flex flex-col gap-3 px-2 md:px-6 lg:px-36 py-12 mt-14 mb-6`}
      >
        <AnimatedText
          delay={0.6}
          mode={`word`}
          className={`font-orbitron font-semibold text-3xl sm:text-4xl  md:text-5xl tracking-[10%] leading-[135%] px-8`}
        >
          Digital agency focused on software products
        </AnimatedText>
        <AnimatedText
          delay={2.5}
          className={`text-main-gray font-medium tracking-[15%] text-sm leading-6 px-14 sm:px-24 lg:px-52`}
        >
          Your partner for modern digital products — build cleaner, launch
          faster, and scale with confidence.
        </AnimatedText>
      </div>
      {/*    ==================================    */}

      {/*  Blur   */}
      <FocalBlur className={`top-[200px] w-96 md:w-1/3 `} />
      {/*    ==================================    */}

      {/*    Curved Text  */}
      <div className={`h-[300px]`}>
        {showCurvedLoop && (
          <CurvedLoop marqueeText={`Think ✦ Design ✦ Build ✦ With ✦ Texon ✦`} />
        )}
        <span className={`opacity-0`}>vanished</span>
      </div>
    </section>
  );
}

export default Hero;
