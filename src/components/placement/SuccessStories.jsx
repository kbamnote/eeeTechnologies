import React, { useState } from 'react';
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

  // Default success stories data
  const defaultStories = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior Full Stack Developer",
      company: "Google",
      location: "Bangalore, India",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      course: "Full Stack Web Development",
      duration: "6 months",
      previousRole: "Junior Developer",
      salaryIncrease: "180%",
      currentSalary: "₹28 LPA",
      story: "The comprehensive curriculum and hands-on projects at EEE Technologies transformed my career completely. The mentorship was exceptional, and the placement support helped me land my dream job at Google. The real-world projects gave me the confidence to tackle complex problems.",
      testimonial: "EEE Technologies didn't just teach me to code; they taught me to think like a software engineer. The industry-relevant curriculum and personalized mentoring made all the difference.",
      skills: ["React", "Node.js", "MongoDB", "AWS", "System Design"],
      achievements: ["Led 3 major projects", "Promoted twice in 2 years", "Tech lead for mobile team"],
      videoUrl: "https://example.com/video1",
      linkedinUrl: "https://linkedin.com/in/priyasharma",
      category: "web-development",
      graduationYear: 2023,
      rating: 5
    },
    {
      id: 2,
      name: "Rahul Kumar",
      role: "Data Scientist",
      company: "Microsoft",
      location: "Hyderabad, India",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      course: "Data Science & Machine Learning",
      duration: "8 months",
      previousRole: "Business Analyst",
      salaryIncrease: "220%",
      currentSalary: "₹35 LPA",
      story: "Coming from a non-technical background, I was skeptical about transitioning to data science. But the structured learning path and practical approach at EEE Technologies made it possible. The instructors were patient and the projects were industry-relevant.",
      testimonial: "The transition from business analyst to data scientist seemed impossible until I joined EEE Technologies. Their practical approach and industry connections made my dream a reality.",
      skills: ["Python", "Machine Learning", "Deep Learning", "SQL", "Tableau"],
      achievements: ["Built ML models saving $2M annually", "Published 2 research papers", "Leading AI initiatives"],
      videoUrl: "https://example.com/video2",
      linkedinUrl: "https://linkedin.com/in/rahulkumar",
      category: "data-science",
      graduationYear: 2023,
      rating: 5
    },
    {
      id: 3,
      name: "Anita Patel",
      role: "Mobile App Developer",
      company: "Flipkart",
      location: "Bangalore, India",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      companyLogo: "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png",
      course: "Mobile App Development",
      duration: "5 months",
      previousRole: "Fresher",
      salaryIncrease: "∞",
      currentSalary: "₹18 LPA",
      story: "As a fresh graduate, I was struggling to find opportunities. EEE Technologies not only taught me mobile development but also helped me build a strong portfolio. The placement team worked tirelessly to connect me with top companies.",
      testimonial: "From zero to hero! EEE Technologies gave me the skills and confidence to start my career in mobile development. The support system is incredible.",
      skills: ["React Native", "Flutter", "Firebase", "iOS", "Android"],
      achievements: ["Developed 5+ production apps", "App Store featured app", "Team lead within 1 year"],
      videoUrl: "https://example.com/video3",
      linkedinUrl: "https://linkedin.com/in/anitapatel",
      category: "mobile-development",
      graduationYear: 2024,
      rating: 5
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "DevOps Engineer",
      company: "Amazon",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      course: "DevOps & Cloud Computing",
      duration: "4 months",
      previousRole: "System Administrator",
      salaryIncrease: "150%",
      currentSalary: "₹32 LPA",
      story: "The hands-on labs and real-world scenarios at EEE Technologies prepared me perfectly for the DevOps role at Amazon. The AWS credits and practical experience with Kubernetes were invaluable.",
      testimonial: "EEE Technologies' DevOps program is industry-leading. The practical approach and expert instructors made complex concepts easy to understand.",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
      achievements: ["Reduced deployment time by 70%", "AWS certified", "Leading cloud migration projects"],
      videoUrl: "https://example.com/video4",
      linkedinUrl: "https://linkedin.com/in/vikramsingh",
      category: "devops",
      graduationYear: 2023,
      rating: 5
    },
    {
      id: 5,
      name: "Sneha Reddy",
      role: "UX Designer",
      company: "Adobe",
      location: "Bangalore, India",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg",
      course: "UI/UX Design Masterclass",
      duration: "3 months",
      previousRole: "Graphic Designer",
      salaryIncrease: "200%",
      currentSalary: "₹25 LPA",
      story: "The design thinking approach and user research methodologies taught at EEE Technologies completely changed my perspective on design. The portfolio projects helped me showcase my skills effectively.",
      testimonial: "EEE Technologies helped me transition from graphic design to UX design seamlessly. The industry mentors and portfolio guidance were exceptional.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
      achievements: ["Redesigned 3 major products", "Improved user engagement by 40%", "Design team lead"],
      videoUrl: "https://example.com/video5",
      linkedinUrl: "https://linkedin.com/in/snehareddy",
      category: "design",
      graduationYear: 2024,
      rating: 5
    },
    {
      id: 6,
      name: "Arjun Mehta",
      role: "Cybersecurity Analyst",
      company: "Deloitte",
      location: "Delhi, India",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.svg",
      course: "Cybersecurity Fundamentals",
      duration: "6 months",
      previousRole: "IT Support",
      salaryIncrease: "190%",
      currentSalary: "₹22 LPA",
      story: "The ethical hacking labs and real-world security scenarios at EEE Technologies gave me practical experience that employers value. The certification preparation was thorough and effective.",
      testimonial: "EEE Technologies' cybersecurity program is comprehensive and practical. The hands-on labs and expert instructors prepared me for real-world challenges.",
      skills: ["Ethical Hacking", "Network Security", "Penetration Testing", "CISSP", "Security+"],
      achievements: ["Prevented 5 major security breaches", "CISSP certified", "Leading security audits"],
      videoUrl: "https://example.com/video6",
      linkedinUrl: "https://linkedin.com/in/arjunmehta",
      category: "cybersecurity",
      graduationYear: 2023,
      rating: 5
    }
  ];

  const categories = [
    { id: 'all', name: 'All Stories' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'mobile-development', name: 'Mobile Development' },
    { id: 'devops', name: 'DevOps' },
    { id: 'design', name: 'Design' },
    { id: 'cybersecurity', name: 'Cybersecurity' }
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
      <motion.div variants={cardVariants} className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Success Stories
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how our students transformed their careers and achieved their dreams with our comprehensive training programs.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div variants={cardVariants} className="flex justify-center">
        <div className="flex flex-wrap gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-white/20">
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
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-white/50'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Main Story Card */}
      <motion.div variants={cardVariants} className="relative">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
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
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-purple-600" />
                </div>

                {/* Testimonial */}
                <blockquote className="text-xl font-medium text-gray-900 leading-relaxed">
                  "{currentStoryData.testimonial}"
                </blockquote>

                {/* Story */}
                <p className="text-gray-600 leading-relaxed">
                  {currentStoryData.story}
                </p>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Skills Learned</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentStoryData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {currentStoryData.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Award className="w-4 h-4 text-green-500" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    <Play className="w-4 h-4" />
                    <span>Watch Video</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-white/50 text-gray-700 rounded-lg border border-white/20 hover:bg-white/70 transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </motion.button>
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
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full p-2 shadow-lg">
                      <img
                        src={currentStoryData.companyLogo}
                        alt={currentStoryData.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {currentStoryData.name}
                  </h3>
                  
                  <p className="text-lg text-purple-600 font-semibold mb-2">
                    {currentStoryData.role}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-4 text-gray-600 mb-4">
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
                    <div className="text-center p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="text-2xl font-bold text-purple-600">
                        {currentStoryData.salaryIncrease}
                      </div>
                      <div className="text-sm text-gray-600">
                        Salary Increase
                      </div>
                    </div>
                    
                    <div className="text-center p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="text-2xl font-bold text-green-600">
                        {currentStoryData.currentSalary}
                      </div>
                      <div className="text-sm text-gray-600">
                        Current Salary
                      </div>
                    </div>
                    
                    <div className="text-center p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="text-2xl font-bold text-blue-600">
                        {currentStoryData.duration}
                      </div>
                      <div className="text-sm text-gray-600">
                        Course Duration
                      </div>
                    </div>
                    
                    <div className="text-center p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="text-2xl font-bold text-orange-600">
                        {currentStoryData.graduationYear}
                      </div>
                      <div className="text-sm text-gray-600">
                        Graduated
                      </div>
                    </div>
                  </div>

                  {/* Course Badge */}
                  <div className="mt-6 text-center">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                      {currentStoryData.course}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevStory}
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-purple-600 transition-colors duration-200 border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>
          
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextStory}
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-purple-600 transition-colors duration-200 border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Story Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {filteredStories.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setCurrentStory(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentStory
                  ? 'bg-purple-600 scale-125'
                  : 'bg-gray-300 hover:bg-purple-400'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Stats Summary */}
      <motion.div variants={cardVariants}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
          
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
            <div className="text-gray-600">Placement Rate</div>
          </div>
          
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">180%</div>
            <div className="text-gray-600">Avg Salary Hike</div>
          </div>
          
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
            <div className="text-gray-600">Partner Companies</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SuccessStories;