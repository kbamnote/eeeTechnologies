import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import bannerImg from '../../assets/bannerimg.png';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const features = [
    { title: "Industry Connected", delay: 0.5 },
    { title: "Supported Community", delay: 0.7 },
    { title: "Real World Skills", delay: 0.9 }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bannerImg})`,
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0" />
        
        {/* Animated Gradient Overlays */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-amber-500/20 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/20 to-transparent blur-3xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold mb-8"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            AI ON THE JOB
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-12 leading-tight"
          >
            Boost Your Skills and Get Ahead
          </motion.h1>

          {/* Feature Cards */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                style={{
                  x: mousePosition.x * (index - 1) * 0.5,
                  y: mousePosition.y * 0.3,
                }}
                className="group relative"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                
                {/* Card */}
                <div className="relative px-8 py-6 bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:bg-slate-800/80 hover:border-amber-500/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

         
        </motion.div>
      </div>

     
    </section>
  );
};

export default HeroSection;