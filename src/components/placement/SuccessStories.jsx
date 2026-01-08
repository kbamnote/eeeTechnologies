import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  MapPin, 
  Building, 
  TrendingUp,
  Calendar,
  Award,
  Quote,
  Play,
  ExternalLink,
  Users,
  DollarSign
} from 'lucide-react';

const SuccessStories = ({ stories = [] }) => {
  const [currentStory, setCurrentStory] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Default success stories data - New students from assets
  const defaultStories = [
    {
      id: 1,
      name: "Aryan Nagardhankar",  // From AryanNagarDhankar BackendDeveloper.jpg
      role: "Backend Developer",
      company: "Elite Jobs",
      location: "Nagpur, India",
      image: "/src/assets/AryanNagarDhankar BackendDeveloper.jpg",
      companyLogo: "/src/assets/logo.png",
      course: "Full Stack Development",
      duration: "6 months",
      previousRole: "Student",
      story: "The comprehensive curriculum at EEE Technologies transformed my coding skills completely. The mentorship was exceptional, and the placement support helped me land my dream job as a backend developer. The real-world projects gave me the confidence to tackle complex problems.",
      testimonial: "EEE Technologies didn't just teach me to code; they taught me to think like a software engineer. The industry-relevant curriculum and personalized mentoring made all the difference.",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
      achievements: ["Developed 5 major projects", "Implemented microservices architecture", "Optimized database performance by 40%"],
      videoUrl: "https://example.com/video1",
      category: "full-stack",
      graduationYear: 2024,
      rating: 5
    },
    {
      id: 2,
      name: "Pran Wasnik",  // From PranWasnik AI_Ml.jpg
      role: "AI/ML Engineer",
      company: "Elite Jobs",
      location: "Nagpur, India",
      image: "/src/assets/PranWasnik AI_Ml.jpg",
      companyLogo: "/src/assets/logo.png",
      course: "AI/ML",
      duration: "6 months",
      previousRole: "Graduate",
      story: "Coming from a non-technical background, I was skeptical about transitioning to AI/ML. But the structured learning path and practical approach at EEE Technologies made it possible. The instructors were patient and the projects were industry-relevant.",
      testimonial: "The transition from graduate to AI/ML engineer seemed impossible until I joined EEE Technologies. Their practical approach and industry connections made my dream a reality.",
      skills: ["Python", "Machine Learning", "Deep Learning", "TensorFlow", "Computer Vision"],
      achievements: ["Built ML models for client projects", "Created NLP solutions", "Improved prediction accuracy by 25%"],
      videoUrl: "https://example.com/video2",
      category: "ai-ml",
      graduationYear: 2024,
      rating: 5
    },
    {
      id: 3,
      name: "Samad Khan",  // From SamadKhan FrontEndDeveloper.jpg
      role: "Frontend Developer",
      company: "Elite Jobs",
      location: "Nagpur, India",
      image: "/src/assets/SamadKhan FrontEndDeveloper.jpg",
      companyLogo: "/src/assets/logo.png",
      course: "Full Stack Development",
      duration: "6 months",
      previousRole: "Student",
      story: "As a fresh graduate, I was struggling to find opportunities. EEE Technologies not only taught me frontend development but also helped me build a strong portfolio. The placement team worked tirelessly to connect me with top companies.",
      testimonial: "From zero to hero! EEE Technologies gave me the skills and confidence to start my career in frontend development. The support system is incredible.",
      skills: ["React", "JavaScript", "TypeScript", "CSS", "Redux"],
      achievements: ["Developed responsive UIs", "Optimized website performance by 60%", "Collaborated on 3 major client projects"],
      videoUrl: "https://example.com/video3",
      category: "full-stack",
      graduationYear: 2025,
      rating: 5
    },
    {
      id: 4,
      name: "Shobhit Gajbe",  // From ShobhitGajbe Data_Analysis.jpg
      role: "Data Analyst",
      company: "Elite Jobs",
      location: "Nagpur, India",
      image: "/src/assets/ShobhitGajbe Data_Analysis.jpg",
      companyLogo: "/src/assets/logo.png",
      course: "Data Analysis",
      duration: "6 months",
      previousRole: "Student",
      story: "The hands-on labs and real-world scenarios at EEE Technologies prepared me perfectly for the data analyst role. The practical experience with analytics tools was invaluable.",
      testimonial: "EEE Technologies' data analysis program is industry-leading. The practical approach and expert instructors made complex concepts easy to understand.",
      skills: ["Python", "SQL", "Excel", "Tableau", "Power BI"],
      achievements: ["Analyzed datasets saving $1.5M annually", "Created 12 interactive dashboards", "Identified cost reduction opportunities worth $500K"],
      videoUrl: "https://example.com/video4",
      category: "data-analysis",
      graduationYear: 2021,
      rating: 5
    }
  ];

  const categories = [
    { id: 'all', name: 'All Stories' },
    { id: 'full-stack', name: 'Full Stack Development' },
    { id: 'ai-ml', name: 'AI/ML' },
    { id: 'data-analysis', name: 'Data Analysis' }
  ];

  const displayStories = stories.length > 0 ? stories : defaultStories;
  const filteredStories = selectedCategory === 'all' 
    ? displayStories 
    : displayStories.filter(story => story.category === selectedCategory);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % filteredStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + filteredStories.length) % filteredStories.length);
  };

  // Auto-rotation functionality
  const autoRotateRef = useRef(null);

  useEffect(() => {
    // Clear any existing interval
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
    }
    
    // Set up new interval if we have stories
    if (filteredStories.length > 0) {
      autoRotateRef.current = setInterval(() => {
        setCurrentStory(prev => (prev + 1) % filteredStories.length);
      }, 5000); // Rotate every 5 seconds
    }
    
    // Cleanup function
    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, [filteredStories.length]);

  // Pause auto-rotation when user interacts with indicators
  const handleIndicatorHover = () => {
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
      autoRotateRef.current = null;
    }
  };

  const handleIndicatorLeave = () => {
    if (filteredStories.length > 0) {
      autoRotateRef.current = setInterval(() => {
        setCurrentStory(prev => (prev + 1) % filteredStories.length);
      }, 5000);
    }
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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const currentStoryData = filteredStories[currentStory];

  if (!currentStoryData) {
    return null;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={cardVariants} className="text-center mb-16">
        <div className="inline-flex items-center px-5 py-2.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6">
          <Award className="w-4 h-4 mr-2" />
          Success Stories
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Student
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
            Success Stories
          </span>
        </h2>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Discover how our students transformed their careers and achieved their dreams with our comprehensive training programs.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div variants={cardVariants} className="flex justify-center">
        <div className="flex flex-wrap gap-2 bg-slate-800/50 backdrop-blur-xl p-2 rounded-2xl shadow-lg border border-slate-700/50">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentStory(0);
              }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 border border-slate-600/50'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Main Story Card */}
      <motion.div variants={cardVariants} className="relative">
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden">
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={currentStory}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="grid lg:grid-cols-2 gap-8 p-8"
            >
              {/* Left Side - Story Content */}
              <div className="space-y-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/30">
                  <Quote className="w-6 h-6 text-blue-400" />
                </div>

                {/* Testimonial */}
                <blockquote className="text-xl font-medium text-white leading-relaxed">
                  "{currentStoryData.testimonial}"
                </blockquote>

                {/* Story */}
                <p className="text-gray-400 leading-relaxed">
                  {currentStoryData.story}
                </p>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Key Skills Learned</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentStoryData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {currentStoryData.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Award className="w-4 h-4 text-green-500" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

               
              </div>

              {/* Right Side - Profile & Stats */}
              <div className="space-y-6">
                {/* Profile Card */}
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <img
                      src={currentStoryData.image}
                      alt={currentStoryData.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-slate-700 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-slate-700 rounded-full p-2 shadow-lg">
                      <img
                        src={currentStoryData.companyLogo}
                        alt={currentStoryData.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {currentStoryData.name}
                  </h3>
                  
                  <p className="text-lg text-blue-400 font-semibold mb-2">
                    {currentStoryData.role}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-4 text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Building className="w-4 h-4" />
                      <span>{currentStoryData.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{currentStoryData.location}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < currentStoryData.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-500">
                      <div className="text-2xl font-bold text-blue-400">
                        {currentStoryData.duration}
                      </div>
                      <div className="text-sm text-gray-400">
                        Course Duration
                      </div>
                    </div>
                    
                    <div className="text-center p-3 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-500">
                      <div className="text-2xl font-bold text-green-400">
                        {currentStoryData.graduationYear}
                      </div>
                      <div className="text-sm text-gray-400">
                        Graduated
                      </div>
                    </div>
                    
                    <div className="text-center p-3 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-500">
                      <div className="text-2xl font-bold text-blue-400">
                        {currentStoryData.previousRole}
                      </div>
                      <div className="text-sm text-gray-400">
                        Previous Role
                      </div>
                    </div>
                    
                    <div className="text-center p-3 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-500">
                      <div className="text-2xl font-bold text-purple-400">
                        {currentStoryData.company}
                      </div>
                      <div className="text-sm text-gray-400">
                        Current Company
                      </div>
                    </div>
                  </div>

                  {/* Course Badge */}
                  <div className="mt-6 text-center">
                    <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 text-sm font-semibold rounded-full border border-blue-500/30">
                      {currentStoryData.course}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>


        </div>

        {/* Story Indicators */}
        <div 
          className="flex justify-center mt-6 space-x-2"
          onMouseEnter={handleIndicatorHover}
          onMouseLeave={handleIndicatorLeave}
        >
          {filteredStories.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                // Clear auto-rotation when user clicks
                if (autoRotateRef.current) {
                  clearInterval(autoRotateRef.current);
                  autoRotateRef.current = null;
                }
                setCurrentStory(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentStory
                  ? 'bg-blue-500 scale-125'
                  : 'bg-slate-600 hover:bg-blue-400'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Stats Summary */}
      <motion.div variants={cardVariants}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-500">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400 text-sm">Success Stories</div>
          </div>
          
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-500">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-400 text-sm">Placement Rate</div>
          </div>
          
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-500">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">2024</div>
            <div className="text-gray-400 text-sm">Recent Graduates</div>
          </div>
          
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-500">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Building className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">200+</div>
            <div className="text-gray-400 text-sm">Partner Companies</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SuccessStories;