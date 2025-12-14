import { useState, useEffect } from "react";

const navItems = [
    { name: "Home", id: "hero" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" },
];

export default function NavTabs({ mobile = false, onClose = () => {} }) {
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            navItems.forEach((item) => {
                const section = document.getElementById(item.id);
                if (section) {
                    const top = section.offsetTop - 100;
                    const bottom = top + section.offsetHeight;
                    if (window.scrollY >= top && window.scrollY < bottom) {
                        setActive(item.id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setActive(id);
        onClose();
    };

    const baseClasses = "font-medium tracking-widest transition-all duration-300 cursor-pointer py-2";
    const hoverClasses = "hover:bg-gray-second/50 hover:rounded-[8px] hover:font-semibold hover:px-4 hover:text-main-text";
    const activeClasses = "bg-gray-second/50 px-4 main-rounded font-semibold text-main-text";

    return (
        <>
            {mobile ? (
                <ul className="flex flex-col items-center gap-6 text-white">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollTo(item.id)}
                                className={`${baseClasses} ${active === item.id ? activeClasses : ""} ${hoverClasses} w-32`}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <ul className="flex-center gap-8 text-white">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollTo(item.id)}
                                className={`
                  ${baseClasses} ${hoverClasses}
                  ${active === item.id ? activeClasses : "text-gray-700"}
                `}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}