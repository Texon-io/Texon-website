import {useState} from "react";
import emailjs from "@emailjs/browser";
import ContactButtons from "./ContactButtons.jsx";
import ContactForm from "@/sections/contact/ContactForm.jsx";
import {toast} from "sonner";

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

    const handleSubmit = async (name, email, phone, desc) => {
        if (activeServices.length === 0) {
            toast.warning("Please select at least one service.");
            return;
        }

        const loadingToast = toast.loading("Sending your message...");

        const formData = {
            name,
            email,
            phone: phone || "Not provided",
            message: desc,
            services: activeServices.join(", "),
        };

        try {
            await emailjs.send(
                "service_xorkxoy",
                "template_lv8wno9",
                formData,
                "uBu_ljzevkiCtq1op"
            );
            toast.dismiss(loadingToast);
            toast.success("Message sent successfully! 🎉");
            setActiveServices([]); // reset services
        } catch (error) {
            toast.dismiss(loadingToast);
            toast.error("Failed to send. Please try again.");
            console.error("EmailJS Error:", error);
        }
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
            <div className={`w-full px-14 lg:px-[105px] flex flex-col gap-6`}>
                <p className={`font-medium text-2xl`}>You got an Idea? Just<br/>
                    Tell us...</p>

                {/* Contact Buttons*/}
                <ContactButtons activeServices={activeServices} onClick={handleClick}/>


                {/*  Contact Form  */}
                <ContactForm onSubmit={handleSubmit}/>
            </div>
        </section>
    )
}

export default Contact;
