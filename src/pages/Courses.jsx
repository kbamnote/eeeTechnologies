import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import FeaturedCourses from '../components/courses/FeaturedCourses';
// import CoursesGrid from '../components/courses/CoursesGrid';
// import CategorySidebar from '../components/courses/CategorySidebar';
// import SearchFilter from '../components/courses/SearchFilter';
import EnrollBanner from '../components/courses/EnrollBanner';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    difficulty: [],
    duration: [],
    rating: [],
    instructor: [],
    features: [],
    priceRange: [0, 5000]
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsSidebarOpen(false);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      difficulty: [],
      duration: [],
      rating: [],
      instructor: [],
      features: [],
      priceRange: [0, 5000]
    });
    setSelectedCategory('');
    setSearchTerm('');
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
    hidden: { opacity: 0, y: 20 },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Hero Section with Background Image */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop')",
          }}
        >
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/90 to-purple-950/95"></div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-5 py-2.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Transform Your Career
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Master
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2"> Technology</span>
              Skills That Matter
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover our comprehensive range of technology courses designed by industry experts. 
              From beginner-friendly introductions to advanced specializations, we have the perfect course to advance your career.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-200"
              >
                Browse All Courses
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-800/50 backdrop-blur-xl text-white font-semibold px-8 py-4 rounded-2xl border border-slate-700/50 hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-200"
              >
                View Free Courses
              </motion.button>
            </div>
          </motion.div>
        </div>

       
      </motion.section>

      {/* Featured Courses Section */}
      <motion.section variants={itemVariants} className="">
        <FeaturedCourses />
      </motion.section>

      {/* Main Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Mobile Sidebar Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl text-white hover:bg-slate-700/50 transition-colors duration-200"
            >
              <Menu className="w-5 h-5 mr-2" />
              <span>Categories & Filters</span>
            </button>
          </div>

          {/* Search Filter */}
          {/* <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          /> */}

          
        </div>
      </section>

      {/* Enrollment Banner */}
      <motion.section variants={itemVariants} className="py-16">
        <EnrollBanner />
      </motion.section>
    </div>
  );
};

export default Courses;