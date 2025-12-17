import Navbar from "@/components/layout/navbar/Navbar.jsx";
import Footer from "@/components/layout/footer/Footer.jsx";
import Hero from "@/sections/Hero/Hero.jsx";
import Services from "@/sections/Services/Services.jsx";
import Values from "@/sections/Values/Values.jsx";
import Projects from "@/sections/projects/Projects.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
        <Values/>
        <Projects />
      <Footer />
    </>
  );
};

export default App;
