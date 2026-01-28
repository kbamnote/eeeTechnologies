import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Bug } from 'lucide-react';
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation';

const AboutPreview = () => {
  const { ref, isInView } = useScrollAnimation();

  const courses = [
    {
      number: "01",
      icon: Code,
      title: "AI Powered Full Stack Development",
      description: "Master modern full-stack development with AI integration. Learn React, Node.js, databases, and cutting-edge AI tools to build intelligent web applications. Gain hands-on experience creating responsive front-ends, robust back-ends, and implementing AI features like chatbots, recommendation systems, and automated workflows.",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "02",
      icon: Database,
      title: "Data Analysis with AI",
      description: "Transform raw data into actionable insights using AI and machine learning. Master Python, pandas, data visualization, and AI-powered analytics tools. Learn to clean, analyze, and interpret complex datasets while leveraging AI for predictive modeling, pattern recognition, and automated reporting.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "03",
      icon: Brain,
      title: "AI/ML Course",
      description: "Dive deep into Artificial Intelligence and Machine Learning fundamentals. Explore supervised and unsupervised learning, neural networks, deep learning, and natural language processing. Build real-world AI models using TensorFlow and PyTorch, and understand how to deploy intelligent systems that solve complex problems.",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "04",
      icon: Bug,
      title: "Software Testing Course",
      description: "Become a quality assurance expert with comprehensive software testing skills. Learn manual and automated testing, test case design, bug tracking, and modern testing frameworks like Selenium and Jest. Master API testing, performance testing, and continuous integration practices to ensure software reliability and excellence.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Our Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our industry-leading programs designed to transform your career
            </p>
          </motion.div>

          {/* Courses List */}
          <motion.div
            variants={staggerContainer}
            className="space-y-8"
          >
            {courses.map((course, index) => (
              <motion.div
                key={course.number}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition duration-300`} />

                {/* Course Card */}
                <div className="relative bg-white backdrop-blur-md border border-gray-200 rounded-3xl p-8 transition-all duration-300 group-hover:bg-gray-50 group-hover:border-gray-300 shadow-lg hover:shadow-xl">
                  <div className="grid md:grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left - Number, Icon and Title */}
                    <div className="lg:col-span-5">
                      <div className="flex items-start gap-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ delay: index * 0.2, type: "spring" }}
                          className="text-4xl md:text-5xl font-bold text-blue-600"
                        >
                          {course.number}
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                              <course.icon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                            {course.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Right - Description */}
                    <div className="lg:col-span-7">
                      <p className="text-gray-700 leading-relaxed text-base">
                        {course.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore All Courses
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;