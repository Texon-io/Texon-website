import {motion} from "framer-motion";
import {Check} from "lucide-react";

export default function PricingCard({
                                        title,
                                        price,
                                        description,
                                        features,
                                        popular,
                                    }) {
    return (
        <motion.div
            initial={{boxShadow: "0 0px 0px 0px rgb(255 255 255 / 0.2)"}}
            whileHover={{
                y: -6,
                boxShadow: "0 0px 30px 2px rgb(255 255 255 / 0.2)",
                transition: {duration: 0.4}
            }}
            className={`relative rounded-2xl p-8 bg-white/5 backdrop-blur border border-white/10
        ${popular ? "border-white/40 md:-translate-y-8" : ""}
      `}
        >
            {popular && (
                <span
                    className=" absolute -top-3 right-6 text-xs font-medium px-3 py-1 rounded-full bg-white text-black">
                    Popular
                </span>)}

            <h3 className="text-2xl mb-2 font-medium">{title}</h3>
            <p className="text-gray-400 text-base mb-6">{description}</p>

            <div className="mb-6">
                <span className="text-gray-400 text-sm">From</span>
                <div className="text-3xl font-medium">${price}</div>
            </div>

            <ul className="space-y-3 text-sm">
                {features.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                        <Check size={16} className="text-green-400 mt-1"/>
                        {item}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}
