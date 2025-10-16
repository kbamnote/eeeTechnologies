import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Building2, 
  DollarSign, 
  FileText, 
  MessageSquare, 
  UserCheck, 
  Network,
  Award,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';
import SuccessStories from '../components/placement/SuccessStories';

const Placement = () => {
  useSEO({
    title: 'Placement Assistance & Success Stories | EEE Technologies',
    description: '95% placement rate with comprehensive career support. Read inspiring success stories of our students who landed jobs at top companies like Google, Microsoft, Amazon.',
    keywords: 'placement assistance, career support, job placement, success stories, tech jobs, google jobs, microsoft careers, amazon placement, student success',
    ogImage: '/images/placement-og.jpg'
  });

  const { ref, controls, isInView } = useScrollAnimation();
  const { ref: statsRef, controls: statsControls, isInView: statsInView } = useScrollAnimation();

  const stats = [
    { 
      number: 95, 
      suffix: '%', 
      label: 'Placement Rate',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600'
    },
    { 
      number: 500, 
      suffix: '+', 
      label: 'Students Placed',
      icon: Users,
      color: 'from-blue-500 to-cyan-600'
    },
    { 
      number: 100, 
      suffix: '+', 
      label: 'Partner Companies',
      icon: Building2,
      color: 'from-purple-500 to-violet-600'
    },
    { 
      number: 8.5, 
      prefix: '₹', 
      suffix: 'L', 
      label: 'Average Package',
      icon: DollarSign,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const companies = [
    { name: 'TCS', logo: '🏢' },
    { name: 'Infosys', logo: '💼' },
    { name: 'Wipro', logo: '🌟' },
    { name: 'Accenture', logo: '⚡' },
    { name: 'IBM', logo: '🔵' },
    { name: 'Microsoft', logo: '🪟' },
    { name: 'Amazon', logo: '📦' },
    { name: 'Google', logo: '🔍' },
    { name: 'Cognizant', logo: '🧠' },
    { name: 'HCL', logo: '💻' },
    { name: 'Tech Mahindra', logo: '🚀' },
    { name: 'Capgemini', logo: '⭐' }
  ];

  const services = [
    {
      title: 'Resume Building',
      description: 'Professional resume crafting to highlight your skills and achievements effectively.',
      icon: FileText,
      features: ['ATS-Optimized Format', 'Industry-Specific Templates', 'Professional Review']
    },
    {
      title: 'Interview Preparation',
      description: 'Mock interviews and technical preparation to boost your confidence.',
      icon: MessageSquare,
      features: ['Technical Rounds', 'HR Interviews', 'Group Discussions']
    },
    {
      title: 'Soft Skills Training',
      description: 'Communication and presentation skills development for workplace success.',
      icon: UserCheck,
      features: ['Communication Skills', 'Leadership Training', 'Team Collaboration']
    },
    {
      title: 'Industry Connections',
      description: 'Direct connections with hiring managers and recruitment teams.',
      icon: Network,
      features: ['Direct Referrals', 'Industry Networking', 'Job Alerts']
    }
  ];

  const placementProcess = [
    {
      step: '01',
      title: 'Skill Assessment',
      description: 'Comprehensive evaluation of your technical and soft skills',
      icon: Target
    },
    {
      step: '02',
      title: 'Profile Building',
      description: 'Create compelling resume and online professional profiles',
      icon: FileText
    },
    {
      step: '03',
      title: 'Interview Training',
      description: 'Intensive mock interviews and feedback sessions',
      icon: MessageSquare
    },
    {
      step: '04',
      title: 'Job Matching',
      description: 'Connect with relevant opportunities based on your profile',
      icon: Briefcase
    },
    {
      step: '05',
      title: 'Placement Success',
      description: 'Secure your dream job with ongoing support',
      icon: Award
    }
  ];

  const successStories = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      company: 'Microsoft',
      package: '₹12 LPA',
      image: '👩‍💻',
      story: 'From zero coding experience to Microsoft in 6 months!'
    },
    {
      name: 'Rahul Kumar',
      role: 'Data Scientist',
      company: 'Amazon',
      package: '₹15 LPA',
      image: '👨‍💼',
      story: 'Career transition from mechanical to tech was seamless.'
    },
    {
      name: 'Anita Patel',
      role: 'Full Stack Developer',
      company: 'Google',
      package: '₹18 LPA',
      image: '👩‍🎓',
      story: 'Landed my dream job at Google after completing the course.'
    }
  ];

  const StatCard = ({ stat, index }) => {
    const { count } = useCountUp(statsInView ? stat.number : 0, stat.number, 2000);
    const Icon = stat.icon;
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="relative group"
      >
        <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300`}>
          <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <Icon className="w-8 h-8 mb-4 mx-auto" />
            <div className="text-3xl md:text-4xl font-bold mb-2">
              {stat.prefix}{count}{stat.suffix}
            </div>
            <div className="text-white/90 font-medium text-sm">
              {stat.label}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-medium mb-8"
            >
              <Award className="w-4 h-4" />
              100% Placement Guarantee
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8">
              Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dream Job</span>
              <br />Awaits You
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              We don't just teach you skills – we ensure you land your dream job with our comprehensive placement support and industry connections.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300">
                View Success Stories
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                ref={statsRef}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Our Track Record
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Numbers that speak for our commitment to your success
                </p>
              </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-blue-200"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon className="w-8 h-8 text-blue-600" />}
                  </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Placement <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure your career success
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-y-1/2" />
            
            <div className="grid md:grid-cols-5 gap-8">
              {placementProcess.map((process, index) => {
                const Icon = process.icon;
                return (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative text-center"
                  >
                    <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-blue-600 mb-2">{process.step}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{process.title}</h3>
                      <p className="text-gray-600 text-sm">{process.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Placement <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support to land your dream job
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon className="w-8 h-8 text-blue-600" />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success <span className="text-blue-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real students, real success stories
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{story.image}</div>
                  <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                  <p className="text-blue-600 font-medium">{story.role}</p>
                  <p className="text-gray-600">{story.company}</p>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-green-600 mb-2">{story.package}</div>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 text-center italic">
                  "{story.story}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Placement <span className="text-blue-600">Partners</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Top companies trust our graduates
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {company.logo}
                </div>
                <span className="text-gray-700 font-medium text-sm text-center">
                  {company.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SuccessStories />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-12 text-center text-white overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Career Journey?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of successful graduates who landed their dream jobs with our comprehensive placement support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  <Briefcase className="w-5 h-5" />
                  Get Placement Support
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Placement;