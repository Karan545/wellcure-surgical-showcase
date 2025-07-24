import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart, Globe, Users, Lightbulb, Award, Target, TrendingUp, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

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

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="About Wellcure Surgicals | Leading Medical Equipment Exporter from India"
        description="Learn about Wellcure Surgicals - Founded in 2023 in Jodhpur, Rajasthan. We are dedicated to delivering reliable surgical and medical equipment solutions globally."
        keywords="about wellcure surgicals, medical equipment company India, surgical instruments manufacturer, healthcare products exporter, Jodhpur medical company"
        canonicalUrl="https://wellcuresurgicals.com/about"
      />
      <Header />
      <Breadcrumb />
      <main className="flex-grow">
        {/* Hero Section with Simple Logo */}
        <section className="relative py-20 md:py-28 ocean-to-forest-gradient overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Simple Company Logo - No Animation */}
              <div className="mb-8">
                <div className="w-40 h-40 md:w-48 md:h-48 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white/30">
                  <img 
                    src="/WhatsApp_Image_2025-07-04_at_00.27.57-removebg-preview.png" 
                    alt="WellCure Surgicals Logo" 
                    className="w-28 h-28 md:w-32 md:h-32 object-contain"
                  />
                </div>
              </div>

              {/* Company Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                WellCure Surgicals
              </motion.h1>

              {/* Simple Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-full px-8 py-4 border border-white/30">
                  <p className="text-xl md:text-2xl text-white font-medium">
                    Your Partner in Surgical Excellence
                  </p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              >
                Delivering reliable and innovative medical equipment solutions to healthcare providers worldwide
              </motion.p>
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
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#003b5c] to-[#1f5f5b] flex items-center justify-center text-white shadow-lg">
                            {section.icon}
                          </div>
                        </div>
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

        {/* Stats Section */}
        <section className="py-20 md:py-24 ocean-to-forest-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>

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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2
                  }}
                  viewport={{ once: true }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
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
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;