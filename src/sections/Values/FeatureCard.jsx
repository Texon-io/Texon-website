import { motion } from "framer-motion";


export default function FeatureCard({ title, image }) {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
                rest: {
                    backgroundColor: "rgba(255,255,255,0.05)",
                },
                hover: {
                    backgroundColor: "rgba(255,255,255,0.08)",
                },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
            flex flex-col items-center
        rounded-2xl
        p-6
        backdrop-blur
        cursor-pointer
        overflow-hidden
      "
        >
            {/* Image */}
            <motion.img
                src={image}
                alt=""
                variants={{
                    rest: {
                        scale: 1,
                        opacity: 0.6,
                    },
                    hover: {
                        scale: 1.05,
                        opacity: 1,
                    },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-44 h-44 mb-6 object-contain"
            />
            <p className="text-xl font-medium pb-3">{title}</p>
        </motion.div>
    );
}
