// components/CTAButton.tsx
import Link from "next/link";

interface CTAButtonProps {
  isScrolled: boolean;
}

const CTAButton = ({ isScrolled }: CTAButtonProps) => (
  <div className="hidden lg:flex items-center">
    <Link
      href="/contact"
      className={`group relative overflow-hidden px-8 py-3 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-500 border rounded-full ${
        isScrolled
          ? "bg-transparent border-white text-white hover:bg-white hover:text-[#51301F]"
          : "bg-transparent border-white/40 text-white hover:bg-white hover:text-gray-900"
      } hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5`}
    >
      <span className="relative z-10">Get in Touch</span>
    </Link>
  </div>
);

export default CTAButton;