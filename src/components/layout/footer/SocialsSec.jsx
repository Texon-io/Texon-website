import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/texon.io",
  },
  { icon: Instagram, href: "https://www.instagram.com/texon.io/" },
  { icon: Mail, href: "mailto:texondev.info@gmail.com" },
  { icon: Linkedin, href: "https://linkedin.com/company/texon-io" },
];

export default function SocialsSec() {
  return (
    <div className="flex gap-4">
      {socials.map(({ icon: Icon, href }, i) => (
        <motion.a
          key={i}
          href={href}
          target="_blank"
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
  );
}
