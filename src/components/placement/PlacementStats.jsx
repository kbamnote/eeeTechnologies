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
    {
      title: "Industry Recognition",
      description: "Best Training Institute 2023",
      icon: Award,
      color: "yellow"
    },
    {
      title: "Student Satisfaction",
      description: "4.9/5 Average Rating",
      icon: Star,
      color: "yellow"
    },
    {
      title: "Career Growth",
      description: "85% promoted within 2 years",
      icon: Briefcase,
      color: "purple"
    },
    {
      title: "Global Reach",
      description: "Students in 15+ countries",
      icon: MapPin,
      color: "blue"
    }
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
      <motion.div variants={cardVariants} className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Placement Statistics
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 overflow-hidden group"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 ${getColorClasses(stat.color)} rounded-xl flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Value */}
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>

                  {/* Title */}
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    {stat.title}
                  </div>

                  {/* Description */}
                  <div className="text-gray-600 text-sm mb-3">
                    {stat.description}
                  </div>

                  {/* Trend */}
                  <div className="flex items-center space-x-2">
                    <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                      stat.trend.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {stat.trend}
                    </div>
                    <span className="text-xs text-gray-500">vs last year</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Salary Distribution */}
      <motion.div variants={cardVariants}>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Salary Distribution
          </h3>
          <div className="space-y-4">
            {salaryRanges.map((range, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-24 text-sm font-medium text-gray-700">
                  {range.range}
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${range.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className={`h-full bg-gradient-to-r ${
                      range.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                      range.color === 'purple' ? 'from-purple-500 to-pink-500' :
                      range.color === 'green' ? 'from-green-500 to-emerald-500' :
                      'from-orange-500 to-red-500'
                    }`}
                  />
                </div>
                <div className="w-12 text-sm font-semibold text-gray-700">
                  {range.percentage}%
                </div>
              </div>
            ))}
          </div>
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
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
              >
                <div className={`w-16 h-16 ${getColorClasses(achievement.color)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Recent Highlights */}
      <motion.div variants={cardVariants}>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Recent Highlights</h3>
            <p className="text-purple-100 text-lg">
              Latest achievements and milestones from our placement program
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-purple-100">Placements this month</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">₹32L</div>
              <div className="text-purple-100">Average package this quarter</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-purple-100">New partner companies</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div variants={cardVariants}>
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
          <GraduationCap className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Take the first step towards your dream career. Our placement team is ready to help you 
            achieve your professional goals with personalized guidance and industry connections.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
          >
            Start Your Journey
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PlacementStats;