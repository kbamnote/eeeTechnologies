import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import Landing from "./pages/Landing.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import Placement from "./pages/Placement.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";

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

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/courses" element={<PageWrapper><Courses /></PageWrapper>} />
          <Route path="/placement" element={<PageWrapper><Placement /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
