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
      info: '+91 9503182807 / 9146882409',
      subInfo: 'Mon-Fri 9AM-6PM',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'info@eeetechnologies.in',
      subInfo: 'We reply within 24 hours',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '1st Floor Mohota Complex, Above State Bank Of India',
      subInfo: 'Katol Road, Chhaoni Rd, Nagpur, Maharashtra, 440013',
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
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section
          className="
            relative
            min-h-[100vh]
            sm:min-h-screen
            flex
            items-center
            justify-center
            overflow-hidden
            pt-20
            pb-12
          "
        >
          {/* Background Layer */}
          <div className="absolute inset-0">
            {/* Responsive Background Image */}
            <div
              className="
                absolute inset-0
                bg-no-repeat
                bg-cover
                bg-[position:50%_30%]
                sm:bg-center
                md:bg-right
                lg:bg-center
              "
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop')",
              }}
            />

            {/* Backdrop Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

            {/* Animated Gradient Overlays */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-amber-500/20 to-transparent blur-3xl"
            />

            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/20 to-transparent blur-3xl"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-7xl mx-auto"
            >
              <div className="text-center max-w-4xl mx-auto">
                <motion.div
                  variants={itemVariants}
                  className="mb-8"
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Get in{' '}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Touch
                    </span>
                  </h1>
                  <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
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
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
                        <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/50 hover:border-amber-400/50 transition-all duration-300 h-full flex flex-col items-center text-center group-hover:shadow-2xl">
                          <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-amber-600 transition-colors duration-300">{item.title}</h3>
                          <p className="text-gray-800 font-semibold mb-2 text-base flex-grow">{item.info}</p>
                          <p className="text-sm text-gray-500 font-medium">{item.subInfo}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

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
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 text-center text-gray-900 relative overflow-hidden border border-gray-200 shadow-xl">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200/30 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of students who have transformed their careers with our expert-led courses. 
                  Your success story starts here.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-200 font-semibold shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Browse Courses</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-blue-500 text-gray-800 bg-white rounded-lg hover:bg-gray-50 transition-all duration-200 font-semibold shadow-lg"
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