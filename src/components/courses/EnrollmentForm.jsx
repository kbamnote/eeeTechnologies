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
  Loader,
  Calendar,
  MapPin,
  GraduationCap,
  UserCircle
} from 'lucide-react';
import { createEnrollment } from '../utils/Api';

const EnrollmentForm = ({ courseName, onSubmit }) => {
    const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNo: '',
    message: '',
    productCompany: "EEE-Technologies",
    // New fields for enrollment
    age: '',
    gender: '',
    location: '',
    qualification: ''
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
    
    // Validation for new fields
    if (formData.age && (isNaN(formData.age) || formData.age <= 0 || formData.age > 120)) {
      newErrors.age = 'Please enter a valid age';
    }
    
    if (formData.gender && !['male', 'female', 'other'].includes(formData.gender.toLowerCase())) {
      newErrors.gender = 'Please select a valid gender';
    }
    
    if (formData.location && formData.location.length < 2) {
      newErrors.location = 'Location must be at least 2 characters';
    }
    
    if (formData.qualification && formData.qualification.length < 2) {
      newErrors.qualification = 'Qualification must be at least 2 characters';
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
      // Use enrollment API for course enrollments
      const enrollmentData = {
        studentName: formData.fullName,
        studentEmail: formData.email,
        studentPhone: formData.phoneNo,
        courseName: courseName,
        message: formData.message,
        productCompany: formData.productCompany,
        // New fields
        age: formData.age ? parseInt(formData.age) : undefined,
        gender: formData.gender,
        location: formData.location,
        qualification: formData.qualification
      };

      const response = await createEnrollment(enrollmentData);
      console.log('Enrollment submitted successfully:', response.data);
      
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
        productCompany: "EEE-Technologies",
        // Reset new fields
        age: '',
        gender: '',
        location: '',
        qualification: ''
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
        className="bg-[#ffffff] backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-[#0A2540] text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-[#3B82F6]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#3B82F6]/30"
        >
          <CheckCircle className="w-10 h-10 text-[#3B82F6]" />
        </motion.div>
        <h3 className="text-2xl font-boldtext-black mb-4">
          Enrollment Request Sent Successfully!
        </h3>
        <p className="text-[#3B82F6] mb-6">
          Thank you for your enrollment request. Our team will contact you within 24 hours to confirm your enrollment.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-gradient-to-r from-[#0A2540] to-[#3B82F6]text-black rounded-lg hover:from-[#0A2540]/90 hover:to-[#3B82F6]/90 transition-all duration-200 font-medium shadow-lg shadow-[#3B82F6]/25"
        >
          Send Another Request
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-[#ffffff] backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-[#0A2540]"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-3xl font-bold text-black mb-4">
          Enroll in {courseName}
        </h2>
        <p className="text-[#3B82F6]">
          Fill out the form below and our team will contact you shortly about your enrollment.
        </p>
      </motion.div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] rounded-lg"
        >
          ✅ Thank you! Your enrollment request has been sent successfully. We'll get back to you soon.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4] rounded-lg"
        >
          ❌ Sorry, there was an error sending your enrollment request. Please try again or contact us directly.
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
       
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-[#3B82F6] mb-2">
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
                className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-[#ffffff]text-black placeholder-[#3B82F6]/50 transition-all duration-200 ${
                  errors.fullName ? 'border-[#06B6D4]' : 'border-[#0A2540]/50'
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
            <label className="block text-sm font-medium text-[#3B82F6] mb-2">
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
                className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-[#ffffff]text-black placeholder-[#3B82F6]/50 transition-all duration-200 ${
                  errors.email ? 'border-[#06B6D4]' : 'border-[#0A2540]/50'
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
          <label className="block text-sm font-medium text-[#3B82F6] mb-2">
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
              className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-[#ffffff]text-black placeholder-[#3B82F6]/50 transition-all duration-200 ${
                errors.phoneNo ? 'border-[#06B6D4]' : 'border-[#0A2540]/50'
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

        {/* Age and Gender Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-[#3B82F6] mb-2">
              Age
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1F2937]/60 w-5 h-5" />
              <motion.input
                variants={inputVariants}
                whileFocus="focus"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
                className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-[#ffffff]text-black placeholder-[#3B82F6]/50 transition-all duration-200 ${
                  errors.age ? 'border-[#06B6D4]' : 'border-[#0A2540]/50'
                }`}
              />
            </div>
            {errors.age && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-[#06B6D4] flex items-center"
                >
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.age}
                </motion.p>
              )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-[#3B82F6] mb-2">
              Gender
            </label>
            <div className="relative">
              <UserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1F2937]/60 w-5 h-5" />
              <motion.select
                variants={inputVariants}
                whileFocus="focus"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-[#ffffff]text-black placeholder-[#3B82F6]/50 transition-all duration-200 appearance-none ${
                  errors.gender ? 'border-[#06B6D4]' : 'border-[#0A2540]/50'
                }`}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </motion.select>
            </div>
            {errors.gender && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-[#06B6D4] flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.gender}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Location and Qualification Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-[#3B82F6] mb-2">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1F2937]/60 w-5 h-5" />
              <motion.input
                variants={inputVariants}
                whileFocus="focus"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your location"
                className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-[#ffffff]text-black placeholder-[#3B82F6]/50 transition-all duration-200 ${
                  errors.location ? 'border-[#06B6D4]' : 'border-[#0A2540]/50'
                }`}
              />
            </div>
            {errors.location && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-[#06B6D4] flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.location}
              </motion.p>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-[#3B82F6] mb-2">
              Qualification
            </label>
            <div className="relative">
              <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1F2937]/60 w-5 h-5" />
              <motion.input
                variants={inputVariants}
                whileFocus="focus"
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="Enter your qualification"
                className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-[#f8f8f8]text-black placeholder-[#3B82F6]/50 transition-all duration-200 ${
                  errors.qualification ? 'border-[#06B6D4]' : 'border-[#0A2540]/50'
                }`}
              />
            </div>
            {errors.qualification && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-[#06B6D4] flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.qualification}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Message */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-[#3B82F6] mb-2">
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
              placeholder="Tell us about your interest in this course..."
              className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-[#ffffff]text-black placeholder-[#3B82F6]/50 transition-all duration-200 resize-none ${
                errors.message ? 'border-[#06B6D4]' : 'border-[#0A2540]/50'
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
            className={`w-full py-4 px-6 rounded-xl font-semiboldtext-black transition-all duration-200 flex items-center justify-center ${
              isSubmitting
                ? 'bg-[#ffffff] cursor-not-allowed'
                : 'bg-gradient-to-r from-[#0A2540] to-[#3B82F6] hover:from-[#0A2540]/90 hover:to-[#3B82F6]/90 shadow-lg hover:shadow-[#3B82F6]/25'
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader className="w-5 h-5 mr-2 animate-spin" />
                Sending Enrollment Request...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Enroll Now
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
        <p className="text-sm text-[#1F2937]/60 text-center">
          We typically respond within 24 hours. For urgent inquiries, please call us directly.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default EnrollmentForm;