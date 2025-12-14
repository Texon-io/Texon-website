import CardSwap, { Card } from "../../components/ui/CardSwap.jsx";
import DashedHeading from "@/components/ui/DashedHeading.jsx";
import { cardBg } from "@/utils/constants.js";

const cardsData = [
  {
    service: "Web Development",
    paragraph:
      "Build responsive, high-performance web interfaces using React, Next.js, and modern CSS frameworks.",
    feature: "⌚ Fast Delivery",
  },
  {
    service: "Mobile Applications",
    paragraph:
      "Create sleek, performant mobile apps for iOS and Android using React Native, Flutter, or Swift.",
    feature: "💻 Cross-platform",
  },
  {
    service: "Desktop Applications",
    paragraph:
      "Develop cross-platform desktop applications with Electron or native frameworks for Windows, Mac, and Linux.",
    feature: "⚡ Modern Technologies",
  },
];

function Services() {
  return (
    <section
      id={`services`}
      className={`flex justify-between items-center h-screen  px-[105px]`}
    >
      <div className={`services-text h-full flex flex-col justify-center`}>
        <DashedHeading
          heading={`Our Services.`}
          para={`Focused, fast, and built to make a difference.`}
        />
      </div>
      <div className={`relative w-3/6 h-4/5`}>
        <CardSwap
          cardDistance={60}
          verticalDistance={100}
          delay={7000}
          pauseOnHover={false}
          easing={`elastic`}
          skewAmount={8}
        >
          {cardsData.map((card) => (
            <Card
              key={card.service}
              className={`shadow-lg relative rounded-xl p-6 flex flex-col gap-3 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300 flex-center`}
            >
              <div
                className={`absolute bg-main-black/80 top-0 left-0 p-2 px-6 border-0 border-b-[1px] border w-full rounded-t-xl`}
              >
                <p>{card.feature}</p>
              </div>
              <img
                className={`w-full h-full inset-0 opacity-45 saturate-50 -z-10 absolute`}
                src={cardBg}
              />

              <h3 className="text-2xl font-semibold z-10">{card.service}</h3>
              <p className="text-sm text-center text-main-text/75">
                {card.paragraph}
              </p>
            </Card>
          ))}
        </CardSwap>
      </div>
    </section>
  );
}

export default Services;
