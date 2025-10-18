import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Star, 
  TrendingUp, 
  Users, 
  Award,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const CompanyLogos = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const companies = [
    {
      id: 1,
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      category: "tech",
      tier: "tier1",
      placements: 45,
      avgPackage: "₹35 LPA",
      description: "Leading technology company"
    },
    {
      id: 2,
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      category: "tech",
      tier: "tier1",
      placements: 38,
      avgPackage: "₹32 LPA",
      description: "Global technology corporation"
    },
    {
      id: 3,
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      category: "tech",
      tier: "tier1",
      placements: 52,
      avgPackage: "₹30 LPA",
      description: "E-commerce and cloud computing"
    },
    {
      id: 4,
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      category: "tech",
      tier: "tier1",
      placements: 28,
      avgPackage: "₹38 LPA",
      description: "Consumer electronics and software"
    },
    {
      id: 5,
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      category: "tech",
      tier: "tier1",
      placements: 22,
      avgPackage: "₹36 LPA",
      description: "Social media and metaverse"
    },
    {
      id: 6,
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      category: "tech",
      tier: "tier1",
      placements: 15,
      avgPackage: "₹34 LPA",
      description: "Streaming entertainment service"
    },
    {
      id: 7,
      name: "Infosys",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
      category: "consulting",
      tier: "tier2",
      placements: 85,
      avgPackage: "₹18 LPA",
      description: "IT services and consulting"
    },
    {
      id: 8,
      name: "TCS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
      category: "consulting",
      tier: "tier2",
      placements: 92,
      avgPackage: "₹16 LPA",
      description: "IT services and business solutions"
    },
    {
      id: 9,
      name: "Wipro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
      category: "consulting",
      tier: "tier2",
      placements: 78,
      avgPackage: "₹17 LPA",
      description: "Information technology services"
    },
    {
      id: 10,
      name: "Accenture",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
      category: "consulting",
      tier: "tier2",
      placements: 65,
      avgPackage: "₹22 LPA",
      description: "Professional services company"
    },
    {
      id: 11,
      name: "Deloitte",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.svg",
      category: "consulting",
      tier: "tier2",
      placements: 42,
      avgPackage: "₹25 LPA",
      description: "Professional services network"
    },
    {
      id: 12,
      name: "Goldman Sachs",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg",
      category: "finance",
      tier: "tier1",
      placements: 18,
      avgPackage: "₹42 LPA",
      description: "Investment banking and securities"
    },
    {
      id: 13,
      name: "JPMorgan Chase",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/JPMorgan_Chase_logo.svg",
      category: "finance",
      tier: "tier1",
      placements: 25,
      avgPackage: "₹38 LPA",
      description: "Multinational investment bank"
    },
    {
      id: 14,
      name: "Morgan Stanley",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Morgan_Stanley_Logo_1.svg",
      category: "finance",
      tier: "tier1",
      placements: 20,
      avgPackage: "₹40 LPA",
      description: "Investment banking and wealth management"
    },
    {
      id: 15,
      name: "Flipkart",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Flipkart_logo.svg",
      category: "startup",
      tier: "tier2",
      placements: 35,
      avgPackage: "₹28 LPA",
      description: "E-commerce marketplace"
    },
    {
      id: 16,
      name: "Zomato",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
      category: "startup",
      tier: "tier2",
      placements: 22,
      avgPackage: "₹24 LPA",
      description: "Food delivery and restaurant discovery"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Companies', icon: Building },
    { id: 'tech', name: 'Technology', icon: TrendingUp },
    { id: 'consulting', name: 'Consulting', icon: Users },
    { id: 'finance', name: 'Finance', icon: Star },
    { id: 'startup', name: 'Startups', icon: Award }
  ];

  const filteredCompanies = activeCategory === 'all' 
    ? companies 
    : companies.filter(company => company.category === activeCategory);

  const stats = [
    { label: "Partner Companies", value: "200+", icon: Building },
    { label: "Total Placements", value: "2,500+", icon: Users },
    { label: "Average Package", value: "₹28 LPA", icon: TrendingUp },
    { label: "Highest Package", value: "₹45 LPA", icon: Star }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* Header */}
      <motion.div variants={cardVariants} className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Hiring Partners
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We've built strong partnerships with leading companies across industries. 
          Our graduates are working at some of the world's most prestigious organizations.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div variants={cardVariants}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
              >
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div variants={cardVariants}>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-white/20'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Company Logos Grid */}
      <motion.div variants={cardVariants}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              variants={logoVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Tier Badge */}
              <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
                company.tier === 'tier1' 
                  ? 'bg-gold-100 text-gold-700 border border-gold-200' 
                  : 'bg-blue-100 text-blue-700 border border-blue-200'
              }`}>
                {company.tier === 'tier1' ? 'Tier 1' : 'Tier 2'}
              </div>

              {/* Logo */}
              <div className="h-16 flex items-center justify-center mb-4">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-12 h-12 bg-gray-200 rounded-lg items-center justify-center">
                  <Building className="w-6 h-6 text-gray-400" />
                </div>
              </div>

              {/* Company Info */}
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {company.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {company.description}
                </p>
                
                {/* Stats */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Placements:</span>
                    <span className="font-medium text-gray-900">{company.placements}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Avg Package:</span>
                    <span className="font-medium text-green-600">{company.avgPackage}</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Success Metrics */}
      <motion.div variants={cardVariants}>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Partnership Success</h3>
            <p className="text-purple-100 text-lg">
              Building lasting relationships with industry leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-purple-100">Partner Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-purple-100">Repeat Hiring Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">6 months</div>
              <div className="text-purple-100">Average Partnership Duration</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div variants={cardVariants}>
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
          <Building className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Partner With Us?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our network of hiring partners and get access to top-tier talent. 
            Our graduates are industry-ready and equipped with the latest skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
            >
              Become a Partner
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-purple-500 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200 flex items-center space-x-2"
            >
              <span>View All Partners</span>
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CompanyLogos;