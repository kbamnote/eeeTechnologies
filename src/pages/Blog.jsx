import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, TrendingUp, Calendar, Users } from 'lucide-react';
import BlogList from '../components/blog/BlogList';
import BlogSidebar from '../components/blog/BlogSidebar';
import { useSEO } from '../hooks/useSEO';

const Blog = () => {
  // SEO optimization
  useSEO({
    title: 'Tech Blog - Latest Insights & Tutorials | EEE Technologies',
    description: 'Stay updated with the latest tech trends, tutorials, and insights. Expert articles on web development, data science, AI/ML, mobile development, and career tips.',
    keywords: 'tech blog, programming tutorials, web development, data science, AI, machine learning, mobile development, career tips, technology news',
    ogImage: '/images/blog-og.jpg'
  });

  const [loading, setLoading] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: 'Complete Guide to React Hooks in 2024',
      excerpt: 'Master React Hooks with practical examples and best practices. Learn useState, useEffect, useContext, and custom hooks.',
      date: 'December 15, 2024',
      category: 'Web Development',
      readTime: '12 min read',
      author: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'JavaScript', 'Frontend', 'Hooks'],
      likes: 245,
      isLiked: false,
      isBookmarked: false,
      rating: 4.8
    },
    {
      id: 2,
      title: 'Python for Data Science: Advanced Techniques',
      excerpt: 'Discover advanced Python techniques for data analysis, visualization, and machine learning with real-world examples.',
      date: 'December 12, 2024',
      category: 'Data Science',
      readTime: '15 min read',
      author: 'Dr. Michael Chen',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'Data Science', 'Machine Learning', 'Pandas'],
      likes: 189,
      isLiked: false,
      isBookmarked: false,
      rating: 4.9
    },
    {
      id: 3,
      title: 'Building Scalable APIs with Node.js and Express',
      excerpt: 'Learn to build robust, scalable APIs using Node.js, Express, and MongoDB. Includes authentication, validation, and deployment.',
      date: 'December 10, 2024',
      category: 'Web Development',
      readTime: '18 min read',
      author: 'Alex Rodriguez',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Node.js', 'Express', 'API', 'Backend'],
      likes: 156,
      isLiked: false,
      isBookmarked: false,
      rating: 4.7
    },
    {
      id: 4,
      title: 'Mobile App Development with React Native',
      excerpt: 'Create cross-platform mobile apps with React Native. From setup to deployment on iOS and Android app stores.',
      date: 'December 8, 2024',
      category: 'Mobile Development',
      readTime: '20 min read',
      author: 'Emily Davis',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'Mobile', 'iOS', 'Android'],
      likes: 134,
      isLiked: false,
      isBookmarked: false,
      rating: 4.6
    },
    {
      id: 5,
      title: 'DevOps Best Practices for Modern Development',
      excerpt: 'Essential DevOps practices including CI/CD, containerization with Docker, and cloud deployment strategies.',
      date: 'December 5, 2024',
      category: 'DevOps',
      readTime: '16 min read',
      author: 'James Wilson',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['DevOps', 'Docker', 'CI/CD', 'AWS'],
      likes: 198,
      isLiked: false,
      isBookmarked: false,
      rating: 4.8
    },
    {
      id: 6,
      title: 'Career Growth Strategies for Tech Professionals',
      excerpt: 'Proven strategies to accelerate your tech career. From skill development to networking and leadership tips.',
      date: 'December 3, 2024',
      category: 'Career Tips',
      readTime: '14 min read',
      author: 'Lisa Thompson',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Career', 'Professional Development', 'Leadership'],
      likes: 167,
      isLiked: false,
      isBookmarked: false,
      rating: 4.5
    }
  ];

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
        className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20 overflow-hidden"
      >
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-white/10 rounded-full blur-xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
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
              Tech <span className="text-yellow-400">Insights</span> & Tutorials
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8">
              Stay ahead with expert articles, in-depth tutorials, and the latest trends in technology
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">150+</div>
                <div className="text-purple-200">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">25K+</div>
                <div className="text-purple-200">Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-purple-200">Authors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">4.8★</div>
                <div className="text-purple-200">Rating</div>
              </div>
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
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Blog Content */}
            <div className="lg:col-span-3">
              <BlogList
                posts={blogPosts}
                loading={loading}
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
        variants={itemVariants}
        className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Never Miss an Update
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of developers who get our latest articles delivered to their inbox
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Subscribe to Newsletter
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Blog;