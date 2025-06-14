import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
import SocialMedia from "@/components/SocialMedia";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Stethoscope, ShieldCheck, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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
      image: "https://live.staticflickr.com/3873/14377885496_070d90627c_z.jpg?auto=format&fit=crop&q=80",
      description: "State-of-the-art urological surgical instruments, diagnostic equipment, and treatment solutions for comprehensive urological care.",
      link: "/urological-instruments"
    },
    {
      title: "Gastroenterology Equipment",
      image: "https://cdn.pixabay.com/photo/2015/05/17/01/12/hands-770461_1280.jpg?auto=format&fit=crop&q=80",
      description: "Advanced endoscopic systems and specialized tools for precise gastrointestinal procedures and diagnostics.",
      link: "/gastroenterology"
    },
    {
      title: "Infusion Therapy",
      image: "https://cdn.pixabay.com/photo/2015/07/07/09/52/hospital-834152_1280.jpg?auto=format&fit=crop&q=80",
      description: "Complete range of infusion systems, IV cannulas, and administration sets designed for safe and accurate fluid delivery and medication administration.",
      link: "/infusion-therapy"
    },
    {
      title: "Surgery & Wound Drainage",
      image: "https://cdn.pixabay.com/photo/2017/12/21/10/52/surgery-3031541_1280.jpg?auto=format&fit=crop&q=80",
      description: "Comprehensive selection of surgical drains, collection systems, and management solutions for effective post-operative wound care.",
      link: "/surgery-wound-drainage"
    },
    {
      title: "Wound Care & Ortho Range",
      image: "https://cdn.pixabay.com/photo/2018/07/12/01/18/injury-3532338_1280.jpg?auto=format&fit=crop&q=80",
      description: "Comprehensive solutions for wound management and orthopedic support, including advanced dressings, braces, supports, and rehabilitation equipment.",
      link: "/wound-care-ortho"
    },
    {
      title: "Anaesthesia Systems",
      image: "https://cdn.pixabay.com/photo/2023/08/30/15/42/ai-generated-8223597_1280.jpg?auto=format&fit=crop&q=80",
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
      image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80",
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

        <section id="products" className="py-20 bg-white">
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

        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get in touch with our expert team to discuss your medical equipment needs. We're here to provide professional guidance and support for all your requirements.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                    placeholder="Please describe your requirements..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-medical-500 hover:bg-medical-600 text-white py-3 rounded-md transition-colors"
                >
                  Send Message
                </Button>
              </motion.form>
            </div>
          </div>
        </section>

        <SocialMedia />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
