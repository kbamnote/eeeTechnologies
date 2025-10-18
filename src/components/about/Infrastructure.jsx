import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Wifi, 
  Server, 
  Shield, 
  Cloud, 
  Cpu, 
  Database, 
  Globe,
  BookOpen,
  Users,
  Video,
  Headphones,
  Laptop,
  Building,
  Zap,
  Lock,
  Camera,
  Mic
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Infrastructure = () => {
  const [activeTab, setActiveTab] = useState('physical');
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

  const tabs = [
    { id: 'physical', label: 'Physical Infrastructure', icon: Building },
    { id: 'digital', label: 'Digital Platform', icon: Cloud },
    { id: 'technology', label: 'Technology Stack', icon: Cpu },
    { id: 'security', label: 'Security & Support', icon: Shield }
  ];

  const physicalInfrastructure = [
    {
      title: "Modern Classrooms",
      description: "State-of-the-art classrooms equipped with smart boards, high-speed internet, and comfortable seating for optimal learning.",
      icon: Monitor,
      features: ["Smart Interactive Boards", "HD Projectors", "Ergonomic Furniture", "Climate Control"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Computer Labs",
      description: "Fully equipped computer labs with latest hardware and software for hands-on practical training.",
      icon: Laptop,
      features: ["Latest Hardware", "Multiple OS Support", "Development Tools", "24/7 Access"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Recording Studios",
      description: "Professional recording studios for creating high-quality educational content and live streaming.",
      icon: Video,
      features: ["4K Recording", "Professional Lighting", "Audio Equipment", "Live Streaming"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Library & Study Areas",
      description: "Quiet study spaces with extensive technical resources and comfortable reading areas.",
      icon: BookOpen,
      features: ["Technical Books", "Digital Resources", "Quiet Zones", "Group Study Areas"],
      color: "from-orange-500 to-red-600"
    }
  ];

  const digitalPlatform = [
    {
      title: "Learning Management System",
      description: "Comprehensive LMS with course management, progress tracking, and interactive assessments.",
      icon: Globe,
      features: ["Course Management", "Progress Tracking", "Interactive Quizzes", "Mobile App"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Virtual Labs",
      description: "Cloud-based virtual laboratories for practical coding and development experience.",
      icon: Server,
      features: ["Cloud IDE", "Multiple Languages", "Real-time Collaboration", "Auto-save"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Live Streaming Platform",
      description: "High-quality live streaming for interactive online classes and webinars.",
      icon: Camera,
      features: ["HD Streaming", "Interactive Chat", "Screen Sharing", "Recording"],
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Student Portal",
      description: "Centralized portal for assignments, grades, schedules, and communication.",
      icon: Users,
      features: ["Assignment Submission", "Grade Tracking", "Schedule Management", "Communication"],
      color: "from-emerald-500 to-green-600"
    }
  ];

  const technologyStack = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud infrastructure ensuring 99.9% uptime and global accessibility.",
      icon: Cloud,
      features: ["AWS/Azure", "Auto-scaling", "Global CDN", "Load Balancing"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "AI & Machine Learning",
      description: "AI-powered personalized learning paths and intelligent content recommendations.",
      icon: Cpu,
      features: ["Personalized Learning", "Content Recommendations", "Performance Analytics", "Chatbot Support"],
      color: "from-purple-500 to-violet-600"
    },
    {
      title: "Database Systems",
      description: "Robust database systems for storing and managing educational content and user data.",
      icon: Database,
      features: ["High Performance", "Data Backup", "Real-time Sync", "Analytics"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "API Integration",
      description: "Seamless integration with third-party tools and services for enhanced functionality.",
      icon: Zap,
      features: ["RESTful APIs", "Third-party Integration", "Webhook Support", "Real-time Updates"],
      color: "from-orange-500 to-amber-600"
    }
  ];

  const securitySupport = [
    {
      title: "Data Security",
      description: "Enterprise-grade security measures to protect student data and privacy.",
      icon: Lock,
      features: ["End-to-end Encryption", "GDPR Compliant", "Regular Audits", "Secure Authentication"],
      color: "from-red-500 to-pink-600"
    },
    {
      title: "24/7 Technical Support",
      description: "Round-the-clock technical support for students and instructors.",
      icon: Headphones,
      features: ["Live Chat", "Email Support", "Phone Support", "Video Assistance"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Network Security",
      description: "Advanced network security protocols and monitoring systems.",
      icon: Shield,
      features: ["Firewall Protection", "DDoS Protection", "Network Monitoring", "Intrusion Detection"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "High-Speed Connectivity",
      description: "Ultra-fast internet connectivity ensuring smooth online learning experience.",
      icon: Wifi,
      features: ["Fiber Optic", "Redundant Connections", "Low Latency", "High Bandwidth"],
      color: "from-green-500 to-teal-600"
    }
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'physical':
        return physicalInfrastructure;
      case 'digital':
        return digitalPlatform;
      case 'technology':
        return technologyStack;
      case 'security':
        return securitySupport;
      default:
        return physicalInfrastructure;
    }
  };

  const stats = [
    { number: "99.9%", label: "Uptime", icon: Server },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "24/7", label: "Support", icon: Headphones },
    { number: "1Gbps", label: "Internet Speed", icon: Wifi }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              World-Class <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Infrastructure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Experience learning with cutting-edge technology, modern facilities, and robust digital infrastructure designed for the future of education.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-5 h-5 inline-block mr-2" />
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {tabs.find(tab => tab.id === activeTab)?.label}
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive {activeTab} infrastructure designed for optimal learning experience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
            {getTabContent().map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
                
                {/* Features */}
                <div className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full mr-3`}></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              </motion.div>
            ))}
            </div>
          </motion.div>

          {/* Infrastructure Highlights */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Our Infrastructure Matters
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Our world-class infrastructure ensures that every student has access to the best learning environment, 
                whether they're learning in-person or online.
              </p>
              
              {/* Key Benefits */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Lightning Fast
                  </h4>
                  <p className="text-gray-600">
                    High-speed infrastructure ensures smooth learning without interruptions or delays.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Global Access
                  </h4>
                  <p className="text-gray-600">
                    Learn from anywhere in the world with our globally distributed infrastructure.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Secure & Reliable
                  </h4>
                  <p className="text-gray-600">
                    Enterprise-grade security and 99.9% uptime guarantee for uninterrupted learning.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Infrastructure;