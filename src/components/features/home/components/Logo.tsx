// components/Logo.tsx
import Link from "next/link";

interface LogoProps {
  isScrolled: boolean;
}

const Logo = ({ isScrolled }: LogoProps) => (
  <div className="flex-shrink-0 z-10">
    <Link href="/" className="group block">
      <div className="relative">
        <h1
          className={`text-2xl lg:text-3xl font-light tracking-[0.25em] transition-all duration-500 ${
            isScrolled ? "text-white" : "text-white"
          }`}
        >
          <span className="font-normal">J7GROUP</span>
        </h1>
      </div>
    </Link>
  </div>
);

export default Logo;