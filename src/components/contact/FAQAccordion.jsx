import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What courses do you offer?",
      answer: "We offer comprehensive courses in Full Stack Development, Data Science, Machine Learning, Cloud Computing, Cybersecurity, UI/UX Design, and Digital Marketing. Each course is designed with industry-relevant curriculum and hands-on projects."
    },
    {
      question: "How long are the courses?",
      answer: "Course duration varies from 3 to 12 months depending on the program. Our intensive bootcamps are 3-6 months, while comprehensive programs with placement assistance can be up to 12 months. We also offer flexible part-time options."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes! We have a dedicated placement team with partnerships across 500+ companies. Our placement assistance includes resume building, interview preparation, mock interviews, and direct referrals to our hiring partners."
    },
    {
      question: "What are the prerequisites for enrollment?",
      answer: "Prerequisites vary by course. Most beginner courses require basic computer literacy and enthusiasm to learn. Advanced courses may require prior programming experience. We provide detailed prerequisites for each course on our website."
    },
    {
      question: "Are the courses online or offline?",
      answer: "We offer both online and offline modes. Our hybrid approach includes live interactive sessions, recorded lectures for revision, hands-on labs, and in-person workshops for practical experience."
    },
    {
      question: "What kind of support do you provide during the course?",
      answer: "We provide 24/7 doubt resolution, dedicated mentors, peer learning groups, regular assessments, career counseling, and technical support. Our student success team ensures you never feel stuck."
    },
    {
      question: "Do you offer corporate training?",
      answer: "Yes, we provide customized corporate training programs for organizations looking to upskill their teams. Our enterprise solutions include on-site training, custom curriculum development, and progress tracking."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 7-day money-back guarantee if you're not satisfied with the course. Refunds are processed within 5-7 business days. Terms and conditions apply for different course types."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
    >
      <motion.div variants={itemVariants} className="mb-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <HelpCircle className="w-8 h-8 text-purple-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Find answers to common questions about our courses, enrollment process, and support services.
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white/50"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
            >
              <span className="font-semibold text-gray-900 pr-4">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-shrink-0"
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={itemVariants}
        className="mt-8 pt-6 border-t border-gray-200 text-center"
      >
        <p className="text-gray-600 mb-4">
          Still have questions? We're here to help!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-medium shadow-lg"
        >
          Contact Support
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default FAQAccordion;