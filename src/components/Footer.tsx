import { Mail, Phone, MapPin, Heart, ShieldCheck, Stethoscope, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

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
    { name: "Blood Management Solutions", path: "/blood-management-solutions" },
    { name: "Anaesthesia Systems", path: "/anaesthesia-systems" },
    { name: "Surgery & Wound Drainage", path: "/surgery-wound-drainage" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="ocean-to-forest-gradient text-white py-12 md:py-16 w-full relative">
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {/* Company Info */}
          <motion.div className="space-y-4 md:space-y-6" variants={itemVariants}>
            <h3 className="text-xl md:text-2xl font-semibold pb-2 mb-4 text-white/90">
              Wellcure Surgicals
            </h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
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
          <motion.div className="space-y-4 md:space-y-6" variants={itemVariants}>
            <h3 className="text-xl md:text-2xl font-semibold pb-2 mb-4 text-white/90">Contact Us</h3>
            <div className="space-y-4">
              <motion.a 
                href="tel:+918619327540" 
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 border border-white/20 flex-shrink-0">
                  <Phone size={14} className="group-hover:text-white" />
                </div>
                <span className="text-sm md:text-base">+91 8619327540</span>
              </motion.a>
              <motion.a 
                href="tel:+918619409956" 
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 border border-white/20 flex-shrink-0">
                  <Phone size={14} className="group-hover:text-white" />
                </div>
                <span className="text-sm md:text-base">+91 8619409956</span>
              </motion.a>
              <motion.a 
                href="mailto:wellcuresurgicals@gmail.com" 
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 border border-white/20 flex-shrink-0">
                  <Mail size={14} className="group-hover:text-white" />
                </div>
                <span className="text-sm md:text-base break-all">wellcuresurgicals@gmail.com</span>
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
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Gehloto ka bas, Magra Punjhla,<br />
                  Jodhpur, Rajasthan, India
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Products */}
          <motion.div className="space-y-4 md:space-y-6" variants={itemVariants}>
            <h3 className="text-xl md:text-2xl font-semibold pb-2 mb-4 text-white/90">Products</h3>
            <ul className="grid grid-cols-1 gap-2">
              {productCategories.map((category, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link 
                    to={category.path} 
                    className="text-white/80 hover:text-white transition-colors flex items-center gap-2 text-sm md:text-base"
                  >
                    <Stethoscope size={12} className="text-white/60 flex-shrink-0" />
                    <span className="leading-tight">{category.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4 md:space-y-6" variants={itemVariants}>
            <h3 className="text-xl md:text-2xl font-semibold pb-2 mb-4 text-white/90">Quick Links</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">Home</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/#about" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">About Us</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/#products" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">Products</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/#contact" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">Contact</Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 md:mt-12 pt-6 border-t border-white/20 text-center text-white/70"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm">&copy; {currentYear} Wellcure Surgicals. All rights reserved.</p>
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
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;