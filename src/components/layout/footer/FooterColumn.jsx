import {motion} from "framer-motion";

function FooterColumn({ title, links }) {
  return (
      <div>
        <h3 className="mb-2 text-xl">{title}</h3>
        <ul className="space-y-1 text-gray-400 text-lg">
          {links.map((link, i) => (
              <li key={i}>
                <motion.a
                    href="#"
                    whileHover={{ x: 4 }}
                    className="inline-block hover:text-white transition"
                >
                  {link}
                </motion.a>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default FooterColumn;