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
      className="group relative bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-[#3B82F6]/30"
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
            src={image || ""}
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
          <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-full shadow-lg backdrop-blur-sm">
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
                ? 'bg-[#06B6D4] text-white' 
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
        <div className="flex items-center justify-between text-sm text-[#1F2937]/60 mb-3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User size={14} />
              <span>{typeof author === 'object' ? author.name : author || "John Doe"}</span>
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
          className="text-xl font-bold text-[#1F2937] mb-3 line-clamp-2 group-hover:text-[#3B82F6] transition-colors duration-300"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {title || "Building Modern Web Applications with React and Next.js"}
        </motion.h3>

        {/* Excerpt */}
        <p className="text-[#1F2937] mb-4 line-clamp-3 leading-relaxed">
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
                className="px-2 py-1 text-xs font-medium text-[#3B82F6] bg-[#F8FAFC] rounded-md"
              >
                #{tag}
              </motion.span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#3B82F6]/10 dark:border-[#3B82F6]/20">
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
                ? 'text-[#06B6D4] bg-[#06B6D4]/10' 
                : 'text-[#1F2937]/60 hover:text-[#06B6D4] hover:bg-[#06B6D4]/10'
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
            className="flex items-center space-x-2 text-[#3B82F6] dark:text-[#3B82F6] hover:text-[#0A2540] dark:hover:text-[#0A2540] font-semibold text-sm group/btn"
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
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3B82F6]/10 to-[#06B6D4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.article>
  );
};

export default BlogCard;