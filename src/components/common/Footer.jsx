import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import logo from "../../assets/logo.png";

export default function Footer() {
  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/courses", label: "Courses" },
    { to: "/placement", label: "Placement" },
  ];

  const supportLinks = [
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
    { to: "/faq", label: "FAQ" },
    { to: "/support", label: "Support" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/18BkKZcUvm/", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/eeetechnolognp", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/eee-technologies/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/eeetechnologies?igsh=MW44aXU2a3R6djZ6YQ==", label: "Instagram" },
    // { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#0A2540] text-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Link
                  to="/"
                  className="flex items-center gap-3 group"
                >
                  <img
                    src={logo}
                    className="w-auto h-14 p-2 transition-all duration-300"
                  ></img>
                  <span className="text-xl font-bold text-[#F8FAFC] hidden md:block">EEE Technologies</span>
                </Link>
              </div>
              <p className="text-[#F8FAFC]/80 mb-6 max-w-md">
                Empowering students with cutting-edge technology education and
                comprehensive placement support. Join thousands of successful
                graduates who started their tech careers with us.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#F8FAFC]/60">
                  <Mail className="w-5 h-5 text-[#06B6D4]" />
                  <span>info@eeetechnologies.in</span>
                </div>
                <div className="flex items-center gap-3 text-[#F8FAFC]/60">
                  <Phone className="w-5 h-5 text-[#06B6D4]" />
                  <span>+91 9503182807 / 9146882409</span>
                </div>
                <div className="flex items-center gap-3 text-[#F8FAFC]/60">
                  <MapPin className="w-5 h-5 text-[#06B6D4]" />
                  <span className="break-words">
                    1st Floor Mohota Complex, Above State Bank Of India, Katol
                    Road, Chhaoni Rd, Nagpur, Maharashtra, 440013
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-[#F8FAFC] mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-[#F8FAFC]/60 hover:text-[#3B82F6] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold text-[#F8FAFC] mb-6">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-[#F8FAFC]/60 hover:text-[#3B82F6] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#3B82F6]/20 py-8">
          <div className="flex flex-col items-center gap-6">
            {/* Social Links - Centered */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0A2540]/50 text-[#F8FAFC]/60 hover:bg-[#3B82F6] hover:text-[#F8FAFC] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            <p className="text-[#F8FAFC]/60 text-sm">
              © {new Date().getFullYear()} EEE Technologies. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
