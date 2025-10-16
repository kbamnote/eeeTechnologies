import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  User, 
  MessageSquare,
  Calendar,
  Download,
  Building,
  ArrowRight,
  Star,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Zap
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  
  const [focusedField, setFocusedField] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  
  const formRef = useRef(null);
  const [isInView, setIsInView] = useState(true);

  const contactInfo = [
    {
      title: 'Phone',
      value: '+91 98765 43210',
      icon: Phone,
      color: 'from-green-500 to-emerald-600',
      description: 'Call us for immediate assistance'
    },
    {
      title: 'Email',
      value: 'info@eeetechnologies.com',
      icon: Mail,
      color: 'from-blue-500 to-cyan-600',
      description: 'Send us your queries anytime'
    },
    {
      title: 'Address',
      value: '123 Tech Park, Innovation District, Bangalore - 560001',
      icon: MapPin,
      color: 'from-purple-500 to-violet-600',
      description: 'Visit our modern campus'
    },
    {
      title: 'Office Hours',
      value: 'Mon - Sat: 9:00 AM - 6:00 PM',
      icon: Clock,
      color: 'from-orange-500 to-red-600',
      description: 'We are here to help you'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:text-blue-700' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-600' }
  ];

  const quickActions = [
    {
      title: 'Schedule a Call',
      description: 'Book a free consultation',
      icon: Calendar,
      action: () => console.log('Schedule call'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Download Brochure',
      description: 'Get detailed course info',
      icon: Download,
      action: () => console.log('Download brochure'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Campus Visit',
      description: 'Tour our facilities',
      icon: Building,
      action: () => console.log('Book visit'),
      color: 'from-green-500 to-green-600'
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.course) newErrors.course = 'Please select a course';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
    }, 3000);
  };

  const courses = [
    'Full Stack Development',
    'Data Science & Analytics',
    'Digital Marketing',
    'UI/UX Design',
    'Cloud Computing',
    'Cybersecurity',
    'Mobile App Development',
    'DevOps Engineering'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${80 + i * 2}%`,
              }}
            />
          ))}
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
              >
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Ready to Transform Your Career?</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Connect</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Your journey to success starts with a conversation. We're here to guide you every step of the way.
              </p>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-white/10 backdrop-blur-sm rounded-full transition-colors ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800">Send us a Message</h2>
                      <p className="text-gray-600">We'll get back to you within 24 hours</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-center py-12"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                          <CheckCircle className="w-10 h-10 text-green-600" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                        <p className="text-gray-600">Thank you for reaching out. We'll be in touch soon.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* First Name */}
                          <div className="relative">
                            <motion.label
                              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                                focusedField === 'firstName' || formData.firstName
                                  ? 'top-2 text-xs text-blue-600 bg-white px-2 rounded'
                                  : 'top-4 text-gray-500'
                              }`}
                            >
                              First Name
                            </motion.label>
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField('firstName')}
                              onBlur={() => setFocusedField('')}
                              className={`w-full px-4 pt-6 pb-2 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                                errors.firstName
                                  ? 'border-red-500 focus:border-red-500'
                                  : 'border-gray-200 focus:border-blue-500'
                              }`}
                            />
                            {errors.firstName && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-sm mt-1"
                              >
                                {errors.firstName}
                              </motion.p>
                            )}
                          </div>

                          {/* Last Name */}
                          <div className="relative">
                            <motion.label
                              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                                focusedField === 'lastName' || formData.lastName
                                  ? 'top-2 text-xs text-blue-600 bg-white px-2 rounded'
                                  : 'top-4 text-gray-500'
                              }`}
                            >
                              Last Name
                            </motion.label>
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField('lastName')}
                              onBlur={() => setFocusedField('')}
                              className={`w-full px-4 pt-6 pb-2 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                                errors.lastName
                                  ? 'border-red-500 focus:border-red-500'
                                  : 'border-gray-200 focus:border-blue-500'
                              }`}
                            />
                            {errors.lastName && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-sm mt-1"
                              >
                                {errors.lastName}
                              </motion.p>
                            )}
                          </div>
                        </div>

                        {/* Email */}
                        <div className="relative">
                          <motion.label
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                              focusedField === 'email' || formData.email
                                ? 'top-2 text-xs text-blue-600 bg-white px-2 rounded'
                                : 'top-4 text-gray-500'
                            }`}
                          >
                            Email Address
                          </motion.label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField('')}
                            className={`w-full px-4 pt-6 pb-2 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                              errors.email
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-gray-200 focus:border-blue-500'
                            }`}
                          />
                          {errors.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-sm mt-1"
                            >
                              {errors.email}
                            </motion.p>
                          )}
                        </div>

                        {/* Phone */}
                        <div className="relative">
                          <motion.label
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                              focusedField === 'phone' || formData.phone
                                ? 'top-2 text-xs text-blue-600 bg-white px-2 rounded'
                                : 'top-4 text-gray-500'
                            }`}
                          >
                            Phone Number
                          </motion.label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField('')}
                            className={`w-full px-4 pt-6 pb-2 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                              errors.phone
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-gray-200 focus:border-blue-500'
                            }`}
                          />
                          {errors.phone && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-sm mt-1"
                            >
                              {errors.phone}
                            </motion.p>
                          )}
                        </div>

                        {/* Course Selection */}
                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Course Interest
                          </label>
                          <select
                            name="course"
                            value={formData.course}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                              errors.course
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-gray-200 focus:border-blue-500'
                            }`}
                          >
                            <option value="">Select a course</option>
                            {courses.map((course) => (
                              <option key={course} value={course}>
                                {course}
                              </option>
                            ))}
                          </select>
                          {errors.course && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-sm mt-1"
                            >
                              {errors.course}
                            </motion.p>
                          )}
                        </div>

                        {/* Message */}
                        <div className="relative">
                          <motion.label
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                              focusedField === 'message' || formData.message
                                ? 'top-2 text-xs text-blue-600 bg-white px-2 rounded'
                                : 'top-4 text-gray-500'
                            }`}
                          >
                            Message
                          </motion.label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField('')}
                            rows="4"
                            className={`w-full px-4 pt-6 pb-2 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none ${
                              errors.message
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-gray-200 focus:border-blue-500'
                            }`}
                          />
                          {errors.message && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-sm mt-1"
                            >
                              {errors.message}
                            </motion.p>
                          )}
                        </div>

                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Send Message
                            </>
                          )}
                        </motion.button>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We're here to help you take the next step in your career journey. 
                    Reach out to us through any of the following channels and let's start building your future together.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ y: 30, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" 
                            style={{ background: `linear-gradient(135deg, ${info.color.split(' ')[1]}, ${info.color.split(' ')[3]})` }} />
                        <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 group-hover:shadow-2xl transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 bg-gradient-to-r ${info.color} rounded-xl text-white shadow-lg`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-800 mb-1 text-lg">{info.title}</h3>
                              <p className="text-gray-600 mb-2">{info.value}</p>
                              <p className="text-sm text-gray-500">{info.description}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Interactive Map */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
                    <div className="text-center z-10">
                      <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">Interactive Map</p>
                      <p className="text-sm text-gray-500">Coming Soon</p>
                    </div>
                    
                    {/* Animated dots */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-500 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.4,
                        }}
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + i * 10}%`,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Quick Actions</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Need something specific? Use these quick actions to get what you need faster.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={action.action}
                    className="group relative cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                        style={{ background: `linear-gradient(135deg, ${action.color.split(' ')[1]}, ${action.color.split(' ')[3]})` }} />
                    <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 text-center group-hover:shadow-2xl transition-all duration-300">
                      <div className={`inline-flex p-4 bg-gradient-to-r ${action.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-3 text-xl">{action.title}</h3>
                      <p className="text-gray-600 mb-4">{action.description}</p>
                      <div className="flex items-center justify-center text-blue-600 font-medium group-hover:text-purple-600 transition-colors">
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                left: `${10 + i * 10}%`,
                top: `${70 + (i % 3) * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Don't wait for the perfect moment. The perfect moment is now. 
                Join thousands of successful professionals who transformed their careers with us.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Start Your Application
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Schedule a Call
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;