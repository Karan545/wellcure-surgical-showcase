
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart, Globe, Users, Lightbulb, Award, Target } from "lucide-react";

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
      content: "Established in 2023, WellCure Surgicals is headquartered in Jodhpur, Rajasthan, India. We are a growing name in the healthcare industry, dedicated to manufacturing high-quality medical equipments under the spirit of India's \"Make in India\" initiative."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Our Vision",
      content: "Driven by innovation and a commitment to quality, WellCure Surgicals aims to deliver practical, efficient, and well-designed medical solutions. We specialize in a diverse range of healthcare segments including Cardiac Surgery, Anaesthesia & Critical Care, Respiratory Care, Dialysis Supplies, and Pressure Monitoring Equipment."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Aspirations",
      content: "With our rapidly expanding reach, WellCure Surgicals is already serving healthcare needs across multiple international markets. Our focus on exports positions us as a trusted partner for clients seeking dependable, cost-effective, and adaptable solutions."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Modern Setup, Passionate Team",
      content: "Our manufacturing unit is equipped with in-house design, production, and packaging capabilities. Backed by a dedicated and professional team, we ensure seamless operations and reliable service to meet evolving customer demands."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation with Purpose",
      content: "We listen to our customers and respond with tailored solutions. By identifying specific needs and closing market gaps, we develop customized medical consumables that align with real-world clinical challenges."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Our Commitment",
      content: "At WellCure Surgicals, we believe that building lasting relationships is just as important as delivering great products. Our customer-first mindset ensures we not only meet expectations but consistently strive to exceed them — forging long-term partnerships built on trust, reliability, and shared growth."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb />
      <main className="flex-grow">
        {/* Hero Section with Logo */}
        <section className="relative py-16 md:py-24 ocean-to-forest-gradient overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Company Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <img 
                    src="/lovable-uploads/e577ec1e-0820-4fc1-8f04-6a2548863109.png" 
                    alt="WellCure Surgicals Logo" 
                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                  />
                </div>
              </motion.div>

              {/* Company Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                WellCure Surgicals
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              >
                Excellence in Medical Equipment Manufacturing
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* About Sections */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-medical-500 to-medical-600 flex items-center justify-center text-white shadow-lg">
                        {section.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {section.title}
                      </h2>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 ocean-to-forest-gradient">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Journey in Numbers
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Since our establishment, we've been making significant strides in the medical equipment industry
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "2023", label: "Year Established" },
                { number: "6+", label: "Product Categories" },
                { number: "Global", label: "Market Reach" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-lg">
                    {stat.label}
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
