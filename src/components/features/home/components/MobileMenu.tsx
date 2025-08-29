import Link from "next/link";

interface MobileMenuProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    navigationItems: { name: string; href: string }[];
}
const MobileMenu = ({ isMenuOpen, setIsMenuOpen, navigationItems } : MobileMenuProps) => (
  <div
    className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
      isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
  >
    {/* Background overlay */}
    <div 
      className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      onClick={() => setIsMenuOpen(false)}
    ></div>
    
    {/* Menu content */}
    <div className={`absolute top-24 left-0 right-0 bottom-0 bg-white transform transition-transform duration-500 ${
      isMenuOpen ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="h-full flex flex-col justify-center items-center px-8 space-y-12">
        {navigationItems.map((item, index) => (
          <Link
            key={item.name}
            href={item.href}
            className="group text-3xl font-light text-gray-900 hover:text-gray-600 transition-all duration-300 tracking-[0.05em]"
            onClick={() => setIsMenuOpen(false)}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {item.name}
            <div className="w-0 h-px bg-gradient-to-r from-gray-900 to-gray-600 group-hover:w-full transition-all duration-500 mt-2"></div>
          </Link>
        ))}

        <div className="pt-12">
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white px-12 py-4 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:bg-gray-800 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:-translate-y-1 rounded-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default MobileMenu;