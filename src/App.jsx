import Navbar from "@/components/layout/navbar/Navbar.jsx";
import Footer from "@/components/layout/footer/Footer.jsx";
import Hero from "@/sections/Hero/Hero.jsx";
import Services from "@/sections/Services/Services.jsx";
import Values from "@/sections/Values/Values.jsx";
import PricingSec from "@/sections/Pricing/PricingSec.jsx";
import Projects from "@/sections/projects/Projects.jsx";
import FAQ from "@/sections/faq/FAQ.jsx";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
        <Values/>
        <Projects />
        <PricingSec/>
        <FAQ/>
      <Footer />
    </>
  );
};

export default App;
