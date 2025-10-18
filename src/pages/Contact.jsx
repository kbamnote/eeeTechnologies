import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import FAQAccordion from '../components/contact/FAQAccordion';
import MapEmbed from '../components/contact/MapEmbed';
import SocialLinks from '../components/contact/SocialLinks';
import SupportCTA from '../components/contact/SupportCTA';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const quickContactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      subInfo: 'Mon-Fri 9AM-6PM',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'info@eeeTechnologies.com',
      subInfo: 'We reply within 24 hours',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '123 Innovation Drive',
      subInfo: 'Tech City, TC 12345',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      info: 'Mon-Fri: 9AM-6PM',
      subInfo: 'Sat: 10AM-4PM',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Get in{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Have questions about our courses? Need support? Want to discuss custom training solutions? 
                We're here to help you on your learning journey.
              </p>
            </motion.div>

            {/* Quick Contact Info */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {quickContactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 font-medium">{item.info}</p>
                    <p className="text-sm text-gray-500">{item.subInfo}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Contact Form and Map Section */}
          <motion.section variants={itemVariants} className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <ContactForm />
              </div>
              <div>
                <MapEmbed />
              </div>
            </div>
          </motion.section>

          {/* Support CTA Section */}
          <motion.section variants={itemVariants} className="mb-20">
            <SupportCTA />
          </motion.section>

          {/* FAQ Section */}
          <motion.section variants={itemVariants} className="mb-20">
            <FAQAccordion />
          </motion.section>

          {/* Social Links Section */}
          <motion.section variants={itemVariants} className="mb-20">
            <SocialLinks />
          </motion.section>

          {/* Final CTA Section */}
          <motion.section variants={itemVariants}>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Join thousands of students who have transformed their careers with our expert-led courses. 
                  Your success story starts here.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-50 transition-all duration-200 font-semibold shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Browse Courses</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-200 font-semibold"
                  >
                    Schedule Consultation
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
