
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <a href="tel:+918619327540" className="flex items-center gap-2 hover:text-medical-100 transition-colors">
                <Phone size={18} />
                +91 8619327540
              </a>
              <a href="tel:+918619409956" className="flex items-center gap-2 hover:text-medical-100 transition-colors">
                <Phone size={18} />
                +91 8619409956
              </a>
              <a href="mailto:wellcuresurgicals@gmail.com" className="flex items-center gap-2 hover:text-medical-100 transition-colors">
                <Mail size={18} />
                wellcuresurgicals@gmail.com
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Address</h3>
            <div className="flex gap-2">
              <MapPin size={18} className="flex-shrink-0 mt-1" />
              <p className="text-gray-300">
                Gehloto ka bas, Magra Punjhla,<br />
                Jodhpur, Rajasthan
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">About Us</h3>
            <p className="text-gray-300">
              Wellcure Surgicals is a leading exporter of high-quality medical and surgical equipment, committed to providing excellent service and products worldwide.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Wellcure Surgicals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
