import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code, Database, Brain, Shield, Clock, Users, Star } from 'lucide-react';
import EnrollmentModal from '../courses/EnrollmentModal';

const CoursesPreview = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const courses = [
    {
      id: 1,
      slug: "full-stack-development",
      title: "Full Stack Development",
      description: "Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch with hands-on projects and industry best practices.",
      duration: "6 months",
      students: "2,847+",
      rating: 4.9,
      price: "₹75,000",
      originalPrice: "₹90,000",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "HTML/CSS"],
      color: "from-blue-500 to-cyan-500",
      icon: Code,
      badge: "POPULAR"
    },
    {
      id: 2,
      slug: "data-analysis",
      title: "Data Analysis",
      description: "Learn Python, SQL, data visualization, and statistical analysis to become a professional data analyst. Work with real datasets and industry tools.",
      duration: "6 months",
      students: "1,923+",
      rating: 4.8,
      price: "₹75,000",
      originalPrice: "₹90,000",
      technologies: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Tableau", "Excel"],
      color: "from-purple-500 to-pink-500",
      icon: Database,
      badge: "POPULAR"
    },
    {
      id: 3,
      slug: "ai-ml",
      title: "AI/ML",
      description: "Master artificial intelligence and machine learning with Python. Learn algorithms, neural networks, deep learning, and computer vision with hands-on projects.",
      duration: "6 months",
      students: "1,456+",
      rating: 4.9,
      price: "₹75,000",
      originalPrice: "₹90,000",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks", "NLP"],
      color: "from-green-500 to-emerald-500",
      icon: Brain,
      badge: "TRENDING"
    },
    {
      id: 4,
      slug: "software-testing",
      title: "Software Testing",
      description: "Become a professional software tester with expertise in manual and automated testing. Learn testing frameworks, bug tracking, and quality assurance processes.",
      duration: "6 months",
      students: "987+",
      rating: 4.7,
      price: "₹75,000",
      originalPrice: "₹90,000",
      technologies: ["Manual Testing", "Selenium", "JIRA", "TestNG", "API Testing", "Automation"],
      color: "from-orange-500 to-red-500",
      icon: Shield,
      badge: "POPULAR"
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

  // Auto carousel effect
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [courses.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6">
            <Code className="w-4 h-4 mr-2" />
            Professional Training Programs
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Transform Your Career with
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
              Industry-Leading Courses
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive programs designed by industry experts to help you master in-demand skills 
            and accelerate your career growth.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="max-w-5xl mx-auto bg-slate-800/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden hover:shadow-3xl hover:border-slate-600/50 transition-all duration-500">
                    <div className="grid md:grid-cols-2">
                      {/* Left Side - Course Info */}
                      <div className="p-10 lg:p-12 flex flex-col justify-between">
                        {/* Header */}
                        <div>
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                              <course.icon className="w-8 h-8 text-white" />
                            </div>
                            <span className={`px-4 py-1.5 text-white text-sm font-bold rounded-full shadow-md ${
                              course.badge === 'TRENDING' 
                                ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                                : 'bg-gradient-to-r from-amber-500 to-orange-600'
                            }`}>
                              {course.badge}
                            </span>
                          </div>

                          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            {course.title}
                          </h3>
                          
                          <p className="text-gray-300 text-base leading-relaxed mb-6">
                            {course.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {course.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 bg-slate-700/50 border border-slate-600/50 text-gray-300 text-sm rounded-lg font-medium hover:bg-slate-700/70 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Stats & Pricing */}
                        <div>
                          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-700/30 rounded-2xl border border-slate-600/30">
                            <div className="text-center">
                              <Clock className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                              <div className="text-sm font-semibold text-white">{course.duration}</div>
                              <div className="text-xs text-gray-400">Duration</div>
                            </div>
                            <div className="text-center">
                              <Users className="w-5 h-5 text-green-400 mx-auto mb-2" />
                              <div className="text-sm font-semibold text-white">{course.students}</div>
                              <div className="text-xs text-gray-400">Students</div>
                            </div>
                            <div className="text-center">
                              <Star className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                              <div className="text-sm font-semibold text-white">{course.rating}</div>
                              <div className="text-xs text-gray-400">Rating</div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl mb-6 border border-blue-500/20">
                            <div>
                              <div className="text-3xl font-bold text-white">{course.price}</div>
                              <div className="text-sm text-gray-400">
                                <span className="line-through mr-2">{course.originalPrice}</span>
                                <span className="text-green-400 font-semibold">Save 17%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Side - CTA Section */}
                      <div className={`bg-gradient-to-br ${course.color} p-10 lg:p-12 flex flex-col justify-center items-center text-white relative overflow-hidden`}>
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl" />
                        
                        <div className="relative z-10 text-center">
                          <div className="mb-8">
                            <div className="text-5xl font-bold mb-2">Start Learning</div>
                            <div className="text-xl opacity-90">Transform Your Future Today</div>
                          </div>

                          <div className="space-y-4 mb-8">
                            <div className="flex items-center justify-center gap-3 text-lg">
                              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">✓</div>
                              <span>Lifetime Access</span>
                            </div>
                            <div className="flex items-center justify-center gap-3 text-lg">
                              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">✓</div>
                              <span>Expert Mentorship</span>
                            </div>
                            <div className="flex items-center justify-center gap-3 text-lg">
                              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">✓</div>
                              <span>Job Assistance</span>
                            </div>
                            <div className="flex items-center justify-center gap-3 text-lg">
                              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">✓</div>
                              <span>Certificate of Completion</span>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <button
                              onClick={() => handleEnrollClick(course)}
                              className="w-full px-8 py-4 bg-white text-gray-900 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                              <span className="flex items-center justify-center text-lg">
                                Enroll Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                              </span>
                            </button>
                            
                            <button
                              onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                navigate(`/courses/${course.slug}`);
                              }}
                              className="w-full px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                            >
                              Know More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {courses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-gradient-to-r from-blue-400 to-purple-400' 
                    : 'w-2 bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <button className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Explore All Courses
            <ArrowRight className="ml-3 w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        courseName={selectedCourse?.title}
      />
    </section>
  );
};

export default CoursesPreview;