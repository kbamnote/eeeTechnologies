import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Users, GraduationCap, TrendingUp, ArrowRight, Sparkles, Target, BookOpen, Code, Brain, Globe, Zap, Rocket, ChevronRight, Star, Building2 } from 'lucide-react';

const AboutHeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [currentWord, setCurrentWord] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const words = ["Excellence", "Innovation", "Leadership", "Success"];

  // Rotating words effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  // Track mouse for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    {
      icon: GraduationCap,
      value: '20,000+',
      label: 'Successful Students',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Years Excellence',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Building2,
      value: '500+',
      label: 'Industry Partners',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Placement Rate',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      rotate: [-3, 3, -3],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          style={{ y: y1, opacity }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2, opacity }}
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/40 to-cyan-500/40 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y1, opacity }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            style={{
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5,
            }}
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-400/30 rounded-full text-white text-sm font-semibold mb-8 shadow-lg shadow-purple-500/20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
              </motion.div>
              Leading Tech Education Institute
              <ChevronRight className="w-4 h-4 ml-2" />
            </motion.div>

            {/* Main Heading with Rotating Words */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                About
                <span className="block mt-2 relative h-20 lg:h-24">
                  {words.map((word, index) => (
                    <motion.span
                      key={word}
                      className="absolute left-0 right-0 lg:left-0 lg:right-auto bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={{
                        opacity: currentWord === index ? 1 : 0,
                        y: currentWord === index ? 0 : -50,
                        rotateX: currentWord === index ? 0 : 90,
                      }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
                <span className="text-white">eee Technologies</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Empowering minds, transforming careers, and shaping the future of technology education for over 15 years with industry-leading courses and expert mentorship.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-14 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl shadow-purple-500/50 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center justify-center text-lg">
                  Explore Our Story
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </motion.div>
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-purple-400/50 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 shadow-xl"
              >
                <span className="flex items-center justify-center text-lg">
                  <Users className="mr-3 w-6 h-6" />
                  Meet Our Team
                </span>
              </motion.button>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group"
                >
                  <motion.div
                    variants={pulseVariants}
                    animate="animate"
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl`}
                  />
                  <div className="relative text-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-all duration-300">
                    <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl mb-3 mx-auto shadow-lg`}>
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <motion.div 
                      className="text-3xl font-bold text-white mb-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
            style={{
              x: mousePosition.x * -0.3,
              y: mousePosition.y * -0.3,
            }}
          >
            {/* Main Illustration Container */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Animated Glow Ring */}
              <motion.div
                variants={pulseVariants}
                animate="animate"
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-[3rem] blur-3xl opacity-40"
              />
              
              {/* Main Card */}
              <motion.div
                whileHover={{ 
                  y: -15, 
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ duration: 0.4 }}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[3rem] p-10 shadow-2xl border border-white/20"
              >
                {/* Journey Timeline */}
                <motion.div 
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 mb-8 shadow-2xl border border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-bold text-lg">Our Journey</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { year: "2010", milestone: "Founded with a vision", color: "from-blue-400 to-cyan-400", delay: 1.2 },
                      { year: "2015", milestone: "10,000+ students trained", color: "from-purple-400 to-pink-400", delay: 1.4 },
                      { year: "2020", milestone: "Industry partnerships", color: "from-green-400 to-emerald-400", delay: 1.6 },
                      { year: "2025", milestone: "Leading tech institute", color: "from-orange-400 to-red-400", delay: 1.8 }
                    ].map((item) => (
                      <motion.div
                        key={item.year}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: item.delay }}
                        className="flex items-center gap-4"
                      >
                        <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0`}>
                          {item.year}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-300">{item.milestone}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Achievement Metrics */}
                <div className="space-y-6">
                  {[
                    { name: "Student Satisfaction", value: 98, color: "from-purple-500 to-pink-500", delay: 2.2 },
                    { name: "Course Completion", value: 92, color: "from-blue-500 to-cyan-500", delay: 2.4 },
                    { name: "Career Success", value: 95, color: "from-green-500 to-emerald-500", delay: 2.6 }
                  ].map((metric) => (
                    <motion.div
                      key={metric.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: metric.delay }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-white">{metric.name}</span>
                        <motion.span 
                          className="text-sm font-bold text-purple-400"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: metric.delay + 0.3 }}
                        >
                          {metric.value}%
                        </motion.span>
                      </div>
                      <div className="relative w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${metric.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.value}%` }}
                          transition={{ duration: 1.5, delay: metric.delay + 0.3, ease: "easeOut" }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/30"
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Achievement Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 3, type: "spring" }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 p-4 rounded-2xl shadow-2xl shadow-orange-500/50 border-4 border-white"
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ rotate: { duration: 0.5 } }}
                className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/50 border-4 border-white/20 cursor-pointer"
              >
                <Code className="w-10 h-10 text-white" />
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.2, rotate: -360 }}
                className="absolute -bottom-8 -right-8 w-18 h-18 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50 border-4 border-white/20 cursor-pointer p-4"
              >
                <Rocket className="w-9 h-9 text-white" />
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 2 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="absolute top-1/2 -left-14 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 border-4 border-white/20 cursor-pointer"
              >
                <Brain className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.2, rotate: -360 }}
                className="absolute -top-6 right-16 w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-2xl shadow-orange-500/50 border-4 border-white/20 cursor-pointer"
              >
                <Globe className="w-7 h-7 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-400 font-medium">Scroll to explore</span>
          <div className="w-8 h-14 border-3 border-purple-400 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"
            />
          </div>
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-0 w-8 h-14 border-2 border-purple-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHeroSection;