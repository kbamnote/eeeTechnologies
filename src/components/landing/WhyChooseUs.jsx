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
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-5 py-2.5 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full text-[#3B82F6] text-sm font-semibold mb-4">
            <Star className="w-4 h-4 mr-2" />
            Why Choose eee Technologies
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-[#1F2937] mb-4 tracking-tight">
            Your Success is Our <span className="text-[#3B82F6]">Priority</span>
          </h2>

          <p className="text-lg text-[#1F2937] max-w-2xl mx-auto">
            Join thousands of successful professionals who transformed their careers with our industry-leading training programs and comprehensive support system.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white backdrop-blur-xl border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:border-gray-300 transition-all duration-500 group-hover:-translate-y-2 shadow-lg">
                <div className="w-14 h-14 bg-[#3B82F6] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <achievement.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl font-bold text-[#1F2937] mb-2 group-hover:text-[#3B82F6] transition-colors">
                  {achievement.number}
                </div>
                <div className="text-[#1F2937] text-sm font-medium">
                  {achievement.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div key={index} className="group flex flex-col h-full">
              <div className={`bg-white backdrop-blur-xl rounded-3xl p-8 border border-gray-200 overflow-hidden hover:shadow-3xl hover:border-gray-300 transition-all duration-500 shadow-lg flex flex-col h-full`}>
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6 flex-shrink-0">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white`}>
                      {feature.stats}
                    </span>
                  </div>
                </div>
                        
                {/* Description */}
                <p className="text-gray-700 text-base leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          className="text-center"
        >
          {/* <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-red-300" />
                <span className="text-lg font-medium">Ready to Transform Your Career?</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join Our Success Community Today
              </h3>
              
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Take the first step towards your dream career with our proven training methodology
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 justify-center shadow-xl"
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
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;