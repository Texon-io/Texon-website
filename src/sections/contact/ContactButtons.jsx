const servicesProvided = [
    "Ui/UX Design",
    "Website",
    "Mobile App",
    "Desktop App",
    "Branding",
    "Custom",
];

function ContactButtons({activeServices, onClick}) {


    return (
        <div className="flex flex-wrap gap-4 items-center justify-start w-2/3 px-2">
            {servicesProvided.map((service) => (
                <button
                    key={service}
                    onClick={() => onClick(service)}
                    className={`
            rounded-full h-14 px-6 
            font-semibold text-2xl 
            border border-main-white 
            flex items-center justify-center 
            whitespace-nowrap cursor-pointer 
            transition-all duration-300 ease-out
            mr-1
            ${activeServices.includes(service)
                        ? "bg-main-white text-main-black scale-110 shadow-lg mr-2.5" 
                        : "bg-transparent hover:bg-main-white/20 hover:text-main-white hover:scale-105" 
                    }
          `}
                >
                    {service} {!activeServices.includes(service) && "+"}
                </button>
            ))}
        </div>
    );
}

export default ContactButtons;