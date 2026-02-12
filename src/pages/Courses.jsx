import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import FeaturedCourses from '../components/courses/FeaturedCourses';
// import CoursesGrid from '../components/courses/CoursesGrid';
// import CategorySidebar from '../components/courses/CategorySidebar';
// import SearchFilter from '../components/courses/SearchFilter';
import EnrollBanner from '../components/courses/EnrollBanner';
import EnrollmentModal from '../components/courses/EnrollmentModal';
import coursesBanner from '../assets/courses.jpg';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section with Background Image */}
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
              backgroundImage: `url(${coursesBanner})`,
            }}
          />

          {/* Backdrop Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/90 via-[#0A2540]/80 to-[#0A2540]/90"></div>
          
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
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="
                  inline-flex
                  items-center
                  px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full 
                  text-white text-sm font-bold mb-8 shadow-2xl
                ">
                <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
                TRANSFORM YOUR FUTURE
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-wide drop-shadow-xl"
              >
                MASTER
                <span className="block bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#3B82F6] bg-clip-text text-transparent mt-2 mb-3 drop-shadow-sm">
                  TECHNOLOGY
                </span>
                <span className="block bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#3B82F6] bg-clip-text text-transparent mt-2 mb-3 drop-shadow-sm">
                  SKILLS THAT MATTER
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto drop-shadow-lg font-medium"
              >
                Discover our comprehensive range of cutting-edge technology courses 
                <span className="text-white font-semibold"> designed by industry experts</span>. 
                From beginner-friendly introductions to advanced specializations, 
                <span className="text-white font-semibold"> we have the perfect course</span> to advance your career.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEnrollmentModalOpen(true)}
                  className="
                    bg-[#3B82F6] hover:bg-[#2563EB] 
                    text-white font-bold px-10 py-5 rounded-2xl 
                    shadow-2xl hover:shadow-blue-500/30 transition-all duration-300
                    text-lg tracking-wide flex items-center justify-center
                  "
                >
                  Explore Courses
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    bg-white/10 backdrop-blur-md text-white font-bold px-10 py-5 
                    rounded-2xl border border-white/20 
                    hover:bg-white/20 transition-all duration-300 
                    shadow-xl text-lg tracking-wide
                  "
                >
                  Free Resources
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <motion.section variants={itemVariants} className="">
        <FeaturedCourses />
      </motion.section>

      {/* Main Courses Section */}
      <section className="py-2">
        <div className="container mx-auto px-6">
          {/* Mobile Sidebar Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl text-gray-800 hover:bg-gray-50 transition-colors duration-200"
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

      <motion.section variants={itemVariants} className="py-2">
        <EnrollBanner />
      </motion.section>

      {/* Enrollment Modal */}
      <EnrollmentModal 
        isOpen={isEnrollmentModalOpen} 
        onClose={() => setIsEnrollmentModalOpen(false)} 
        courseName="General Course Inquiry"
        onSubmit={(formData) => {
          console.log('Enrollment form submitted with data:', formData);
          // Handle form submission here
        }}
      />
    </div>
  );
};

export default Courses;