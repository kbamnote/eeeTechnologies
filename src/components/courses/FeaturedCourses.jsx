import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Users, TrendingUp, ArrowRight } from 'lucide-react';

const FeaturedCourses = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master modern web development with React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      students: 2847,
      duration: "6 months",
      price: 15999,
      originalPrice: 24999,
      isTrending: true
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      description: "Learn Python, statistics, and machine learning algorithms",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      students: 1923,
      duration: "8 months",
      price: 18999,
      originalPrice: 29999,
      isTrending: true
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Build native iOS and Android apps using React Native",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      students: 1456,
      duration: "5 months",
      price: 13999,
      originalPrice: 21999,
      isTrending: false
    },
    {
      id: 4,
      title: "UI/UX Design Mastery",
      description: "Create stunning user interfaces with Figma, Adobe XD, and design principles",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      students: 2134,
      duration: "4 months",
      price: 12999,
      originalPrice: 19999,
      isTrending: true
    },
    {
      id: 5,
      title: "Cloud Computing & DevOps",
      description: "Master AWS, Docker, Kubernetes, and CI/CD pipelines",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      students: 1789,
      duration: "7 months",
      price: 16999,
      originalPrice: 26999,
      isTrending: false
    },
    {
      id: 6,
      title: "Cybersecurity Fundamentals",
      description: "Learn ethical hacking, network security, and threat analysis",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      students: 1567,
      duration: "6 months",
      price: 17999,
      originalPrice: 27999,
      isTrending: false
    },
    {
      id: 7,
      title: "Blockchain & Cryptocurrency",
      description: "Understand blockchain technology, smart contracts, and DeFi",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      students: 1245,
      duration: "5 months",
      price: 14999,
      originalPrice: 22999,
      isTrending: true
    },
    {
      id: 8,
      title: "Digital Marketing & SEO",
      description: "Master social media, content marketing, and search optimization",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      students: 3214,
      duration: "3 months",
      price: 9999,
      originalPrice: 15999,
      isTrending: false
    },
    {
      id: 9,
      title: "Artificial Intelligence & Deep Learning",
      description: "Build neural networks, computer vision, and NLP applications",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      students: 2456,
      duration: "9 months",
      price: 21999,
      originalPrice: 34999,
      isTrending: true
    }
  ];

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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={cardVariants} className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Featured Courses
          </motion.div>
          
          <motion.h2 variants={cardVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Most Popular
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Courses</span>
          </motion.h2>
          
          <motion.p variants={cardVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of students in our top-rated courses designed by industry experts
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredCourses.map((course) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 group"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {course.isTrending && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      TRENDING
                    </span>
                  </div>
                )}

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
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
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-200">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
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
                  </div>
                </div>

                {/* Enroll Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center group/btn"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCourses;