import {motion} from "framer-motion";
import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
} from "lucide-react";


const socials = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Mail, href: "#" },
    { icon: Linkedin, href: "#" },
];


export default function SocialsSec() {
    return (
        <div className="flex gap-4">
            {socials.map(({ icon: Icon, href }, i) => (
                <motion.a
                    key={i}
                    href={href}
                    whileHover={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10"
                >
                    <motion.div
                        initial={{ color: "#9ca3af" }} // gray-400
                        whileHover={{ color: "#ffffff" }}
                        transition={{ duration: 0.25 }}
                    >
                        <Icon size={26} />
                    </motion.div>
                </motion.a>
            ))}
        </div>
    )
}