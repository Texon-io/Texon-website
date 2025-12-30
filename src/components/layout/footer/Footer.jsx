import { Divider } from "@/components/layout/footer/Divider.jsx";
import LogoSec from "@/components/layout/footer/LogoSec.jsx";
import QuickLinksSec from "@/components/layout/footer/QuickLinksSec.jsx";
import SocialsSec from "@/components/layout/footer/SocialsSec.jsx";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 pt-20">
      <Divider />
      {/* Top */}
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2">
        {/* Left */}
        <LogoSec />
        {/* Right */}
        <QuickLinksSec />
      </div>
      <Divider />
      {/* Bottom */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pb-10">
        <p className="text-base text-gray-400">
          © 2025 All Rights reserved for — Texon
        </p>
        <SocialsSec />
      </div>
    </footer>
  );
}
