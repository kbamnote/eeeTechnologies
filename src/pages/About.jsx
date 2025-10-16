import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';

const About = () => {
  useSEO({
    title: 'About Us - eee Technologies',
    description: 'Learn about eee Technologies - your trusted partner in technical education and career development.',
    keywords: 'about eee technologies, technical education, career development, training institute'
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">eee Technologies</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Empowering the next generation of tech professionals through comprehensive education and hands-on training.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At eee Technologies, we bridge the gap between academic learning and industry requirements. 
              Our mission is to provide world-class technical education that prepares students for successful careers in technology.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in practical, hands-on learning that gives our students the confidence and skills 
              they need to excel in today's competitive tech landscape.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 md:p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Industry-experienced instructors
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Hands-on project-based learning
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                100% placement assistance
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Modern curriculum aligned with industry needs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;