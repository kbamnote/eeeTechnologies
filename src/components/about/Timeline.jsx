import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Award, 
  Users, 
  Building, 
  Globe, 
  Rocket, 
  Star, 
  TrendingUp,
  BookOpen,
  Target,
  Heart,
  Zap
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Timeline = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const timelineEvents = [
    {
      year: "2010",
      title: "Foundation",
      description: "eee Technologies was founded with a vision to bridge the gap between academic learning and industry requirements.",
      icon: Building,
      color: "from-blue-500 to-purple-600",
      stats: "1 Course",
      achievement: "Started with Full Stack Development",
      side: "left"
    },
    {
      year: "2012",
      title: "First 100 Students",
      description: "Reached our first milestone of training 100 students with 95% placement success rate.",
      icon: Users,
      color: "from-green-500 to-teal-600",
      stats: "100 Students",
      achievement: "95% Placement Rate",
      side: "right"
    },
    {
      year: "2014",
      title: "Industry Recognition",
      description: "Received 'Best Training Institute' award and established partnerships with top tech companies.",
      icon: Award,
      color: "from-yellow-500 to-orange-600",
      stats: "5 Awards",
      achievement: "Industry Partnerships",
      side: "left"
    },
    {
      year: "2016",
      title: "Course Expansion",
      description: "Expanded curriculum to include Data Science, AI/ML, and Cloud Computing programs.",
      icon: BookOpen,
      color: "from-purple-500 to-pink-600",
      stats: "8 Courses",
      achievement: "AI/ML Specialization",
      side: "right"
    },
    {
      year: "2018",
      title: "Global Reach",
      description: "Launched online platform and started serving students globally with live interactive sessions.",
      icon: Globe,
      color: "from-indigo-500 to-blue-600",
      stats: "50+ Countries",
      achievement: "Online Platform Launch",
      side: "left"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Adapted to remote learning with advanced virtual labs and AI-powered personalized learning paths.",
      icon: Rocket,
      color: "from-red-500 to-rose-600",
      stats: "Virtual Labs",
      achievement: "AI-Powered Learning",
      side: "right"
    },
    {
      year: "2022",
      title: "10,000 Success Stories",
      description: "Celebrated 10,000 successful career transformations with students placed in top tech companies worldwide.",
      icon: Star,
      color: "from-emerald-500 to-green-600",
      stats: "10K+ Students",
      achievement: "Global Placements",
      side: "left"
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Launched innovation hub for cutting-edge research in education technology and industry collaboration.",
      icon: Zap,
      color: "from-cyan-500 to-blue-600",
      stats: "Innovation Hub",
      achievement: "Research & Development",
      side: "right"
    }
  ];

  const achievements = [
    { number: "15+", label: "Years of Excellence", icon: Calendar },
    { number: "20K+", label: "Students Trained", icon: Users },
    { number: "50+", label: "Industry Awards", icon: Award },
    { number: "95%", label: "Success Rate", icon: TrendingUp }
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
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              From a small training center to a global leader in technology education - discover the milestones that shaped our success.
            </p>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden lg:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12 lg:space-y-16">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col lg:flex-row items-center ${
                    event.side === 'right' ? 'lg:flex-row-reverse' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${event.side === 'right' ? 'lg:pl-8' : 'lg:pr-8'}`}>
                    <motion.div
                      className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 group cursor-pointer"
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Year Badge */}
                      <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${event.color} text-white rounded-2xl text-sm font-bold mb-4`}>
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.year}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {event.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {event.description}
                      </p>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900">
                            {event.stats}
                          </div>
                          <div className="text-sm text-gray-600">
                            Milestone
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900">
                            {event.achievement}
                          </div>
                          <div className="text-sm text-gray-600">
                            Achievement
                          </div>
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                    </motion.div>
                  </div>
                  
                  {/* Timeline Icon */}
                  <div className="relative z-10 my-4 lg:my-0">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${event.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <event.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    {/* Connecting Lines for Mobile */}
                    {index < timelineEvents.length - 1 && (
                      <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-600 mx-auto mt-4 lg:hidden"></div>
                    )}
                  </div>
                  
                  {/* Spacer for desktop */}
                  <div className="hidden lg:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Future Vision */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Looking Ahead
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Our journey continues as we work towards empowering 1 million students globally by 2030, 
                pioneering new technologies in education, and creating the next generation of tech leaders.
              </p>
              
              {/* Future Goals */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">1M Students</h4>
                  <p className="text-sm text-gray-600">Global reach by 2030</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">AI Integration</h4>
                  <p className="text-sm text-gray-600">Next-gen learning platform</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Social Impact</h4>
                  <p className="text-sm text-gray-600">Education for underserved communities</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;