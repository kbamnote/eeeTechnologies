import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  Calendar, 
  Tag, 
  User, 
  Mail, 
  Bell,
  Star,
  ArrowRight,
  BookOpen,
  Users,
  Eye,
  Award
} from 'lucide-react';

const BlogSidebar = ({ 
  popularPosts = [], 
  categories = [], 
  tags = [], 
  recentPosts = [],
  onSubscribe 
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const sidebarVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
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

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      onSubscribe?.(email);
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const defaultPopularPosts = [
    {
      id: 1,
      title: "Complete Guide to React Hooks in 2024",
      views: 15420,
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js",
      views: 12350,
      date: "Dec 8, 2024",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      views: 9870,
      date: "Dec 5, 2024",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const defaultCategories = [
    { name: "Web Development", count: 45, color: "bg-blue-500" },
    { name: "Data Science", count: 32, color: "bg-green-500" },
    { name: "AI/ML", count: 28, color: "bg-purple-500" },
    { name: "Mobile Development", count: 24, color: "bg-orange-500" },
    { name: "Career Tips", count: 18, color: "bg-pink-500" },
    { name: "Tech News", count: 15, color: "bg-indigo-500" }
  ];

  const defaultTags = [
    "React", "JavaScript", "Python", "Node.js", "Machine Learning",
    "CSS", "TypeScript", "Vue.js", "Angular", "Docker", "AWS",
    "MongoDB", "PostgreSQL", "GraphQL", "REST API"
  ];

  const stats = [
    { icon: BookOpen, label: "Articles", value: "150+" },
    { icon: Users, label: "Readers", value: "25K+" },
    { icon: Award, label: "Expert Authors", value: "15+" }
  ];

  return (
    <motion.aside
      className="space-y-8"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Newsletter Subscription */}
      <motion.div
        className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-white relative overflow-hidden"
        variants={itemVariants}
      >
        <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <Bell className="w-6 h-6 mr-2" />
            <h3 className="text-xl font-bold">Stay Updated</h3>
          </div>
          <p className="text-purple-100 mb-4">
            Get the latest tech insights and tutorials delivered to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={subscribed}
              className="w-full bg-white text-purple-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
            >
              {subscribed ? (
                <>
                  <Star className="w-4 h-4 mr-2" />
                  Subscribed!
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe
                </>
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* Blog Stats */}
      <motion.div
        variants={itemVariants}
        className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Blog Statistics
        </h3>
        <div className="space-y-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg mr-3">
                  <stat.icon className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-gray-600">{stat.label}</span>
              </div>
              <span className="font-bold text-gray-900">{stat.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Popular Posts */}
      <motion.div
        className="bg-white backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20"
        variants={itemVariants}
      >
        <div className="flex items-center mb-4">
          <TrendingUp className="w-5 h-5 text-purple-600 mr-2" />
          <h3 className="text-lg font-bold text-gray-900">
            Popular Posts
          </h3>
        </div>
        <div className="space-y-4">
          {(popularPosts.length > 0 ? popularPosts : defaultPopularPosts).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              className="group cursor-pointer"
            >
              <div className="flex space-x-3">
                <div className="flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-purple-600 transition-colors duration-200">
                    {post.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                    <span>{post.date}</span>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20"
        variants={itemVariants}
      >   <div className="flex items-center mb-4">
          <Tag className="w-5 h-5 text-purple-600 mr-2" />
          <h3 className="text-lg font-bold text-gray-900">
            Categories
          </h3>
        </div>
        <div className="space-y-3">
          {(categories.length > 0 ? categories : defaultCategories).map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 5 }}
              className="group cursor-pointer"
            >
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${category.color} mr-3`}></div>
                  <span className="text-gray-700 group-hover:text-purple-600 transition-colors duration-200">
                    {category.name}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">
                    {category.count}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tags Cloud */}
      <motion.div
        variants={itemVariants}
        className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="flex items-center mb-4">
          <Tag className="w-5 h-5 text-purple-600 mr-2" />
          <h3 className="text-lg font-bold text-gray-900">
            Popular Tags
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {(tags.length > 0 ? tags : defaultTags).map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-purple-100 hover:text-purple-600 cursor-pointer transition-all duration-200"
            >
              #{tag}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Author Spotlight */}
      <motion.div
        className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20"
        variants={itemVariants}
      >   <div className="flex items-center mb-4">
          <User className="w-5 h-5 text-purple-600 mr-2" />
          <h3 className="text-lg font-bold text-gray-900">
            Author Spotlight
          </h3>
        </div>
        <div className="text-center">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
            alt="Featured Author"
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <h4 className="font-semibold text-gray-900 mb-2">
            Alex Johnson
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            Senior Full-Stack Developer with 8+ years of experience in modern web technologies.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-medium"
          >
            View Profile
          </motion.button>
        </div>
      </motion.div>
    </motion.aside>
  );
};

export default BlogSidebar;