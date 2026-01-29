import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactCards = () => {
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

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Get in{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Have questions about our courses? Need support? Want to discuss custom training solutions? 
            We're here to help you on your learning journey.
          </motion.p>

          {/* Quick Contact Info Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCards;