import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const PartnersSection = () => {
  const { ref, controls } = useScrollAnimation();

  const partners = [
    {
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      category: 'Tech Giant',
      description: 'Cloud & AI Solutions'
    },
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
      category: 'Enterprise',
      description: 'Azure & Development'
    },
    {
      name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      category: 'Cloud Services',
      description: 'AWS & E-commerce'
    },
    {
      name: 'Meta',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
      category: 'Social Media',
      description: 'React & VR/AR'
    },
    {
      name: 'Netflix',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      category: 'Streaming',
      description: 'Data Science & ML'
    },
    {
      name: 'Spotify',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
      category: 'Music Tech',
      description: 'Audio & Algorithms'
    },
    {
      name: 'Uber',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png',
      category: 'Mobility',
      description: 'Real-time Systems'
    },
    {
      name: 'Airbnb',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg',
      category: 'Travel Tech',
      description: 'Platform Engineering'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-purple-600/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-pink-600/15 rounded-full blur-3xl"></div>
        {/* Additional background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e5e7eb%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-8 shadow-sm"
          >
            🤝 Trusted by Industry Leaders
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
          >
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Industry Partners</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            We collaborate with leading tech companies to ensure our curriculum stays current and our students get the best opportunities in the industry.
          </motion.p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 text-center group-hover:shadow-2xl group-hover:border-blue-200 transition-all duration-300">
                <div className="h-16 flex items-center justify-center mb-6">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-12 max-w-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{partner.name}</h3>
                <p className="text-sm text-blue-600 font-semibold mb-2">{partner.category}</p>
                <p className="text-xs text-gray-500">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-100 shadow-xl"
        >
          {[
            { number: '500+', label: 'Partner Companies', icon: '🏢' },
            { number: '95%', label: 'Placement Rate', icon: '📈' },
            { number: '10K+', label: 'Students Placed', icon: '👥' },
            { number: '₹12L', label: 'Average Package', icon: '💰' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-3xl mb-4">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex flex-col sm:flex-row gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Partners
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Partner With Us
            </motion.button>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;