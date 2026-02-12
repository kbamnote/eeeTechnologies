import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Award, Clock, CheckCircle } from 'lucide-react';
import EnrollmentModal from './EnrollmentModal';

const EnrollBanner = () => {
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
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
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#06B6D4]/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
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
          <div className="bg-[#F8FAFC]/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#F8FAFC] overflow-hidden mb-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center px-5 py-2.5 bg-[#3B82F6]/20 border border-[#3B82F6]/30 rounded-full text-[#3B82F6] text-sm font-semibold mb-6">
                  <Award className="w-4 h-4 mr-2" />
                  Limited Time Offer
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold text-[#1F2937] mb-6 tracking-tight">
                  Start Your
                  <span className="block bg-[#3B82F6] bg-clip-text text-transparent mt-2"> Tech Journey</span>
                  Today!
                </h2>
                
                <p className="text-lg text-[#1F2937] mb-8 leading-relaxed">
                  Join thousands of successful students who have transformed their careers with our comprehensive courses. Get industry-ready skills and land your dream job.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsEnrollmentModalOpen(true)}
                    className="bg-gradient-to-r from-[#0A2540] to-[#3B82F6] text-white font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-[#3B82F6]/25 transition-all duration-200 flex items-center justify-center group"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                  
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#1F2937] font-semibold px-8 py-4 rounded-2xl border border-[#3B82F6]/30 hover:bg-[#F8FAFC] transition-all duration-200"
                  >
                    View Courses
                  </motion.button> */}
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      variants={itemVariants}
                      className="flex items-center text-[#1F2937]"
                    >
                      <CheckCircle className="w-5 h-5 text-[#06B6D4] mr-3 flex-shrink-0" />
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
                      className="bg-[#0A2540] backdrop-blur-sm p-6 rounded-2xl text-center border border-[#0A2540] hover:border-[#3B82F6] transition-all duration-300 shadow-lg"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-sm text-[#3B82F6]">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Special Offer Banner */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-[#0A2540] to-[#3B82F6] text-white rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-5 py-2.5 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full text-[#3B82F6] text-sm font-semibold mb-4">
                <Clock className="w-4 h-4 mr-2" />
                Limited Time Offer
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Get <span className="text-[#06B6D4]">25% OFF</span> on All Courses
              </h3>
              
              <p className="text-lg text-[#f7f7f7] mb-6 max-w-2xl mx-auto">
                Don't miss this opportunity to upskill at an unbeatable price. Offer valid for the next 7 days only!
              </p>
              
              <div className="flex items-center justify-center gap-4 text-sm text-[#f9f9f9] mb-6">
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
                className="bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] text-white font-semibold px-8 py-3 rounded-2xl shadow-2xl hover:shadow-[#06B6D4]/25 transition-all duration-200 inline-flex items-center"
              >
                <span>Claim Discount</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal 
        isOpen={isEnrollmentModalOpen} 
        onClose={() => setIsEnrollmentModalOpen(false)} 
        courseName="Featured Course"
        onSubmit={(formData) => {
          console.log('Enrollment form submitted with data:', formData);
          // Handle form submission here
        }}
      />
    </section>
  );
};

export default EnrollBanner;