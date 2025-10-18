import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Award, Clock, CheckCircle } from 'lucide-react';

const EnrollBanner = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Students Enrolled" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Award, value: "95%", label: "Job Placement" },
    { icon: Clock, value: "24/7", label: "Support Available" }
  ];

  const benefits = [
    "Industry-relevant curriculum",
    "Expert instructors",
    "Hands-on projects",
    "Job placement assistance",
    "Lifetime access",
    "Certificate of completion"
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Main CTA Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-6">
                  <Award className="w-4 h-4 mr-2" />
                  Limited Time Offer
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Start Your
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Tech Journey</span>
                  <br />Today!
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Join thousands of successful students who have transformed their careers with our comprehensive courses. Get industry-ready skills and land your dream job.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center group"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/80 backdrop-blur-sm text-gray-700 font-semibold px-8 py-4 rounded-xl border border-gray-200 hover:bg-white hover:border-gray-300 transition-all duration-200"
                  >
                    View Courses
                  </motion.button>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      variants={itemVariants}
                      className="flex items-center text-gray-600"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Content - Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Special Offer Banner */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 md:p-8 border border-orange-200 text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              <Clock className="w-4 h-4 mr-2" />
              Limited Time Offer
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get <span className="text-orange-600">50% OFF</span> on All Courses
            </h3>
            
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Don't miss this opportunity to upskill at an unbeatable price. Offer valid for the next 7 days only!
            </p>
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>Ends in 7 days</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>500+ already enrolled</span>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-8 py-3 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 inline-flex items-center"
            >
              <span>Claim Discount</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnrollBanner;