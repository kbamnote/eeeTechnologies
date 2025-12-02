import React, { useState } from 'react';
import { 
  Code, 
  BarChart3, 
  Cpu, 
  Shield
} from 'lucide-react';

const CategorySidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses', icon: Code, count: 4 },
    { id: 'web-development', name: 'Web Development', icon: Code, count: 1 },
    { id: 'data-science', name: 'Data Science', icon: BarChart3, count: 1 },
    { id: 'artificial-intelligence', name: 'Artificial Intelligence', icon: Cpu, count: 1 },
    { id: 'software-testing', name: 'Software Testing', icon: Shield, count: 1 }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Explore Courses
        </h2>
        <p className="text-gray-600">
          Choose a category to find the perfect course for you
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                group relative p-6 rounded-2xl border-2 transition-all duration-300
                ${isSelected 
                  ? 'border-purple-500 bg-purple-50 shadow-lg shadow-purple-100' 
                  : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md'
                }
              `}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className={`
                  w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300
                  ${isSelected 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-purple-100 group-hover:text-purple-600'
                  }
                `}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <div>
                  <h3 className={`
                    font-semibold text-sm transition-colors duration-300
                    ${isSelected ? 'text-purple-700' : 'text-gray-900'}
                  `}>
                    {category.name}
                  </h3>
                  <p className={`
                    text-xs mt-1 transition-colors duration-300
                    ${isSelected ? 'text-purple-600' : 'text-gray-500'}
                  `}>
                    {category.count} courses
                  </p>
                </div>
              </div>

              {isSelected && (
                <div className="absolute top-3 right-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {selectedCategory !== 'all' && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors duration-200"
          >
            Clear Filter
          </button>
        </div>
      )}
    </div>
  );
};

export default CategorySidebar;