interface MobileMenuButtonProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}
const MobileMenuButton = ({
  isScrolled,
  isMenuOpen,
  setIsMenuOpen,
}: MobileMenuButtonProps) => (
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className={`lg:hidden relative w-8 h-8 flex flex-col justify-center items-center transition-all duration-300 ${
      isScrolled ? "text-gray-900" : "text-white"
    }`}
    aria-label="Toggle menu"
  >
    <span
      className={`w-6 h-px transition-all duration-300 ${
        isScrolled ? "bg-gray-900" : "bg-white"
      } ${isMenuOpen ? "rotate-45 translate-y-px" : "-translate-y-1"}`}
    ></span>
    <span
      className={`w-6 h-px transition-all duration-300 ${
        isScrolled ? "bg-gray-900" : "bg-white"
      } ${isMenuOpen ? "opacity-0" : ""}`}
    ></span>
    <span
      className={`w-6 h-px transition-all duration-300 ${
        isScrolled ? "bg-gray-900" : "bg-white"
      } ${isMenuOpen ? "-rotate-45 -translate-y-px" : "translate-y-1"}`}
    ></span>
  </button>
);

export default MobileMenuButton;
