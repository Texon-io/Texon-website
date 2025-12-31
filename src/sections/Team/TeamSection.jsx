import { abdo, fathallah, ramez, sarem, taha } from "@/utils/constants";

const teamMembers = [
  {
    name: "Ramez Khaled",
    role: "CEO & Founder",
    desc: "Visionary leader driving innovation in modern software products and digital solutions.",
    img: ramez,
  },
  {
    name: "Abdulrahman Saad",
    role: "CTO & Co-Founder",
    desc: "Architecting robust, scalable systems and leading technical strategy.",
    img: abdo,
  },
  {
    name: "Abdullah Fathallah",
    role: "Backend Engineer",
    desc: "Building secure, high-performance APIs and server-side logic.",
    img: fathallah,
  },
  {
    name: "Taha Gaber",
    role: "Mobile App Developer",
    desc: "Creating smooth, native cross-platform mobile experiences with React Native/Flutter.",
    img: taha,
  },
  {
    name: "Ahmed Abdulazim",
    role: "Automation & Social Media",
    desc: "Streamlining workflows with automation tools and managing brand growth online.",
    img: sarem,
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4 tracking-widest font-orbitron">
          Our Team
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Visionaries building the future.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg border border-accent-second/15 rounded-3xl p-6 transition-all duration-500 hover:translate-y-2 hover:shadow-2xl hover:shadow-accent-second/30 hover:border-accent-second/50"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-accent-second">{member.role}</p>
                <p className="text-gray-400 mt-2 text-sm">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
