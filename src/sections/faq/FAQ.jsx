import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FocalBlur from "@/components/ui/FocalBlur.jsx";

const faqData = [
    {
        id: "item-1",
        question: "What does Texon actually do?",
        answer:
            "We build real web products — dashboards, admin panels, and systems designed for daily use [Mobile - Desktop]. Performance comes first, visuals follow.",
    },
    {
        id: "item-2",
        question: "Do you work with any type of client?",
        answer:
            "Not really. We work with startups and businesses that have real problems and care about scalable, long-term solutions.",
    },
    {
        id: "item-3",
        question: "What tech stack do you use for websites?",
        answer:
            "It depends on the system, But mostly React or Next.js, Tailwind CSS, and modern animation tools like GSAP or Framer Motion. The stack serves the product, not the other way around.",
    },
    {
        id: "item-4",
        question: "Is the design custom or template-based?",
        answer:
            "Fully custom. No templates, no shortcuts. Every project has its own visual language and UX logic.",
    },
    {
        id: "item-5",
        question: "Do you build mobile or desktop applications?",
        answer:
            "Yes. We build cross-platform mobile and desktop applications when the product actually needs it. No apps built just for the sake of having an app.",
    },
    {
        id: "item-6",
        question: "How long does a project usually take?",
        answer:
            "Small projects take 1–3 weeks. Bigger systems depend on complexity. We focus on doing it right, not just fast.",
    },
    {
        id: "item-7",
        question: "How do we get started?",
        answer:
            "You share your idea with us. We review the requirements and suggest the best approach to move forward in a clear and practical way.",
    },

];


function FAQ() {
  return (
    <section id={`faq`} className={`py-12 p-10 sm:px-20 min-h-screen `}>
        {/*Focal Blur Effect*/}
        <div className={`relative`}>
            <FocalBlur/>
        </div>
      {/*  Heading  */}
      <div className={`flex-center mb-20`}>
        <h5 className={`text-3xl sm:text-5xl font-semibold tracking-wider leading-14 capitalize`}>
          Got a Question!
          <br />
          We got answers
        </h5>
      </div>


        <div className="w-full sm:w-4/5 mx-auto">
            <div className="accordion-wrapper rounded-xl w-full p-1">
                <Accordion type="single" collapsible>
                    {faqData.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={item.id}
                            className="border-b border-gray-second/80"
                        >
                            <AccordionTrigger>
                                {item.question}
                            </AccordionTrigger>

                            <AccordionContent className={`opacity-75`}>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>

    </section>
  );
}

export default FAQ;
