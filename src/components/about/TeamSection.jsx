import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Mail, 
  Award, 
  Users, 
  BookOpen, 
  Star,
  ChevronRight,
  MapPin,
  Calendar
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "Founder & CEO",
      department: "Leadership",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "15+ years in tech education with PhD in Computer Science. Former Google engineer passionate about transforming lives through education.",
      experience: "15+ Years",
      students: "5000+",
      specialization: "AI/ML, Leadership",
      location: "Bangalore, India",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "rajesh@eetech.com"
      },
      achievements: ["PhD Computer Science", "Ex-Google Engineer", "TEDx Speaker"],
      gradient: "from-[#0A2540] to-[#3B82F6]"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Head of Curriculum",
      department: "Education",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Curriculum design expert with 12+ years at Microsoft. Specializes in creating industry-aligned learning paths.",
      experience: "12+ Years",
      students: "3500+",
      specialization: "Full Stack, DevOps",
      location: "Seattle, USA",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "sarah@eetech.com"
      },
      achievements: ["Ex-Microsoft", "Curriculum Expert", "AWS Certified"],
      gradient: "from-[#3B82F6] to-[#06B6D4]"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Lead Data Science Instructor",
      department: "Data Science",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Data Science expert with 10+ years at Amazon. Published researcher in machine learning and AI applications.",
      experience: "10+ Years",
      students: "2800+",
      specialization: "Data Science, ML",
      location: "San Francisco, USA",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "michael@eetech.com"
      },
      achievements: ["Ex-Amazon", "ML Researcher", "Kaggle Master"],
      gradient: "from-[#06B6D4] to-[#3B82F6]"
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "Cloud Architecture Lead",
      department: "Cloud Computing",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Cloud solutions architect with 8+ years at AWS. Expert in designing scalable cloud infrastructure and DevOps practices.",
      experience: "8+ Years",
      students: "2200+",
      specialization: "AWS, Azure, DevOps",
      location: "Mumbai, India",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "priya@eetech.com"
      },
      achievements: ["AWS Solutions Architect", "Azure Expert", "DevOps Specialist"],
      gradient: "from-[#0A2540] to-[#06B6D4]"
    },
    {
      id: 5,
      name: "David Rodriguez",
      role: "Mobile Development Expert",
      department: "Mobile Development",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Mobile app development specialist with 9+ years at Meta. Expert in React Native and Flutter development.",
      experience: "9+ Years",
      students: "1800+",
      specialization: "React Native, Flutter",
      location: "Austin, USA",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "david@eetech.com"
      },
      achievements: ["Ex-Meta", "Mobile Expert", "App Store Featured"],
      gradient: "from-[#3B82F6] to-[#0A2540]"
    },
    {
      id: 6,
      name: "Lisa Wang",
      role: "Cybersecurity Specialist",
      department: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Cybersecurity expert with 11+ years at IBM. Specializes in ethical hacking and security architecture.",
      experience: "11+ Years",
      students: "1500+",
      specialization: "Ethical Hacking, Security",
      location: "New York, USA",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "lisa@eetech.com"
      },
      achievements: ["Ex-IBM", "CISSP Certified", "Security Researcher"],
      gradient: "from-[#06B6D4] to-[#3B82F6]"
    }
  ];

  const stats = [
    { number: "50+", label: "Expert Instructors", icon: Users },
    { number: "20K+", label: "Students Taught", icon: BookOpen },
    { number: "100+", label: "Industry Awards", icon: Award },
    { number: "95%", label: "Success Rate", icon: Star }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3B82F6]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#06B6D4]/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#0A2540]/10 to-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full text-[#3B82F6] text-sm font-medium mb-8"
            >
              <Users className="w-4 h-4 mr-2 text-[#3B82F6]" />
              Our Expert Team
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
              Meet Our <span className="bg-gradient-to-r from-[#0A2540] to-[#3B82F6] bg-clip-text text-transparent">Expert Team</span>
            </h2>
            <p className="text-xl text-[#1F2937] max-w-3xl mx-auto mb-12">
              Learn from industry veterans who have shaped the careers of thousands of successful tech professionals.
            </p>
            
            {/* Team Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#0A2540] to-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#1F2937] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[#1F2937]/70">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-[#F8FAFC]/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#3B82F6]/20 group-hover:border-[#3B82F6]/50 overflow-hidden relative">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center`}>
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-[#1F2937] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#3B82F6] font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-[#1F2937]/70 mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#1F2937]">
                        {member.experience}
                      </div>
                      <div className="text-xs text-[#1F2937]/70">
                        Experience
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#1F2937]">
                        {member.students}
                      </div>
                      <div className="text-xs text-[#1F2937]/70">
                        Students
                      </div>
                    </div>
                  </div>

                  {/* Specialization */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <BookOpen className="w-4 h-4 text-[#3B82F6] mr-2" />
                      <span className="text-sm font-semibold text-[#1F2937]">
                        Specialization
                      </span>
                    </div>
                    <p className="text-sm text-center text-[#1F2937]/70">
                      {member.specialization}
                    </p>
                  </div>

                  {/* Location */}
                  <div className="flex items-center justify-center mb-6">
                    <MapPin className="w-4 h-4 text-[#1F2937]/60 mr-2" />
                    <span className="text-sm text-[#1F2937]/70">
                      {member.location}
                    </span>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.achievements.map((achievement, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-xs rounded-full"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-[#F8FAFC] rounded-xl flex items-center justify-center hover:bg-[#0A2540] hover:text-white transition-all duration-300 group/social"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.social.twitter}
                      className="w-10 h-10 bg-[#F8FAFC] rounded-xl flex items-center justify-center hover:bg-[#3B82F6] hover:text-white transition-all duration-300 group/social"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.social.github}
                      className="w-10 h-10 bg-[#F8FAFC] rounded-xl flex items-center justify-center hover:bg-[#1F2937] hover:text-white transition-all duration-300 group/social"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 bg-[#F8FAFC] rounded-xl flex items-center justify-center hover:bg-[#06B6D4] hover:text-white transition-all duration-300 group/social"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Team CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-[#3B82F6]/5 to-[#06B6D4]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
                Join Our Expert Team
              </h3>
              <p className="text-lg text-[#1F2937]/70 mb-8 max-w-2xl mx-auto">
                Are you passionate about education and technology? We're always looking for exceptional instructors to join our mission.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#0A2540] to-[#3B82F6] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center mx-auto"
              >
                View Open Positions
                <ChevronRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;