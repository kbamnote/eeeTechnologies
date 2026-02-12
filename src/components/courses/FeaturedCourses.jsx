import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EnrollmentModal from './EnrollmentModal';

const FeaturedCourses = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const featuredCourses = [
    {
      id: 1,
      slug: "full-stack-development",
      title: "Full Stack Development",
      description: "Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch with hands-on projects and industry best practices.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 5.0,
      students: 2847,
      duration: "6 months",
      price: 75000,
      originalPrice: 90000,
      isTrending: true
    },
    {
      id: 2,
      slug: "data-analysis",
      title: "Data Analysis",
      description: "Learn Python, SQL, data visualization, and statistical analysis to become a professional data analyst. Work with real datasets and industry tools.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      students: 1923,
      duration: "6 months",
      price: 75000,
      originalPrice: 90000,
      isTrending: true
    },
    {
      id: 3,
      slug: "ai-ml",
      title: "AI/ML",
      description: "Master artificial intelligence and machine learning with Python. Learn algorithms, neural networks, deep learning, and computer vision with hands-on projects.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      students: 1456,
      duration: "6 months",
      price: 75000,
      originalPrice: 90000,
      isTrending: true
    },
    {
      id: 4,
      slug: "software-testing",
      title: "Tester",
      description: "Become a professional software tester with expertise in manual and automated testing. Learn testing frameworks, bug tracking, and quality assurance processes.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      students: 987,
      duration: "6 months",
      price: 75000,
      originalPrice: 90000,
      isTrending: true
    }
  ];

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#06B6D4]/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={cardVariants} className="inline-flex items-center px-5 py-2.5 bg-[#3B82F6]/20 border border-[#3B82F6]/30 rounded-full text-[#3B82F6] text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Featured Courses
          </motion.div>
          
          <motion.h2 variants={cardVariants} className="text-5xl md:text-6xl font-bold text-[#1F2937] mb-6 tracking-tight">
            Most Popular
            <span className="block bg-[#3B82F6] bg-clip-text text-transparent mt-2"> Courses</span>
          </motion.h2>
          
          <motion.p variants={cardVariants} className="text-lg text-[#1F2937] max-w-3xl mx-auto">
            Join thousands of students in our top-rated courses designed by industry experts
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {featuredCourses
            .sort((a, b) => b.students - a.students) // Sort by popularity (students count)
            .map((course) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-[#F8FAFC] backdrop-blur-sm rounded-2xl overflow-hidden border border-[#3B82F6]/30 hover:border-[#3B82F6]/50 transition-all duration-500 shadow-lg group">
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {course.isTrending && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#06B6D4] text-white text-xs font-bold rounded-full">
                        TRENDING
                      </span>
                    </div>
                  )}

                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#3B82F6]">₹{course.price?.toLocaleString()}</div>
                      {course.originalPrice && (
                        <div className="text-sm text-[#3B82F6]/60 line-through">₹{course.originalPrice?.toLocaleString()}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1F2937] mb-3 line-clamp-2 group-hover:text-[#3B82F6] transition-colors duration-200">
                    {course.title}
                  </h3>

                  <p className="text-[#1F2937]/70 mb-4 line-clamp-2 text-sm leading-relaxed">
                    {course.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6 text-sm text-[#1F2937]/70">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{course.students?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-[#06B6D4]" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleEnrollClick(course)}
                      className="flex-1 bg-gradient-to-r from-[#0A2540] to-[#3B82F6] text-white font-semibold py-3 rounded-2xl shadow-2xl hover:shadow-[#3B82F6]/25 transition-all duration-200 flex items-center justify-center group/btn"
                    >
                      <span>Enroll Now</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        navigate(`/courses/${course.slug}`);
                      }}
                      className="flex-1 bg-[#3B82F6]/10 text-[#0A2540] font-semibold py-3 rounded-2xl border border-[#3B82F6]/50 hover:bg-[#3B82F6]/20 transition-all duration-200"
                    >
                      Know More
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enrollment Modal */}
        <EnrollmentModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          courseName={selectedCourse?.title}
        />
      </div>
    </section>
  );
};

export default FeaturedCourses;