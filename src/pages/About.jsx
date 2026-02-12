import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, BookOpen, Target, Zap } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

// Import all about components
import MissionVision from '../components/about/MissionVision';
// import TeamSection from '../components/about/TeamSection';
import Timeline from '../components/about/Timeline';
import Infrastructure from '../components/about/Infrastructure';
import JoinCTA from '../components/about/JoinCTA';
import AboutHeroSection from '../components/about/AboutHeroSection';

const About = () => {
  // Set SEO metadata
  useSEO({
    title: "About Us - eee Technologies | Leading Tech Education Institute",
    description: "Learn about eee Technologies - 15+ years of excellence in technology education, 20,000+ successful students, and industry-leading placement rates.",
    keywords: "about eee technologies, tech education, programming courses, placement assistance, technology training",
    canonical: `${window.location.origin}/about`,
    openGraph: {
      title: "About Us - eee Technologies | Leading Tech Education Institute",
      description: "Learn about eee Technologies - 15+ years of excellence in technology education, 20,000+ successful students, and industry-leading placement rates.",
      type: "website",
      url: `${window.location.origin}/about`
    },
    twitter: {
      card: "summary_large_image",
      title: "About Us - eee Technologies | Leading Tech Education Institute",
      description: "Learn about eee Technologies - 15+ years of excellence in technology education, 20,000+ successful students, and industry-leading placement rates."
    }
  });

  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#0A2540]">
        {/* Hero Section */}
       <AboutHeroSection/>

        {/* Mission, Vision & Values */}
        <MissionVision />

        {/* Company Timeline */}
        <Timeline />

        {/* Team Section */}
        {/* <TeamSection /> */}

        {/* Infrastructure */}
        <Infrastructure />

        {/* Why Choose Us - Enhanced */}
        <section className="py-20 bg-gradient-to-br from-[#F8FAFC] to-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-6">
                Why Choose <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">eee Technologies?</span>
              </h2>
              <p className="text-xl text-[#1F2937]/70 max-w-3xl mx-auto">
                Discover what makes us the preferred choice for technology education and career transformation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Industry Recognition",
                  description: "Recognized by top tech companies and industry leaders worldwide",
                  color: "from-[#3B82F6] to-[#06B6D4]"
                },
                {
                  icon: Users,
                  title: "Expert Faculty",
                  description: "Learn from industry professionals with 10+ years of real-world experience",
                  color: "from-[#06B6D4] to-[#3B82F6]"
                },
                {
                  icon: BookOpen,
                  title: "Comprehensive Curriculum",
                  description: "Updated curriculum aligned with latest industry trends and technologies",
                  color: "from-[#0A2540] to-[#3B82F6]"
                },
                {
                  icon: Target,
                  title: "100% Placement Assistance",
                  description: "Dedicated placement cell with extensive industry network and partnerships",
                  color: "from-[#3B82F6] to-[#06B6D4]"
                },
                {
                  icon: Zap,
                  title: "Hands-on Learning",
                  description: "Practical projects, real-world applications, and industry-standard tools",
                  color: "from-[#06B6D4] to-[#0A2540]"
                },
                {
                  icon: CheckCircle,
                  title: "Modern Infrastructure",
                  description: "State-of-the-art facilities with latest technology and learning resources",
                  color: "from-[#0A2540] to-[#3B82F6]"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="bg-[#F8FAFC]/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-[#3B82F6]/20 hover:border-[#3B82F6]/30"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1F2937] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#1F2937]/70 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <JoinCTA />
      </div>
    </>
  );
};

export default About;