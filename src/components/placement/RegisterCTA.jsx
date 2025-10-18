import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Calendar, 
  Phone,
  Mail,
  MessageCircle,
  Gift,
  Clock,
  Award,
  Target,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';

const RegisterCTA = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const benefits = [
    {
      icon: Target,
      title: "95% Placement Rate",
      description: "Join thousands of successful graduates"
    },
    {
      icon: TrendingUp,
      title: "180% Salary Hike",
      description: "Average increase from previous role"
    },
    {
      icon: Users,
      title: "200+ Partner Companies",
      description: "Access to top-tier employers"
    },
    {
      icon: Award,
      title: "Industry Certification",
      description: "Recognized credentials"
    },
    {
      icon: Shield,
      title: "Job Guarantee",
      description: "100% money-back if not placed"
    },
    {
      icon: Clock,
      title: "Lifetime Support",
      description: "Career guidance beyond placement"
    }
  ];

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '₹49,999',
      originalPrice: '₹69,999',
      duration: '6 months',
      popular: false,
      features: [
        'Core curriculum access',
        'Basic placement support',
        'Resume building',
        'Interview preparation',
        'Job application assistance',
        '3 months post-placement support'
      ],
      color: 'blue'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '₹79,999',
      originalPrice: '₹99,999',
      duration: '8 months',
      popular: true,
      features: [
        'Everything in Basic',
        'Advanced skill modules',
        'Personal mentor assignment',
        'Mock interview sessions',
        'Portfolio development',
        'Priority job placement',
        '6 months post-placement support',
        'Industry networking events'
      ],
      color: 'purple'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '₹1,29,999',
      originalPrice: '₹1,49,999',
      duration: '12 months',
      popular: false,
      features: [
        'Everything in Premium',
        'One-on-one coaching',
        'Custom learning path',
        'Direct company introductions',
        'Salary negotiation support',
        'Leadership training',
        '12 months post-placement support',
        'Executive placement assistance'
      ],
      color: 'gold'
    }
  ];

  const urgencyFeatures = [
    { text: "Limited seats available", icon: Users },
    { text: "Early bird discount expires soon", icon: Clock },
    { text: "Next batch starts in 7 days", icon: Calendar },
    { text: "Free career counseling session", icon: Gift }
  ];

  const testimonialStats = [
    { value: "4.9/5", label: "Student Rating" },
    { value: "2,500+", label: "Success Stories" },
    { value: "₹45L", label: "Highest Package" },
    { value: "19 weeks", label: "Avg. Placement Time" }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getPlanColorClasses = (color, isSelected) => {
    const colorMap = {
      blue: isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white/80',
      purple: isSelected ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white/80',
      gold: isSelected ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200 bg-white/80'
    };
    return colorMap[color] || 'border-gray-200 bg-white/80';
  };

  const getPlanButtonClasses = (color) => {
    const colorMap = {
      blue: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      purple: 'bg-gradient-to-r from-purple-500 to-pink-500',
      gold: 'bg-gradient-to-r from-yellow-500 to-orange-500'
    };
    return colorMap[color] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* Header */}
      <motion.div variants={cardVariants} className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-4"
        >
          🚀 Limited Time Offer - 30% Off
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Transform Your Career Today
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join our proven placement program and land your dream job in just 19 weeks. 
          Don't let this opportunity slip away!
        </p>
      </motion.div>

      {/* Urgency Banner */}
      <motion.div variants={cardVariants}>
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-6 text-white">
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold mb-2">⏰ Hurry! Limited Time Offer</h3>
            <p className="text-red-100">This exclusive discount expires in:</p>
          </div>
          
          {/* Countdown Timer */}
          <div className="flex justify-center space-x-4 mb-6">
            {['02', '15', '30', '45'].map((time, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                  <div className="text-2xl font-bold">{time}</div>
                </div>
                <div className="text-xs mt-1 text-red-100">
                  {['Days', 'Hours', 'Mins', 'Secs'][index]}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {urgencyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <IconComponent className="w-4 h-4 text-red-200" />
                  <span className="text-red-100">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Benefits Grid */}
      <motion.div variants={cardVariants}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center"
              >
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Pricing Plans */}
      <motion.div variants={cardVariants}>
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Success Plan
          </h3>
          <p className="text-gray-600 text-lg">
            Select the plan that best fits your career goals and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative cursor-pointer rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${getPlanColorClasses(plan.color, selectedPlan === plan.id)} backdrop-blur-sm`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h4>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-lg text-gray-500 line-through ml-2">{plan.originalPrice}</span>
                </div>
                <div className="text-gray-600">{plan.duration} program</div>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full ${getPlanButtonClasses(plan.color)} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200`}
              >
                Choose {plan.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div variants={cardVariants}>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Join Our Success Community</h3>
            <p className="text-purple-100 text-lg">
              Thousands of students have already transformed their careers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {testimonialStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Options */}
      <motion.div variants={cardVariants}>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing? Talk to Our Experts
            </h3>
            <p className="text-gray-600">
              Get personalized guidance from our career counselors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-3 bg-green-500 text-white p-4 rounded-xl hover:bg-green-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">Call Now</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-3 bg-blue-500 text-white p-4 rounded-xl hover:bg-blue-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Live Chat</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-3 bg-purple-500 text-white p-4 rounded-xl hover:bg-purple-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email Us</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div variants={cardVariants}>
        <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
          <Zap className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
          <h3 className="text-4xl font-bold mb-4">
            Your Dream Career Awaits
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait another day to start your transformation. Join thousands of successful 
            graduates who took the leap and changed their lives forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Register Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              Book Free Demo
            </motion.button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>✅ No hidden fees • ✅ 100% job guarantee • ✅ EMI options available</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RegisterCTA;