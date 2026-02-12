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
import { useNavigate } from 'react-router-dom';
import EnrollmentModal from '../../components/courses/EnrollmentModal';

const RegisterCTA = ({ onEnrollClick }) => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);

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
      color: 'navy'
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
    // Styling simplified to theme colors
    return isSelected ? 'border-[#3B82F6] bg-[#3B82F6]/5' : 'border-gray-200 bg-white/80';
  };

  const getPlanButtonClasses = (color) => {
    return 'bg-gradient-to-r from-[#0A2540] to-[#3B82F6]';
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
          className="inline-block bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white px-6 py-2 rounded-full text-sm font-medium mb-4"
        >
          🚀 Limited Time Offer - 30% Off
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
          Transform Your Career Today
        </h2>
        <p className="text-xl text-[#1F2937]/70 max-w-3xl mx-auto">
          Join our proven placement program and land your dream job in just 19 weeks. 
          Don't let this opportunity slip away!
        </p>
      </motion.div>

      {/* Urgency Banner */}
      <motion.div variants={cardVariants}>
        <div className="bg-gradient-to-r from-[#0A2540] to-[#3B82F6] rounded-2xl p-6 text-white">
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold mb-2">⏰ Hurry! Limited Time Offer</h3>
            <p className="text-[#F8FAFC]/90">This exclusive discount expires in:</p>
          </div>
          
          {/* Countdown Timer */}
          <div className="flex justify-center space-x-4 mb-6">
            {['02', '15', '30', '45'].map((time, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[60px] border border-white/20">
                  <div className="text-2xl font-bold">{time}</div>
                </div>
                <div className="text-xs mt-1 text-[#F8FAFC]/80">
                  {['Days', 'Hours', 'Mins', 'Secs'][index]}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {urgencyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-center space-x-2 text-sm justify-center md:justify-start">
                  <IconComponent className="w-4 h-4 text-[#06B6D4]" />
                  <span className="text-[#F8FAFC]">{feature.text}</span>
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
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#3B82F6]/20 text-center hover:border-[#3B82F6] transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-[#0A2540]/5 text-[#0A2540] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#1F2937]/70 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div variants={cardVariants}>
        <div className="bg-gradient-to-r from-[#0A2540] to-[#3B82F6] rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Join Our Success Community</h3>
            <p className="text-[#F8FAFC]/80 text-lg">
              Thousands of students have already transformed their careers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {testimonialStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-[#F8FAFC]/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Options */}
      <motion.div variants={cardVariants}>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#3B82F6]/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing? Talk to Our Experts
            </h3>
            <p className="text-[#1F2937]/70">
              Get personalized guidance from our career counselors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'tel:+919503182807'}
              className="flex items-center justify-center space-x-3 bg-[#0A2540] text-white p-4 rounded-xl hover:bg-[#0A2540]/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">Call Now</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/919503182807', '_blank')}
              className="flex items-center justify-center space-x-3 bg-[#3B82F6] text-white p-4 rounded-xl hover:bg-[#2563EB] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Live Chat</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'mailto:info@eeetechnologies.in'}
              className="flex items-center justify-center space-x-3 bg-[#06B6D4] text-white p-4 rounded-xl hover:bg-[#0891B2] transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email Us</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div variants={cardVariants}>
        <div className="text-center bg-[#0A2540] rounded-2xl p-12 text-white border border-[#3B82F6]/30">
          <Zap className="w-20 h-20 text-[#06B6D4] mx-auto mb-6" />
          <h3 className="text-4xl font-bold mb-4">
            Your Dream Career Awaits
          </h3>
          <p className="text-xl text-[#F8FAFC]/70 mb-8 max-w-2xl mx-auto">
            Don't wait another day to start your transformation. Join thousands of successful 
            graduates who took the leap and changed their lives forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onEnrollClick}
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-12 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Register Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#0A2540] transition-all duration-200"
            >
              Book Free Demo
            </motion.button>
          </div>

          <div className="mt-8 text-sm text-[#F8FAFC]/50">
            <p>✅ No hidden fees • ✅ 100% job guarantee • ✅ EMI options available</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RegisterCTA;