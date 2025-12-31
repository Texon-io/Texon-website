import { Suspense, lazy } from "react";
import { Toaster } from "sonner";

import Navbar from "@/components/layout/navbar/Navbar.jsx";
import Footer from "@/components/layout/footer/Footer.jsx";
import Hero from "@/sections/Hero/Hero.jsx";

const Services = lazy(() => import("@/sections/Services/Services.jsx"));
const Values = lazy(() => import("@/sections/Values/Values.jsx"));
const PricingSec = lazy(() => import("@/sections/Pricing/PricingSec.jsx"));
const Projects = lazy(() => import("@/sections/projects/Projects.jsx"));
const VisionSec = lazy(() => import("@/sections/Vision/VisionSec.jsx"));
const Contact = lazy(() => import("@/sections/contact/Contact.jsx"));
const TeamSection = lazy(() => import("./sections/Team/TeamSection"));

const App = () => {
  return (
    <>
      <Toaster position="top-right" duration={4000} />
      <Navbar />
      <Hero />
      <Suspense
        fallback={
          <div className="py-20 text-center text-white">Loading...</div>
        }
      >
        <Services />
        <Values />
        <Projects />
        <PricingSec />
        <VisionSec />
        <TeamSection />
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
