import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, BookOpen, Target, Zap } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

// Import all about components
import MissionVision from '../components/about/MissionVision';
import TeamSection from '../components/about/TeamSection';
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

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        {/* Hero Section */}
       <AboutHeroSection/>

        {/* Mission, Vision & Values */}
        <MissionVision />

        {/* Company Timeline */}
        <Timeline />

        {/* Team Section */}
        <TeamSection />

        {/* Infrastructure */}
        <Infrastructure />

        {/* Why Choose Us - Enhanced */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">eee Technologies?</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover what makes us the preferred choice for technology education and career transformation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Industry Recognition",
                  description: "Recognized by top tech companies and industry leaders worldwide",
                  color: "from-yellow-500 to-orange-600"
                },
                {
                  icon: Users,
                  title: "Expert Faculty",
                  description: "Learn from industry professionals with 10+ years of real-world experience",
                  color: "from-blue-500 to-cyan-600"
                },
                {
                  icon: BookOpen,
                  title: "Comprehensive Curriculum",
                  description: "Updated curriculum aligned with latest industry trends and technologies",
                  color: "from-green-500 to-emerald-600"
                },
                {
                  icon: Target,
                  title: "100% Placement Assistance",
                  description: "Dedicated placement cell with extensive industry network and partnerships",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  icon: Zap,
                  title: "Hands-on Learning",
                  description: "Practical projects, real-world applications, and industry-standard tools",
                  color: "from-red-500 to-rose-600"
                },
                {
                  icon: CheckCircle,
                  title: "Modern Infrastructure",
                  description: "State-of-the-art facilities with latest technology and learning resources",
                  color: "from-indigo-500 to-blue-600"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-100 dark:border-gray-600"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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