import CardSwap, { Card } from "../../components/ui/CardSwap.jsx";
import DashedHeading from "@/components/ui/DashedHeading.jsx";
import {cardBg, cardBg2, cardBg3} from "@/utils/constants.js";
import {useEffect, useState} from "react";
import {CodeXml, LaptopMinimal, Smartphone} from "lucide-react";

const cardsData = [
  {
    service: "Web Development",
    paragraph:
      "Build responsive, high-performance web interfaces using React, Next.js, and modern CSS frameworks.",
    feature: "Fast Delivery",
      icon: <CodeXml size={44} color={'#7C5EFF'} strokeWidth={1.5}/>,
      image: cardBg
  },
  {
    service: "Mobile Applications",
    paragraph:
      "Create sleek, performant mobile apps for iOS and Android using React Native, Flutter, or Swift.",
    feature: "Cross-platform",
      icon: <Smartphone size={44} color={'#7C5EFF'} strokeWidth={1.5}/>,
      image: cardBg2
  },
  {
    service: "Desktop Applications",
    paragraph:
      "Develop cross-platform desktop applications with Electron or native frameworks for Windows, Mac, and Linux.",
    feature: "Modern Technologies",
      icon:<LaptopMinimal size={44} color={'#7C5EFF'} strokeWidth={1.5}/>,
      image: cardBg3

  },
];

function Services() {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    useEffect(() => {
        function handleResize() {
            setInnerWidth(window.innerWidth);

        }

        window.addEventListener("resize",  handleResize)

        return () =>{
            window.removeEventListener('resize', handleResize)
        }
    }, [innerWidth]);


  return (
    <section
      id={`services`}
      className={` flex justify-between items-center min-h-screen lg:h-screen max-lg:gap-6 px-16 sm:px-[105px] max-lg:flex-col max-lg:my-24`}
    >
      <div className={`services-text w-fit h-fit lg:h-full flex flex-col justify-center`}>
        <DashedHeading
          heading={`Our Services.`}
          para={`Focused, fast, and built to make a difference.`}
        />
      </div>
        {innerWidth >= 1024 ? (
            // 3D CardSwap in large screens
            <div className={`relative w-3/6 h-4/5`}>
                <CardSwap
                    cardDistance={60}
                    verticalDistance={100}
                    delay={7000}
                    pauseOnHover={false}
                    easing={`elastic`}
                    skewAmount={8}
                >
                    {cardsData.map(card => (
                        <Card key={card.service} className={`shadow-lg relative rounded-xl p-6 flex flex-col gap-3 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300 flex-center`}>
                            <div className={`absolute bg-main-black/80 top-0 left-0 p-2 px-6 border-0 border-b-[1px] border w-full rounded-t-xl`}>
                                <p>{card.feature}</p>
                            </div>
                            <img className={`w-full h-full inset-0 opacity-45 saturate-50 -z-10 absolute`} src={card.image}/>

                            <h3 className="text-2xl font-semibold z-10">{card.service}</h3>
                            <p className="text-sm text-center text-main-text/75">
                                {card.paragraph}
                            </p>
                        </Card>
                    ))}

                </CardSwap>
            </div>
        ) : (
            // 2D Card in small screens
            <div className="grid grid-cols-1 gap-8 lg:hidden px-3 sm:px-12">
            {cardsData.map((card) => (
                <div
                    key={card.service}
                    className="shadow-xl rounded-lg py-8 flex flex-col gap-6 border border-gray-500 hover:border-gray-300/75 relative overflow-hidden opacity-75 hover:opacity-90 transition-all duration-500 group"
                >
                    <div className="bg-main-black/75 p-3 rounded-t-2xl text-center -mt-8 mb-4 w-full border-0 border-b-[1px] border-gray-500 group-hover:border-gray-300/75 transition-colors duration-500">
                        <p className="text-sm font-normal tracking-widest">{card.feature}</p>
                    </div>

                    <img
                        className="absolute inset-0 w-full h-full object-cover opacity-30 saturate-50 -z-10 rounded-2xl"
                        src={card.image}
                        alt="card background"
                    />

                    <div className="text-center pb-8 relative px-5">
                        <div className="flex-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {card.icon}
                        </div>

                        <h3 className="text-2xl font-bold mb-4">{card.service}</h3>
                        <p className="text-base text-main-text/80 leading-relaxed">
                            {card.paragraph}
                        </p>
                    </div>
                </div>
            ))}
        </div>)}
    </section>
  );
}

export default Services;
