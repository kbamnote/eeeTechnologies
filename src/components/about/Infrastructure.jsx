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
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
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
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-5 py-2.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6">
              <Server className="w-4 h-4 mr-2" />
              World-Class Infrastructure
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              World-Class
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                Infrastructure
              </span>
            </h2>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              Experience learning with cutting-edge technology, modern facilities, and robust digital infrastructure designed for the future of education.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:shadow-2xl hover:border-slate-600/50 transition-all duration-500 group-hover:-translate-y-2">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tab Navigation */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-800/50 backdrop-blur-xl text-gray-300 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50'
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
            className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 overflow-hidden"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {tabs.find(tab => tab.id === activeTab)?.label}
              </h3>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive {activeTab} infrastructure designed for optimal learning experience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
            {getTabContent().map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-slate-700/50 overflow-hidden hover:shadow-3xl hover:border-slate-600/50 transition-all duration-500">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full mr-3`}></div>
                        <span className="text-gray-400 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </motion.div>

          {/* Infrastructure Highlights */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Our Infrastructure Matters
                </h3>
                <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
                  Our world-class infrastructure ensures that every student has access to the best learning environment, 
                  whether they're learning in-person or online.
                </p>
                
                {/* Key Benefits */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">
                      Lightning Fast
                    </h4>
                    <p className="text-blue-100">
                      High-speed infrastructure ensures smooth learning without interruptions or delays.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">
                      Global Access
                    </h4>
                    <p className="text-blue-100">
                      Learn from anywhere in the world with our globally distributed infrastructure.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">
                      Secure & Reliable
                    </h4>
                    <p className="text-blue-100">
                      Enterprise-grade security and 99.9% uptime guarantee for uninterrupted learning.
                    </p>
                  </div>
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