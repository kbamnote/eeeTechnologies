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
              <Calendar className="w-4 h-4 mr-2" />
              Our Journey
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Our
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                Journey
              </span>
            </h2>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              From a small training center to a global leader in technology education - discover the milestones that shaped our success.
            </p>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:shadow-2xl hover:border-slate-600/50 transition-all duration-500 group-hover:-translate-y-2">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <achievement.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {achievement.number}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">
                      {achievement.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${event.side === 'right' ? 'lg:pl-8' : 'lg:pr-8'}`}>
                    <div className="group">
                      <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 overflow-hidden hover:shadow-3xl hover:border-slate-600/50 transition-all duration-500">
                        {/* Year Badge */}
                        <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${event.color} text-white rounded-2xl text-sm font-bold mb-4`}>
                          <Calendar className="w-4 h-4 mr-2" />
                          {event.year}
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                          {event.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {event.description}
                        </p>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">
                              {event.stats}
                            </div>
                            <div className="text-sm text-gray-400">
                              Milestone
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">
                              {event.achievement}
                            </div>
                            <div className="text-sm text-gray-400">
                              Achievement
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Icon */}
                  <div className="relative z-10 my-4 lg:my-0">
                    <div className={`w-14 h-14 bg-gradient-to-r ${event.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <event.icon className="w-7 h-7 text-white" />
                    </div>
                    
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
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Looking Ahead
                </h3>
                <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
                  Our journey continues as we work towards empowering 1 million students globally by 2030, 
                  pioneering new technologies in education, and creating the next generation of tech leaders.
                </p>
                
                {/* Future Goals */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold mb-2">1M Students</h4>
                    <p className="text-sm text-blue-100">Global reach by 2030</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold mb-2">AI Integration</h4>
                    <p className="text-sm text-blue-100">Next-gen learning platform</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold mb-2">Social Impact</h4>
                    <p className="text-sm text-blue-100">Education for underserved communities</p>
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

export default Timeline;