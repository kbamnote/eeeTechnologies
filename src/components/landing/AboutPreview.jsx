import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useScrollAnimation, fadeInUp, fadeInLeft, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation';

const AboutPreview = () => {
  const { ref, isInView } = useScrollAnimation();

  const expectations = [
    {
      title: "Understanding about AI",
      items: [
        "Understand core concepts like machine learning, deep learning, and algorithms in a clear and practical way.",
        "Speak confidently about AI topics with colleagues, friends, and even potential employers."
      ]
    },
    {
      title: "Take advantage of AI",
      items: [
        "Apply your newly acquired knowledge by creating a simple project like an image classifier or a chatbot.",
        "Identify real-world challenges in your field and explore how AI can be used to address them.",
        "Learn industry-recognized skills to list on your resume and shine out in job applications."
      ]
    },
    {
      title: "Make more, work less",
      items: [
        "Learn how to use popular AI frameworks and tools like TensorFlow or PyTorch to build more complex projects.",
        "Learn how to use AI to automate repetitive tasks and free up valuable time for more strategic work.",
        "Apply AI to enhance your current projects, whether it's optimizing marketing campaigns, improving customer service, or streamlining supply chains.",
        "Open doors to exciting new positions in the booming AI field, like data scientist, AI engineer, or machine learning specialist."
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              What to expect from this course
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content - Course Expectations */}
            <motion.div
              variants={fadeInLeft}
              className="space-y-6"
            >
              {expectations.map((section, index) => (
                <motion.div
                  key={section.title}
                  variants={staggerItem}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                >
                  {/* Card Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Card Content */}
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300">
                    {/* Card Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                      {section.title}
                    </h3>

                    {/* Items List */}
                    <div className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.1 + itemIndex * 0.1 }}
                          className="flex items-start gap-3 group/item"
                        >
                          {/* Check Icon */}
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-6 h-6 rounded-md bg-amber-500/20 border border-amber-500/50 flex items-center justify-center group-hover/item:bg-amber-500/30 transition-colors duration-300">
                              <Check className="w-4 h-4 text-amber-400" strokeWidth={3} />
                            </div>
                          </div>

                          {/* Item Text */}
                          <p className="text-gray-300 text-base leading-relaxed group-hover/item:text-gray-200 transition-colors duration-300">
                            {item}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* CTA Button */}
              <motion.div
                variants={fadeInUp}
                className="pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content removed as requested */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;