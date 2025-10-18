import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Lightbulb, Users, Award, Rocket, Globe } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const MissionVision = () => {
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const values = [
    {
      icon: Heart,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from curriculum design to student support.",
      color: "from-red-400 to-rose-500"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive community where students and professionals grow together.",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing cutting-edge technologies and innovative teaching methodologies.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Globe,
      title: "Impact",
      description: "Creating positive impact in the tech industry through skilled professionals.",
      color: "from-green-400 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-8"
            >
              <Target className="w-4 h-4 mr-2 text-purple-600" />
              Our Foundation
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Mission & Vision</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving the future of technology education through innovation, excellence, and unwavering commitment to student success.
            </p>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div variants={itemVariants} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 group-hover:border-purple-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To bridge the gap between academic learning and industry requirements by providing world-class technical education that prepares students for successful careers in technology.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Practical, hands-on learning approach</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    <span>Industry-aligned curriculum</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Comprehensive career support</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div variants={itemVariants} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 group-hover:border-purple-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To become the global leader in technology education, empowering millions of students worldwide to build successful careers and drive innovation in the digital age.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Global accessibility to quality education</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Continuous innovation in learning</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Sustainable career transformation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group cursor-pointer"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:border-purple-300">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;