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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="space-y-20"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-5 py-2.5 bg-blue-100 border border-blue-300 rounded-full text-blue-700 text-sm font-semibold mb-6">
              <Target className="w-4 h-4 mr-2" />
              Our Foundation
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Our
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
                Mission & Vision
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Driving the future of technology education through innovation, excellence, and unwavering commitment to student success.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <motion.div variants={itemVariants} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 overflow-hidden hover:shadow-3xl hover:border-gray-300 transition-all duration-500 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  To bridge the gap between academic learning and industry requirements by providing world-class technical education that prepares students for successful careers in technology.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Practical, hands-on learning approach</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Industry-aligned curriculum</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Comprehensive career support</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div variants={itemVariants} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 overflow-hidden hover:shadow-3xl hover:border-gray-300 transition-all duration-500 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  To become the global leader in technology education, empowering millions of students worldwide to build successful careers and drive innovation in the digital age.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Global accessibility to quality education</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    <span>Continuous innovation in learning</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto h-full">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group h-full"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 overflow-hidden hover:shadow-3xl hover:border-gray-300 transition-all duration-500 shadow-lg h-full flex flex-col">
                    <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {value.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed text-center flex-grow">
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