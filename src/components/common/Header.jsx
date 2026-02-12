import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import logo from '../../assets/logo.png'
import { useEnrollment } from '../../context/EnrollmentContext';

export default function Header() {
  const navigate = useNavigate();
  const { openEnrollmentModal } = useEnrollment();
  const [open, setOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0A2540]/95 backdrop-blur-xl border-b border-[#3B82F6]/30 shadow-lg">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group" onClick={scrollToTop}>
            <img src={logo} className="flex items-center justify-center w-auto h-10 transition-all duration-300" alt="EEE Technologies Logo" />
            <span className="text-lg font-bold hidden md:block transition-colors duration-300 text-[#3B82F6]">EEE Technologies</span>
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
                      ? "text-[#3B82F6]"
                      : "text-[#ffffff] hover:text-[#3B82F6]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3B82F6] rounded-full" />
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
              className="px-4 py-2 text-sm font-medium transition-colors duration-300 text-[#ffffff]/70 hover:text-[#3B82F6]"
            >
              Get Started
            </button>
            <Link
              to="/courses"
              onClick={scrollToTop}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-[#3B82F6] rounded-lg hover:bg-[#2563EB] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Start Learning
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 text-white hover:text-[#3B82F6]/80 hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="lg:hidden border-t border-white/20 bg-[#0A2540]/95 backdrop-blur-xl">
            <nav className="px-4 py-6 space-y-3">
              <div className="mb-4 pb-4 border-b border-[#3B82F6]/20">
                <Link to="/" className="flex items-center gap-3" onClick={() => {setOpen(false); scrollToTop();}}>
                  <img src={logo} className="w-auto h-8" alt="EEE Technologies Logo" />
                  <span className="text-xl font-bold text-white">EEE Technologies</span>
                </Link>
              </div>
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-[#3B82F6] bg-[#3B82F6]/10 border-l-4 border-[#3B82F6]"
                        : "text-[#1F2937] hover:text-[#3B82F6] hover:bg-[#F8FAFC]"
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
                  className="block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 text-white hover:text-[#3B82F6] hover:bg-gray-800"
                >
                  Get Started
                </button>
                <Link
                  to="/courses"
                  className="block px-4 py-3 text-base font-semibold text-white bg-[#3B82F6] rounded-lg hover:bg-[#2563EB] transition-all duration-300 text-center shadow-md"
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