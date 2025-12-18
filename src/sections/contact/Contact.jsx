import {useState} from "react";
import ContactButtons from "./ContactButtons.jsx";

function Contact() {
    const [activeServices, setActiveServices] = useState([]);

    const handleClick = (service) => {
        if (service === "Custom"){
            setActiveServices((prev) =>
                prev.includes("Custom") ? [] : ["Custom"]
            );
            return;
        }
        setActiveServices((prev) => {
            let newServices = prev.includes(service)
                ? prev.filter((s) => s !== service)
                : [...prev, service];
            newServices = newServices.filter((s) => s !== "Custom");
            return newServices;
        });
    };
    return (
        <section id={`contact`}>
            {/*  Heading  */}
            <div className={`flex-center mb-20`}>
                <h5 className={`text-3xl sm:text-5xl font-semibold tracking-wider capitalize text-main-gray leading-14 text-center`}>
                    <span className={`text-main-text`}>Hey!</span> Let's Get
                    <br />
                    in touch
                </h5>
            </div>

        {/*  Contact Form  */}
            <div className={`w-full px-[105px] flex flex-col gap-6`}>
                <p className={`font-medium text-2xl`}>You got an Idea? Just<br/>
                    Tell us...</p>

                <ContactButtons activeServices={activeServices} onClick={handleClick}/>
            </div>
        </section>
    )
}

export default Contact;
