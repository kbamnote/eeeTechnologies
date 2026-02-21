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

// Mock course data with comprehensive SEO-friendly content
const courseData = [
  {
    id: 1,
    slug: "full-stack-development",
    title: "Full Stack Development Course",
    shortTitle: "Full Stack Development",
    description: "Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch with hands-on projects and industry best practices.",
    longDescription: "Our comprehensive Full Stack Development course is designed to transform beginners into job-ready developers. You'll learn both frontend and backend technologies, working with real-world projects that mirror industry standards. Our curriculum covers everything from HTML/CSS fundamentals to advanced React patterns and Node.js backend development. With hands-on projects and mentorship from industry experts, you'll gain practical experience that employers value.",
    category: "Web Development",
    level: "Beginner to Advanced",
    duration: "6 months",
    students: 2847,
    rating: 4.9,
    reviews: 1234,
    price: 99999,
    originalPrice: 99999,
    instructor: "Sarah Johnson",
    instructorBio: "Senior Software Engineer with 10+ years of experience at top tech companies. Specializes in full-stack development and has mentored over 5000 students.",
    instructorImage: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "HTML/CSS", "REST APIs", "Git"],
    features: ["Live Projects", "1-on-1 Mentoring", "Job Assistance", "Certificate", "Internship Opportunity"],
    nextBatch: "Jan 15, 2025",
    curriculum: [
      {
        module: "Module 1: Frontend Fundamentals",
        topics: [
          "HTML5 & Semantic Markup",
          "CSS3 & Responsive Design", 
          "JavaScript ES6+",
          "DOM Manipulation",
          "Flexbox & Grid Layout"
        ]
      },
      {
        module: "Module 2: React Development",
        topics: [
          "Components & Props",
          "State Management",
          "Hooks (useState, useEffect, useContext)",
          "React Router",
          "Redux State Management",
          "Performance Optimization"
        ]
      },
      {
        module: "Module 3: Backend with Node.js",
        topics: [
          "Express Framework",
          "RESTful APIs",
          "Authentication & Authorization",
          "Database Integration",
          "Error Handling",
          "Middleware Concepts"
        ]
      },
      {
        module: "Module 4: Database & Deployment",
        topics: [
          "MongoDB NoSQL Database",
          "Mongoose ODM",
          "Cloud Deployment (AWS/Heroku)",
          "CI/CD Pipelines",
          "Testing Strategies",
          "Security Best Practices"
        ]
      }
    ],
    faqs: [
      {
        question: "Do I need prior programming experience?",
        answer: "This course is designed for beginners with no programming background. We start with fundamentals and gradually build up to advanced concepts."
      },
      {
        question: "What kind of projects will I build?",
        answer: "You'll build 5+ real-world projects including a social media app, e-commerce platform, and portfolio website that you can showcase to employers."
      },
      {
        question: "Will I get job assistance?",
        answer: "Yes, we provide comprehensive job assistance including resume building, interview preparation, and direct connections with hiring partners."
      },
      {
        question: "How long do I have access to course materials?",
        answer: "You get lifetime access to all course materials, including future updates and new content additions."
      }
    ],
    careerPaths: [
      "Frontend Developer",
      "Backend Developer", 
      "Full Stack Developer",
      "Software Engineer",
      "Web Application Developer"
    ],
    isPopular: true,
    isBestseller: true,
    seoTitle: "Full Stack Development Course | Learn React, Node.js & MongoDB",
    seoDescription: "Master full stack web development with our comprehensive course covering React, Node.js, MongoDB and more. Get job-ready skills with hands-on projects. Enroll now!",
    keywords: "full stack development, react course, node.js training, mongodb tutorial, web development course, javascript, express.js, mern stack"
  },
  {
    id: 2,
    slug: "data-analysis",
    title: "Data Analysis Course",
    shortTitle: "Data Analysis",
    description: "Learn Python, SQL, data visualization, and statistical analysis to become a professional data analyst. Work with real datasets and industry tools.",
    longDescription: "Our Data Analysis course transforms beginners into skilled data professionals. You'll master essential tools like Python, SQL, and visualization libraries while working on real-world datasets from various industries. This hands-on approach ensures you gain practical experience that employers value. From data cleaning to advanced analytics, you'll learn the complete data analysis pipeline.",
    category: "Data Science",
    level: "Beginner to Intermediate",
    duration: "6 months",
    students: 1923,
    rating: 4.8,
    reviews: 876,
    price: 99999,
    originalPrice: 99999,
    instructor: "Dr. Michael Chen",
    instructorBio: "PhD in Data Science with 8 years of industry experience. Former data scientist at Fortune 500 companies and published researcher.",
    instructorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    skills: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Tableau", "Excel", "Statistics"],
    features: ["Real Datasets", "Industry Projects", "Certificate", "Job Assistance", "Portfolio Building"],
    nextBatch: "Jan 20, 2025",
    curriculum: [
      {
        module: "Module 1: Data Fundamentals",
        topics: [
          "Data Types & Structures",
          "Descriptive Statistics",
          "Data Cleaning Techniques",
          "Excel Basics",
          "Data Ethics & Privacy"
        ]
      },
      {
        module: "Module 2: Python for Data Analysis",
        topics: [
          "NumPy Arrays & Operations",
          "Pandas DataFrames",
          "Data Visualization (Matplotlib, Seaborn)",
          "Statistical Analysis",
          "Working with APIs"
        ]
      },
      {
        module: "Module 3: SQL & Databases",
        topics: [
          "Query Writing Basics",
          "Joins & Aggregations",
          "Database Design Principles",
          "Advanced Queries",
          "Performance Optimization"
        ]
      },
      {
        module: "Module 4: Business Intelligence",
        topics: [
          "Tableau Dashboard Creation",
          "Storytelling with Data",
          "Report Generation",
          "Business Metrics & KPIs",
          "Data Presentation Skills"
        ]
      }
    ],
    faqs: [
      {
        question: "Is Python difficult to learn for beginners?",
        answer: "We start with Python basics and gradually build complexity. Our hands-on approach makes learning intuitive and engaging."
      },
      {
        question: "What kind of datasets will I work with?",
        answer: "You'll work with real datasets from finance, healthcare, e-commerce, and social media industries."
      },
      {
        question: "Do I need a mathematics background?",
        answer: "Basic math skills are helpful but not required. We cover all necessary statistical concepts."
      },
      {
        question: "Will I get a certificate?",
        answer: "Yes, you'll receive a verified certificate upon successful completion of the course."
      }
    ],
    careerPaths: [
      "Data Analyst",
      "Business Analyst",
      "Data Scientist",
      "Market Research Analyst",
      "Financial Analyst"
    ],
    isPopular: true,
    seoTitle: "Data Analysis Course | Learn Python, SQL & Data Visualization",
    seoDescription: "Become a professional data analyst with our comprehensive course covering Python, SQL, statistics and data visualization. Hands-on projects with real datasets. Enroll today!",
    keywords: "data analysis course, python for data science, sql tutorial, data visualization, pandas, numpy, matplotlib, tableau, business intelligence"
  },
  {
    id: 3,
    slug: "ai-ml",
    title: "AI/ML Course",
    shortTitle: "AI/ML",
    description: "Master artificial intelligence and machine learning with Python. Learn algorithms, neural networks, deep learning, and computer vision with hands-on projects.",
    longDescription: "Dive into the world of Artificial Intelligence and Machine Learning with our intensive course. From foundational algorithms to cutting-edge deep learning techniques, you'll gain both theoretical knowledge and practical skills. Work on projects that solve real-world problems using the latest AI technologies. Our expert instructors guide you through complex concepts with practical examples.",
    category: "Artificial Intelligence",
    level: "Intermediate to Advanced",
    duration: "6 months",
    students: 1456,
    rating: 4.9,
    reviews: 654,
    price: 99999,
    originalPrice: 99999,
    instructor: "Alex Rodriguez",
    instructorBio: "Machine Learning Engineer with expertise in computer vision and NLP. Contributed to open-source ML projects and worked on AI products at leading tech companies.",
    instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks", "NLP", "Computer Vision", "Deep Learning"],
    features: ["AI Projects", "Industry Case Studies", "Research Paper Reading", "Certificate", "Placement Support"],
    nextBatch: "Feb 1, 2025",
    curriculum: [
      {
        module: "Module 1: ML Foundations",
        topics: [
          "Linear Regression",
          "Classification Algorithms",
          "Model Evaluation Metrics",
          "Feature Engineering",
          "Cross-Validation Techniques"
        ]
      },
      {
        module: "Module 2: Deep Learning",
        topics: [
          "Neural Networks Fundamentals",
          "Convolutional Neural Networks (CNNs)",
          "Recurrent Neural Networks (RNNs)",
          "Transfer Learning",
          "Regularization Techniques"
        ]
      },
      {
        module: "Module 3: Computer Vision",
        topics: [
          "Image Processing Basics",
          "Object Detection",
          "Image Classification",
          "OpenCV Library",
          "Generative Models"
        ]
      },
      {
        module: "Module 4: Natural Language Processing",
        topics: [
          "Text Preprocessing",
          "Sentiment Analysis",
          "Language Models",
          "Chatbots Development",
          "Transformer Architecture"
        ]
      }
    ],
    faqs: [
      {
        question: "What are the prerequisites for this course?",
        answer: "You should have intermediate Python skills and basic understanding of mathematics/statistics."
      },
      {
        question: "Which frameworks will I learn?",
        answer: "We cover TensorFlow, PyTorch, Scikit-learn, Keras, and other industry-standard frameworks."
      },
      {
        question: "Are GPUs provided for training models?",
        answer: "Yes, we provide cloud GPU access for all your model training needs during the course."
      },
      {
        question: "Can I work on my own AI project?",
        answer: "Absolutely! The final portion of the course is dedicated to your capstone project."
      }
    ],
    careerPaths: [
      "Machine Learning Engineer",
      "AI Research Scientist",
      "Data Scientist",
      "Computer Vision Engineer",
      "NLP Engineer"
    ],
    isPopular: true,
    isBestseller: true,
    seoTitle: "AI/ML Course | Machine Learning & Deep Learning Training",
    seoDescription: "Master artificial intelligence and machine learning with Python. Learn neural networks, deep learning, computer vision and NLP. Hands-on projects with industry experts. Enroll now!",
    keywords: "machine learning course, ai training, deep learning, neural networks, tensorflow, pytorch, computer vision, nlp, artificial intelligence"
  },
  {
    id: 4,
    slug: "software-testing",
    title: "Software Testing Course",
    shortTitle: "Software Testing",
    description: "Become a professional software tester with expertise in manual and automated testing. Learn testing frameworks, bug tracking, and quality assurance processes.",
    longDescription: "Our Software Testing course prepares you for a career in quality assurance. Learn both manual and automated testing methodologies, work with industry-standard tools, and understand the complete software testing lifecycle. Gain hands-on experience with real projects and prepare for QA roles in top companies. From test planning to automation, you'll master all essential testing skills.",
    category: "Software Testing",
    level: "Beginner",
    duration: "6 months",
    students: 987,
    rating: 4.7,
    reviews: 432,
    price: 99999,
    originalPrice: 99999,
    instructor: "David Kumar",
    instructorBio: "QA Lead with 12 years of experience in software testing. Certified tester with expertise in automation frameworks and agile testing practices.",
    instructorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
    skills: ["Manual Testing", "Automation Testing", "Selenium", "JIRA", "TestNG", "API Testing", "Performance Testing", "Bug Reporting"],
    features: ["Testing Tools", "Real Projects", "Internship", "Certificate", "Job Placement"],
    nextBatch: "Jan 25, 2025",
    curriculum: [
      {
        module: "Module 1: Testing Fundamentals",
        topics: [
          "SDLC & STLC",
          "Testing Types & Levels",
          "Test Cases Design",
          "Bug Lifecycle",
          "Quality Assurance Principles"
        ]
      },
      {
        module: "Module 2: Manual Testing",
        topics: [
          "Test Planning & Strategy",
          "Test Execution Techniques",
          "Defect Reporting & Tracking",
          "Test Management Tools",
          "Usability Testing"
        ]
      },
      {
        module: "Module 3: Automation Testing",
        topics: [
          "Selenium WebDriver",
          "TestNG Framework",
          "Page Object Model",
          "API Testing with Postman",
          "Continuous Integration"
        ]
      },
      {
        module: "Module 4: Performance & Security",
        topics: [
          "Load Testing with JMeter",
          "Security Testing Fundamentals",
          "Mobile Testing",
          "Agile Testing Practices",
          "Test Reporting & Metrics"
        ]
      }
    ],
    faqs: [
      {
        question: "Do I need programming knowledge?",
        answer: "Basic computer literacy is sufficient. We'll teach you all the technical skills needed."
      },
      {
        question: "Which tools will I learn?",
        answer: "Selenium, JIRA, TestNG, Postman, JMeter, and other industry-standard testing tools."
      },
      {
        question: "Is there a guarantee of job placement?",
        answer: "While we can't guarantee jobs, we provide extensive job assistance and have a 90% placement rate."
      },
      {
        question: "Will I get hands-on experience?",
        answer: "Yes, you'll work on 10+ real projects and get internship opportunities."
      }
    ],
    careerPaths: [
      "Software Tester",
      "QA Engineer",
      "Test Automation Engineer",
      "Performance Tester",
      "Security Tester"
    ],
    isPopular: true,
    seoTitle: "Software Testing Course | QA & Automation Testing Training",
    seoDescription: "Become a professional software tester with our comprehensive course covering manual & automated testing. Learn Selenium, JIRA, API testing and more. Get job placement support. Enroll today!",
    keywords: "software testing course, qa training, selenium tutorial, automation testing, manual testing, jira, testng, api testing, performance testing"
  }
];



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
                    <HelpCircle className="w-8 h-8 text-teal-400" />
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