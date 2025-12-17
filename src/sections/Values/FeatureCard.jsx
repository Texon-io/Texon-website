import { motion } from "framer-motion";

export default function FeatureCard({ title, image }) {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
                rest: {
                    backgroundColor: "rgba(110,112,112,0.22)",
                },
                hover: {
                    backgroundColor: "rgba(110,112,112,0.3)",
                },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
        flex flex-col items-center
        rounded-2xl
        p-6
        backdrop-blur
        cursor-default
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
                        filter: "brightness(0.8) saturate(0.7)",
                    },
                    hover: {
                        scale: 1.05,
                        filter: "brightness(1.2) saturate(3.5)",
                    },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-44 h-44 mb-6 object-contain"
            />

            <p className="text-xl font-medium pb-3">{title}</p>
        </motion.div>
    );
}
