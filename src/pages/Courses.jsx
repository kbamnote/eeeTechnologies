import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, TrendingUp, Star, Play } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import CoursesGrid from '../components/courses/CoursesGrid';

const Courses = () => {
  useSEO({
    title: 'Professional Tech Courses - Transform Your Career | EEE Technologies',
    description: 'Explore our comprehensive range of industry-leading tech courses. From web development to AI/ML, get job-ready skills with hands-on projects and placement assistance.',
    keywords: 'tech courses, programming courses, web development, data science, machine learning, mobile development, devops, cybersecurity, ui ux design, career transformation',
    ogImage: '/images/courses-og.jpg'
  });

  const [loading, setLoading] = useState(false);

  const handleEnroll = (course) => {
    console.log('Enrolling in course:', course.title);
    // Handle enrollment logic here
  };

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

  const itemVariants = {
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

  const stats = [
    { icon: BookOpen, label: "Courses", value: "25+" },
    { icon: Users, label: "Students", value: "10K+" },
    { icon: Award, label: "Completion Rate", value: "95%" },
    { icon: TrendingUp, label: "Job Placement", value: "90%" }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
    >
      {/* Hero Section */}
      <motion.section
        variants={itemVariants}
        className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 overflow-hidden"
      >
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 bg-white/10 rounded-full blur-xl"
              animate={{
                x: [0, 50, 0],
                y: [0, -50, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6 + i * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
              style={{
                left: `${5 + i * 12}%`,
                top: `${15 + (i % 4) * 20}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your <span className="text-yellow-400">Career</span>
              <br />with Expert Training
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Industry-leading courses designed by experts. Get job-ready skills with hands-on projects and guaranteed placement assistance.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Courses
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-yellow-400">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        variants={itemVariants}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <CoursesGrid
            loading={loading}
            onEnroll={handleEnroll}
          />
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        variants={itemVariants}
        className="py-16 bg-white dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose EEE Technologies?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're committed to your success with industry-leading curriculum and comprehensive support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Industry-Certified Curriculum",
                description: "Learn from courses designed by industry experts and updated regularly to match current market demands."
              },
              {
                icon: Users,
                title: "Expert Mentorship",
                description: "Get personalized guidance from experienced professionals who've worked at top tech companies."
              },
              {
                icon: TrendingUp,
                title: "Guaranteed Placement Support",
                description: "90% placement rate with dedicated career services, interview preparation, and industry connections."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Courses;