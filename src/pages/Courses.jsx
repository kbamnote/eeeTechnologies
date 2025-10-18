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
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative py-20 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
              Transform Your Career
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Master
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Technology</span>
              <br />Skills That Matter
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover our comprehensive range of technology courses designed by industry experts. 
              From beginner-friendly introductions to advanced specializations, we have the perfect course to advance your career.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              >
                Browse All Courses
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 backdrop-blur-sm text-gray-700 font-semibold px-8 py-4 rounded-xl border border-gray-200 hover:bg-white hover:border-gray-300 transition-all duration-200"
              >
                View Free Courses
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Courses Section */}
      <motion.section variants={itemVariants} className="py-16">
        <FeaturedCourses />
      </motion.section>

      {/* Main Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Mobile Sidebar Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-700 hover:bg-white transition-colors duration-200"
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
