import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  X, 
  ChevronDown, 
  Star, 
  Clock, 
  DollarSign,
  Users,
  Calendar,
  SlidersHorizontal
} from 'lucide-react';

const SearchFilter = ({ 
  searchTerm, 
  onSearchChange, 
  filters, 
  onFilterChange, 
  onClearFilters 
}) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(filters.priceRange || [0, 5000]);

  const difficultyLevels = [
    { id: 'beginner', label: 'Beginner', color: 'green' },
    { id: 'intermediate', label: 'Intermediate', color: 'yellow' },
    { id: 'advanced', label: 'Advanced', color: 'red' }
  ];

  const durations = [
    { id: '0-4', label: '0-4 weeks' },
    { id: '4-8', label: '4-8 weeks' },
    { id: '8-12', label: '8-12 weeks' },
    { id: '12+', label: '12+ weeks' }
  ];

  const ratings = [
    { id: '4+', label: '4+ Stars', value: 4 },
    { id: '3+', label: '3+ Stars', value: 3 },
    { id: '2+', label: '2+ Stars', value: 2 },
    { id: '1+', label: '1+ Stars', value: 1 }
  ];

  const instructorTypes = [
    { id: 'industry', label: 'Industry Expert' },
    { id: 'academic', label: 'Academic' },
    { id: 'certified', label: 'Certified Trainer' }
  ];

  const handlePriceRangeChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(value);
    setPriceRange(newRange);
    onFilterChange('priceRange', newRange);
  };

  const handleFilterToggle = (filterType, value) => {
    const currentValues = filters[filterType] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    onFilterChange(filterType, newValues);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.difficulty?.length) count += filters.difficulty.length;
    if (filters.duration?.length) count += filters.duration.length;
    if (filters.rating?.length) count += filters.rating.length;
    if (filters.instructor?.length) count += filters.instructor.length;
    if (filters.priceRange && (filters.priceRange[0] > 0 || filters.priceRange[1] < 5000)) count += 1;
    return count;
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-[#F8FAFC] backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#3B82F6]/30 mb-8"
    >
      {/* Main Search Bar */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        {/* Search Input */}
        <motion.div variants={itemVariants} className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1F2937]/40 w-5 h-5" />
          <input
            type="text"
            placeholder="Search courses, skills, or instructors..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-[#3B82F6]/50 rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-[#F8FAFC] text-[#1F2937] placeholder-[#1F2937]/50 transition-all duration-200"
          />
        </motion.div>

        {/* Advanced Filter Toggle */}
        <motion.button
          variants={itemVariants}
          onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
          className={`
            flex items-center px-6 py-3 rounded-xl border transition-all duration-200
            ${isAdvancedOpen 
              ? 'bg-[#3B82F6]/20 border-[#3B82F6]/50 text-[#3B82F6]' 
              : 'bg-[#F8FAFC] border-[#3B82F6]/30 text-[#1F2937] hover:bg-[#3B82F6]/10'
            }
          `}
        >
          <SlidersHorizontal className="w-5 h-5 mr-2" />
          <span className="font-medium">Advanced Filters</span>
          {getActiveFiltersCount() > 0 && (
            <span className="ml-2 bg-[#06B6D4] text-white text-xs px-2 py-1 rounded-full">
              {getActiveFiltersCount()}
            </span>
          )}
          <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-200 ${isAdvancedOpen ? 'rotate-180' : ''}`} />
        </motion.button>

        {/* Clear Filters */}
        {getActiveFiltersCount() > 0 && (
          <motion.button
            variants={itemVariants}
            onClick={onClearFilters}
            className="flex items-center px-4 py-3 bg-[#3B82F6]/20 hover:bg-[#3B82F6]/30 text-[#0A2540] rounded-xl transition-colors duration-200"
          >
            <X className="w-4 h-4 mr-2" />
            <span>Clear</span>
          </motion.button>
        )}
      </div>

      {/* Advanced Filters */}
      {isAdvancedOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-[#3B82F6]/20 pt-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Difficulty Level */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-semibold text-[#1F2937] mb-3 flex items-center">
                <Star className="w-4 h-4 mr-2 text-[#3B82F6]" />
                Difficulty Level
              </h4>
              <div className="space-y-2">
                {difficultyLevels.map((level) => (
                  <label key={level.id} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.difficulty?.includes(level.id) || false}
                      onChange={() => handleFilterToggle('difficulty', level.id)}
                      className="sr-only"
                    />
                    <div className={`
                      w-4 h-4 rounded border-2 mr-3 flex items-center justify-center transition-all duration-200
                      ${filters.difficulty?.includes(level.id)
                        ? 'bg-[#06B6D4] border-[#06B6D4]'
                        : 'border-[#3B82F6]/30 hover:border-[#3B82F6]'
                      }
                    `}>
                      {filters.difficulty?.includes(level.id) && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-sm text-[#1F2937]/70">{level.label}</span>
                  </label>
                ))}
              </div>
            </motion.div>

            {/* Duration */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-semibold text-[#1F2937] mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-[#3B82F6]" />
                Duration
              </h4>
              <div className="space-y-2">
                {durations.map((duration) => (
                  <label key={duration.id} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.duration?.includes(duration.id) || false}
                      onChange={() => handleFilterToggle('duration', duration.id)}
                      className="sr-only"
                    />
                    <div className={`
                      w-4 h-4 rounded border-2 mr-3 flex items-center justify-center transition-all duration-200
                      ${filters.duration?.includes(duration.id)
                        ? 'bg-[#06B6D4] border-[#06B6D4]'
                        : 'border-[#3B82F6]/30 hover:border-[#3B82F6]'
                      }
                    `}>
                      {filters.duration?.includes(duration.id) && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-sm text-[#1F2937]/70">{duration.label}</span>
                  </label>
                ))}
              </div>
            </motion.div>

            {/* Rating */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-semibold text-[#1F2937] mb-3 flex items-center">
                <Star className="w-4 h-4 mr-2 text-[#3B82F6]" />
                Rating
              </h4>
              <div className="space-y-2">
                {ratings.map((rating) => (
                  <label key={rating.id} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.rating?.includes(rating.id) || false}
                      onChange={() => handleFilterToggle('rating', rating.id)}
                      className="sr-only"
                    />
                    <div className={`
                      w-4 h-4 rounded border-2 mr-3 flex items-center justify-center transition-all duration-200
                      ${filters.rating?.includes(rating.id)
                        ? 'bg-[#06B6D4] border-[#06B6D4]'
                        : 'border-[#3B82F6]/30 hover:border-[#3B82F6]'
                      }
                    `}>
                      {filters.rating?.includes(rating.id) && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-sm text-[#1F2937]/70 flex items-center">
                      {rating.label}
                      <div className="flex ml-1">
                        {[...Array(rating.value)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#06B6D4] text-[#06B6D4]" />
                        ))}
                      </div>
                    </span>
                  </label>
                ))}
              </div>
            </motion.div>

            {/* Price Range */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-semibold text-[#1F2937] mb-3 flex items-center">
                <DollarSign className="w-4 h-4 mr-2 text-[#3B82F6]" />
                Price Range
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                    className="w-20 px-3 py-2 border border-[#3B82F6]/30 rounded-lg text-sm focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-[#F8FAFC] text-[#1F2937]"
                  />
                  <span className="text-[#1F2937]/50">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                    className="w-20 px-3 py-2 border border-[#3B82F6]/50 rounded-lg text-sm focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-[#F8FAFC] text-[#1F2937]"
                  />
                </div>
                <div className="text-xs text-[#1F2937]/60">
                  ${priceRange[0]} - ${priceRange[1]}
                </div>
              </div>
            </motion.div>

            {/* Instructor Type */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-semibold text-[#1F2937] mb-3 flex items-center">
                <Users className="w-4 h-4 mr-2 text-[#3B82F6]" />
                Instructor Type
              </h4>
              <div className="space-y-2">
                {instructorTypes.map((type) => (
                  <label key={type.id} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.instructor?.includes(type.id) || false}
                      onChange={() => handleFilterToggle('instructor', type.id)}
                      className="sr-only"
                    />
                    <div className={`
                      w-4 h-4 rounded border-2 mr-3 flex items-center justify-center transition-all duration-200
                      ${filters.instructor?.includes(type.id)
                        ? 'bg-[#06B6D4] border-[#06B6D4]'
                        : 'border-[#3B82F6]/30 hover:border-[#3B82F6]'
                      }
                    `}>
                      {filters.instructor?.includes(type.id) && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-sm text-[#1F2937]/70">{type.label}</span>
                  </label>
                ))}
              </div>
            </motion.div>

            {/* Course Features */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-semibold text-[#1F2937] mb-3 flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-[#3B82F6]" />
                Features
              </h4>
              <div className="space-y-2">
                {['Certificate', 'Live Sessions', 'Lifetime Access', 'Job Support'].map((feature) => (
                  <label key={feature} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.features?.includes(feature.toLowerCase()) || false}
                      onChange={() => handleFilterToggle('features', feature.toLowerCase())}
                      className="sr-only"
                    />
                    <div className={`
                      w-4 h-4 rounded border-2 mr-3 flex items-center justify-center transition-all duration-200
                      ${filters.features?.includes(feature.toLowerCase())
                        ? 'bg-[#06B6D4] border-[#06B6D4]'
                        : 'border-[#3B82F6]/30 hover:border-[#3B82F6]'
                      }
                    `}>
                      {filters.features?.includes(feature.toLowerCase()) && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-sm text-[#1F2937]/70">{feature}</span>
                  </label>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SearchFilter;