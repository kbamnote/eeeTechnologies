import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Github,
  MessageCircle,
  Share2,
  ExternalLink
} from 'lucide-react';

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/eeeTechnologies',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
      followers: '25K+',
      description: 'Join our community for updates and discussions'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/eeeTechnologies',
      color: 'from-sky-500 to-sky-600',
      hoverColor: 'hover:from-sky-600 hover:to-sky-700',
      followers: '18K+',
      description: 'Follow for tech news and course announcements'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/eeeTechnologies',
      color: 'from-blue-700 to-blue-800',
      hoverColor: 'hover:from-blue-800 hover:to-blue-900',
      followers: '30K+',
      description: 'Connect with professionals and alumni'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/eeeTechnologies',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700',
      followers: '15K+',
      description: 'Behind-the-scenes content and student stories'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/eeeTechnologies',
      color: 'from-red-600 to-red-700',
      hoverColor: 'hover:from-red-700 hover:to-red-800',
      followers: '50K+',
      description: 'Free tutorials and course previews'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/eeeTechnologies',
      color: 'from-gray-800 to-gray-900',
      hoverColor: 'hover:from-gray-900 hover:to-black',
      followers: '12K+',
      description: 'Open source projects and code repositories'
    }
  ];

  const quickActions = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      action: 'Chat with us',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      name: 'Share',
      icon: Share2,
      action: 'Share our page',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700'
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
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
          <Share2 className="w-8 h-8 text-purple-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Connect With Us
        </h2>
        <p className="text-gray-600">
          Follow us on social media for the latest updates, tutorials, and community discussions.
        </p>
      </motion.div>

      {/* Main Social Platforms */}
      <motion.div variants={itemVariants} className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          Follow Our Journey
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPlatforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover="hover"
                className="block"
              >
                <div className="bg-white/70 rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg group">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${platform.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{platform.name}</h4>
                      <p className="text-sm text-gray-500">{platform.followers} followers</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{platform.description}</p>
                  <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-200">
                    <span>Follow us</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants} className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <motion.button
                key={action.name}
                variants={cardVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className={`p-6 bg-gradient-to-r ${action.color} ${action.hoverColor} text-white rounded-xl transition-all duration-300 shadow-lg`}
              >
                <div className="flex items-center justify-center space-x-3">
                  <IconComponent className="w-6 h-6" />
                  <span className="font-medium">{action.action}</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 text-center"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Stay Updated
        </h3>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter for exclusive content, course updates, and tech insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-medium shadow-lg"
          >
            Subscribe
          </motion.button>
        </div>
      </motion.div>

      {/* Social Stats */}
      <motion.div
        variants={itemVariants}
        className="mt-8 pt-6 border-t border-gray-200"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-purple-600">150K+</div>
            <div className="text-sm text-gray-600">Total Followers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-gray-600">Posts This Year</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">95%</div>
            <div className="text-sm text-gray-600">Engagement Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-pink-600">24/7</div>
            <div className="text-sm text-gray-600">Community Support</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SocialLinks;