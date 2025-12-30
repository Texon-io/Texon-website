import {useState} from "react";
import PricingTabs from "./PricingTabs";
import PricingCard from "./PricingCard";
import FocalBlur from "@/components/ui/FocalBlur.jsx";

const PRICING_DATA = {
    website: [
        {
            title: "Basic",
            price: 60,
            description: "Ideal for personal brands, portfolios, or landing pages.",
            features: [
                "Custom modern UI/UX design",
                "SEO friendly static website",
                "Contact form integration",
                "Free deployment on Netlify",
                "Launch in 1–2 weeks",
            ],
        },
        {
            title: "Premium",
            price: 100,
            popular: true,
            description: "Advanced web apps with dynamic content and database.",
            features: [
                "Full Supabase integration (Auth/DB)",
                "Content Management System (CMS)",
                "Real-time data updates",
                "Optimized for performance & speed",
                "Launch in 2–4 weeks",
            ],
        },
        {
            title: "Ultra",
            price: 170,
            description: "Complex E-commerce or enterprise-level web solutions.",
            features: [
                "Custom Node.js/Python backend",
                "Payment gateway integration (Stripe/PayPal)",
                "Advanced analytics dashboard",
                "Scalable cloud hosting setup",
                "Launch in 4–8 weeks",
            ],
        },
    ],
    mobile: [
        {
            title: "Basic",
            price: 80,
            description: "Simple cross-platform app for MVP or small tools.",
            features: [
                "Flutter/React Native development",
                "Clean mobile-first UI",
                "Local storage & basic logic",
                "App icon & splash screen design",
                "Launch in 2–3 weeks",
            ],
        },
        {
            title: "Premium",
            price: 150,
            popular: true,
            description: "Feature-rich app with cloud sync and notifications.",
            features: [
                "Push notifications (FCM)",
                "Social media login (Google/Apple)",
                "Cloud database synchronization",
                "API integration & map services",
                "Launch in 4–6 weeks",
            ],
        },
        {
            title: "Ultra",
            price: 250,
            description: "High-end mobile solution with custom infrastructure.",
            features: [
                "Publishing to App Store & Play Store",
                "Advanced animations & UX",
                "Offline-first capability",
                "Multi-language support (i18n)",
                "Launch in 8–12 weeks",
            ],
        },
    ],
    desktop: [
        {
            title: "Basic",
            price: 90,
            description: "Offline desktop tools for automation or management.",
            features: [
                "Electron.js or Tauri development",
                "System tray & native menus",
                "Local file system access",
                "Lightweight & fast performance",
                "Launch in 2–4 weeks",
            ],
        },
        {
            title: "Premium",
            price: 180,
            popular: true,
            description: "Professional software for business workflows.",
            features: [
                "Database integration (SQLite/PostgreSQL)",
                "Automatic software updates",
                "Detailed PDF/Report generation",
                "Cross-platform (Windows & macOS)",
                "Launch in 6–10 weeks",
            ],
        },
        {
            title: "Ultra",
            price: 300,
            description: "Powerful enterprise desktop applications.",
            features: [
                "Hardware integration & drivers",
                "High-security encryption",
                "Custom plugin architecture",
                "Dedicated technical support",
                "Launch in 12+ weeks",
            ],
        },
    ],
};


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
                <PricingTabs active={active} onChange={setActive}/>


                {/* Cards */}
                <div
                    className="mt-24 grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-4 md:px-0 ">
                    {PRICING_DATA[active].map((plan, i) => (
                        <PricingCard key={i} {...plan} />
                    ))}
                </div>

                {/*  Blur   */}
                <FocalBlur blur="blur-[300px]" opacity="opacity-10" className={`top-[200px] w-72 md:w-1/4`}/>

                {/* Footer Note */}
                <p className="mt-12 text-center text-sm text-gray-400">
                    Prices in USD. Egyptian clients can pay the equivalent in EGP at
                    today’s rate — no extra fees.
                </p>
            </div>
        </section>
    );
}
