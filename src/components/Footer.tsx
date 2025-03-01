
import { Mail, Phone, MapPin, ExternalLink, Heart, ShieldCheck, Clock, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
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
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16">
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-xl font-semibold border-b border-medical-200/20 pb-2 mb-4">
              <span className="text-medical-100">Wellcure</span> Surgicals
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A premier exporter of high-quality medical and surgical equipment, committed to providing 
              excellence in healthcare solutions worldwide since 2005.
            </p>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Clock size={14} className="text-medical-100" />
              <span>Mon - Fri: 9:00 AM - 6:00 PM IST</span>
            </div>
          </motion.div>
          
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-xl font-semibold border-b border-medical-200/20 pb-2 mb-4">Contact Us</h3>
            <div className="space-y-4">
              <motion.a 
                href="tel:+918619327540" 
                className="flex items-center gap-3 text-gray-300 hover:text-medical-100 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-medical-900/30">
                  <Phone size={14} className="group-hover:text-medical-100" />
                </div>
                <span>+91 8619327540</span>
              </motion.a>
              <motion.a 
                href="tel:+918619409956" 
                className="flex items-center gap-3 text-gray-300 hover:text-medical-100 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-medical-900/30">
                  <Phone size={14} className="group-hover:text-medical-100" />
                </div>
                <span>+91 8619409956</span>
              </motion.a>
              <motion.a 
                href="mailto:wellcuresurgicals@gmail.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-medical-100 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-medical-900/30">
                  <Mail size={14} className="group-hover:text-medical-100" />
                </div>
                <span>wellcuresurgicals@gmail.com</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-xl font-semibold border-b border-medical-200/20 pb-2 mb-4">Products</h3>
            <ul className="space-y-2">
              {productCategories.map((category, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link 
                    to={category.path} 
                    className="text-gray-300 hover:text-medical-100 transition-colors flex items-center gap-2"
                  >
                    <Stethoscope size={12} />
                    <span>{category.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-xl font-semibold border-b border-medical-200/20 pb-2 mb-4">Location</h3>
            <motion.div 
              className="flex gap-3 group"
              whileHover={{ x: 5 }}
            >
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-medical-900/30">
                <MapPin size={14} className="group-hover:text-medical-100" />
              </div>
              <div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Gehloto ka bas, Magra Punjhla,<br />
                  Jodhpur, Rajasthan, India
                </p>
              </div>
            </motion.div>
            
            <div className="pt-4">
              <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                <ShieldCheck size={14} className="text-medical-100" />
                Our Commitments
              </h4>
              <div className="flex flex-wrap gap-3">
                <div className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 flex items-center gap-1">
                  <Heart size={10} className="text-medical-100" />
                  Quality
                </div>
                <div className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 flex items-center gap-1">
                  <Clock size={10} className="text-medical-100" />
                  Timely Delivery
                </div>
                <div className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 flex items-center gap-1">
                  <ShieldCheck size={10} className="text-medical-100" />
                  Compliance
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">&copy; {currentYear} Wellcure Surgicals. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-medical-100 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-medical-100 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
