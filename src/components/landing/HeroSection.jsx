import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import bannerImg from '../../assets/img.png';
import phoneImg from '../../assets/phone.png';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentBgImage, setCurrentBgImage] = useState(bannerImg);

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

  // Handle responsive image based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Mobile and tablet
        setCurrentBgImage(phoneImg);
      } else {
        setCurrentBgImage(bannerImg);
      }
    };

    handleResize(); // Set initial image
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    <section
      className="
        relative
        min-h-[100vh]
        sm:min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        pt-20
        pb-12
      "
    >
      {/* Background Layer */}
      <div className="absolute inset-0">
        {/* Responsive Background Image */}
        <div
          className="
            absolute inset-0
            bg-no-repeat
            bg-cover
            bg-[position:50%_30%]
            sm:bg-center
            md:bg-right
            lg:bg-center
          "
          style={{
            backgroundImage: `url(${currentBgImage})`,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/60 to-[#0A2540]/30" />

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
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#3B82F6]/20 to-transparent blur-3xl"
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
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#3B82F6]/20 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="text-left max-w-3xl">
            
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="
                inline-flex
                items-center
                px-4
                py-2
                bg-[#0A2540]/60
                backdrop-blur-sm
                border
                border-[#3B82F6]/30
                rounded-full
                text-[#3B82F6]
                text-sm
                font-semibold
                mb-8
              "
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI ON THE JOB
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="
                text-3xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                text-white
                mb-10
                leading-tight
              "
            >
              Boost Your Skills and Get Ahead
            </motion.h1>

            {/* Feature Cards */}
            <motion.div
              variants={itemVariants}
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
                md:gap-6
                items-start
              "
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
                  }}
                  style={{
                    x: mousePosition.x * (index - 1) * 0.5,
                    y: mousePosition.y * 0.3,
                  }}
                  className="relative group"
                >
                  {/* Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/30 to-[#06B6D4]/30 rounded-2xl blur-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.4
                    }}
                  />

                  {/* Card */}
                  <div className="
                    relative
                    px-6
                    py-4
                    bg-[#0A2540]/70
                    backdrop-blur-xl
                    border
                    border-[#0A2540]/50
                    rounded-2xl
                    hover:border-[#3B82F6]/50
                    transition-all
                  ">
                    <h3 className="text-lg font-semibold text-[#F8FAFC] group-hover:text-[#3B82F6] transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;