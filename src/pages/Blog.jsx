import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  Star, 
  Search, 
  Filter,
  ArrowRight,
  Sparkles,
  Brain,
  Code,
  Lightbulb
} from 'lucide-react';
import BlogList from '../components/blog/BlogList';
import BlogSidebar from '../components/blog/BlogSidebar';
import { useSEO } from '../hooks/useSEO';

const Blog = () => {
  // SEO optimization
  useSEO({
    title: 'Tech Blog - Latest Insights & Tutorials | EEE Technologies',
    description: 'Stay updated with the latest tech trends, tutorials, and insights from industry experts. Learn about web development, AI/ML, data science, and more.',
    keywords: 'tech blog, programming tutorials, web development, AI, machine learning, data science, career tips'
  });

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      slug: "your-complete-guide-to-becoming-a-full-stack-developer-course",
      title: "Your Complete Guide to Becoming a Full Stack Developer Course",
      excerpt: "The world of web development is evolving at lightning speed, and there's never been a better time to dive into this exciting field. Whether you're a complete beginner or looking to upgrade your skills, understanding the full stack development landscape is crucial for building a successful career in tech.",
      date: "Jan 21, 2026",
      category: "Web Development",
      readTime: "10 min read",
      author: {
        name: "EEE Technologies",
        avatar: "https://images.unsplash.com/photo-1556157382-97eda2f9e946?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Full Stack", "Web Development", "JavaScript", "Career Guide"],
      likes: 298,
      rating: 4.8,
      href: "/blog/your-complete-guide-to-becoming-a-full-stack-developer-course"
    },
    {
      id: 2,
      slug: "complete-guide-to-react-hooks-2024",
      title: "Complete Guide to React Hooks in 2024",
      excerpt: "Master React Hooks with practical examples and best practices. Learn useState, useEffect, useContext, and custom hooks.",
      date: "Dec 15, 2024",
      category: "Web Development",
      readTime: "8 min read",
      author: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "JavaScript", "Hooks", "Frontend"],
      likes: 245,
      rating: 4.8,
      href: "/blog/complete-guide-to-react-hooks-2024"
    },
    {
      id: 3,
      slug: "building-scalable-apis-with-nodejs-and-express",
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "Learn how to create robust, scalable APIs using Node.js, Express, and modern best practices for enterprise applications.",
      date: "Dec 12, 2024",
      category: "Web Development",
      readTime: "12 min read",
      author: {
        name: "Mike Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Node.js", "Express", "API", "Backend"],
      likes: 189,
      rating: 4.7,
      href: "/blog/building-scalable-apis-with-nodejs-and-express"
    },
    {
      id: 4,
      slug: "machine-learning-fundamentals-for-beginners",
      title: "Machine Learning Fundamentals for Beginners",
      excerpt: "Start your ML journey with this comprehensive guide covering algorithms, data preprocessing, and practical implementations.",
      date: "Dec 10, 2024",
      category: "AI/ML",
      readTime: "15 min read",
      author: {
        name: "Dr. Emily Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Machine Learning", "Python", "AI", "Data Science"],
      likes: 312,
      rating: 4.9,
      href: "/blog/machine-learning-fundamentals-for-beginners"
    },
    {
      id: 5,
      slug: "css-grid-vs-flexbox-when-to-use-which",
      title: "CSS Grid vs Flexbox: When to Use Which",
      excerpt: "Master CSS layout with this detailed comparison of Grid and Flexbox, including practical examples and use cases.",
      date: "Dec 8, 2024",
      category: "Web Development",
      readTime: "10 min read",
      author: {
        name: "Alex Thompson",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["CSS", "Grid", "Flexbox", "Layout"],
      likes: 156,
      rating: 4.6,
      href: "/blog/css-grid-vs-flexbox-when-to-use-which"
    },
    {
      id: 6,
      slug: "data-visualization-with-python-and-matplotlib",
      title: "Data Visualization with Python and Matplotlib",
      excerpt: "Create stunning data visualizations using Python's Matplotlib library. Learn charts, graphs, and interactive plots.",
      date: "Dec 5, 2024",
      category: "Data Science",
      readTime: "14 min read",
      author: {
        name: "Lisa Wang",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Matplotlib", "Data Visualization", "Analytics"],
      likes: 203,
      rating: 4.7,
      href: "/blog/data-visualization-with-python-and-matplotlib"
    },
    {
      id: 7,
      slug: "career-tips-landing-your-first-tech-job",
      title: "Career Tips: Landing Your First Tech Job",
      excerpt: "Essential advice for breaking into the tech industry, from building your portfolio to acing technical interviews.",
      date: "Dec 3, 2024",
      category: "Career Tips",
      readTime: "11 min read",
      author: {
        name: "David Kumar",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Career", "Job Search", "Interview", "Portfolio"],
      likes: 278,
      rating: 4.8,
      href: "/blog/career-tips-landing-your-first-tech-job"
    }
  ];

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
    { icon: BookOpen, value: "150+", label: "Articles Published", color: "from-blue-500 to-cyan-500" },
    { icon: Users, value: "25K+", label: "Monthly Readers", color: "from-purple-500 to-pink-500" },
    { icon: TrendingUp, value: "95%", label: "Reader Satisfaction", color: "from-green-500 to-emerald-500" },
    { icon: Star, value: "4.9", label: "Average Rating", color: "from-yellow-500 to-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />

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
            className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-amber-500/20 to-transparent blur-3xl"
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
            className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/20 to-transparent blur-3xl"
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
                  bg-white/80
                  backdrop-blur-sm
                  border
                  border-amber-500/30
                  rounded-full
                  text-amber-600
                  text-sm
                  font-semibold
                  mb-8
                "
              >
                <Sparkles className="w-4 h-4 mr-2 text-amber-400" />
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
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Learning Hub
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-white max-w-3xl mx-auto leading-relaxed"
              >
                Stay ahead of the curve with expert insights, practical tutorials, and industry trends. 
                Learn from experienced developers and advance your tech career.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-16"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Start Reading
                  </span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white/80 backdrop-blur-xl text-gray-900 font-bold rounded-2xl border border-gray-300 hover:bg-white/90 transition-all duration-300 shadow-lg"
                >
                  <span className="flex items-center justify-center">
                    <Search className="w-5 h-5 mr-2 text-gray-300" />
                    Explore Topics
                  </span>
                </motion.button>
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
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-30" />
                      <div className="text-center bg-white/80 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 border border-gray-200 shadow-lg relative">
                        <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-3 mx-auto`}>
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
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
                posts={blogPosts}
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
        className="py-20 bg-gradient-to-br from-gray-100 to-gray-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 shadow-xl"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-2xl">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Never Miss an Update
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our community of learners and get the latest tutorials, tips, and insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 shadow-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-200"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;
