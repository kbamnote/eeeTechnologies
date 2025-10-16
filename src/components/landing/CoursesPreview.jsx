import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Database, Brain, Smartphone, Globe, Clock, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation';

const CoursesPreview = () => {
  const { ref, isInView } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { id: 'all', name: 'All Courses', icon: Globe },
    { id: 'web', name: 'Web Development', icon: Code },
    { id: 'data', name: 'Data Science', icon: Database },
    { id: 'ai', name: 'AI/ML', icon: Brain },
    { id: 'mobile', name: 'Mobile Dev', icon: Smartphone }
  ];

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      category: "web",
      description: "Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch.",
      duration: "6 months",
      level: "Beginner to Advanced",
      students: "2,500+",
      rating: 4.9,
      price: "₹49,999",
      originalPrice: "₹79,999",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      color: "from-blue-500 to-cyan-500",
      icon: Code,
      popular: true
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      category: "data",
      description: "Learn Python, machine learning, and data visualization. Transform data into actionable insights.",
      duration: "8 months",
      level: "Intermediate",
      students: "1,800+",
      rating: 4.8,
      price: "₹59,999",
      originalPrice: "₹89,999",
      technologies: ["Python", "Pandas", "Scikit-learn", "Tableau"],
      color: "from-purple-500 to-pink-500",
      icon: Database
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      category: "ai",
      description: "Deep dive into artificial intelligence, neural networks, and deep learning frameworks.",
      duration: "10 months",
      level: "Advanced",
      students: "1,200+",
      rating: 4.9,
      price: "₹69,999",
      originalPrice: "₹99,999",
      technologies: ["TensorFlow", "PyTorch", "OpenCV", "NLP"],
      color: "from-green-500 to-emerald-500",
      icon: Brain,
      trending: true
    },
    {
      id: 4,
      title: "Mobile App Development",
      category: "mobile",
      description: "Build cross-platform mobile apps with React Native and Flutter. Deploy to App Store and Play Store.",
      duration: "5 months",
      level: "Intermediate",
      students: "1,500+",
      rating: 4.7,
      price: "₹44,999",
      originalPrice: "₹69,999",
      technologies: ["React Native", "Flutter", "Firebase", "Redux"],
      color: "from-orange-500 to-red-500",
      icon: Smartphone
    },
    {
      id: 5,
      title: "DevOps & Cloud Computing",
      category: "web",
      description: "Master cloud platforms, containerization, and CI/CD pipelines for modern software deployment.",
      duration: "4 months",
      level: "Intermediate to Advanced",
      students: "900+",
      rating: 4.8,
      price: "₹54,999",
      originalPrice: "₹79,999",
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins"],
      color: "from-indigo-500 to-purple-500",
      icon: Globe
    },
    {
      id: 6,
      title: "Cybersecurity Fundamentals",
      category: "web",
      description: "Learn ethical hacking, network security, and cybersecurity best practices to protect digital assets.",
      duration: "6 months",
      level: "Beginner to Intermediate",
      students: "750+",
      rating: 4.6,
      price: "₹39,999",
      originalPrice: "₹59,999",
      technologies: ["Kali Linux", "Wireshark", "Metasploit", "OWASP"],
      color: "from-red-500 to-pink-500",
      icon: Code
    }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  const coursesPerSlide = 3;
  const totalSlides = Math.ceil(filteredCourses.length / coursesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentCourses = () => {
    const startIndex = currentSlide * coursesPerSlide;
    return filteredCourses.slice(startIndex, startIndex + coursesPerSlide);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-8 shadow-sm"
            >
              <Code className="w-4 h-4 mr-2 text-blue-500" />
              Popular Courses
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Master In-Demand
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tech Skills
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Choose from our comprehensive range of industry-relevant courses designed by experts 
              and updated with the latest technologies and market trends.
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentSlide(0);
                }}
                className={`group flex items-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md'
                }`}
              >
                <category.icon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Courses Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            {totalSlides > 1 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-14 h-14 bg-white rounded-full shadow-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:shadow-2xl transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-14 h-14 bg-white rounded-full shadow-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:shadow-2xl transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </>
            )}

            {/* Courses Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${currentSlide}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {getCurrentCourses().map((course, index) => (
                  <motion.div
                    key={course.id}
                    variants={staggerItem}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    {/* Badges */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        {course.popular && (
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-sm">
                            POPULAR
                          </span>
                        )}
                        {course.trending && (
                          <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold rounded-full shadow-sm">
                            TRENDING
                          </span>
                        )}
                      </div>
                      <div className={`w-14 h-14 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <course.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Course Content */}
                    <div className="space-y-5 mb-8">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {course.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {course.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {course.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {course.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                            +{course.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Course Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center justify-center mb-2">
                          <Clock className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="text-xs text-gray-600 font-medium">{course.duration}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center justify-center mb-2">
                          <Users className="w-4 h-4 text-green-500" />
                        </div>
                        <div className="text-xs text-gray-600 font-medium">{course.students}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center justify-center mb-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                        </div>
                        <div className="text-xs text-gray-600 font-medium">{course.rating}</div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          {course.price}
                        </div>
                        <div className="text-sm text-gray-500 line-through">
                          {course.originalPrice}
                        </div>
                      </div>
                      <div className="text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                        Save {Math.round((1 - parseInt(course.price.replace(/[^\d]/g, '')) / parseInt(course.originalPrice.replace(/[^\d]/g, ''))) * 100)}%
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full group/btn relative px-6 py-3 bg-gradient-to-r ${course.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Enroll Now
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            {totalSlides > 1 && (
              <div className="flex justify-center mt-12 space-x-3">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'bg-blue-600 shadow-lg'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* View All Courses CTA */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Courses
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesPreview;