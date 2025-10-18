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

const JoinCTA = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
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
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Expert Mentors",
      description: "Learn from industry professionals with 10+ years of experience",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Target,
      title: "100% Placement",
      description: "Guaranteed job placement with our extensive industry network",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Rocket,
      title: "Career Growth",
      description: "Fast-track your career with cutting-edge skills and knowledge",
      color: "from-purple-500 to-pink-600"
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
      action: "+1 (555) 123-4567",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Get detailed information",
      action: "info@eeeTechnologies.com",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Calendar,
      title: "Book Demo",
      description: "Schedule a free demo class",
      action: "Book Now",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Main CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-blue-700 font-semibold">Join 20,000+ Successful Students</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Career?
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join eee Technologies today and embark on a journey that will transform your career. 
              With our proven track record and industry expertise, your success is guaranteed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <motion.button
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                className="group bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg border border-gray-200 hover:bg-white hover:border-gray-300 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-6 h-6 mr-2" />
                Book Free Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 hover:bg-white hover:border-gray-300 transition-all duration-500 group cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${reason.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits Section */}
          <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What You'll Get
              </h3>
              <p className="text-xl text-gray-600">
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
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started Today
            </h3>
            <p className="text-xl text-gray-600 mb-12">
              Choose your preferred way to connect with us
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:bg-white hover:border-gray-300 transition-all duration-500 group cursor-pointer"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {method.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {method.description}
                  </p>
                  <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                    {method.action}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-200">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Future Starts Here
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Don't wait for the perfect moment. The perfect moment is now. 
                Join thousands of students who have already transformed their careers with us.
              </p>
              
              <motion.button
                className="group bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Enroll Now - Limited Seats!
                <Rocket className="w-6 h-6 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCTA;