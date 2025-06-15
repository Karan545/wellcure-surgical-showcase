
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import HeaderProductDropdown from "@/components/header/HeaderProductDropdown";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "/" },
    // Remove hardcoded Products (dropdown replaces this)
    // { title: "Products", href: "#products" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/0b5d674d-912b-485f-8d72-b5340093fb12.png" 
                alt="Wellcure Surgicals Logo" 
                className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"
              />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#003b5c] to-[#1f5f5b] bg-clip-text text-transparent">
                Wellcure Surgicals
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Insert products dropdown here */}
            <HeaderProductDropdown />

            {navLinks.map((link, index) => (
              <motion.a
                key={link.title}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="font-medium text-gray-700 hover:text-[#003b5c] transition-colors relative group"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#003b5c] to-[#1f5f5b] group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="ocean-to-forest-gradient text-white px-6 py-2 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-medium"
            >
              Get Quote
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#003b5c] hover:text-[#1f5f5b] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-4">
                {/* Products Dropdown on mobile; collapsible */}
                <HeaderProductDropdown />

                {navLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="block text-gray-700 hover:text-[#003b5c] transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                ))}
                <button
                  className="w-full ocean-to-forest-gradient text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
