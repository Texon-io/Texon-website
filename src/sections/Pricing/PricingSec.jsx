import { useState } from "react";
import PricingTabs from "./PricingTabs";
import PricingCard from "./PricingCard";
import FocalBlur from "@/components/ui/FocalBlur.jsx";

import { PRICING_DATA } from "@/data/pricingData";

export default function PricingSec() {
  const [active, setActive] = useState("website");

  return (
    <section id={`pricing`} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-medium mb-10">
          Simple, Fair pricing
        </h2>

        {/* Tabs */}
        <PricingTabs active={active} onChange={setActive} />

        {/* Cards */}
        <div className="mt-24 grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-2 md:px-0 ">
          {PRICING_DATA[active].map((plan, i) => (
            <PricingCard key={i} {...plan} />
          ))}
        </div>

        {/*  Blur   */}
        <FocalBlur
          blur="blur-[300px]"
          opacity="opacity-10"
          className={`top-[200px] w-72 md:w-1/4`}
        />

        {/* Footer Note */}
        <p className="mt-12 text-center text-sm text-gray-400">
          Prices in USD. Egyptian clients can pay the equivalent in EGP at
          today’s rate — no extra fees.
        </p>
      </div>
    </section>
  );
}
