import React from 'react';
import { motion } from 'framer-motion';
import { X, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 9503182807 / 9146882409',
      subInfo: 'Mon-Fri 9AM-6PM',
      color: 'from-blue-500 to-blue-600',
      action: () => window.open('tel:+919503182807')
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'info@eeetechnologies.in',
      subInfo: 'We reply within 24 hours',
      color: 'from-purple-500 to-purple-600',
      action: () => window.open('mailto:info@eeetechnologies.in')
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '1st Floor Mohota Complex, Above State Bank Of India',
      subInfo: 'Katol Road, Chhaoni Rd, Nagpur, Maharashtra, 440013',
      color: 'from-green-500 to-green-600',
      action: () => window.open('https://maps.google.com/?q=1st+Floor+Mohota+Complex,+Above+State+Bank+Of+India,+Katol+Road,+Chhaoni+Rd,+Nagpur,+Maharashtra,+440013')
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.5, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center hover:shadow-lg shadow-red-500/30 transition-all border-2 border-white z-10"
        >
          <X className="w-5 h-5 text-white" />
        </motion.button>

        {/* Header */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600"
          >
            Ready to start your tech journey? Contact us today!
          </motion.p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 3) }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all duration-300 ${
                  item.action ? 'cursor-pointer' : ''
                }`}
                onClick={item.action}
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-3`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h3>
                <p className="text-gray-700 font-medium text-sm leading-tight">{item.info}</p>
                <p className="text-xs text-gray-500 mt-1">{item.subInfo}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/contact"
            onClick={onClose}
            className="flex-1"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-semibold shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Visit Contact Page</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open('tel:+919503182807')}
            className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;