import { twMerge } from "tailwind-merge";

const tabs = [
  { id: "website", label: "Website" },
  { id: "mobile", label: "Mobile" },
  { id: "desktop", label: "Desktop" },
];

export default function PricingTabs({ active, onChange }) {
  return (
    <div className="flex justify-center ">
      <div className="flex bg-white/6 rounded-full p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={twMerge(
              "px-6 py-2 rounded-full text-sm transition cursor-pointer font-medium",
              active === tab.id
                ? "bg-white text-black"
                : "text-gray-400 hover:text-white"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
