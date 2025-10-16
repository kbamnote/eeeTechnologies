import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Heart, Share2, Bookmark } from 'lucide-react';

const BlogCard = ({ 
  title, 
  excerpt, 
  author, 
  date, 
  readTime, 
  category, 
  image, 
  tags = [],
  likes = 0,
  isLiked = false,
  onLike,
  onShare,
  onBookmark,
  isBookmarked = false,
  href = "#"
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1, x: 0 },
    hover: { 
      scale: 1.05, 
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-600"
    >
      {/* Image Section */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={imageLoaded ? "visible" : "hidden"}
          whileHover="hover"
          className="w-full h-full"
        >
          <img
            src={image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
            alt={title}
            className="w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </motion.div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute top-4 left-4"
        >
          <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg backdrop-blur-sm">
            {category || "Technology"}
          </span>
        </motion.div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            variants={iconVariants}
            whileHover="hover"
            onClick={(e) => {
              e.preventDefault();
              onBookmark?.();
            }}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors duration-200 ${
              isBookmarked 
                ? 'bg-yellow-500 text-white' 
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Bookmark size={16} fill={isBookmarked ? 'currentColor' : 'none'} />
          </motion.button>
          
          <motion.button
            variants={iconVariants}
            whileHover="hover"
            onClick={(e) => {
              e.preventDefault();
              onShare?.();
            }}
            className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-colors duration-200"
          >
            <Share2 size={16} />
          </motion.button>
        </div>
      </div>

      {/* Content Section */}
      <motion.div
        variants={contentVariants}
        className="p-6"
      >
        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User size={14} />
              <span>{author || "John Doe"}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar size={14} />
              <span>{date || "Dec 15, 2024"}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{readTime || "5 min read"}</span>
          </div>
        </div>

        {/* Title */}
        <motion.h3
          className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {title || "Building Modern Web Applications with React and Next.js"}
        </motion.h3>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
          {excerpt || "Discover the latest techniques and best practices for creating scalable, performant web applications using modern React patterns and Next.js features."}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="px-2 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 rounded-md"
              >
                #{tag}
              </motion.span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
          {/* Like Button */}
          <motion.button
            variants={iconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              onLike?.();
            }}
            className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-colors duration-200 ${
              isLiked 
                ? 'text-red-500 bg-red-50 dark:bg-red-900/30' 
                : 'text-gray-500 dark:text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30'
            }`}
          >
            <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
            <span className="text-sm font-medium">{likes}</span>
          </motion.button>

          {/* Read More Button */}
          <motion.a
            href={href}
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold text-sm group/btn"
          >
            <span>Read More</span>
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </motion.a>
        </div>
      </motion.div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.article>
  );
};

export default BlogCard;