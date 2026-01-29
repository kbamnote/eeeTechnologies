import React, { useState } from 'react';
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
import EnrollmentModal from '../components/courses/EnrollmentModal';

// Import placement components
import PlacementStats from '../components/placement/PlacementStats';
import CompanyLogos from '../components/placement/CompanyLogos';
import ProcessTimeline from '../components/placement/ProcessTimeline';
import SuccessStories from '../components/placement/SuccessStories';
import RegisterCTA from '../components/placement/RegisterCTA';


const Placement = () => {
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-20"
      >
        {/* Hero Section with Background Image */}
        <section
          className="
            relative
            min-h-[100vh]
            sm:min-h-screen
            flex
            items-center
            justify-center
            overflow-hidden
            pt-20
            pb-12
          "
        >
          {/* Background Layer */}
          <div className="absolute inset-0">
            {/* Responsive Background Image */}
            <div
              className="
                absolute inset-0
                bg-no-repeat
                bg-cover
                bg-[position:50%_30%]
                sm:bg-center
                md:bg-right
                lg:bg-center
              "
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1920&q=80')",
              }}
            />

            {/* Backdrop Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

            {/* Animated Gradient Overlays */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-amber-500/20 to-transparent blur-3xl"
            />

            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/20 to-transparent blur-3xl"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-7xl mx-auto"
            >
              <div className="text-center max-w-4xl mx-auto">
                
                {/* Badge */}
                <motion.div
                  variants={cardVariants}
                  className="
                    inline-flex
                    items-center
                    px-4
                    py-2
                    bg-white/90
                    backdrop-blur-md
                    border
                    border-white/40
                    rounded-full
                    text-amber-700
                    text-sm
                    font-semibold
                    mb-8
                    shadow-lg
                  "
                >
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></span>
                  #1 Placement Program in India
                </motion.div>

                {/* Heading */}
                <motion.h1
                  variants={cardVariants}
                  className="
                    text-3xl
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl
                    font-bold
                    text-white
                    mb-10
                    leading-tight
                    drop-shadow-xl
                  "
                >
                  Land Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Dream Job</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                  variants={cardVariants}
                  className="text-lg sm:text-xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
                >
                  Join our proven placement program and transform your career with guaranteed job placement, 
                  industry mentorship, and comprehensive skill development.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  variants={cardVariants}
                  className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsEnrollmentModalOpen(true)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Start Your Journey</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/80 backdrop-blur-xl text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg border border-gray-300 hover:bg-white/90 transition-all duration-200 shadow-lg"
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
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-30" />
                        <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200 text-center hover:border-amber-500/50 transition-all duration-300">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base group-hover:text-amber-600 transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 text-xs md:text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          </div>

          
        </section>

        {/* Quick Stats */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={cardVariants}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-gray-900 border border-gray-200 shadow-xl"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Proven Track Record of Success
                </h2>
                <p className="text-gray-600 text-lg">
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
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
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
        {/* <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={cardVariants}>
              <CompanyLogos />
            </motion.div>
          </div>
        </section> */}

        {/* Process Timeline Component */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={cardVariants}>
              <ProcessTimeline />
            </motion.div>
          </div>
        </section>

        {/* Success Stories Component */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={cardVariants}>
              <SuccessStories />
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        {/* <section className="py-16">
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
        </section> */}

        {/* Register CTA Component */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={cardVariants}>
              <RegisterCTA onEnrollClick={() => setIsEnrollmentModalOpen(true)} />
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={cardVariants}>
              <Star className="w-20 h-20 text-blue-500 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join thousands of successful graduates who trusted us with their career transformation. 
                Your dream job is just one decision away.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEnrollmentModalOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-500 text-gray-800 bg-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all duration-200 shadow-lg"
                >
                  Schedule Free Consultation
                </motion.button>
              </div>

              <div className="mt-8 text-sm text-gray-600">
                <p>✅ No hidden fees • ✅ 100% job guarantee • ✅ EMI options available</p>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>

      {/* Enrollment Modal */}
      <EnrollmentModal 
        isOpen={isEnrollmentModalOpen} 
        onClose={() => setIsEnrollmentModalOpen(false)} 
        courseName="Placement Program"
        onSubmit={(formData) => {
          console.log('Enrollment form submitted with data:', formData);
          // Handle form submission here
        }}
      />
    </div>
  );
};

export default Placement;