import { Toaster } from "@/components/ui/sonner"

import Navbar from "@/components/layout/navbar/Navbar.jsx";
import Footer from "@/components/layout/footer/Footer.jsx";
import Hero from "@/sections/Hero/Hero.jsx";
import Services from "@/sections/Services/Services.jsx";
import Values from "@/sections/Values/Values.jsx";
import PricingSec from "@/sections/Pricing/PricingSec.jsx";
import Projects from "@/sections/projects/Projects.jsx";
import VisionSec from "@/sections/Vision/VisionSec.jsx";
import Contact from "@/sections/contact/Contact.jsx";


const App = () => {
    return (
        <>
            <Toaster
                position="top-right"
                duration={4000}

            />
            <Navbar/>
            <Hero/>
            <Services/>
            <Values/>
            <Projects/>
            <PricingSec/>
            <VisionSec/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;