import { useState } from "react";
import { toast } from "sonner"


function ContactForm({onSubmit}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [desc, setDesc] = useState("");

    const baseClass =
        "w-full border-b-2 border-main-gray py-4 px-2 bg-transparent outline-none text-xl text-main-white placeholder-main-gray/50 focus:border-main-white focus:placeholder:opacity-0 transition-all duration-500 resize-none";

    function handleClick(e) {
        e.preventDefault();

        // Validation بسيط
        if (!name.trim()) {
            toast.warning("Name is required");
            return;
        }
        if (!email.trim()) {
            toast.warning("️Please enter your email");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.warning("️Please enter a valid email");
            return;
        }
        if (!phone.trim()) {
            toast.warning("️Please enter your phone number");
            return;
        }
        if (!desc.trim()) {
            toast.warning("️Please tell us about your idea");
            return;
        }

        // لو كل حاجة تمام → ابعت
        onSubmit(name.trim(), email.trim(), phone.trim(), desc.trim());

        setEmail("");
        setPhone("");
        setDesc("");
        setName("");
    }

    return (
        <form className="mt-14 space-y-6">
            {/* Name */}
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name..."
                className={baseClass}
                name="name"
                autoComplete="name"
                required
            />

            {/* Email */}
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email..."
                className={baseClass}
                name="email"
                autoComplete="email"
                required
            />

            {/* Phone */}
            <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone..."
                className={baseClass}
                name="tel"
                autoComplete="tel"
            />

            {/* Description */}
            <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Tell us about your idea..."
                className={baseClass}
                name="message"
                rows={3}
                required
            />

            {/* Submit Button (temporary) */}
            <button
                type="submit"
                onClick={handleClick}
                className="mt-8 w-fit py-4 bg-main-white text-main-black font-semibold text-xl rounded-full hover:bg-main-white/90 transition-colors duration-300 px-8 cursor-pointer"
            >
                Send Message
            </button>
        </form>
    );
}

export default ContactForm;