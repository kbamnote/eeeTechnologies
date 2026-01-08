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
  const [loading, setLoading] = useState(true);

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
      rating: 4.8
    },
    {
      id: 2,
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
      rating: 4.7
    },
    {
      id: 3,
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
      rating: 4.9
    },
    {
      id: 4,
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
      rating: 4.6
    },
    {
      id: 5,
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
      rating: 4.7
    },
    {
      id: 6,
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
      rating: 4.8
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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {loading && (
        <div className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24 overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-40 right-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-6 py-3 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full text-white text-sm font-semibold mb-8"
            >
              <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
              Latest Tech Insights & Tutorials
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Tech Blog &{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Learning Hub
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Stay ahead of the curve with expert insights, practical tutorials, and industry trends. 
              Learn from experienced developers and advance your tech career.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
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
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-white font-bold rounded-2xl hover:bg-slate-700/50 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  <Search className="w-5 h-5 mr-2 text-white" />
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
                  <div className="text-center bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300">
                    <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-3 mx-auto`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

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
        className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={itemVariants}
            className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-slate-700/50 rounded-2xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Never Miss an Update
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join our community of learners and get the latest tutorials, tips, and insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
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
