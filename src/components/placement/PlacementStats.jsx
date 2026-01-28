  import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Building, 
  DollarSign, 
  Award, 
  Clock, 
  Target, 
  Star,
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar
} from 'lucide-react';

const PlacementStats = () => {
  const stats = [
    {
      id: 1,
      title: "Placement Rate",
      value: "95%",
      description: "Students placed within 6 months",
      icon: Target,
      color: "purple",
      trend: "+5%",
      bgGradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Average Salary Hike",
      value: "180%",
      description: "Increase from previous role",
      icon: TrendingUp,
      color: "green",
      trend: "+15%",
      bgGradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Students Placed",
      value: "2,500+",
      description: "Successful career transitions",
      icon: Users,
      color: "blue",
      trend: "+200",
      bgGradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: "Partner Companies",
      value: "200+",
      description: "Hiring our graduates",
      icon: Building,
      color: "orange",
      trend: "+25",
      bgGradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Highest Package",
      value: "₹45 LPA",
      description: "Record placement this year",
      icon: DollarSign,
      color: "indigo",
      trend: "+₹5L",
      bgGradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Average Time to Placement",
      value: "3.2 months",
      description: "From course completion",
      icon: Clock,
      color: "teal",
      trend: "-0.5m",
      bgGradient: "from-teal-500 to-green-500"
    }
  ];

  const achievements = [
    
   
   
  ];

  const salaryRanges = [
    { range: "₹15-25 LPA", percentage: 45, color: "blue" },
    { range: "₹25-35 LPA", percentage: 30, color: "purple" },
    { range: "₹35-45 LPA", percentage: 20, color: "green" },
    { range: "₹45+ LPA", percentage: 5, color: "orange" }
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

  const getColorClasses = (color) => {
    const colorMap = {
      purple: "text-purple-600 bg-purple-100",
      green: "text-green-600 bg-green-100",
      blue: "text-blue-600 bg-blue-100",
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
      <motion.div variants={cardVariants} className="text-center ">
        <div className="inline-flex items-center px-5 py-2.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6">
          <Target className="w-4 h-4 mr-2" />
          Placement Statistics
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Placement
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
            Statistics
          </span>
        </h2>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our track record speaks for itself. See how we've helped thousands of students 
          transform their careers and achieve their professional goals.
        </p>
      </motion.div>

      {/* Main Stats Grid */}
      <motion.div variants={cardVariants}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <div className="relative bg-blue-950 rounded-3xl p-8 shadow-2xl border border-blue-800 overflow-hidden hover:border-blue-700 transition-all duration-500 group-hover:-translate-y-3 transform-gpu">
                  {/* Premium Background Effects */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-5 rounded-3xl`} />
                  <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${stat.bgGradient} rounded-full opacity-15 blur-3xl`} />
                  <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${stat.bgGradient} rounded-full opacity-10 blur-2xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.bgGradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Value */}
                    <div className="text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>

                    {/* Title */}
                    <div className="text-xl font-semibold text-white mb-2">
                      {stat.title}
                    </div>

                    {/* Description */}
                    <div className="text-gray-400 text-sm mb-3">
                      {stat.description}
                    </div>

                    {/* Trend */}
                    <div className="flex items-center space-x-2">
                      <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                        stat.trend.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {stat.trend}
                      </div>
                      <span className="text-xs text-gray-500">vs last year</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

     

      {/* Achievements */}
      <motion.div variants={cardVariants}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="bg-blue-950 rounded-2xl p-6 border border-blue-800 overflow-hidden hover:border-blue-700 transition-all duration-500 hover:-translate-y-2 transform-gpu">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-blue-100 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-blue-200 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Recent Highlights */}
      <motion.div variants={cardVariants}>
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative z-10 text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Recent Highlights</h3>
            <p className="text-blue-100 text-lg">
              Latest achievements and milestones from our placement program
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Placements this month</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">₹32L</div>
              <div className="text-blue-100">Average package this quarter</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-blue-100">New partner companies</div>
            </div>
          </div>
        </div>
      </motion.div>

   
    </motion.div>
  );
};

export default PlacementStats;