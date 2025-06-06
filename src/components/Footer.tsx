
import { Mail, Phone, MapPin, Heart, ShieldCheck, Stethoscope, ArrowUp, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle scroll event to show/hide the "go up" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Simple search logic - redirect to products page with search term
      console.log(`Searching for: ${searchTerm}`);
      // You can implement more sophisticated search logic here
      alert(`Searching for: ${searchTerm}`);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const productCategories = [
    { name: "Urological Instruments", path: "/urological-instruments" },
    { name: "Gastroenterology Equipment", path: "/gastroenterology" },
    { name: "Infusion Therapy", path: "/infusion-therapy" },
    { name: "Wound Care & Ortho", path: "/wound-care-ortho" },
    { name: "Blood Management Solutions", path: "/blood-management-solutions" },
    { name: "Anaesthesia Systems", path: "/anaesthesia-systems" },
    { name: "Medical Gloves Division", path: "/medical-gloves-division" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="ocean-to-forest-gradient text-white py-16 w-full relative">
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Search Section */}
        <motion.div 
          className="mb-12 text-center"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold pb-2 mb-6 text-white/90">
            Find Medical Products
          </h3>
          <form onSubmit={handleSearch} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  type="text"
                  placeholder="Search for medical equipment..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                />
              </div>
              <Button 
                type="submit" 
                variant="secondary"
                className="px-6 bg-white/20 hover:bg-white/30 text-white border-white/20"
              >
                Search
              </Button>
            </div>
          </form>
          <p className="text-white/70 text-sm mt-3">
            Search across all our medical equipment categories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-14">
          {/* Company Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-2xl font-semibold pb-2 mb-4 text-white/90">
              Wellcure Surgicals
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              A premier exporter of high-quality medical and surgical equipment, committed to providing 
              excellence in healthcare solutions worldwide.
            </p>
            <div className="pt-4">
              <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                <ShieldCheck size={14} className="text-white/70" />
                Our Commitments
              </h4>
              <div className="flex flex-wrap gap-3">
                <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 flex items-center gap-1 border border-white/20">
                  <Heart size={10} className="text-white/70" />
                  Quality
                </div>
                <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 flex items-center gap-1 border border-white/20">
                  <ShieldCheck size={10} className="text-white/70" />
                  Compliance
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-2xl font-semibold pb-2 mb-4 text-white/90">Contact Us</h3>
            <div className="space-y-4">
              <motion.a 
                href="tel:+918619327540" 
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 border border-white/20">
                  <Phone size={14} className="group-hover:text-white" />
                </div>
                <span>+91 8619327540</span>
              </motion.a>
              <motion.a 
                href="tel:+918619409956" 
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 border border-white/20">
                  <Phone size={14} className="group-hover:text-white" />
                </div>
                <span>+91 8619409956</span>
              </motion.a>
              <motion.a 
                href="mailto:wellcuresurgicals@gmail.com" 
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 border border-white/20">
                  <Mail size={14} className="group-hover:text-white" />
                </div>
                <span>wellcuresurgicals@gmail.com</span>
              </motion.a>
            </div>
            <motion.div 
              className="flex gap-3 group mt-4"
              whileHover={{ x: 5 }}
            >
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 border border-white/20">
                <MapPin size={14} className="group-hover:text-white" />
              </div>
              <div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Gehloto ka bas, Magra Punjhla,<br />
                  Jodhpur, Rajasthan, India
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Products */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-2xl font-semibold pb-2 mb-4 text-white/90">Products</h3>
            <ul className="grid grid-cols-1 gap-2">
              {productCategories.map((category, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link 
                    to={category.path} 
                    className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Stethoscope size={12} className="text-white/60" />
                    <span>{category.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-2xl font-semibold pb-2 mb-4 text-white/90">Quick Links</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/#about" className="text-white/80 hover:text-white transition-colors">About Us</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/#products" className="text-white/80 hover:text-white transition-colors">Products</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/#contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/privacy-policy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/terms-of-service" className="text-white/80 hover:text-white transition-colors">Terms of Service</Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 pt-6 border-t border-white/20 text-center text-white/70"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">&copy; {currentYear} Wellcure Surgicals. All rights reserved.</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Go Up Button */}
      {showScrollButton && (
        <motion.button
          className="fixed bottom-6 right-6 gradient-button p-3 rounded-full shadow-lg z-50 backdrop-blur-sm border border-white/20"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </ArrowUp>
      )}
    </footer>
  );
};

export default Footer;
