import { motion } from 'framer-motion';
import aboutBanner from '../../assets/c.jpg';

const AboutHeroSection = () => {
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
            backgroundImage: `url(${aboutBanner})`,
          }}
        />

        {/* Backdrop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/50 via-[#0A2540]/40 to-[#0A2540]/60" />

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
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#3B82F6]/20 blur-3xl"
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
              <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse"></span>
              Industry Leader
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
              About <span className="text-white bg-clip-text">EEE Technologies</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-[#F8FAFC] mb-8 max-w-2xl leading-relaxed"
            >
              Pioneering cutting-edge solutions in electronics, electrical engineering, 
              and emerging technologies to power tomorrow's innovations.
            </motion.p>

            {/* Feature Cards */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-[#3B82F6]/30 rounded-2xl blur-xl opacity-30" />
                <div className="relative px-6 py-4 bg-[#0A2540]/70 backdrop-blur-xl border border-[#0A2540]/50 rounded-2xl hover:border-[#3B82F6]/50 transition-all">
                  <h3 className="text-lg font-semibold text-[#F8FAFC] group-hover:text-[#3B82F6] transition-colors">
                    15+ Years Experience
                  </h3>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-[#3B82F6]/30 rounded-2xl blur-xl opacity-30" />
                <div className="relative px-6 py-4 bg-[#0A2540]/70 backdrop-blur-xl border border-[#0A2540]/50 rounded-2xl hover:border-[#3B82F6]/50 transition-all">
                  <h3 className="text-lg font-semibold text-[#F8FAFC] group-hover:text-[#3B82F6] transition-colors">
                    20K+ Students
                  </h3>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-[#3B82F6]/30 rounded-2xl blur-xl opacity-30" />
                <div className="relative px-6 py-4 bg-[#0A2540]/70 backdrop-blur-xl border border-[#0A2540]/50 rounded-2xl hover:border-[#3B82F6]/50 transition-all">
                  <h3 className="text-lg font-semibold text-[#F8FAFC] group-hover:text-[#3B82F6] transition-colors">
                    95% Placement
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
