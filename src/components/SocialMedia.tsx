
import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Twitter, MessageCircle } from "lucide-react";

const SocialMedia = () => {
  const socialLinks = [
    {
      icon: <Instagram size={32} />,
      href: "https://instagram.com",
      label: "Follow us on Instagram",
      color: "hover:text-pink-600"
    },
    {
      icon: <Facebook size={32} />,
      href: "https://facebook.com",
      label: "Connect on Facebook",
      color: "hover:text-blue-600"
    },
    {
      icon: <Linkedin size={32} />,
      href: "https://linkedin.com",
      label: "Join us on LinkedIn",
      color: "hover:text-blue-700"
    },
    {
      icon: <MessageCircle size={32} />,
      href: "https://wa.me/+918619327540",
      label: "Chat on WhatsApp",
      color: "hover:text-green-600"
    },
    {
      icon: <Twitter size={32} />,
      href: "https://twitter.com",
      label: "Follow us on Twitter",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connect With Excellence in Medical Supply
          </h2>
          <p className="text-gray-600 mb-12">
            Stay updated with our latest medical innovations, surgical equipment launches, and industry insights. Join our growing community of healthcare professionals.
          </p>

          <div className="flex justify-center items-center gap-8 flex-wrap">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 transition-colors duration-300 ${social.color}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;
