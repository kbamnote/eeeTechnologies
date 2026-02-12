import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  BookOpen, 
  Phone, 
  Mail, 
  Calendar,
  CheckCircle,
  Rocket,
  Target,
  Heart,
  Zap,
  Globe
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import ContactModal from '../common/ContactModal';
import EnrollmentModal from '../courses/EnrollmentModal';

const JoinCTA = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
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

  const reasons = [
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Join an institute recognized by top tech companies worldwide",
      color: "from-[#0A2540] to-[#3B82F6]"
    },
    {
      icon: Users,
      title: "Expert Mentors",
      description: "Learn from industry professionals with 10+ years of experience",
      color: "from-[#3B82F6] to-[#06B6D4]"
    },
    {
      icon: Target,
      title: "100% Placement",
      description: "Guaranteed job placement with our extensive industry network",
      color: "from-[#06B6D4] to-[#3B82F6]"
    },
    {
      icon: Rocket,
      title: "Career Growth",
      description: "Fast-track your career with cutting-edge skills and knowledge",
      color: "from-[#0A2540] to-[#06B6D4]"
    }
  ];

  const benefits = [
    "Live interactive sessions with industry experts",
    "Hands-on projects with real-world applications",
    "24/7 doubt resolution and technical support",
    "Industry-recognized certifications",
    "Lifetime access to course materials",
    "Career guidance and interview preparation",
    "Alumni network of 20,000+ professionals",
    "Flexible learning schedules"
  ];

  const stats = [
    { number: "20K+", label: "Students Trained", icon: Users },
    { number: "95%", label: "Success Rate", icon: Star },
    { number: "500+", label: "Companies Hiring", icon: Award },
    { number: "15+", label: "Years Experience", icon: BookOpen }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our counselors",
      action: "+91 9503182807 / 9146882409",
      color: "from-[#06B6D4] to-[#3B82F6]"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Get detailed information",
      action: "info@eeetechnologies.in",
      color: "from-[#3B82F6] to-[#06B6D4]"
    },
    {
      icon: Calendar,
      title: "Book Demo",
      description: "Schedule a free demo class",
      action: "Book Now",
      color: "from-[#0A2540] to-[#3B82F6]"
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#06B6D4]/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Main CTA Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-5 py-2.5 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full text-[#3B82F6] text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              Join 20,000+ Successful Students
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-[#1F2937] mb-6 tracking-tight">
              Ready to Transform Your
              <span className="block text-[#3B82F6] mt-2">
                Career?
              </span>
            </h2>

            <p className="text-lg text-[#1F2937] max-w-2xl mx-auto mb-12 leading-relaxed">
              Join eee Technologies today and embark on a journey that will transform your career. 
              With our proven track record and industry expertise, your success is guaranteed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.button
                className="group bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-[#3B82F6]/25 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEnrollmentModalOpen(true)}
              >
                Start Your Journey
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                className="group bg-[#F8FAFC]/50 backdrop-blur-xl text-[#1F2937] px-8 py-4 rounded-2xl font-bold text-lg border border-[#3B82F6]/20 hover:bg-[#F8FAFC] hover:border-[#3B82F6]/30 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactModalOpen(true)}
              >
                <Calendar className="w-6 h-6 mr-2" />
                Book Free Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-[#F8FAFC]/50 backdrop-blur-xl border border-[#3B82F6]/20 rounded-2xl p-6 hover:shadow-2xl hover:border-[#3B82F6]/30 transition-all duration-500 group-hover:-translate-y-2">
                    <div className="w-14 h-14 bg-[#3B82F6] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-[#1F2937] mb-2 group-hover:text-[#3B82F6] transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-[#1F2937]/60 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-[#F8FAFC]/50 backdrop-blur-xl rounded-3xl p-6 border border-[#3B82F6]/20 overflow-hidden hover:shadow-3xl hover:border-[#3B82F6]/30 transition-all duration-500">
                  <div className={`w-14 h-14 bg-[#3B82F6] rounded-2xl flex items-center justify-center mb-4`}>
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-[#1F2937] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits Section */}
          <motion.div variants={itemVariants} className="bg-[#F8FAFC]/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-[#3B82F6]/20 overflow-hidden">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
                What You'll Get
              </h3>
              <p className="text-xl text-[#1F2937]/70">
                Comprehensive benefits designed for your success
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-[#3B82F6] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#1F2937]/80 group-hover:text-[#1F2937] transition-colors duration-300">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
              Get Started Today
            </h3>
            <p className="text-xl text-[#1F2937]/70 mb-12">
              Choose your preferred way to connect with us
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="group"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    if (method.title === "Call Us" || method.title === "Email Us") {
                      setIsContactModalOpen(true);
                    } else if (method.title === "Book Demo") {
                      // For demo booking, could redirect to contact page or open modal
                      setIsContactModalOpen(true);
                    }
                  }}
                >
                  <div className="bg-[#F8FAFC]/50 backdrop-blur-xl rounded-3xl p-8 border border-[#3B82F6]/20 overflow-hidden hover:shadow-3xl hover:border-[#3B82F6]/30 transition-all duration-500 cursor-pointer">
                    <div className={`w-14 h-14 bg-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-[#1F2937] mb-3">
                      {method.title}
                    </h4>
                    <p className="text-[#1F2937] mb-4">
                      {method.description}
                    </p>
                    <div className="text-[#3B82F6] font-semibold group-hover:text-[#2563EB] transition-colors duration-300">
                      {method.action}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 md:p-12 relative overflow-hidden border border-[#3B82F6]/20 shadow-lg">
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-4">
                    <div className="w-12 h-12 bg-[#3B82F6] rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-[#3B82F6] rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-[#3B82F6] rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
                  Your Future Starts Here
                </h3>
                <p className="text-lg text-[#1F2937] mb-8 max-w-2xl mx-auto">
                  Don't wait for the perfect moment. The perfect moment is now. 
                  Join thousands of students who have already transformed their careers with us.
                </p>
                
                <motion.button
                  className="group bg-[#3B82F6] hover:bg-[#2563EB] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-[#3B82F6]/25 transition-all duration-300 flex items-center justify-center mx-auto"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEnrollmentModalOpen(true)}
                >
                  Enroll Now - Limited Seats!
                  <Rocket className="w-6 h-6 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

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

export default JoinCTA;