import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Heart, Share2, Bookmark, MessageCircle } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  // Sample blog post data (in a real app, this would come from an API or CMS)
  const blogPosts = [
    {
      id: 1,
      slug: "your-complete-guide-to-becoming-a-full-stack-developer-course",
      title: "Your Complete Guide to Becoming a Full Stack Developer Course",
      excerpt: "The world of web development is evolving at lightning speed, and there's never been a better time to dive into this exciting field. Whether you're a complete beginner or looking to upgrade your skills, understanding the full stack development landscape is crucial for building a successful career in tech.",
      date: "Jan 21, 2026",
      category: "Web Development",
      readTime: "10 min read",
      author: {
        name: "EEE Technologies",
        avatar: "https://images.unsplash.com/photo-1556157382-97eda2f9e946?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Full Stack", "Web Development", "JavaScript", "Career Guide"],
      likes: 298,
      rating: 4.8,
      content: `
        <h2>What is Full Stack Development?</h2>
        <p>Full stack development refers to the ability to work on both the front-end (what users see) and back-end (server-side logic) of web applications. A full stack developer is essentially a jack-of-all-trades in the web development world, capable of building complete web applications from scratch.</p>
        
        <h3>The Front-End: Creating Beautiful User Experiences</h3>
        <p>The front-end is all about user interface and user experience. This involves:</p>
        <ul>
          <li><strong>HTML & CSS:</strong> The foundation of every website. HTML provides structure, while CSS makes everything look beautiful and responsive across different devices.</li>
          <li><strong>JavaScript:</strong> The programming language that brings websites to life with interactivity. Modern frameworks like React, Angular, and Vue.js have revolutionized how we build user interfaces, making them faster, more dynamic, and easier to maintain.</li>
          <li><strong>Responsive Design:</strong> With users accessing websites from countless devices, ensuring your site looks great on everything from smartphones to large desktop monitors is non-negotiable.</li>
        </ul>
        
        <h3>The Back-End: The Engine Behind the Scenes</h3>
        <p>While users never see the back-end directly, it's what makes everything work smoothly:</p>
        <ul>
          <li><strong>Server-Side Languages:</strong> Popular choices include Node.js (JavaScript), Python, Ruby, PHP, and Java. Each has its strengths, but Node.js has gained massive popularity for allowing developers to use JavaScript on both front and back ends.</li>
          <li><strong>Databases:</strong> Understanding how to store, retrieve, and manage data is crucial. You'll work with SQL databases like MySQL and PostgreSQL, or NoSQL solutions like MongoDB, depending on your project needs.</li>
          <li><strong>APIs:</strong> Application Programming Interfaces are how different parts of your application communicate. RESTful APIs and GraphQL are essential skills for any modern developer.</li>
        </ul>
        
        <h2>Why Choose Full Stack Development Course?</h2>
        <p>The demand for skilled full stack developers continues to soar. Companies love hiring developers who can handle multiple aspects of a project, making them incredibly valuable team members. The versatility of full stack skills also means you'll never be bored—you can work on user interfaces one day and server logic the next.</p>
        
        <p>If you're serious about mastering these skills, enrolling in a structured full stack Development course in Nagpur can provide the guidance and hands-on experience you need. A comprehensive program covers everything from basic HTML to advanced deployment strategies, giving you a well-rounded education that employers actively seek.</p>
        
        <h2>Essential Skills Every Full Stack Developer Needs</h2>
        <p>Beyond just knowing languages and frameworks, successful full stack developers need:</p>
        <ul>
          <li><strong>Version Control:</strong> Git and GitHub are industry standards for managing code and collaborating with other developers. Understanding branching, merging, and pull requests is essential for any development job.</li>
          <li><strong>DevOps Basics:</strong> Modern developers need to understand deployment, continuous integration, and basic server management. Tools like Docker, AWS, and Heroku are becoming everyday necessities.</li>
          <li><strong>Problem-Solving Mindset:</strong> Technical skills are important, but the ability to break down complex problems and find elegant solutions is what separates good developers from great ones.</li>
          <li><strong>Communication Skills:</strong> You'll often work with designers, project managers, and other developers. Being able to explain technical concepts clearly is invaluable.</li>
        </ul>
        
        <h2>Building Your Portfolio</h2>
        <p>Theory is important, but nothing beats hands-on experience. Start building projects immediately, even simple ones. Create a personal portfolio website, build a to-do app, develop a blog platform, or tackle any idea that interests you. Each project teaches you something new and gives you tangible proof of your abilities to show potential employers.</p>
        
        <h2>The Learning Path Forward</h2>
        <p>The journey to becoming a full stack developer isn't always easy, but it's incredibly rewarding. Start with the basics, master one technology before moving to the next, and practice consistently. Join developer communities, attend meetups, and never stop learning—the tech world evolves constantly, and staying current is part of the job.</p>
        
        <p>Many aspiring developers find that structured learning accelerates their progress significantly. A quality full stack development course in Nagpur offers mentorship, structured curriculum, and real-world projects that prepare you for actual development work. The combination of theoretical knowledge and practical application creates a solid foundation for your career.</p>
      `
    }
    // Add more blog posts here as needed
  ];

  useEffect(() => {
    // Find the post by slug
    const foundPost = blogPosts.find(post => post.slug === slug);
    if (foundPost) {
      setPost(foundPost);
      // Set SEO
      useSEO({
        title: `${foundPost.title} | EEE Technologies Blog`,
        description: foundPost.excerpt,
        keywords: foundPost.tags.join(', '),
        image: foundPost.image
      });
    } else {
      // Handle 404 case
      setPost(null);
    }
    setLoading(false);
  }, [slug]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-purple-600 hover:text-purple-700 font-semibold">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header with Back Button */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/blog" 
            className="flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Blog Post Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
            {post.category}
          </span>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{post.author.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-50 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex items-center justify-between">
            {/* Likes and Shares */}
            <div className="flex items-center space-x-6">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                  isLiked 
                    ? 'text-red-500 bg-red-50' 
                    : 'text-gray-500 hover:text-red-500 hover:bg-red-50'
                }`}
              >
                <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
                <span className="font-medium">{post.likes + (isLiked ? 1 : 0)}</span>
              </button>
              
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-500 hover:text-blue-500 hover:bg-blue-50 transition-colors"
              >
                <Share2 size={20} />
                <span className="font-medium">Share</span>
              </button>
              
              <button
                onClick={handleBookmark}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                  isBookmarked 
                    ? 'text-yellow-500 bg-yellow-50' 
                    : 'text-gray-500 hover:text-yellow-500 hover:bg-yellow-50'
                }`}
              >
                <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} />
                <span className="font-medium">Save</span>
              </button>
            </div>
            
            {/* Comments */}
            <div className="flex items-center space-x-2 text-gray-500">
              <MessageCircle size={20} />
              <span className="font-medium">Comments</span>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;