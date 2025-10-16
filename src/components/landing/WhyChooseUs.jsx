import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Shield, 
  Clock, 
  Star, 
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Heart
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { ref, controls } = useScrollAnimation();

  const features = [
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning training programs recognized by top tech companies worldwide.",
      stats: "50+ Awards",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with 10+ years of real-world experience.",
      stats: "100+ Experts",
      color: "from-blue-400 to-purple-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Updated curriculum covering latest technologies and industry best practices.",
      stats: "200+ Modules",
      color: "from-green-400 to-teal-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: TrendingUp,
      title: "High Success Rate",
      description: "95% of our students successfully transition to their dream tech careers.",
      stats: "95% Success",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: Shield,
      title: "Lifetime Support",
      description: "Continuous mentorship and career guidance even after course completion.",
      stats: "24/7 Support",
      color: "from-red-400 to-rose-500",
      bgColor: "bg-red-50 dark:bg-red-900/20"
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Self-paced learning with live sessions and recorded content access.",
      stats: "Anytime Access",
      color: "from-indigo-400 to-blue-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
    }
  ];

  const achievements = [
    { number: "10K+", label: "Students Trained", icon: Users },
    { number: "95%", label: "Placement Rate", icon: TrendingUp },
    { number: "500+", label: "Partner Companies", icon: Target },
    { number: "15+", label: "Years Experience", icon: Award }
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const achievementVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-20 max-w-7xl mx-auto"
        >
          <motion.div
            variants={cardVariants}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm"
          >
            <Star className="w-4 h-4" />
            Why Choose eee Technologies
          </motion.div>
          
          <motion.h2 
            variants={cardVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
          >
            Your Success is Our
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Priority</span>
          </motion.h2>
          
          <motion.p 
            variants={cardVariants}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Join thousands of successful professionals who transformed their careers with our 
            industry-leading training programs and comprehensive support system.
          </motion.p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-7xl mx-auto"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={achievementVariants}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200 group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-semibold">
                  {achievement.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group cursor-pointer"
            >
              <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 overflow-hidden group-hover:-translate-y-2 ${feature.bgColor}`}>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Floating Icon Background */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-10 group-hover:scale-110 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white opacity-90 shadow-md`}>
                        {feature.stats}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Hover Action */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: hoveredCard === index ? 1 : 0,
                        x: hoveredCard === index ? 0 : -20
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 text-blue-600 font-medium"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.div>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-red-300" />
                <span className="text-lg font-medium">Ready to Transform Your Career?</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our Success Community Today
              </h3>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Take the first step towards your dream career with our proven training methodology
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 justify-center shadow-lg"
                >
                  <Zap className="w-5 h-5" />
                  Start Your Journey
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  <CheckCircle className="w-5 h-5" />
                  View Success Stories
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;