import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Award, Zap, CheckCircle, Phone, Mail } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const CallToAction = () => {
  const { ref, controls } = useScrollAnimation();
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: Star,
      title: 'Expert Mentorship',
      description: 'Learn from industry professionals with 10+ years experience'
    },
    {
      icon: Users,
      title: 'Live Projects',
      description: 'Work on real-world projects with actual client requirements'
    },
    {
      icon: Award,
      title: 'Placement Support',
      description: '100% placement assistance with top tech companies'
    },
    {
      icon: Zap,
      title: 'Fast Track Learning',
      description: 'Accelerated curriculum designed for quick skill acquisition'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Students Trained' },
    { number: '95%', label: 'Placement Rate' },
    { number: '500+', label: 'Hiring Partners' },
    { number: '₹12L', label: 'Average Package' }
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
    <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-600/30 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full text-yellow-300 text-sm font-medium mb-6"
          >
            🚀 Transform Your Career Today
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Ready to Launch Your
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Tech Career?
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-12"
          >
            Join thousands of successful professionals who've transformed their careers with our industry-leading training programs. Start your journey today!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl font-bold text-lg shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Learning Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Book Free Consultation
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center group-hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl text-black mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-100 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-blue-100 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold">Limited Time Offer</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Get 30% Off on All Courses
            </h3>
            <p className="text-blue-100 mb-6">
              Enroll now and save big on our premium training programs. Offer valid until the end of this month!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl font-semibold shadow-lg"
              >
                Claim Discount Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Get Course Details
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;