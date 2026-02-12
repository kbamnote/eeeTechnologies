import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO.js";

import HeroSection from "../components/landing/HeroSection.jsx";
import AboutPreview from "../components/landing/AboutPreview.jsx";
import CoursesPreview from "../components/landing/CoursesPreview.jsx";
import WhyChooseUs from "../components/landing/WhyChooseUs.jsx";
import Testimonials from "../components/landing/Testimonials.jsx";
import PartnersSection from "../components/landing/PartnersSection.jsx";
import CallToAction from "../components/landing/CallToAction.jsx";

export default function Landing() {
  useSEO({
    title: "EEE Technologies | Learn Advanced IT & Get Placed",
    description:
      "Join EEE Technologies for cutting-edge IT courses with placement support. Learn AI, Data Science, Full-Stack, Cybersecurity and more.",
    keywords:
      "IT courses, placement, data science, AI, full stack, cybersecurity, training",
    canonical: "/",
    openGraph: { image: "/vite.svg" },
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-0 bg-[#F8FAFC]"
    >
      <HeroSection />
      <AboutPreview />
      <CoursesPreview />
      <WhyChooseUs />
      <CallToAction />
    </motion.div>
  );
}