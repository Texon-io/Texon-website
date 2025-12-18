import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {VideoCard} from "@/sections/Vision/VideoCard.jsx";
import {visionVid} from "@/utils/constants.js"
import Button from "@/components/ui/Button/Button.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function VisionSec() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.from(".vision-fade", {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                once: true,
            },
        });
    }, []);


    return (
        <section ref={sectionRef} className="">
            <div className="grid-band">
                <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">
                    <div className="grid md:grid-cols-2 gap-20 items-center ">

                        {/* Left - Video */}
                        <div className="vision-fade ">
                            <VideoCard src={visionVid}/>
                        </div>

                        {/* Right - Text */}
                        <div className="vision-fade max-w-md text-lg/7 ps-4">
                            <p className="text-gray-300 mb-6">
                                Our vision is to build digital products that feel simple,
                                perform fast, and actually solve real problems.
                            </p>

                            <p className="text-gray-400 mb-10">
                                We aim to redefine how teams turn ideas into software — with
                                clarity, precision, and a focus on experiences that scale.
                                <br/>
                                <span className="text-white font-medium">
                                  Not just code, not just design. but a smarter way of creating
                                  technology that lasts.
                                </span>
                            </p>


                            <Button className="px-6 py-3 text-lg font-medium">Get Started</Button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
