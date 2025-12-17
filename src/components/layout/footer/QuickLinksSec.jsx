import FooterColumn from "@/components/layout/footer/FooterColumn.jsx";

const footerLinks = {
  explore: ["Services", "Projects", "Values"],
  discover: ["Pricing", "Vision"],
};

export default function QuickLinksSec() {
  return (
    <div className="grid grid-cols-2 gap-16 max-w-md md:ml-auto ps-2">
      <FooterColumn title="Explore" links={footerLinks.explore} />
      <FooterColumn title="Discover" links={footerLinks.discover} />
    </div>
  );
}
