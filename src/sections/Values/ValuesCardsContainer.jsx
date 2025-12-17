import {valImg1, valImg2, valImg3} from "@/utils/constants.js";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureCard from "@/sections/Values/FeatureCard.jsx";

gsap.registerPlugin(ScrollTrigger);


export default function ValuesCardsContainer() {


    const cardsRef = useRef(null);

    useGSAP(() => {
        const cards = cardsRef.current.children;

        gsap.fromTo(
            cards,
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.35,
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 50%",
                },
            }
        );
    }, []);


    return (
        <div
            ref={cardsRef}
            className="grid md:grid-cols-3 gap-16 md:px-20 "
        >
            <FeatureCard
                title="Built to last, trusted always."
                image={valImg1}
            />
            <FeatureCard
                title="Fast, smooth, unstoppable."
                image={valImg2}
            />
            <FeatureCard
                title="Simple. Intuitive. Delightful."
                image={valImg3}
            />
        </div>
    )
}