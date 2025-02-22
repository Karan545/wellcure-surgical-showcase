
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Stethoscope, ShieldCheck, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Quality Equipment",
      description: "Premium medical and surgical instruments for healthcare professionals"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Certified Products",
      description: "All products meet international quality and safety standards"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Exports",
      description: "Serving healthcare institutions worldwide"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Support",
      description: "Dedicated customer service and technical assistance"
    }
  ];

  const productCategories = [
    {
      title: "Urological Instruments",
      image: "https://plus.unsplash.com/premium_photo-1661766752153-9f0c3fcc0946?auto=format&fit=crop&q=80",
      description: "State-of-the-art urological surgical instruments, diagnostic equipment, and treatment solutions for comprehensive urological care.",
      link: "/urological-instruments"
    },
    {
      title: "Gastroenterology Equipment",
      image: "https://images.unsplash.com/photo-1631217862332-090e298eff2b?auto=format&fit=crop&q=80",
      description: "Advanced endoscopic systems and specialized tools for precise gastrointestinal procedures and diagnostics.",
      link: "/gastroenterology"
    },
    {
      title: "Surgical Dressings",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80",
      description: "Premium wound care solutions, including advanced dressings, bandages, and post-operative care products.",
      link: "/surgical-dressings"
    },
    {
      title: "Anaesthesia Systems",
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80",
      description: "Modern anaesthesia delivery units, patient monitoring systems, and critical care equipment for surgical procedures.",
      link: "/anaesthesia-systems"
    },
    {
      title: "Blood Management Solutions",
      image: "https://images.unsplash.com/photo-1579154341184-22069e4614d2?auto=format&fit=crop&q=80",
      description: "Comprehensive blood collection systems, storage solutions, and transfusion management equipment.",
      link: "/blood-management"
    },
    {
      title: "Medical Gloves Division",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80",
      description: "High-quality surgical, examination, and specialized protective gloves designed for optimal safety and comfort in medical procedures.",
      link: "/medical-gloves"
    }
  ];

  const handleCategoryClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Wellcure Surgicals?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience excellence in medical equipment with our comprehensive range of products and services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-medical-500 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Product Categories
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our comprehensive range of high-quality medical equipment and supplies, designed to meet the diverse needs of healthcare professionals worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => handleCategoryClick(category.link)}
                >
                  <div className="aspect-w-16 aspect-h-12 relative">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="object-cover w-full h-[300px] transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-semibold mb-3">{category.title}</h3>
                    <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {category.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategoryClick(category.link);
                      }}
                    >
                      View Products
                    </Button>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
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

export default Index;
