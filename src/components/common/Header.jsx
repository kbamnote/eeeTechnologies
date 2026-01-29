import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import logo from '../../assets/logo.png'
import { useEnrollment } from '../../context/EnrollmentContext';

export default function Header() {
  const navigate = useNavigate();
  const { openEnrollmentModal } = useEnrollment();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Consider scrolled when past ~80vh (leaving some buffer)
      const isScrolled = window.scrollY > window.innerHeight * 0.8;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/courses", label: "Courses" },
    { to: "/placement", label: "Placement" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
    
  ];

  // Function to scroll to top when navigation link is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg' 
        : 'bg-transparent backdrop-blur-none border-b-0 shadow-lg'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group" onClick={scrollToTop}>
            <img src={logo} className="flex items-center justify-center w-auto h-10 transition-all duration-300">
            </img>
            <span className={`text-lg font-bold hidden md:block transition-colors duration-300 ${
              scrolled ? 'text-blue-600' : 'text-white'
            }`}>EEE Technologies</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={scrollToTop}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? (scrolled ? "text-blue-600" : "text-blue-400")
                      : (scrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-400")
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => openEnrollmentModal('General Inquiry')}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                scrolled 
                  ? 'text-gray-900 hover:text-blue-600' 
                  : 'text-white hover:text-blue-200'
              }`}
            >
              Get Started
            </button>
            <Link
              to="/courses"
              onClick={scrollToTop}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Start Learning
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 ${
              scrolled 
                ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100' 
                : 'text-white hover:text-blue-400 hover:bg-white/30'
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="lg:hidden border-t border-white/20 bg-white/95 backdrop-blur-xl">
            <nav className="px-4 py-6 space-y-3">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <Link to="/" className="flex items-center gap-3" onClick={() => {setOpen(false); scrollToTop();}}>
                  <img src={logo} className="w-auto h-8" />
                  <span className="text-xl font-bold text-gray-900">EEE Technologies</span>
                </Link>
              </div>
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-blue-600 bg-blue-50 border-l-4 border-blue-500"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`
                  }
                  onClick={() => {
                    setOpen(false);
                    scrollToTop();
                  }}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => {
                    setOpen(false);
                    openEnrollmentModal('General Inquiry');
                  }}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                    'text-gray-900 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Get Started
                </button>
                <Link
                  to="/courses"
                  className="block px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center shadow-md"
                  onClick={() => {
                    setOpen(false);
                    scrollToTop();
                  }}
                >
                  Start Learning
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}