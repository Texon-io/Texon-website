export default function FooterColumn({title, links}) {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (!section) return;

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div>
            <h3 className="mb-4 text-lg font-medium">{title}</h3>

            <ul className="space-y-2 text-gray-400">
                {links.map((link, i) => (
                    <li key={i}>
                        <button
                            onClick={() => handleScroll(link.target)}
                            className="
                transition hover:text-white
                cursor-pointer text-left
              "
                        >
                            {link.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
