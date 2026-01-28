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
      <motion.div variants={cardVariants} className="text-center mb-16">
        <div className="inline-flex items-center px-5 py-2.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6">
          <Calendar className="w-4 h-4 mr-2" />
          Placement Process Timeline
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Placement Process
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
            Timeline
          </span>
        </h2>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our structured 19-week placement process is designed to transform you from a student 
          to a professional. Follow our proven methodology for guaranteed success.
        </p>
      </motion.div>

    

     

      {/* Success Metrics */}
      <motion.div variants={cardVariants}>
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative z-10 text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Process Success Metrics</h3>
            <p className="text-blue-100 text-lg">
              Our proven methodology delivers consistent results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className="text-blue-100 mb-2">{metric.metric}</div>
                <div className="text-sm bg-white/20 rounded-full px-3 py-1 inline-block">
                  {metric.change} vs last year
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    

      {/* Call to Action */}
      <motion.div variants={cardVariants}>
        <div className="text-center bg-blue-950 rounded-2xl p-8 border border-blue-800 overflow-hidden">
          <Briefcase className="w-16 h-16 text-blue-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-blue-100 mb-4">
            Ready to Start Your Placement Journey?
          </h3>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Join thousands of successful graduates who have transformed their careers through our 
            structured placement process. Your dream job is just 19 weeks away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-200"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-blue-400 text-blue-300 px-8 py-3 rounded-2xl font-semibold hover:bg-blue-500/10 transition-all duration-200"
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