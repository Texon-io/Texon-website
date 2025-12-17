import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import DashedHeading from "@/components/ui/DashedHeading.jsx";
import HighlightParagraph from "@/components/ui/HighlightParagraph.jsx";
import ProjectCard from "./ProjectCard.jsx";
import {
    ba2e3atElkotob,
    TasklyDesktop,
    TasklyWeb,
} from "@/utils/constants.js";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        id: "0",
        title: "Ba2e3at El-kotob Store",
        description:
            "An e-commerce platform for second-hand books with a clean, minimal dashboard to manage inventory, orders, and users efficiently.",
        tech: ["React", "Tailwind", "Framer Motion", "React Query"],
        image: ba2e3atElkotob,
        link: "https://bae3t-elkotb.netlify.app/",
    },
    {
        id: "1",
        title: "Taskly Web App",
        description:
            "A web-based productivity app that allows users to manage tasks, set deadlines, and visualize progress with charts.",
        tech: ["React", "Framer Motion", "Tailwind", "Chart.js", "Subabase"],
        image: TasklyWeb,
        link: "https://taskly-mnmlst.netlify.app/",
    },
    {
        id: "2",
        title: "Taskly Desktop App",
        description:
            "A desktop version of Taskly, optimized for offline usage with local storage, fast interactions, and a distraction-free interface.",
        tech: ["JavaFX", "Spring Boot", "CSS", "LocalStorage"],
        image: TasklyDesktop,
    },
];

function Projects() {
    const cardsWrapperRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(
            cardsWrapperRef.current.querySelectorAll(".project-card")
        );

        gsap.fromTo(
            cards,
            {
                y: 60,
                opacity: 0,
                rotateZ: -1,
            },
            {
                y: 0,
                opacity: 1,
                rotateZ: 0,
                duration: 0.9,
                ease: "power3.out",
                stagger: 1,
                scrollTrigger: {
                    trigger: cardsWrapperRef.current,
                    start: "top 50%",
                },
            }
        );
    }, []);

    return (
        <section
            id="projects"
            className="w-[95%] mx-auto rounded-t-[144px] rounded-b-[72px] bg-gray-dark min-h-screen  p-10 lg:p-20 "
        >
            {/* Heading */}
            <div className="flex max-lg:flex-col max-lg:gap-10 justify-between items-center">
                <DashedHeading
                    scrollAnimate={'top 95%'}
                    heading={
                        <>
                            Our <br />
                            Projects.
                        </>
                    }
                    border={false}
                    headClass="text-6xl w-48"
                />
                <HighlightParagraph
                    highlight="Explore what we’ve built.">
                    Texon turns vision into reality — shaped by smart thinking, and results
                    you can actually measure.
                </HighlightParagraph>
            </div>

            {/* Cards */}
            <div
                ref={cardsWrapperRef}
                className="grid lg:grid-cols-2 px-0 xl:px-20 justify-items-center mt-10"
            >
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
