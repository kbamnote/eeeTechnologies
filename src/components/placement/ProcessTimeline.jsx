import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  FileText, 
  Video, 
  CheckCircle, 
  Trophy,
  Clock,
  ArrowRight,
  Star,
  Target,
  Briefcase,
  Award,
  Calendar,
  User
} from 'lucide-react';

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const timelineSteps = [
    {
      id: 1,
      title: "Course Enrollment",
      subtitle: "Begin Your Journey",
      description: "Start with our comprehensive training program designed to build industry-relevant skills.",
      icon: BookOpen,
      duration: "Week 1",
      color: "blue",
      details: [
        "Complete course registration",
        "Access learning materials",
        "Join student community",
        "Meet your mentors"
      ],
      bgGradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Skill Development",
      subtitle: "Master the Fundamentals",
      description: "Intensive training with hands-on projects, real-world scenarios, and expert guidance.",
      icon: Target,
      duration: "Weeks 2-12",
      color: "purple",
      details: [
        "Complete core curriculum",
        "Work on live projects",
        "Receive personalized feedback",
        "Build your portfolio"
      ],
      bgGradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Profile Building",
      subtitle: "Craft Your Professional Identity",
      description: "Create compelling resumes, LinkedIn profiles, and portfolios that stand out to employers.",
      icon: User,
      duration: "Week 13",
      color: "green",
      details: [
        "Resume optimization",
        "LinkedIn profile enhancement",
        "Portfolio development",
        "Professional photography"
      ],
      bgGradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Mock Interviews",
      subtitle: "Practice Makes Perfect",
      description: "Comprehensive interview preparation with industry experts and AI-powered feedback.",
      icon: Video,
      duration: "Week 14",
      color: "orange",
      details: [
        "Technical interview practice",
        "Behavioral interview training",
        "Group discussion sessions",
        "Presentation skills workshop"
      ],
      bgGradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Job Applications",
      subtitle: "Apply to Top Companies",
      description: "Strategic job applications to our partner companies with personalized recommendations.",
      icon: FileText,
      duration: "Week 15-16",
      color: "indigo",
      details: [
        "Company matching algorithm",
        "Application submission",
        "Follow-up management",
        "Interview scheduling"
      ],
      bgGradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Final Interviews",
      subtitle: "Showcase Your Skills",
      description: "Real interviews with hiring managers from top companies in your field.",
      icon: Users,
      duration: "Week 17-18",
      color: "teal",
      details: [
        "Technical assessments",
        "HR interviews",
        "Final round discussions",
        "Salary negotiations"
      ],
      bgGradient: "from-teal-500 to-green-500"
    },
    {
      id: 7,
      title: "Job Placement",
      subtitle: "Land Your Dream Job",
      description: "Successful placement with ongoing support for your first 90 days on the job.",
      icon: Trophy,
      duration: "Week 19+",
      color: "yellow",
      details: [
        "Offer letter received",
        "Onboarding support",
        "90-day check-ins",
        "Career growth guidance"
      ],
      bgGradient: "from-yellow-500 to-orange-500"
    }
  ];

  const stats = [
    { label: "Average Timeline", value: "19 weeks", icon: Calendar },
    { label: "Success Rate", value: "95%", icon: CheckCircle },
    { label: "Interview Calls", value: "8.5 avg", icon: Video },
    { label: "Offer Rate", value: "78%", icon: Award }
  ];

  const successMetrics = [
    { metric: "Students Placed", value: "2,500+", change: "+15%" },
    { metric: "Average Package", value: "₹28 LPA", change: "+12%" },
    { metric: "Partner Companies", value: "200+", change: "+25%" },
    { metric: "Placement Rate", value: "95%", change: "+5%" }
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

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "text-blue-600 bg-blue-100",
      purple: "text-purple-600 bg-purple-100",
      green: "text-green-600 bg-green-100",
      orange: "text-orange-600 bg-orange-100",
      indigo: "text-indigo-600 bg-indigo-100",
      teal: "text-teal-600 bg-teal-100",
      yellow: "text-yellow-600 bg-yellow-100"
    };
    return colorMap[color] || "text-gray-600 bg-gray-100";
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
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Placement Process Timeline
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our structured 19-week placement process is designed to transform you from a student 
          to a professional. Follow our proven methodology for guaranteed success.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div variants={cardVariants}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
              >
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div variants={cardVariants}>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />
          
          {/* Timeline Steps */}
          <div className="space-y-8">
            {timelineSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = index === activeStep;
              
              return (
                <motion.div
                  key={step.id}
                  variants={stepVariants}
                  className={`relative flex items-start space-x-6 cursor-pointer group ${
                    isActive ? 'scale-105' : ''
                  }`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Step Icon */}
                  <div className={`relative z-10 w-16 h-16 ${getColorClasses(step.color)} rounded-2xl flex items-center justify-center shadow-lg ${
                    isActive ? 'ring-4 ring-purple-200' : ''
                  }`}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Step Content */}
                  <div className={`flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 ${
                    isActive ? 'ring-2 ring-purple-300' : ''
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-purple-600 font-medium">
                          {step.subtitle}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-500 mb-1">
                          Duration
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>

                    {/* Step Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Step {step.id} of {timelineSteps.length}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 bg-gradient-to-r ${step.bgGradient} rounded-full transition-all duration-300`}
                            style={{ width: `${((step.id) / timelineSteps.length) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {Math.round(((step.id) / timelineSteps.length) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow for non-last steps */}
                  {index < timelineSteps.length - 1 && (
                    <div className="absolute left-8 -bottom-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md z-10">
                      <ArrowRight className="w-4 h-4 text-purple-600" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Success Metrics */}
      <motion.div variants={cardVariants}>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Process Success Metrics</h3>
            <p className="text-purple-100 text-lg">
              Our proven methodology delivers consistent results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className="text-purple-100 mb-2">{metric.metric}</div>
                <div className="text-sm bg-white/20 rounded-full px-3 py-1 inline-block">
                  {metric.change} vs last year
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Interactive Timeline Navigation */}
      <motion.div variants={cardVariants}>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Navigate Timeline
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {timelineSteps.map((step, index) => (
              <motion.button
                key={step.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveStep(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  index === activeStep
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {step.title}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div variants={cardVariants}>
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
          <Briefcase className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Placement Journey?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of successful graduates who have transformed their careers through our 
            structured placement process. Your dream job is just 19 weeks away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-purple-500 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200"
            >
              Download Timeline PDF
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProcessTimeline;