import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Send, User, Mail, Phone, Building, MessageSquare } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show success toast with theme-matched styling
    toast({
      variant: "success",
      title: "Message Sent Successfully!",
      description: `Thank you for contacting Wellcure Surgicals, ${formData.firstName}! Our medical equipment specialists will review your inquiry and respond within 24 hours. We appreciate your interest in our healthcare solutions.`,
      className: "border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });

    setIsSubmitting(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-4 sm:space-y-6 bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg md:rounded-xl shadow-lg border border-gray-100"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <User className="w-4 h-4 text-[#003b5c]" />
            First Name*
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#003b5c] focus:border-[#003b5c] text-sm sm:text-base transition-colors"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <User className="w-4 h-4 text-[#003b5c]" />
            Last Name*
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#003b5c] focus:border-[#003b5c] text-sm sm:text-base transition-colors"
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
          <Mail className="w-4 h-4 text-[#003b5c]" />
          Email Address*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#003b5c] focus:border-[#003b5c] text-sm sm:text-base transition-colors"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#003b5c]" />
          Phone Number*
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#003b5c] focus:border-[#003b5c] text-sm sm:text-base transition-colors"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
          <Building className="w-4 h-4 text-[#003b5c]" />
          Company/Organization
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#003b5c] focus:border-[#003b5c] text-sm sm:text-base transition-colors"
          placeholder="Your hospital or organization name"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-[#003b5c]" />
          Message*
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={4}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#003b5c] focus:border-[#003b5c] text-sm sm:text-base transition-colors resize-vertical"
          placeholder="Please describe your medical equipment requirements, quantities needed, or any specific questions about our products..."
        />
      </div>

      <Button 
        type="submit"
        disabled={isSubmitting}
        className="w-full ocean-to-forest-gradient text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-md sm:rounded-lg transition-all text-sm sm:text-base font-medium hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Sending Message...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </div>
        )}
      </Button>

      <div className="text-center text-xs text-gray-500 mt-4">
        <p>By submitting this form, you agree to our privacy policy and terms of service.</p>
        <p className="mt-1">We typically respond within 24 hours during business days.</p>
      </div>
    </motion.form>
  );
};

export default ContactForm;