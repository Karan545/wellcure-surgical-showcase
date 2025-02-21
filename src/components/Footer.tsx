
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

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

  return (
    <footer className="bg-gray-900 text-white py-12">
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <motion.a 
                href="tel:+918619327540" 
                className="flex items-center gap-2 hover:text-medical-100 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone size={18} />
                +91 8619327540
              </motion.a>
              <motion.a 
                href="tel:+918619409956" 
                className="flex items-center gap-2 hover:text-medical-100 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone size={18} />
                +91 8619409956
              </motion.a>
              <motion.a 
                href="mailto:wellcuresurgicals@gmail.com" 
                className="flex items-center gap-2 hover:text-medical-100 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail size={18} />
                wellcuresurgicals@gmail.com
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-xl font-semibold">Address</h3>
            <motion.div 
              className="flex gap-2 group cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <MapPin size={18} className="flex-shrink-0 mt-1 group-hover:text-medical-100" />
              <p className="text-gray-300 group-hover:text-medical-100">
                Gehloto ka bas, Magra Punjhla,<br />
                Jodhpur, Rajasthan
              </p>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-xl font-semibold">About Us</h3>
            <p className="text-gray-300">
              Wellcure Surgicals is a leading exporter of high-quality medical and surgical equipment, committed to providing excellent service and products worldwide.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"
          variants={itemVariants}
        >
          <p>&copy; {new Date().getFullYear()} Wellcure Surgicals. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
