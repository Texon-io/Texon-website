import Navbar from "@/components/layout/navbar/Navbar.jsx";
import Footer from "@/components/layout/footer/Footer.jsx";
import Hero from "@/sections/Hero/Hero.jsx";
import Services from "@/sections/Services/Services.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </>
  );
};

export default App;
