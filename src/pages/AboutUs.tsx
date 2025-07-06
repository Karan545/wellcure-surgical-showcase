import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart, Globe, Users, Lightbulb, Award, Target, TrendingUp, Shield } from "lucide-react";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const sections = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "About WellCure Surgicals",
      content: "Founded in 2023 and based in Jodhpur, Rajasthan, WellCure Surgicals is a growing name in the Indian healthcare sector. We are dedicated to delivering reliable and well-designed surgical and medical equipment solutions that align with the evolving needs of healthcare providers both in India and abroad."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Our Vision",
      content: "At WellCure Surgicals, we are driven by a passion for quality, innovation, and service. Our focus lies in offering a thoughtfully curated range of products across key medical segments such as Cardiac Surgery, Anaesthesia & Critical Care, Respiratory Care, Dialysis Care, and Pressure Monitoring."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Expanding Global Reach",
      content: "With a strong emphasis on exports, we serve healthcare partners across various international markets. Our goal is to offer dependable, adaptable, and cost-effective solutions that meet the real-world demands of clinical environments."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Smart Operations, Trusted Network",
      content: "Through collaborations with established manufacturers and a streamlined sourcing process, we ensure timely access to consistent, quality-assured medical supplies. Our professional team is committed to maintaining high service standards and responsive support at every step."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer-Focused Approach",
      content: "We work closely with our clients to understand specific requirements and offer product options that best meet their clinical needs. This flexibility helps us bridge market gaps and deliver value where it matters most."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Built on Trust",
      content: "At WellCure Surgicals, long-term partnerships are our priority. We believe trust, reliability, and consistent performance are the cornerstones of every successful business relationship and we strive to reflect these values in everything we do."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb />
      <main className="flex-grow">
        {/* Hero Section with New Logo */}
        <section className="relative py-20 md:py-28 ocean-to-forest-gradient overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50" />
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              {/* Company Logo */}
              <motion.div
                variants={logoVariants}
                className="mb-8"
              >
                <motion.div
                  variants={pulseVariants}
                  animate="pulse"
                  className="w-40 h-40 md:w-48 md:h-48 mx-auto bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20"
                >
                  <img 
                    src="/WhatsApp Image 2025-07-04 at 00.27.57.jpeg" 
                    alt="WellCure Surgicals Logo" 
                    className="w-28 h-28 md:w-32 md:h-32 object-contain rounded-full"
                  />
                </motion.div>
              </motion.div>

              {/* Company Name */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                WellCure Surgicals
              </motion.h1>

              {/* Tagline */}
              <motion.div
                variants={itemVariants}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <p className="text-xl md:text-2xl text-white/95 font-medium">
                    Your Partner in Surgical Excellence
                  </p>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              >
                Delivering reliable and innovative medical equipment solutions to healthcare providers worldwide
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Sections */}
        <section className="py-20 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Story & Values
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#003b5c] to-[#1f5f5b] mx-auto rounded-full"></div>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    className="group bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
                  >
                    {/* Background Gradient on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#003b5c]/5 to-[#1f5f5b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-6">
                        <motion.div
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.3 }
                          }}
                          className="flex-shrink-0"
                        >
                          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#003b5c] to-[#1f5f5b] flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                            {section.icon}
                          </div>
                        </motion.div>
                        <div className="flex-grow">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#003b5c] transition-colors duration-300">
                            {section.title}
                          </h3>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 md:py-24 ocean-to-forest-gradient relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                                 radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Journey in Numbers
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Building excellence in healthcare solutions since our establishment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: "2023", label: "Year Established", description: "Founded with vision" },
                { number: "6+", label: "Product Categories", description: "Comprehensive range" },
                { number: "Global", label: "Market Reach", description: "International presence" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-white/90 text-lg font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-white/70 text-sm">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Partner with Excellence?
              </h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Join healthcare providers worldwide who trust WellCure Surgicals for their medical equipment needs. 
                Let's build a healthier future together.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#003b5c] to-[#1f5f5b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                >
                  <Heart className="w-5 h-5" />
                  Get in Touch
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;