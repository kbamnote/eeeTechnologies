import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, Clock, Mail } from 'lucide-react';

const MapEmbed = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      id: 1,
      name: "Main Campus - Nagpur",
      address: "1st Floor Mohota Complex, Above State Bank Of India, Katol Road, Chhaoni Rd, Nagpur, Maharashtra, 440013",
      phone: "+91 9503182807 / 9146882409",
      email: "info@eeetechnologies.in",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      coordinates: { lat: 21.1458, lng: 79.0882 },
      description: "Our flagship campus with state-of-the-art facilities and labs."
    },
    {
      id: 2,
      name: "Online Learning Center",
      address: "Virtual Campus - Accessible Worldwide",
      phone: "+91 9503182807 / 9146882409",
      email: "online@eeeTechnologies.com",
      hours: "24/7 Support Available",
      coordinates: null,
      description: "Join our global community of learners from anywhere."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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

  const cardVariants = {
    inactive: { scale: 1, opacity: 0.8 },
    active: { scale: 1.02, opacity: 1 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
    >
      <motion.div variants={itemVariants} className="mb-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <MapPin className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Our Locations
        </h2>
        <p className="text-gray-600">
          Visit us at any of our convenient locations or join our online community.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-1 gap-8">
        {/* Map Section */}
        <motion.div variants={itemVariants} className="order-2 lg:order-1">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 h-80 flex items-center justify-center relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-20 h-20 bg-blue-400 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-purple-400 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-400 rounded-full"></div>
            </div>
            
            {/* Map placeholder with interactive elements */}
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Navigation className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Interactive Map
              </h3>
              <p className="text-gray-600 mb-4">
                {locations[activeLocation].name}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Get Directions
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Locations List */}
        <motion.div variants={itemVariants} className="order-1 lg:order-2 space-y-4">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              variants={cardVariants}
              animate={activeLocation === index ? "active" : "inactive"}
              onClick={() => setActiveLocation(index)}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                activeLocation === index
                  ? 'border-blue-500 bg-blue-50/50 shadow-lg'
                  : 'border-gray-200 bg-white/50 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  activeLocation === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {location.coordinates ? (
                    <MapPin className="w-6 h-6" />
                  ) : (
                    <Navigation className="w-6 h-6" />
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {location.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {location.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {location.address}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      {location.phone}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      {location.email}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      {location.hours}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Additional Info */}
      <motion.div
        variants={itemVariants}
        className="mt-8 pt-6 border-t border-gray-200 text-center"
      >
        <p className="text-gray-600 mb-4">
          Can't visit in person? No problem! We offer comprehensive online courses with the same quality education.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg"
          >
            Schedule a Visit
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-medium"
          >
            Virtual Tour
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MapEmbed;