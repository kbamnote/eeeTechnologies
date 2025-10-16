import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, Award, Lightbulb, Heart, Globe } from 'lucide-react';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation';

const AboutPreview = () => {
  const { ref, isInView } = useScrollAnimation();

  const features = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering individuals with cutting-edge tech skills to transform their careers and lives.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Expert Mentors",
      description: "Learn from industry professionals with years of real-world experience.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "95% placement rate with top companies across the globe.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Stay ahead with the latest technologies and industry trends.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Trained", icon: Users },
    { number: "500+", label: "Companies Hiring", icon: Globe },
    { number: "95%", label: "Placement Rate", icon: Award },
    { number: "4.9/5", label: "Student Rating", icon: Heart }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
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
          <div className="text-center mb-20">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-8"
            >
              <Heart className="w-4 h-4 mr-2 text-red-500" />
              About eee Technologies
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Transforming Lives Through
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Technology Education
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              We're not just another training institute. We're a community of passionate educators, 
              industry experts, and ambitious learners working together to bridge the gap between 
              traditional education and industry demands.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            {/* Left Content */}
            <motion.div
              variants={fadeInLeft}
              className="space-y-10"
            >
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Why Choose eee Technologies?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Founded with a vision to democratize quality tech education, we've been at the 
                  forefront of training the next generation of tech professionals. Our comprehensive 
                  approach combines theoretical knowledge with hands-on practical experience.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={staggerItem}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

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

            {/* Right Content - Visual */}
            <motion.div
              variants={fadeInRight}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl transform rotate-3" />
                
                {/* Image Placeholder */}
                <motion.div
                  whileHover={{ y: -10, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm"
                >
                  {/* Team Illustration */}
                  <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-6xl font-bold mb-6">
                    <Users className="w-20 h-20" />
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Expert Team
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Industry professionals with 10+ years experience
                    </p>
                  </div>
                </motion.div>

                {/* Floating Achievement Cards */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -left-8 top-1/4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">95%</div>
                      <div className="text-xs text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="absolute -right-8 bottom-1/4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">10K+</div>
                      <div className="text-xs text-gray-600">Students</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-purple-100"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Impact in Numbers
              </h3>
              <p className="text-gray-600 text-lg">
                Real results that speak for themselves
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;