import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, TrendingUp, Clock, Star } from 'lucide-react';
import BlogCard from './BlogCard';

const BlogList = ({ posts = [], loading = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const [viewMode, setViewMode] = useState('grid');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const categories = [
    { id: 'all', name: 'All Posts', count: posts.length },
    { id: 'web-development', name: 'Web Development', count: posts.filter(p => p.category === 'Web Development').length },
    { id: 'data-science', name: 'Data Science', count: posts.filter(p => p.category === 'Data Science').length },
    { id: 'ai-ml', name: 'AI/ML', count: posts.filter(p => p.category === 'AI/ML').length },
    { id: 'mobile-development', name: 'Mobile Development', count: posts.filter(p => p.category === 'Mobile Development').length },
    { id: 'career-tips', name: 'Career Tips', count: posts.filter(p => p.category === 'Career Tips').length }
  ];

  const sortOptions = [
    { id: 'latest', name: 'Latest First', icon: Clock },
    { id: 'popular', name: 'Most Popular', icon: TrendingUp },
    { id: 'rating', name: 'Highest Rated', icon: Star }
  ];

  useEffect(() => {
    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => {
        const title = post.title || post.heading || '';
        return (
          title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) ||
          post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      });
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => 
        post.category.toLowerCase().replace(/[^a-z0-9]/g, '-') === selectedCategory
      );
    }

    // Sort posts
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    setFilteredPosts(filtered);
  }, [posts, searchTerm, selectedCategory, sortBy]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  if (loading) {
    return (
      <div className="space-y-8">
        {/* Loading Skeleton */}
        <div className="animate-pulse">
          <div className="h-12 bg-[#F8FAFC] rounded-lg mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-[#F8FAFC] rounded-2xl h-96"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Search and Filter Header */}
      <motion.div
        variants={itemVariants}
        className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20"
      >
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1F2937]/40 w-5 h-5" />
          <input
            type="text"
            placeholder="Search articles, topics, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-[#3B82F6]/20 rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-[#F8FAFC]/50 backdrop-blur-sm text-[#1F2937] placeholder-[#1F2937]/50 transition-all duration-200"
          />
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Category Filters */}
          <motion.div
            variants={filterVariants}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white shadow-lg'
                    : 'bg-[#F8FAFC]/60 backdrop-blur-sm text-[#1F2937]/80 hover:bg-[#F8FAFC]/80 border border-[#3B82F6]/20'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Sort and View Controls */}
          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-[#F8FAFC]/60 backdrop-blur-sm border border-[#3B82F6]/20 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-[#1F2937] focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all duration-200"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#1F2937]/40 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-[#F8FAFC]/60 backdrop-blur-sm rounded-lg p-1 border border-[#3B82F6]/20">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#3B82F6] shadow-sm'
                    : 'text-[#1F2937]/60 hover:text-[#1F2937]/80'
                }`}
              >
                <Grid className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-white text-[#3B82F6] shadow-sm'
                    : 'text-[#1F2937]/60 hover:text-[#1F2937]/80'
                }`}
              >
                <List className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Results Count */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-between"
      >
        <p className="text-[#1F2937]">
          Showing <span className="font-semibold text-[#3B82F6]">{filteredPosts.length}</span> of{' '}
          <span className="font-semibold">{posts.length}</span> articles
        </p>
      </motion.div>

      {/* Blog Posts Grid/List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${viewMode}-${selectedCategory}-${sortBy}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 gap-8'
              : 'space-y-6'
          }
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.div
                key={post.id || index}
                variants={itemVariants}
                layout
                className={viewMode === 'list' ? 'w-full' : ''}
              >
                <BlogCard
                  {...post}
                  title={post.title || post.heading}
                  href={post.href || '#'}
                  className={viewMode === 'list' ? 'flex flex-row' : ''}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              variants={itemVariants}
              className="col-span-full text-center py-12"
            >
              <div className="text-[#1F2937]/40 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                No articles found
              </h3>
              <p className="text-[#1F2937]/70">
                Try adjusting your search terms or filters
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default BlogList;