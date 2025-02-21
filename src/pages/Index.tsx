
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Stethoscope, ShieldCheck, Globe, Award } from "lucide-react";

const Index = () => {
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
