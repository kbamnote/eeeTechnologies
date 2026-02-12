import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle,
  Loader
} from 'lucide-react';
import { addDetail, createEnrollment } from '../utils/Api';

const ContactForm = ({ onSubmit, courseName }) => {
    const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNo: '',
    message: '',
    productCompany: "EEE-Technologies"
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    if (formData.phoneNo && !/^\+?[\d\s\-\(\)]+$/.test(formData.phoneNo)) {
      newErrors.phoneNo = 'Phone number is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      if (courseName) {
        // Use enrollment API for course enrollments
        const enrollmentData = {
          studentName: formData.fullName,
          studentEmail: formData.email,
          studentPhone: formData.phoneNo,
          courseName: courseName,
          message: formData.message,
          productCompany: formData.productCompany
        };

        const response = await createEnrollment(enrollmentData);
        console.log('Enrollment submitted successfully:', response.data);
      } else {
        // Use general contact API for general inquiries
        const detailData = {
          fullName: formData.fullName,
          email: formData.email,
          phoneNo: formData.phoneNo,
          message: formData.message,
          productCompany: formData.productCompany
        };

        const response = await addDetail(detailData);
        console.log('Form submitted successfully:', response.data);
      }
      
      setSubmitStatus('success');
      setIsSubmitted(true);
      
      // Call the onSubmit callback if provided
      if (onSubmit) {
        onSubmit(formData);
      }
      
      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phoneNo: '',
        message: '',
        productCompany: "EEE-Technologies"
      });
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-[#3B82F6]/10 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-[#3B82F6]" />
        </motion.div>
        <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-[#1F2937] mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-gradient-to-r from-[#0A2540] to-[#3B82F6] text-white rounded-lg hover:from-[#0A2540]/90 hover:to-[#3B82F6]/90 transition-all duration-200 font-medium shadow-lg"
        >
          Send Another Message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-3xl font-bold text-[#1F2937] mb-4">
          {courseName ? `Enroll in ${courseName}` : 'Get in Touch'}
        </h2>
        <p className="text-[#1F2937]/70">
          {courseName 
            ? 'Fill out the form below and our team will contact you shortly about your enrollment.' 
            : 'Ready to start your tech journey? Send us a message and we\'ll get back to you as soon as possible.'}
        </p>
      </motion.div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] rounded-lg"
        >
          ✅ Thank you! Your {courseName ? 'enrollment request' : 'message'} has been sent successfully. We'll get back to you soon.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4] rounded-lg"
        >
          ❌ Sorry, there was an error sending your {courseName ? 'enrollment request' : 'message'}. Please try again or contact us directly.
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
       
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-[#1F2937] mb-2">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1F2937]/60 w-5 h-5" />
              <motion.input
                variants={inputVariants}
                whileFocus="focus"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white/50 text-[#1F2937] placeholder-[#1F2937]/60 transition-all duration-200 ${
                  errors.fullName ? 'border-[#06B6D4]' : 'border-[#3B82F6]/20'
                }`}
              />
            </div>
            {errors.fullName && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-[#06B6D4] flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.fullName}
              </motion.p>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-[#1F2937] mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1F2937]/60 w-5 h-5" />
              <motion.input
                variants={inputVariants}
                whileFocus="focus"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white/50 text-[#1F2937] placeholder-[#1F2937]/60 transition-all duration-200 ${
                  errors.email ? 'border-[#06B6D4]' : 'border-[#3B82F6]/20'
                }`}
              />
            </div>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-[#06B6D4] flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.email}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Phone */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1F2937]/60 w-5 h-5" />
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              type="tel"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white/50 text-[#1F2937] placeholder-[#1F2937]/60 transition-all duration-200 ${
                errors.phoneNo ? 'border-[#06B6D4]' : 'border-[#3B82F6]/20'
              }`}
            />
          </div>
          {errors.phoneNo && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-[#06B6D4] flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.phoneNo}
            </motion.p>
          )}
        </motion.div>

        {/* Message */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            Message *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 text-[#1F2937]/60 w-5 h-5" />
            <motion.textarea
              variants={inputVariants}
              whileFocus="focus"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder={courseName 
                ? "Tell us about your interest in this course..." 
                : "Tell us about your requirements, questions, or how we can help you..."}
              className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white/50 text-[#1F2937] placeholder-[#1F2937]/60 transition-all duration-200 resize-none ${
                errors.message ? 'border-[#06B6D4]' : 'border-[#3B82F6]/20'
              }`}
            />
          </div>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-[#06B6D4] flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.message}
            </motion.p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-center ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#0A2540] to-[#3B82F6] hover:from-[#0A2540]/90 hover:to-[#3B82F6]/90 shadow-lg hover:shadow-xl'
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader className="w-5 h-5 mr-2 animate-spin" />
                Sending {courseName ? 'Enrollment Request' : 'Message'}...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                {courseName ? 'Enroll Now' : 'Send Message'}
              </>
            )}
          </motion.button>
        </motion.div>
      </form>

      {/* Additional Info */}
      <motion.div
        variants={itemVariants}
        className="mt-8 pt-6 border-t border-[#1F2937]/20"
      >
        <p className="text-sm text-[#1F2937]/70 text-center">
          We typically respond within 24 hours. For urgent inquiries, please call us directly.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;