import React from 'react';
import { motion } from 'framer-motion';
import { 
  Headphones, 
  MessageSquare, 
  Video, 
  BookOpen, 
  Clock, 
  Users,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const SupportCTA = () => {
  const supportOptions = [
    {
      title: 'Live Chat Support',
      description: 'Get instant help from our support team',
      icon: MessageSquare,
      availability: '24/7 Available',
      responseTime: 'Avg. 2 min response',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      action: 'Start Chat'
    },
    {
      title: 'Video Call Support',
      description: 'Schedule a one-on-one video session',
      icon: Video,
      availability: 'Mon-Fri 9AM-6PM',
      responseTime: 'Same day booking',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      action: 'Book Call'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Headphones,
      availability: 'Mon-Sat 8AM-8PM',
      responseTime: 'Immediate assistance',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      action: 'Call Now'
    },
    {
      title: 'Knowledge Base',
      description: 'Browse our comprehensive help articles',
      icon: BookOpen,
      availability: 'Always Available',
      responseTime: 'Self-service',
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700',
      action: 'Browse Articles'
    }
  ];

  const supportStats = [
    { label: 'Average Response Time', value: '< 2 minutes', icon: Clock },
    { label: 'Customer Satisfaction', value: '98.5%', icon: Star },
    { label: 'Support Agents', value: '50+ Experts', icon: Users },
    { label: 'Issues Resolved', value: '99.2%', icon: CheckCircle }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: 1.03,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Headphones className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Need Help? We're Here for You
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our dedicated support team is ready to assist you with any questions or concerns. 
          Choose the support option that works best for you.
        </p>
      </motion.div>

      {/* Support Options */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <motion.div
                key={option.title}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white/70 rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg group cursor-pointer"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{option.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{option.description}</p>
                    <div className="space-y-1">
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {option.availability}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {option.responseTime}
                      </div>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 bg-gradient-to-r ${option.color} ${option.hoverColor} text-white rounded-lg transition-all duration-200 font-medium flex items-center justify-center space-x-2 shadow-md`}
                >
                  <span>{option.action}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Support Stats */}
      <motion.div variants={itemVariants} className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          Why Choose Our Support?
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {supportStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Emergency Support */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-100"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Emergency Support
            </h3>
            <p className="text-gray-600 mb-4">
              For urgent technical issues or account problems that need immediate attention.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-2" />
              Available 24/7 for critical issues
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium shadow-lg"
          >
            Emergency Contact
          </motion.button>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        variants={itemVariants}
        className="mt-8 pt-6 border-t border-gray-200 text-center"
      >
        <p className="text-gray-600 mb-6">
          Still can't find what you're looking for? Our team is always ready to help you succeed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg"
          >
            Contact Support Team
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-medium"
          >
            Browse Help Center
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SupportCTA;