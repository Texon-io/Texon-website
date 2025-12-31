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
  vipeCart,
} from "@/utils/constants.js";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: "0",
    title: "Ba2e3at El-kotob Store",
    description:
      "An e-commerce platform for second-hand books and stationery, featuring a curated selection, shopping cart, and a minimal admin dashboard for managing inventory, orders, and users.",
    tech: ["React", "Tailwind", "Framer Motion", "React Query"],
    image: ba2e3atElkotob,
    link: "https://bae3t-elkotb.netlify.app/",
  },
  {
    id: "1",
    title: "Taskly Web App",
    description:
      "A web-based productivity app that allows users to manage tasks, set deadlines, and visualize progress with charts.",
    tech: ["React", "Framer Motion", "Tailwind", "Chart.js", "Supabase"],
    image: TasklyWeb,
    link: "https://taskly-mnmlst.netlify.app/",
  },
  {
    id: "2",
    title: "VipeCart E-Commerce App",
    description:
      "A modern e-commerce platform with product browsing, categories, shopping cart, wishlist, and seamless checkout experience, with full control dashboard for admin.",
    tech: ["React", "Zustand", "Tailwind", "Shadcn", "React Query", "Supabase"],
    image: vipeCart,
    link: "https://vipecart.netlify.app/",
  },
  {
    id: "3",
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
      className="w-[95%] mx-auto rounded-4xl lg:rounded-t-[144px] lg:rounded-b-[72px] bg-gray-dark min-h-screen  p-7 lg:p-20 "
    >
      {/* Heading */}
      <div className="mb-12 px-2 sm:px-12 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 lg:gap-16 w-fit max-w-7xl mx-auto">
          <DashedHeading
            scrollAnimate="top 80%"
            heading={
              <>
                Our <br className="hidden lg:block" /> Projects.
              </>
            }
            headClass="text-5xl sm:text-6xl lg:text-7xl tracking-tight"
          />
          <HighlightParagraph
            className="text-base sm:text-lg max-md:w-full"
            highlight="Explore what we’ve built."
          >
            Texon turns vision into reality — shaped by smart thinking, and
            results you can actually measure.
          </HighlightParagraph>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={cardsWrapperRef}
        className="grid lg:grid-cols-2 px-0 sm:px-12 xl:px-20 justify-items-center mt-10"
      >
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
