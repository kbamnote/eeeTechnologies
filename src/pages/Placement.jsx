import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Target, 
  Users, 
  Award, 
  TrendingUp,
  Star,
  CheckCircle,
  Briefcase,
  Clock,
  MapPin
} from 'lucide-react';

// Import placement components
import PlacementStats from '../components/placement/PlacementStats';
import CompanyLogos from '../components/placement/CompanyLogos';
import ProcessTimeline from '../components/placement/ProcessTimeline';
import SuccessStories from '../components/placement/SuccessStories';
import RegisterCTA from '../components/placement/RegisterCTA';

const Placement = () => {
  const heroFeatures = [
    {
      icon: Target,
      title: "95% Placement Rate",
      description: "Industry-leading success rate"
    },
    {
      icon: TrendingUp,
      title: "180% Salary Hike",
      description: "Average increase guaranteed"
    },
    {
      icon: Users,
      title: "200+ Partners",
      description: "Top-tier company network"
    },
    {
      icon: Award,
      title: "Job Guarantee",
      description: "100% money-back promise"
    }
  ];

  const quickStats = [
    { value: "2,500+", label: "Students Placed", icon: Users },
    { value: "₹45L", label: "Highest Package", icon: TrendingUp },
    { value: "19 weeks", label: "Avg. Placement Time", icon: Clock },
    { value: "200+", label: "Partner Companies", icon: Briefcase }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-20"
      >
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                variants={cardVariants}
                className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
              >
                🚀 #1 Placement Program in India
              </motion.div>
              
              <motion.h1
                variants={cardVariants}
                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
              >
                Land Your
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}Dream Job
                </span>
              </motion.h1>
              
              <motion.p
                variants={cardVariants}
                className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
              >
                Join our proven placement program and transform your career with guaranteed job placement, 
                industry mentorship, and comprehensive skill development.
              </motion.p>

              <motion.div
                variants={cardVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-all duration-200"
                >
                  Watch Success Stories
                </motion.button>
              </motion.div>

              {/* Hero Features */}
              <motion.div
                variants={cardVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                {heroFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center"
                    >
                      <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={cardVariants}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Proven Track Record of Success
                </h2>
                <p className="text-purple-100 text-lg">
                  Numbers that speak for our excellence in career transformation
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {quickStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                      <div className="text-purple-100">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Placement Stats Component */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={cardVariants}>
              <PlacementStats />
            </motion.div>
          </div>
        </section>

        {/* Company Logos Component */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={cardVariants}>
              <CompanyLogos />
            </motion.div>
          </div>
        </section>

        {/* Process Timeline Component */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={cardVariants}>
              <ProcessTimeline />
            </motion.div>
          </div>
        </section>

        {/* Success Stories Component */}
        <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={cardVariants}>
              <SuccessStories />
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={cardVariants} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Placement Program?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We don't just teach - we guarantee your career transformation with our comprehensive approach
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Guaranteed Placement",
                  description: "100% job guarantee or full money back. We're confident in our ability to place you.",
                  color: "purple"
                },
                {
                  icon: Users,
                  title: "Industry Mentorship",
                  description: "Learn from industry experts who have worked at top companies and understand market needs.",
                  color: "blue"
                },
                {
                  icon: TrendingUp,
                  title: "Salary Negotiation",
                  description: "Our career counselors help you negotiate the best possible salary package.",
                  color: "green"
                },
                {
                  icon: Award,
                  title: "Skill Certification",
                  description: "Get industry-recognized certifications that employers value and trust.",
                  color: "orange"
                },
                {
                  icon: Clock,
                  title: "Lifetime Support",
                  description: "Career guidance doesn't end with placement. We support you throughout your career journey.",
                  color: "pink"
                },
                {
                  icon: CheckCircle,
                  title: "Proven Methodology",
                  description: "Our time-tested approach has successfully placed thousands of students in top companies.",
                  color: "indigo"
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20"
                  >
                    <div className={`w-16 h-16 bg-${feature.color}-100 text-${feature.color}-600 rounded-2xl flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Register CTA Component */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={cardVariants}>
              <RegisterCTA />
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={cardVariants}>
              <Star className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of successful graduates who trusted us with their career transformation. 
                Your dream job is just one decision away.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
                >
                  Schedule Free Consultation
                </motion.button>
              </div>

              <div className="mt-8 text-sm text-gray-400">
                <p>✅ No hidden fees • ✅ 100% job guarantee • ✅ EMI options available</p>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Placement;
