import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import ChatBot from "./components/common/ChatBot.jsx";
import Landing from "./pages/Landing.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Placement from "./pages/Placement.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import Contact from "./pages/Contact.jsx";
import GoogleLanding from "./pages/GoogleLanding.jsx";
import ThankYou from "./pages/ThankYou.jsx";

// PageWrapper handles animation and fills available space
function PageWrapper({ children }) {
  return (
    <motion.main
      className="flex-1 w-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.main>
  );
}

function App() {
  const location = useLocation();
  
  // Check if current route is google-landing
  const isGoogleLanding = location.pathname === '/placement-courses';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {!isGoogleLanding && <Header />}
      
      {/* ChatBot - Available on all pages except Google Landing */}
      {!isGoogleLanding && <ChatBot />}
      
      {/* Main Content */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/courses" element={<PageWrapper><Courses /></PageWrapper>} />
          <Route path="/courses/:slug" element={<PageWrapper><CourseDetail /></PageWrapper>} />
          <Route path="/placement" element={<PageWrapper><Placement /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="/blog/:slug" element={<PageWrapper><BlogPost /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/placement-courses" element={<GoogleLanding />} />
          <Route path="/thank-you" element={<PageWrapper><ThankYou /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      
      {!isGoogleLanding && <Footer />}
      
      {/* ChatBot for Google Landing page */}
      {isGoogleLanding && <ChatBot />}
    </div>
  );
}

export default App;