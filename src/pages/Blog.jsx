import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  Star, 
  Sparkles,
  Brain,
} from 'lucide-react';
import BlogList from '../components/blog/BlogList';
import BlogSidebar from '../components/blog/BlogSidebar';
import { useSEO } from '../hooks/useSEO';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  // Use imported blogPosts data
  // SEO optimization
  useSEO({
    title: 'Tech Blog - Latest Insights & Tutorials | EEE Technologies',
    description: 'Stay updated with the latest tech trends, tutorials, and insights from industry experts. Learn about web development, AI/ML, data science, and more.',
    keywords: 'tech blog, programming tutorials, web development, AI, machine learning, data science, career tips'
  });

  // Handle functions
  const handleLike = (postId) => {
    console.log('Liked post:', postId);
  };

  const handleShare = (postId) => {
    console.log('Shared post:', postId);
  };

  const handleBookmark = (postId) => {
    console.log('Bookmarked post:', postId);
  };

  const handleSubscribe = (email) => {
    console.log('Subscribed with email:', email);
  };



  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const statsData = [
    { icon: BookOpen, value: "150+", label: "Articles Published", color: "from-[#3B82F6] to-[#60A5FA]" },
    { icon: Users, value: "25K+", label: "Monthly Readers", color: "from-[#0A2540] to-[#1E40AF]" },
    { icon: TrendingUp, value: "95%", label: "Reader Satisfaction", color: "from-[#06B6D4] to-[#22D3EE]" },
    { icon: Star, value: "4.9", label: "Average Rating", color: "from-[#3B82F6] to-[#2563EB]" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* Hero Section */}
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
              backgroundImage: "url('https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop')",
            }}
          />

          {/* Light Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/60 to-[#0A2540]/40" />

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
            className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#3B82F6]/20 to-transparent blur-3xl"
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
            className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#06B6D4]/20 to-transparent blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-7xl mx-auto"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  bg-white/90
                  backdrop-blur-sm
                  border
                  border-[#3B82F6]/30
                  rounded-full
                  text-[#0A2540]
                  text-sm
                  font-semibold
                  mb-8
                  shadow-lg
                "
              >
                <Sparkles className="w-4 h-4 mr-2 text-[#3B82F6]" />
                Latest Tech Insights & Tutorials
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="
                  text-3xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-bold
                  text-white
                  mb-10
                  leading-tight
                "
              >
                Tech Blog &{' '}
                <span className="text-[#3B82F6] drop-shadow-lg">
                  Learning Hub
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed shadow-black/50 drop-shadow-md"
              >
                Stay ahead of the curve with expert insights, practical tutorials, and industry trends. 
                Learn from experienced developers and advance your tech career.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-16"
              >
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                {statsData.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group"
                  >
                    <div className="text-center relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#06B6D4]/20 rounded-2xl blur-xl opacity-30" />
                      <div className="text-center bg-white/90 backdrop-blur-xl rounded-2xl p-6 hover:bg-white transition-all duration-300 border border-gray-200 shadow-xl relative">
                        <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-3 mx-auto shadow-md`}>
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-[#0A2540] mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-[#1F2937]/80 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <motion.section
        className="py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Blog List */}
            <div className="lg:col-span-2">
              <BlogList 
                posts={blogPosts.map(post => ({
                  ...post,
                  href: `/blog/${post.id}`
                }))}
                onLike={handleLike}
                onShare={handleShare}
                onBookmark={handleBookmark}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar 
                onSubscribe={handleSubscribe}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Newsletter CTA */}
      <motion.section
        className="py-20 bg-[#F0F9FF]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-12 border border-[#3B82F6]/20 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#3B82F6]/5 to-transparent rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#06B6D4]/5 to-transparent rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-[#3B82F6]/10 rounded-2xl">
                  <Brain className="w-8 h-8 text-[#3B82F6]" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
                Never Miss an Update
              </h2>
              <p className="text-xl text-[#1F2937]/70 mb-8 max-w-2xl mx-auto">
                Join our community of learners and get the latest tutorials, tips, and insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 text-[#0A2540] placeholder-gray-500 focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-[#3B82F6] shadow-sm outline-none transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;
