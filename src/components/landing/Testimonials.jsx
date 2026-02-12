import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Play,
  Award,
  TrendingUp,
  Users,
  Heart,
  CheckCircle
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Testimonials = ({ bgClass = 'bg-white' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, controls } = useScrollAnimation();

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Full Stack Developer",
      company: "Google",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "eee Technologies transformed my career completely. The hands-on approach and industry-relevant curriculum helped me land my dream job at Google. The instructors are amazing!",
      rating: 5,
      course: "Full Stack Development",
      salary: "$120k",
      video: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Data Scientist",
      company: "Microsoft",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The AI/ML course exceeded my expectations. Real-world projects and mentorship made all the difference. I got placed at Microsoft with a 200% salary increase!",
      rating: 5,
      course: "AI/ML Specialization",
      salary: "$140k",
      video: false
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "DevOps Engineer",
      company: "Amazon",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "From zero to hero in 6 months! The cloud computing track prepared me perfectly for my role at Amazon. The career support team is incredible.",
      rating: 5,
      course: "Cloud Computing",
      salary: "$110k",
      video: true
    },
    {
      id: 4,
      name: "David Kim",
      role: "Mobile App Developer",
      company: "Meta",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The React Native course was comprehensive and up-to-date. I built 5 apps during the program and now I'm developing mobile apps at Meta!",
      rating: 5,
      course: "Mobile Development",
      salary: "$125k",
      video: false
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Cybersecurity Analyst",
      company: "IBM",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      content: "The cybersecurity program gave me hands-on experience with real security challenges. The job placement support helped me secure a position at IBM.",
      rating: 5,
      course: "Cybersecurity",
      salary: "$105k",
      video: true
    }
  ];

  const stats = [
    { number: "98%", label: "Success Rate", icon: TrendingUp },
    { number: "5000+", label: "Alumni", icon: Users },
    { number: "4.9/5", label: "Rating", icon: Star },
    { number: "50+", label: "Awards", icon: Award }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-2000"></div>
        {/* Additional background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e5e7eb%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={cardVariants}
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-sm"
          >
            <Heart className="w-4 h-4" />
            Success Stories
          </motion.div>
          
          <motion.h2 
            variants={cardVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
          >
            What Our
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Alumni Say</span>
          </motion.h2>
          
          <motion.p 
            variants={cardVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Real stories from real people who transformed their careers with our programs
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-purple-200 group-hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative"
        >
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <AnimatePresence mode="wait" custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="p-8 md:p-12 lg:p-16"
              >
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Content */}
                  <div className="space-y-6 lg:space-y-8">
                    {/* Quote Icon */}
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Quote className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-medium">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    {/* Course & Salary */}
                    <div className="flex flex-wrap gap-4">
                      <span className="bg-purple-100 text-purple-600 px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm">
                        {testimonials[currentIndex].course}
                      </span>
                      <span className="bg-green-100 text-green-600 px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm">
                        Salary: {testimonials[currentIndex].salary}
                      </span>
                    </div>
                  </div>

                  {/* Profile */}
                  <div className="text-center md:text-left">
                    <div className="relative inline-block mb-6 lg:mb-8">
                      <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto md:mx-0">
                        <img 
                          src={testimonials[currentIndex].image} 
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {testimonials[currentIndex].video && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute -bottom-2 -right-2 w-12 h-12 lg:w-14 lg:h-14 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-600 transition-colors"
                        >
                          <Play className="w-5 h-5 lg:w-6 lg:h-6 ml-1" />
                        </motion.button>
                      )}
                    </div>

                    <div className="space-y-2 lg:space-y-3">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-lg lg:text-xl text-purple-600 font-semibold">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-gray-600 font-medium lg:text-lg">
                        {testimonials[currentIndex].company}
                      </p>
                      <div className="flex items-center justify-center md:justify-start gap-2 mt-4 lg:mt-6">
                        <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" />
                        <span className="text-green-600 font-semibold lg:text-lg">Verified Graduate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-purple-600 hover:shadow-xl hover:scale-110 transition-all duration-300 z-10 border border-gray-100"
            >
              <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-purple-600 hover:shadow-xl hover:scale-110 transition-all duration-300 z-10 border border-gray-100"
            >
              <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-600 w-8 shadow-md' 
                    : 'bg-gray-300 w-3 hover:bg-purple-400 hover:w-6'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-20"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:-translate-y-2 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden shadow-md">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 lg:text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm lg:text-base text-gray-600">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed group-hover:text-gray-700 transition-colors">
                {testimonial.content.slice(0, 120)}...
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs lg:text-sm text-purple-600 font-semibold bg-purple-50 px-3 py-1 rounded-full">
                  {testimonial.course}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;