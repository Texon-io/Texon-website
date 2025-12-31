import "./gridStyle.css";
import ValuesTxtContent from "@/sections/Values/ValuesTxtContent.jsx";
import ValuesCardsContainer from "@/sections/Values/ValuesCardsContainer.jsx";

export default function Values() {
  return (
    <section id="values" className="relative overflow-hidden mt-12">
      {/* Grid Background */}
      <div className="bg-grid px-6 md:px-12 py-16">
        {/* Content */}
        <div className="max-w-7xl mx-auto ">
          {/*Content*/}
          <ValuesTxtContent />

          {/* Cards */}
          <ValuesCardsContainer />
        </div>
      </div>
    </section>
  );
}
