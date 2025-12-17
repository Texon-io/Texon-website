import { noBgLogo } from "@/utils/constants.js";
import NavTabs from "@/components/layout/navbar/NavTabs.jsx";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-main-black h-16 px-6 lg:px-12 lg:px-[105px] flex items-center justify-between border-b-[1px] border-gray-500/35">
        <div>
          <img className="w-28" src={noBgLogo} alt="logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <NavTabs />
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <a href="#contact">
            <button className="main-padding text-main-black font-medium opacity-95 cursor-pointer transition-opacity duration-300 hover:opacity-100 bg-main-white main-rounded">
              Get started
            </button>
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white hover:bg-gray-second/50 p-1 rounded-lg transition-colors duration-300 cursor-pointer"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-main-black flex flex-col items-center gap-8 py-8 lg:hidden">
            <NavTabs mobile onClose={() => setIsOpen(false)} />
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <button className="main-padding text-main-black font-medium bg-main-white main-rounded">
                Get started
              </button>
            </a>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
