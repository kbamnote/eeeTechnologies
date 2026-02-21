import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Award, Zap, CheckCircle, Phone, Mail } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useNavigate } from 'react-router-dom';
import ContactModal from '../common/ContactModal';
import EnrollmentModal from '../courses/EnrollmentModal';

const CallToAction = () => {
  const { ref, controls } = useScrollAnimation();
  const navigate = useNavigate();
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);

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
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2.5 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full text-[#3B82F6] text-sm font-semibold mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Transform Your Career Today
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F2937] mb-6 tracking-tight">
            Ready to Launch Your
            <span className="block text-[#3B82F6] mt-2">
              Tech Career?
            </span>
          </h2>

          <p className="text-lg text-[#1F2937] max-w-2xl mx-auto mb-8">
            Join thousands of successful professionals who've transformed their careers with our industry-leading training programs. Start your journey today!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsEnrollmentModalOpen(true)}
              className="group px-6 py-3 md:px-8 md:py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 justify-center"
            >
              Start Learning Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactModalOpen(true)}
              className="group px-6 py-3 md:px-8 md:py-4 border-2 border-[#3B82F6] text-[#1F2937] rounded-xl font-semibold hover:bg-[#3B82F6] hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <Phone className="w-5 h-5" />
              Book Free Consultation
            </motion.button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group h-full">
                  <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-500 shadow-lg flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-[#3B82F6] rounded-2xl flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#1F2937] mb-3 leading-snug">
                      {feature.title}
                    </h3>
                    {/* Description */}
                    <p className="text-[#4B5563] text-sm leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>


          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white backdrop-blur-xl border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:border-gray-300 transition-all duration-500 group-hover:-translate-y-2 shadow-lg">
                  <div className="w-16 h-16 bg-[#3B82F6] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#1F2937] mb-2 group-hover:text-[#3B82F6] transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-[#1F2937] text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="text-center"
          >
            {/* <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="text-green-300 font-semibold">Limited Time Offer</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Get 30% Off on All Courses
                </h3>
                
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                  Enroll now and save big on our premium training programs. Offer valid until the end of this month!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 md:px-8 md:py-4 bg-white text-purple-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 justify-center shadow-xl"
                  >
                    <Zap className="w-5 h-5" />
                    Claim Discount Now
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2 justify-center"
                  >
                    <Mail className="w-5 h-5" />
                    Get Course Details
                  </motion.button>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
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

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </section>
  );
};

export default CallToAction;