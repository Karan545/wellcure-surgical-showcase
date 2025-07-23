import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
import SocialMedia from "@/components/SocialMedia";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Stethoscope, ShieldCheck, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { getProductImage } from "@/utils/imageUtils";
import ContactForm from "@/components/ContactForm";
import { Toaster } from "@/components/ui/toaster";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const features = [
    {
      icon: <Stethoscope className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />,
      title: "Quality Equipment",
      description: "Premium medical and surgical instruments for healthcare professionals"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />,
      title: "Certified Products", 
      description: "All products meet international quality and safety standards"
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />,
      title: "Global Exports",
      description: "Serving healthcare institutions worldwide"
    },
    {
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />,
      title: "Expert Support",
      description: "Dedicated customer service and technical assistance"
    }
  ];

  const productCategories = [
    {
      title: "Urological Instruments",
      image: getProductImage("https://live.staticflickr.com/3873/14377885496_070d90627c_z.jpg?auto=format&fit=crop&q=80"),
      description: "Advanced urological surgical instruments and diagnostic equipment designed for comprehensive patient care and precise medical procedures.",
      link: "/urological-instruments"
    },
    {
      title: "Gastroenterology Equipment",
      image: getProductImage("https://cdn.pixabay.com/photo/2015/05/17/01/12/hands-770461_1280.jpg?auto=format&fit=crop&q=80"),
      description: "Professional endoscopic systems and specialized medical tools for accurate gastrointestinal procedures and patient diagnostics.",
      link: "/gastroenterology"
    },
    {
      title: "Infusion Therapy",
      image: getProductImage("https://cdn.pixabay.com/photo/2015/07/07/09/52/hospital-834152_1280.jpg?auto=format&fit=crop&q=80"),
      description: "Comprehensive infusion systems, IV cannulas, and administration sets ensuring safe fluid delivery and precise medication management.",
      link: "/infusion-therapy"
    },
    {
      title: "Surgery & Wound Drainage",
      image: getProductImage("https://cdn.pixabay.com/photo/2017/12/21/10/52/surgery-3031541_1280.jpg?auto=format&fit=crop&q=80"),
      description: "Professional surgical drains, collection systems, and wound management solutions for effective post-operative patient care.",
      link: "/surgery-wound-drainage"
    },
    {
      title: "Anaesthesia Systems",
      image: getProductImage("https://cdn.pixabay.com/photo/2023/08/30/15/42/ai-generated-8223597_1280.jpg?auto=format&fit=crop&q=80"),
      description: "Modern anaesthesia delivery units, patient monitoring systems, and critical care equipment for safe surgical procedures.",
      link: "/anaesthesia-systems"
    },
    {
      title: "Blood Management Solutions",
      image: getProductImage("/lovable-uploads/f3803124-995e-4204-9ae6-c9b684697515.png"),
      description: "Professional blood collection systems, storage solutions, and transfusion management equipment for healthcare facilities.",
      link: "/blood-management"
    }
  ];

  const handleCategoryClick = (link: string) => {
    navigate(link);
  };

  // Component for individual product category card with mobile-friendly animations
  const ProductCategoryCard = ({ category, index }: { category: any, index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isMobile, setIsMobile] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="group relative overflow-hidden rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
        onClick={() => handleCategoryClick(category.link)}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        <div className="relative">
          <motion.img
            src={category.image}
            alt={category.title}
            className="object-cover w-full h-[280px] sm:h-[320px] md:h-[280px] lg:h-[320px] transition-transform duration-700"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.7 }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
            animate={isHovered ? { 
              background: "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.5), transparent)" 
            } : {}}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
          {/* Title - Always visible */}
          <motion.h3 
            className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold mb-3 leading-tight"
            animate={{ opacity: 1, y: 0 }}
          >
            {category.title}
          </motion.h3>
          
          {/* Description and Button Container */}
          <motion.div
            initial={isMobile ? { opacity: 0, y: 20 } : { opacity: 0, y: 20 }}
            animate={
              isMobile && isInView ? {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: index * 0.15 + 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              } : !isMobile && isHovered ? {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              } : {
                opacity: isMobile ? 1 : 0,
                y: isMobile ? 0 : 20
              }
            }
            className="overflow-hidden"
          >
            {/* Description */}
            <p className="text-gray-200 text-sm sm:text-base mb-4 leading-relaxed line-clamp-3">
              {category.description}
            </p>
            
            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={
                isMobile && isInView ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.15 + 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                } : !isMobile && isHovered ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    delay: 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                } : {
                  opacity: isMobile ? 1 : 0,
                  y: isMobile ? 0 : 10
                }
              }
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-white/15 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5 font-medium rounded-lg shadow-lg hover:shadow-xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCategoryClick(category.link);
                  }}
                >
                  View Products
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile-specific animated border effect */}
        {isMobile && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.15 + 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003b5c] to-[#1f5f5b] origin-left"
          />
        )}

        {/* Desktop hover overlay effect */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-[#003b5c]/20 via-transparent to-transparent pointer-events-none"
          />
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Wellcure Surgicals | Premium Surgical Equipment & Medical Instruments"
        description="Leading exporter of surgical, medical & hospital equipment from India. Urological instruments, gastroenterology equipment, infusion therapy, blood management solutions & more."
        keywords="surgical equipment, medical instruments, urological instruments, gastroenterology equipment, infusion therapy, blood management solutions, anaesthesia systems, wound drainage, medical supplies India, surgical tools export"
        canonicalUrl="https://wellcuresurgicals.com/"
      />
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* Features Section */}
        <section className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-gray-50">
          <div className="container mx-auto px-3 sm:px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Why Choose Wellcure Surgicals?
              </h2>
              <p className="text-gray-600 max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
                Experience excellence in medical equipment with our comprehensive range of products and services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="bg-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <motion.div 
                    className="text-medical-500 mb-3 sm:mb-4 flex justify-center"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 400, damping: 25 }
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section id="products" className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-white">
          <div className="container mx-auto px-3 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Our Product Categories
              </h2>
              <p className="text-gray-600 max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
                Discover our comprehensive range of high-quality medical equipment and supplies, designed to meet the diverse needs of healthcare professionals worldwide
              </p>
            </motion.div>

            {/* Product Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {productCategories.map((category, index) => (
                <ProductCategoryCard 
                  key={category.title} 
                  category={category} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-gray-50">
          <div className="container mx-auto px-3 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
                Get in touch with our expert team to discuss your medical equipment needs. We're here to provide professional guidance and support for all your requirements.
              </p>
            </motion.div>

            <div className="max-w-xl sm:max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>

        <SocialMedia />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;