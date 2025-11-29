import Aurora from './Aurura.jsx';
import BlurText from "./BlurText";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Temporary() {
    const [showSecondText, setShowSecondText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSecondText(true);
        }, 1000); // يبدأ بعد ثانيتين
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="temp-sec relative h-screen w-full bg-black flex justify-center items-center flex-col gap-4 ">

            {/* bg Aurura */}
            <div className="opacity-70 w-full h-screen absolute inset-0 pointer-events-none">
                <Aurora
                    colorStops={["#FF8080", "#ffd1d1", "#FF8080"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
            </div>


            {/* Coming Soon */}
            <motion.p
                className=" text-muted z-10 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{
                    delay: 3,
                    duration: 2,
                    ease: "easeInOut",
                }}
            >
                Coming Soon.
            </motion.p>

            {/* Main BlurText */}
            <div className={`font-orbitron`}>
                <BlurText
                    text="Texon - Building what’s next."
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-7xl text-white z-10 font-orbitron"
                />
            </div>

            {/* Second BlurText يظهر بعد ثانيتين */}
                <div className={`h-20`}>
                    {showSecondText && (
                        <BlurText
                            text="Building your ideas into fast, functional digital experiences."
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-xl text-gray-400 z-10"
                        />
                    )}
                </div>

            <p className={`absolute bottom-2 left-1/2 -translate-x-1/2 capitalize text-gray-400`}>&copy;{new Date().getFullYear()} All Rights reserved for — <span className={`text-white opacity-80`}>Texon</span></p>

        </div>
    );
}

export default Temporary;
