import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import HeaderProductDropdown from "@/components/header/HeaderProductDropdown";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useProductSuggestions } from "@/hooks/useProductSuggestions";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" }
  ];

  // Suggestion hook
  const suggestions = useProductSuggestions(searchTerm);

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    // Optionally trigger the search here
  };

  // Handle outside click to close suggestions
  const searchWrapperRef = useRef<HTMLDivElement>(null);
  // Close suggestion list when clicking outside
  // (Note: not debounced, only basic UX for now)
  // Could be improved with a custom hook for outside click
  // but let's keep it simple.

  // Handles showing/hiding suggestions, also on input focus/blur
  const handleInputFocus = () => {
    if (suggestions.length > 0) setShowSuggestions(true);
  };
  const handleInputBlur = () => {
    // Delay hiding to let click register
    setTimeout(() => setShowSuggestions(false), 100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    if (searchTerm.trim()) {
      alert(`Searching for: ${searchTerm}`);
    }
  };

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

          {/* Desktop Navigation + Search */}
          <nav className="hidden md:flex items-center space-x-8">
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

            {/* --- Inserted Search Form for desktop with suggestions --- */}
            <div className="relative ml-6 flex items-center gap-2" ref={searchWrapperRef}>
              <form onSubmit={handleSearch} className="w-full flex items-center gap-2">
                <div className="relative w-44">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    className="pl-10 bg-white border border-gray-200 shadow-sm text-gray-700 placeholder:text-gray-400 rounded-md h-10 w-44 focus:ring-2 focus:ring-[#1f5f5b]"
                    autoComplete="off"
                  />
                  {/* Suggestions Dropdown */}
                  <AnimatePresence>
                    {showSuggestions && suggestions.length > 0 && (
                      <motion.ul
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="absolute left-0 top-12 z-30 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto mt-1"
                      >
                        {suggestions.map((sugg, idx) => (
                          <li
                            key={sugg}
                            tabIndex={0}
                            onMouseDown={() => handleSuggestionClick(sugg)}
                            className="px-4 py-2 text-gray-900 hover:bg-[#f0f7fa] cursor-pointer transition-colors text-sm"
                          >
                            {sugg}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
                <Button 
                  type="submit" 
                  size="sm"
                  variant="secondary"
                  className="px-4 h-10 bg-[#1f5f5b] text-white hover:bg-[#003b5c]"
                >
                  Search
                </Button>
              </form>
            </div>
            {/* --- End Search Form with suggestions --- */}

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

                {/* Mobile Search with suggestions */}
                <div className="relative flex-1">
                  <form onSubmit={handleSearch} className="flex gap-2 mt-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                      <Input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        className="pl-10 bg-white border border-gray-200 text-gray-700 placeholder:text-gray-400 rounded-md h-10"
                        autoComplete="off"
                      />
                      {/* Suggestions Dropdown */}
                      <AnimatePresence>
                        {showSuggestions && suggestions.length > 0 && (
                          <motion.ul
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="absolute left-0 top-12 z-30 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto mt-1"
                          >
                            {suggestions.map((sugg, idx) => (
                              <li
                                key={sugg}
                                tabIndex={0}
                                onMouseDown={() => handleSuggestionClick(sugg)}
                                className="px-4 py-2 text-gray-900 hover:bg-[#f0f7fa] cursor-pointer transition-colors text-sm"
                              >
                                {sugg}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                    <Button 
                      type="submit" 
                      size="sm"
                      variant="secondary"
                      className="px-4 h-10 bg-[#1f5f5b] text-white hover:bg-[#003b5c]"
                    >
                      Search
                    </Button>
                  </form>
                </div>
                {/* End Mobile Search with suggestions */}

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
