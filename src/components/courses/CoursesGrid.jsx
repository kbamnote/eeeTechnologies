import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  Users, 
  Star, 
  Award, 
  Play, 
  BookOpen, 
  TrendingUp,
  Calendar,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Filter,
  Search
} from 'lucide-react';

const CoursesGrid = ({ courses = [], loading = false, onEnroll }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [filteredCourses, setFilteredCourses] = useState(courses);

  // Default courses data
  const defaultCourses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch.",
      category: "Web Development",
      level: "Beginner to Advanced",
      duration: "6 months",
      students: 2847,
      rating: 4.9,
      reviews: 1234,
      price: 15999,
      originalPrice: 24999,
      instructor: "Sarah Johnson",
      instructorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "HTML/CSS"],
      features: ["Live Projects", "1-on-1 Mentoring", "Job Assistance", "Certificate"],
      nextBatch: "Jan 15, 2025",
      isPopular: true,
      isBestseller: true
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      description: "Learn Python, statistics, machine learning algorithms, and data visualization to become a data scientist.",
      category: "Data Science",
      level: "Intermediate",
      duration: "8 months",
      students: 1923,
      rating: 4.8,
      reviews: 876,
      price: 18999,
      originalPrice: 29999,
      instructor: "Dr. Michael Chen",
      instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      skills: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "SQL", "Statistics"],
      features: ["Real Datasets", "Industry Projects", "Kaggle Competitions", "Certificate"],
      nextBatch: "Jan 20, 2025",
      isPopular: true
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Build native iOS and Android apps using React Native and Flutter. Deploy to app stores.",
      category: "Mobile Development",
      level: "Beginner",
      duration: "5 months",
      students: 1456,
      rating: 4.7,
      reviews: 654,
      price: 13999,
      originalPrice: 21999,
      instructor: "Alex Rodriguez",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      skills: ["React Native", "Flutter", "Dart", "Firebase", "App Store", "Play Store"],
      features: ["App Store Deployment", "Live Projects", "UI/UX Design", "Certificate"],
      nextBatch: "Feb 1, 2025"
    },
    {
      id: 4,
      title: "DevOps & Cloud Computing",
      description: "Master AWS, Docker, Kubernetes, and CI/CD pipelines. Become a DevOps engineer.",
      category: "DevOps",
      level: "Advanced",
      duration: "4 months",
      students: 987,
      rating: 4.9,
      reviews: 432,
      price: 16999,
      originalPrice: 25999,
      instructor: "David Kumar",
      instructorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Linux"],
      features: ["AWS Credits", "Hands-on Labs", "Industry Projects", "Certificate"],
      nextBatch: "Jan 25, 2025",
      isPopular: true
    },
    {
      id: 5,
      title: "UI/UX Design Masterclass",
      description: "Learn design thinking, prototyping, and user research. Master Figma, Adobe XD, and design systems.",
      category: "Design",
      level: "Beginner",
      duration: "3 months",
      students: 1234,
      rating: 4.8,
      reviews: 567,
      price: 9999,
      originalPrice: 15999,
      instructor: "Emma Wilson",
      instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems", "Wireframing"],
      features: ["Portfolio Projects", "Design Critique", "Industry Mentors", "Certificate"],
      nextBatch: "Feb 5, 2025"
    },
    {
      id: 6,
      title: "Cybersecurity Fundamentals",
      description: "Learn ethical hacking, network security, and cybersecurity best practices. Get industry certifications.",
      category: "Cybersecurity",
      level: "Intermediate",
      duration: "6 months",
      students: 756,
      rating: 4.7,
      reviews: 298,
      price: 17999,
      originalPrice: 27999,
      instructor: "James Thompson",
      instructorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      skills: ["Ethical Hacking", "Network Security", "Penetration Testing", "CISSP", "CEH", "Security+"],
      features: ["Lab Environment", "Certification Prep", "Real Scenarios", "Certificate"],
      nextBatch: "Feb 10, 2025"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'mobile-development', name: 'Mobile Development' },
    { id: 'devops', name: 'DevOps' },
    { id: 'design', name: 'Design' },
    { id: 'cybersecurity', name: 'Cybersecurity' }
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const sortOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest First' }
  ];

  React.useEffect(() => {
    let filtered = courses.length > 0 ? courses : defaultCourses;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.skills?.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(course => 
        course.category.toLowerCase().replace(/[^a-z0-9]/g, '-') === selectedCategory
      );
    }

    // Filter by level
    if (selectedLevel !== 'all') {
      filtered = filtered.filter(course => 
        course.level.toLowerCase().includes(selectedLevel)
      );
    }

    // Sort courses
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'price-low':
        filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case 'price-high':
        filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.nextBatch) - new Date(a.nextBatch));
        break;
      default:
        filtered.sort((a, b) => (b.students || 0) - (a.students || 0));
    }

    setFilteredCourses(filtered);
  }, [courses, searchTerm, selectedCategory, selectedLevel, sortBy]);

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

  const CourseCard = ({ course }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        variants={cardVariants}
        whileHover={{ y: -8, scale: 1.02 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group"
      >
        {/* Course Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {course.isBestseller && (
              <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                BESTSELLER
              </span>
            )}
            {course.isPopular && (
              <span className="px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">
                POPULAR
              </span>
            )}
          </div>

          {/* Play Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            className="absolute inset-0 flex items-center justify-center bg-black/50"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              <Play className="w-6 h-6 text-purple-600 ml-1" />
            </motion.button>
          </motion.div>

          {/* Price Badge */}
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg">
            <div className="text-right">
              <div className="text-lg font-bold text-purple-600">₹{course.price?.toLocaleString()}</div>
              {course.originalPrice && (
                <div className="text-sm text-gray-500 line-through">₹{course.originalPrice?.toLocaleString()}</div>
              )}
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="p-6">
          {/* Category & Level */}
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-full">
              {course.category}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {course.level}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 text-sm leading-relaxed">
            {course.description}
          </p>

          {/* Instructor */}
          <div className="flex items-center mb-4">
            <img
              src={course.instructorImage}
              alt={course.instructor}
              className="w-8 h-8 rounded-full mr-3 object-cover"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {course.instructor}
            </span>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{course.students?.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 text-yellow-500" />
              <span>{course.rating}</span>
              <span className="ml-1">({course.reviews})</span>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {course.skills?.slice(0, 4).map((skill, index) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                >
                  {skill}
                </span>
              ))}
              {course.skills?.length > 4 && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                  +{course.skills.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-2">
              {course.features?.slice(0, 4).map((feature, index) => (
                <div key={feature} className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                  <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Next Batch */}
          <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center text-sm">
              <Calendar className="w-4 h-4 mr-2 text-purple-600" />
              <span className="text-gray-600 dark:text-gray-400">Next Batch:</span>
            </div>
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              {course.nextBatch}
            </span>
          </div>

          {/* Enroll Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onEnroll?.(course)}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center group/btn"
          >
            <span>Enroll Now</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </div>
      </motion.div>
    );
  };

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-200 rounded-lg mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-2xl h-96"></div>
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
      {/* Filters */}
      <motion.div
        variants={cardVariants}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
      >
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search courses, skills, or instructors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
          />
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Level Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Level
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              {levels.map(level => (
                <option key={level.id} value={level.id}>
                  {level.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <div className="flex items-end">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-purple-600">{filteredCourses.length}</span> courses found
            </div>
          </div>
        </div>
      </motion.div>

      {/* Courses Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedCategory}-${selectedLevel}-${sortBy}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <motion.div
              variants={cardVariants}
              className="col-span-full text-center py-12"
            >
              <div className="text-gray-400 mb-4">
                <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                No courses found
              </h3>
              <p className="text-gray-500 dark:text-gray-500">
                Try adjusting your search terms or filters
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default CoursesGrid;