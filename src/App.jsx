import Navbar from "@/components/layout/Navbar.jsx";
import Footer from "@/components/layout/Footer.jsx";
import Hero from "@/sections/Hero.jsx";
import Services from "@/sections/Services.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <Footer />
    </>
  );
};

export default App;
