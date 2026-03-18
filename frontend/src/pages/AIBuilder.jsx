import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles, Zap, Target, ArrowRight, TrendingUp, Shield,
  CheckCircle2, BarChart3, Lightbulb, SearchCheck, Layers,
  FileEdit, Rocket,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

import NavBar from "../components/NavBar";
import Footer from "./Footer";
import AiBuilder from "../assets/AiBuilder.png";

// Reusable Scroll Animation Wrapper
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const AIBuilderFeature = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleCTA = () => navigate(isLoggedIn ? "/user/resume-builder" : "/login");

  const features = [
    { icon: <Zap size={32} />, title: "Save hours of work", desc: "Create a professional resume in 15 minutes instead of hours" },
    { icon: <Target size={32} />, title: "Tailored content", desc: "AI customizes your resume for each job application automatically" },
    { icon: <TrendingUp size={32} />, title: "Better results", desc: "AI-optimized resumes get 3x more interviews than traditional ones" },
    { icon: <Shield size={32} />, title: "ATS-optimized", desc: "Ensure your resume passes applicant tracking systems every time" },
  ];

  const aiCapabilities = [
    { icon: <Sparkles size={32} />, title: "Content Enhancement", desc: "Transforms basic descriptions into achievement-focused bullet points" },
    { icon: <Target size={32} />, title: "Keyword Optimization", desc: "Identifies and adds relevant keywords to pass ATS filters" },
    { icon: <BarChart3 size={32} />, title: "Achievement Quantification", desc: "Helps you add metrics and numbers to demonstrate impact" },
    { icon: <Lightbulb size={32} />, title: "Smart Suggestions", desc: "Provides real-time suggestions based on your industry" },
    { icon: <SearchCheck size={32} />, title: "Grammar & Clarity", desc: "Ensures your resume is error-free and easy to read" },
    { icon: <Layers size={32} />, title: "Format Optimization", desc: "Applies professional formatting for AI readability" },
    { icon: <FileEdit size={32} />, title: "Section Guidance", desc: "Recommends which sections to include based on experience" },
    { icon: <Zap size={32} />, title: "Action Verb Selection", desc: "Suggests powerful verbs to make experience stand out" },
    { icon: <Rocket size={32} />, title: "Impact Maximization", desc: "Helps you highlight impressive achievements first" },
  ];

  return (
    <div className="min-h-screen bg-white font-['Outfit'] select-none overflow-x-hidden">
      <NavBar />

      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-12 sm:pt-24 pb-10 overflow-hidden bg-white">
        <div className="absolute rounded-full -top-24 -left-24 w-72 h-72 bg-blue-50 blur-3xl opacity-60" />
        <div className="absolute rounded-full -bottom-24 -right-24 w-72 h-72 bg-orange-50 blur-3xl opacity-60" />

        <div className="grid items-center gap-12 mx-auto max-w-7xl lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block px-4 py-2 bg-blue-50 text-[#0077cc] rounded-full text-sm font-bold mb-6">
              AI-Powered Resume Builder
            </div>
            <h1 className="mb-6 text-4xl sm:text-6xl font-black leading-tight text-[#1a2e52] font-jakarta tracking-tight">
              Build Your Resume with <span className="text-[#0077cc]">AI Assistance</span>
            </h1>
            <p className="mb-8 text-lg sm:text-xl leading-relaxed text-gray-600 max-w-2xl">
              Let our advanced AI guide you through every step of resume creation. Get personalized suggestions, optimized content, and professional formatting in minutes.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <CheckCircle2 size={20} className="text-green-500 shrink-0" />
              <span className="text-sm font-bold text-gray-400">100% free • AI-powered • Professional results</span>
            </div>
            <button onClick={handleCTA} className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#e65100] to-[#f4511e] text-white rounded-xl font-bold text-lg transition-all shadow-[0_10px_25px_rgba(230,81,0,0.3)] hover:-translate-y-1 active:scale-95">
              <Zap size={20} className="fill-white" />
              <span>Start Building Now</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative flex justify-center">
            <img src={AiBuilder} alt="AI Resume UI" className="w-full max-w-xl h-auto drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* WHAT IS AI BUILDER */}
      <AnimatedSection className="px-4 py-14 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-8 text-3xl lg:text-4xl font-black text-[#1a2e52] font-jakarta">What is an AI Resume Builder?</h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-600">
            <p>An AI resume builder uses artificial intelligence to help you create a professional, ATS-optimized resume. Our AI analyzes your experience and suggests improvements, writes compelling bullet points, and ensures you stand out.</p>
            <p>Trained on thousands of successful resumes, it understands what recruiters look for and helps you present your experience in the most impactful way possible.</p>
          </div>
        </div>
      </AnimatedSection>

      {/* WHY USE AI BUILDER */}
      <AnimatedSection className="px-4 py-14 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-4 text-3xl lg:text-4xl font-black text-center text-[#1a2e52] font-jakarta">
            Why Use an <span className="text-[#e65100]">AI Resume Builder?</span>
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-center text-gray-500">Save time and create a better resume with AI-powered assistance</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center justify-center w-14 h-14 mb-6 text-[#0077cc] bg-blue-50 rounded-xl">{item.icon}</div>
                <h3 className="mb-3 text-lg font-bold text-[#1a2e52]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* WHAT AI DOES */}
      <AnimatedSection className="px-4 py-14 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl lg:text-4xl font-black text-center text-[#1a2e52] font-jakarta">What Our AI Resume Builder Does</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiCapabilities.map((item, i) => (
              <div key={i} className="group p-8 text-center transition-all border border-gray-100 bg-white rounded-[2rem] hover:border-[#0077cc]/30 hover:shadow-xl hover:-translate-y-1">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0077cc] transition-all group-hover:bg-[#0077cc] group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#1a2e52]">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* HOW IT WORKS */}
      <AnimatedSection className="px-4 py-14 bg-gray-50/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-4 text-3xl lg:text-4xl font-black text-center text-[#1a2e52] font-jakarta">How Our <span className="text-[#0077cc]">AI Builder</span> Works</h2>
          <div className="p-8 md:p-14 bg-white border border-gray-100 shadow-2xl rounded-[2.5rem]">
            <h3 className="mb-10 text-2xl font-bold text-center text-[#1a2e52]">Simple 3-Step Process:</h3>
            <div className="space-y-8">
              {[
                { step: "1", title: "Enter your information", desc: "Add your basic details, work experience, education, and skills" },
                { step: "2", title: "AI enhances your content", desc: "Our AI analyzes your input and suggests improvements and adds keywords" },
                { step: "3", title: "Download and apply", desc: "Review AI suggestions, make final edits, and download your resume" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 p-4 transition-colors rounded-2xl hover:bg-blue-50/50">
                  <div className="flex shrink-0 items-center justify-center w-12 h-12 text-xl font-black text-white bg-[#0077cc] rounded-full shadow-lg shadow-blue-100">{item.step}</div>
                  <div>
                    <h4 className="mb-1 text-xl font-bold text-[#1a2e52]">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA SECTION */}
      <AnimatedSection className="relative px-4 py-24 bg-white text-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50 rounded-full blur-[120px] -z-10 opacity-60" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60" />
        <h2 className="mb-6 text-4xl lg:text-6xl font-black text-[#1a2e52] font-jakarta leading-tight tracking-tighter">
          Ready to Build Your <span className="text-[#0077cc]">AI-Powered Resume?</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-500">Join thousands of professionals who landed their dream jobs with real-time AI assistance.</p>
        <button onClick={handleCTA} className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#e65100] to-[#f4511e] text-white rounded-xl font-bold text-lg transition-all shadow-[0_10px_25px_rgba(230,81,0,0.3)] hover:-translate-y-1">
          <Zap size={20} className="fill-white" />
          <span>Start Building for Free</span>
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
        </button>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default AIBuilderFeature;