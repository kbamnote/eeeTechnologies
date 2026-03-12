import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import EnrollmentModal from '../components/courses/EnrollmentModal';
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
  ArrowLeft,
  User,
  Mail,
  Phone,
  FileText,
  Video,
  Target,
  Zap
} from 'lucide-react';

import { courseData } from '../data/coursesData';


const CourseDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  // Find the course based on the slug
  const course = courseData.find(course => course.slug === slug);

  // SEO metadata would be set here if useSEO hook was available
  // For now, we're using static meta tags in the HTML template

  // Handle case where course is not found
  useEffect(() => {
    if (!course) {
      navigate('/courses');
    } else {
      // Scroll to top when component mounts
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [course, navigate]);

  const handleEnrollClick = () => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const handleEnrollmentSubmit = (formData) => {
    console.log('Enrollment submitted for course:', course.title, 'with data:', formData);
    // Here you would typically send the data to your backend
    // After successful submission, you might want to show a success message
    // and possibly redirect the user or update the UI accordingly
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  if (!course) {
    return null; // Navigate will redirect
  }

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

  // Placeholder image component to handle loading errors
  const PlaceholderImage = ({ src, alt, className }) => {
    const [imageError, setImageError] = useState(false);
    
    const handleError = () => {
      setImageError(true);
    };
    
    if (imageError) {
      return (
        <div className={`${className} bg-gray-200 flex items-center justify-center`}>
          <div className="text-blue-400 text-center">
            <Video className="w-12 h-12 mx-auto mb-2" />
            <span className="text-sm">Image not available</span>
          </div>
        </div>
      );
    }
    
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className}
        onError={handleError}
      />
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#0A2540] backdrop-blur-xl border-b border-[#0A2540]/50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link to="/" className="text-[#3B82F6]/70 hover:text-[#3B82F6] transition-colors duration-200 flex items-center gap-1">
              {/* <span>Home</span> */}
            </Link>
            <span className="mx-2 text-[#3B82F6]"></span>
            <Link to="/courses" className="text-[#3B82F6]/70 hover:text-[#3B82F6] transition-colors duration-200 flex items-center gap-1">
              {/* <span>Courses</span> */}
            </Link>
            <span className="mx-2 text-[#3B82F6]"></span>
            {/* <span className="text-[#F8FAFC] font-medium">{course.shortTitle}</span> */}
          </nav>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20"
      >
        {/* Course Header */}
        <motion.div
          variants={itemVariants}
          className="bg-[#0A2540] backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden mb-8 sm:mb-12 border border-[#0A2540]/50"
        >
          <div className="md:flex">
            {/* Course Image */}
            <div className="md:w-2/5 relative">
              <div className="relative h-full">
                <PlaceholderImage 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {course.isPopular && (
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-blue-100 text-xs font-bold rounded-full shadow-lg">
                      POPULAR
                    </span>
                  )}
                  {course.isBestseller && (
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-blue-100 text-xs font-bold rounded-full shadow-lg">
                      BESTSELLER
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Course Info */}
            <div className="md:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className="px-4 py-2 bg-blue-500/10 text-blue-400 text-sm font-semibold rounded-full border border-blue-500/30">
                  {course.category}
                </span>
                <div className="flex items-center bg-blue-800 backdrop-blur-xl px-4 py-2 rounded-full border border-blue-700">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-blue-100 font-bold text-lg">{course.rating}</span>
                  <span className="mx-2 text-blue-300">•</span>
                  <span className="text-blue-300 text-sm">{course.reviews.toLocaleString()} reviews</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-blue-100 mb-4 leading-tight">
                {course.title}
              </h1>
              
              <p className="text-blue-200 mb-6 text-base leading-relaxed max-w-3xl">
                {course.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="flex flex-col items-center bg-blue-800 backdrop-blur-xl p-4 rounded-xl border border-blue-700 hover:border-blue-600 transition-all duration-300">
                  <Clock className="w-6 h-6 text-blue-400 mb-2" />
                  <div className="text-center">
                    <div className="text-xs text-blue-300 uppercase tracking-wide font-medium">Duration</div>
                    <div className="font-bold text-blue-100 mt-1">{course.duration}</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center bg-blue-800 backdrop-blur-xl p-4 rounded-xl border border-blue-700 hover:border-blue-600 transition-all duration-300">
                  <Users className="w-6 h-6 text-green-400 mb-2" />
                  <div className="text-center">
                    <div className="text-xs text-blue-300 uppercase tracking-wide font-medium">Students</div>
                    <div className="font-bold text-blue-100 mt-1">{course.students.toLocaleString()}+</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center bg-blue-800 backdrop-blur-xl p-4 rounded-xl border border-blue-700 hover:border-blue-600 transition-all duration-300">
                  <Award className="w-6 h-6 text-purple-400 mb-2" />
                  <div className="text-center">
                    <div className="text-xs text-blue-300 uppercase tracking-wide font-medium">Level</div>
                    <div className="font-bold text-blue-100 mt-1">{course.level}</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center bg-blue-800 backdrop-blur-xl p-4 rounded-xl border border-blue-700 hover:border-blue-600 transition-all duration-300">
                  <Calendar className="w-6 h-6 text-blue-400 mb-2" />
                  <div className="text-center">
                    <div className="text-xs text-blue-300 uppercase tracking-wide font-medium">Next Batch</div>
                    <div className="font-bold text-blue-100 mt-1">{course.nextBatch}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-blue-800">
                <div className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-100">
                    ₹{course.price.toLocaleString()}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="text-blue-400 line-through text-lg">
                      ₹{course.originalPrice.toLocaleString()}
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 font-bold text-sm rounded-full border border-green-500/40">
                      Save ₹{(course.originalPrice - course.price).toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEnrollClick}
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-blue-100 font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Enroll Now
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-8 py-4 bg-blue-800 backdrop-blur-xl border-2 border-blue-700 text-blue-100 font-bold rounded-xl hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <FileText className="w-5 h-5 text-blue-100" />
                      Download Syllabus
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Course Tabs */}
        <motion.div 
          variants={itemVariants} 
          className="bg-blue-950 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden mb-8 sm:mb-12 border border-blue-800"
        >
          <div className="border-b border-blue-800 bg-blue-900 backdrop-blur-xl">
            <nav className="flex flex-wrap -mb-px px-2 sm:px-4">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-5 px-4 sm:px-6 text-center font-semibold text-sm rounded-t-lg transition-all duration-300 ${
                  activeTab === 'overview'
                    ? 'text-blue-400 border-b-2 border-blue-500 bg-slate-800/80 shadow-sm'
                    : 'text-blue-300 hover:text-blue-400'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('curriculum')}
                className={`py-5 px-4 sm:px-6 text-center font-semibold text-sm rounded-t-lg transition-all duration-300 ${
                  activeTab === 'curriculum'
                    ? 'text-blue-400 border-b-2 border-blue-500 bg-slate-800/80 shadow-sm'
                    : 'text-blue-300 hover:text-blue-400'
                }`}
              >
                Curriculum
              </button>
              <button
                onClick={() => setActiveTab('paymentPlans')}
                className={`py-5 px-4 sm:px-6 text-center font-semibold text-sm rounded-t-lg transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'paymentPlans'
                    ? 'text-blue-400 border-b-2 border-blue-500 bg-slate-800/80 shadow-sm'
                    : 'text-blue-300 hover:text-blue-400'
                }`}
              >
                <DollarSign className="w-4 h-4" />
                Payment Plans
              </button>
              <button
                onClick={() => setActiveTab('instructor')}
                className={`py-5 px-4 sm:px-6 text-center font-semibold text-sm rounded-t-lg transition-all duration-300 ${
                  activeTab === 'instructor'
                    ? 'text-blue-400 border-b-2 border-blue-500 bg-slate-800/80 shadow-sm'
                    : 'text-blue-300 hover:text-blue-400'
                }`}
              >
                Instructor
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-5 px-4 sm:px-6 text-center font-semibold text-sm rounded-t-lg transition-all duration-300 ${
                  activeTab === 'reviews'
                    ? 'text-blue-400 border-b-2 border-blue-500 bg-slate-800/80 shadow-sm'
                    : 'text-blue-300 hover:text-blue-400'
                }`}
              >
                Reviews
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className={`py-5 px-4 sm:px-6 text-center font-semibold text-sm rounded-t-lg transition-all duration-300 ${
                  activeTab === 'faq'
                    ? 'text-blue-400 border-b-2 border-blue-500 bg-slate-800/80 shadow-sm'
                    : 'text-blue-300 hover:text-blue-400'
                }`}
              >
                FAQ
              </button>
            </nav>
          </div>

          <div className="p-6 sm:p-8 bg-blue-900 backdrop-blur-xl">
            {activeTab === 'overview' && (
              <div className="p-2 sm:p-4">
                <div className="mb-8 sm:mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-100 mb-4 sm:mb-6 flex items-center gap-3">
                    <BookOpen className="w-8 h-8 text-blue-400" />
                    Course Description
                  </h2>
                  <div className="bg-blue-950 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-blue-800">
                    <p className="text-blue-200 mb-0 leading-relaxed text-base sm:text-lg">
                      {course.longDescription}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                  <div className="bg-blue-950 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-blue-800">
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-100 mb-6 flex items-center gap-3">
                      <Target className="w-7 h-7 text-green-400" />
                      What You'll Learn
                    </h3>
                    <div className="space-y-4">
                      {course.skills.map((skill, index) => (
                        <div key={index} className="flex items-start group">
                          <div className="flex-shrink-0 mt-0.5 mr-4">
                            <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-200 border border-green-500/30">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            </div>
                          </div>
                          <span className="text-blue-200 text-base sm:text-lg font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-blue-950 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-blue-800">
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-100 mb-6 flex items-center gap-3">
                      <Zap className="w-7 h-7 text-blue-400" />
                      Course Features
                    </h3>
                    <div className="space-y-4">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-start group">
                          <div className="flex-shrink-0 mt-0.5 mr-4">
                            <div className="w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200 border border-blue-500/30">
                              <TrendingUp className="w-4 h-4 text-blue-400" />
                            </div>
                          </div>
                          <span className="text-blue-200 text-base sm:text-lg font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-blue-950 backdrop-blur-xl rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-blue-800">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-100 mb-6 flex items-center gap-3">
                    <User className="w-7 h-7 text-purple-400" />
                    Career Paths
                  </h3>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {course.careerPaths.map((path, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 sm:px-5 sm:py-3 bg-blue-800 backdrop-blur-xl border border-blue-700 text-blue-200 rounded-xl font-semibold text-sm sm:text-base hover:bg-blue-700 transition-colors duration-200"
                      >
                        {path}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="p-2 sm:p-4">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-100 mb-4 sm:mb-6 flex items-center gap-3">
                    <FileText className="w-8 h-8 text-purple-400" />
                    Course Curriculum
                  </h2>
                  <div className="bg-blue-950 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-blue-800">
                    <p className="text-blue-200 mb-0 text-base sm:text-lg leading-relaxed">
                      Our comprehensive curriculum is designed by industry experts to ensure you gain practical skills that employers demand.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6 sm:space-y-8">
                  {course.curriculum.map((module, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-blue-950 backdrop-blur-xl rounded-2xl overflow-hidden border border-blue-800 hover:border-blue-700 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="bg-blue-900 backdrop-blur-xl px-6 sm:px-8 py-5 sm:py-6 border-b border-blue-700">
                        <h3 className="text-xl font-bold text-blue-100 flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-blue-100 font-bold">
                            {index + 1}
                          </div>
                          {module.module}
                        </h3>
                      </div>
                      <div className="p-6 sm:p-8">
                        <ul className="space-y-4">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start group">
                              <div className="flex-shrink-0 mt-1 mr-4">
                                <div className="w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200 border border-blue-500/30">
                                  <Play className="w-3 h-3 text-blue-400" />
                                </div>
                              </div>
                              <span className="text-blue-200 text-base sm:text-lg font-medium">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'paymentPlans' && course.paymentPlans && (
              <div className="p-2 sm:p-4">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-100 mb-4 sm:mb-6 flex items-center gap-3">
                    <DollarSign className="w-8 h-8 text-green-400" />
                    Flexible Payment Plans
                  </h2>
                  <div className="bg-blue-950 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-blue-800">
                    <p className="text-blue-200 mb-0 text-base sm:text-lg leading-relaxed">
                      We offer multiple payment options to help you manage your investment in your future. Choose the plan that best suits your needs.
                    </p>
                  </div>
                </div>
                
                <div className="overflow-x-auto rounded-2xl border border-blue-800">
                  <table className="w-full text-left text-blue-100 bg-blue-950/50 backdrop-blur-xl">
                    <thead className="bg-blue-900 border-b border-blue-700">
                      <tr>
                        <th className="px-6 py-4 font-bold text-lg whitespace-nowrap">Plan</th>
                        <th className="px-6 py-4 font-bold text-lg whitespace-nowrap">Registration</th>
                        <th className="px-6 py-4 font-bold text-lg whitespace-nowrap">Month 1</th>
                        <th className="px-6 py-4 font-bold text-lg whitespace-nowrap">Month 2</th>
                        <th className="px-6 py-4 font-bold text-lg whitespace-nowrap">Month 3</th>
                        <th className="px-6 py-4 font-bold text-lg whitespace-nowrap">Month 4</th>
                        <th className="px-6 py-4 font-bold text-lg whitespace-nowrap">Month 5</th>
                        <th className="px-6 py-4 font-bold text-lg whitespace-nowrap">Month 6</th>
                        <th className="px-6 py-4 font-bold text-lg whitespace-nowrap">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.paymentPlans.map((plan, index) => (
                        <tr key={index} className="border-b border-blue-800 hover:bg-blue-900/50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-white whitespace-nowrap">{plan.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap">₹{plan.registration.toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{plan.m1}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{plan.m2}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{plan.m3}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{plan.m4}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{plan.m5}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{plan.m6}</td>
                          <td className="px-6 py-4 font-bold text-green-400 whitespace-nowrap">₹{plan.total.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'instructor' && (
              <div className="p-2 sm:p-4">
                <div className="bg-blue-950 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-blue-800 mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-100 mb-6 flex items-center gap-3">
                    <User className="w-8 h-8 text-indigo-400" />
                    Meet Your Instructor
                  </h2>
                  
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    <div className="relative">
                      <PlaceholderImage 
                        src={course.instructorImage} 
                        alt={course.instructor} 
                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover border-4 border-blue-700 shadow-xl"
                      />
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                        <Award className="w-6 h-6 text-blue-100" />
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center lg:text-left">
                      <h3 className="text-2xl sm:text-3xl font-bold text-blue-100 mb-3">{course.instructor}</h3>
                      <p className="text-blue-200 mb-6 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0">
                        {course.instructorBio}
                      </p>
                      
                      <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                        <div className="flex items-center bg-blue-800 backdrop-blur-xl px-5 py-3 rounded-xl border border-blue-700">
                          <BookOpen className="w-6 h-6 text-blue-400 mr-3" />
                          <div>
                            <div className="font-bold text-blue-100">{course.reviews.toLocaleString()}</div>
                            <div className="text-sm text-blue-300">Student Reviews</div>
                          </div>
                        </div>
                        <div className="flex items-center bg-blue-800 backdrop-blur-xl px-5 py-3 rounded-xl border border-blue-700">
                          <Users className="w-6 h-6 text-green-400 mr-3" />
                          <div>
                            <div className="font-bold text-blue-100">{course.students.toLocaleString()}</div>
                            <div className="text-sm text-blue-300">Students Taught</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-blue-100 font-semibold rounded-xl hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300">
                        <Mail className="w-5 h-5 mr-2" />
                        Contact Instructor
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-950 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-blue-800">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-100 mb-4">Instructor's Teaching Philosophy</h3>
                  <p className="text-blue-200 text-base sm:text-lg leading-relaxed max-w-4xl">
                    Our instructors believe in hands-on learning and real-world application. They bring industry experience directly to the classroom, ensuring you learn skills that matter in today's competitive job market.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="p-2 sm:p-4">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-100 mb-4 sm:mb-6 flex items-center gap-3">
                    <Star className="w-8 h-8 text-amber-400 fill-current" />
                    Student Reviews
                  </h2>
                  <div className="bg-blue-950 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-blue-800">
                    <p className="text-blue-200 mb-0 text-base sm:text-lg leading-relaxed">
                      Hear what our students have to say about their learning experience and career transformation.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {[1, 2, 3, 4].map((review) => (
                    <motion.div 
                      key={review} 
                      className="bg-blue-950 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-blue-800 hover:border-blue-700 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <div className="flex items-center">
                          {[...Array(5)].map((star, i) => (
                            <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                          ))}
                        </div>
                        <div className="font-bold text-blue-100">Student {review}</div>
                        <div className="text-blue-400 text-sm">2 weeks ago</div>
                      </div>
                      <p className="text-blue-200 text-base sm:text-lg leading-relaxed mb-5">
                        This course completely transformed my career prospects. The instructors are knowledgeable and the curriculum is well-structured. I landed a job within 3 months of completing the course!
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-blue-100 font-bold mr-3">
                          S{review}
                        </div>
                        <div>
                          <div className="font-semibold text-blue-100">Student {review}</div>
                          <div className="text-sm text-blue-300">Software Developer</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 sm:mt-12 text-center">
                  <button className="inline-flex items-center px-6 py-3 bg-blue-800 backdrop-blur-xl border-2 border-blue-700 text-blue-100 font-semibold rounded-xl hover:border-blue-600 transition-all duration-300">
                    <span>Load More Reviews</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="p-2 sm:p-4">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-100 mb-4 sm:mb-6 flex items-center gap-3">
                    <Users className="w-8 h-8 text-teal-400" />
                    Frequently Asked Questions
                  </h2>
                  <div className="bg-blue-950 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-blue-800">
                    <p className="text-blue-200 mb-0 text-base sm:text-lg leading-relaxed">
                      Find answers to common questions about our courses, enrollment process, and learning experience.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-5 sm:space-y-6">
                  {course.faqs.map((faq, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-blue-950 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-blue-800 hover:border-blue-700 transition-all duration-300"
                      whileHover={{ y: -3 }}
                    >
                      <h3 className="text-lg sm:text-xl font-bold text-blue-100 mb-3 flex items-start gap-3">
                        <div className="w-6 h-6 bg-teal-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-teal-500/30">
                          <span className="text-teal-400 font-bold text-sm">{index + 1}</span>
                        </div>
                        {faq.question}
                      </h3>
                      <p className="text-blue-200 text-base leading-relaxed pl-9">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 sm:mt-12 bg-blue-950 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-blue-800">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-100 mb-4">Still Have Questions?</h3>
                  <p className="text-blue-200 text-base sm:text-lg mb-5">
                    Our support team is here to help you with any additional questions about our courses.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-blue-100 font-semibold rounded-xl hover:shadow-xl hover:shadow-teal-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      Email Support
                    </button>
                    <button className="flex-1 px-6 py-3 bg-blue-800 backdrop-blur-xl border-2 border-blue-700 text-blue-100 font-semibold rounded-xl hover:border-teal-400 transition-all duration-300 flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5 text-blue-100" />
                      Call Us
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants} 
          className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center text-blue-100 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-2xl mx-auto opacity-90">
              Join thousands of successful students who have advanced their careers with our courses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEnrollClick}
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:bg-gray-100 transition-all duration-300 text-lg sm:text-xl flex items-center gap-3"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-blue-100 font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg sm:text-xl flex items-center gap-3"
              >
                <Phone className="w-6 h-6" />
                <span>Schedule a Call</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Enrollment Modal */}
      <EnrollmentModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        courseName={course.title}
        onSubmit={handleEnrollmentSubmit}
      />
    </div>
  );
}
    
export default CourseDetail;