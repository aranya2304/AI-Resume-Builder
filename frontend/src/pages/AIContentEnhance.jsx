import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Sparkles, Cpu, Zap, ArrowRight, CheckCircle2, 
  Target, TrendingUp, Layers, Wand2 
} from 'lucide-react';
import { motion, useInView } from "framer-motion";

// Components
import Footer from "./Footer";
import NavBar from "../components/NavBar";
import AiEnhancement from "../assets/AiEnhancement.png";

// Reusable Scroll Animation Wrapper
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const AIEnhancementPage = () => {
  const navigate = useNavigate();

  const scanItems = [
    { title: "Strong Action Verbs", desc: "Replaces passive language with leadership-focused verbs." },
    { title: "Metric Identification", desc: "Identifies opportunities to add percentages, dollars, or timeframes." },
    { title: "Skill Density", desc: "Ensures your key competencies are naturally woven into every bullet." },
    { title: "Contextual Relevance", desc: "Checks if your achievements align with the job's senior requirements." }
  ];

  const refinementFeatures = [
    { icon: Wand2, t: "Auto-Rewrite", d: "Instantly transform one-line duties into multi-dimensional achievements." },
    { icon: Target, t: "Industry Targeting", d: "Uses vocabulary specific to your field (Tech, Finance, Healthcare, etc.)." },
    { icon: TrendingUp, t: "Quantification", d: "Forces metrics into your bullets to prove your business impact." },
    { icon: Layers, t: "Hierarchy Logic", d: "Re-orders your bullet points so your best work is seen first." },
    { icon: Zap, t: "Tone Adjustment", d: "Ensures your writing sounds confident and professional." },
    { icon: CheckCircle2, t: "Clarity Check", d: "Removes corporate jargon and fluff to make every word count." }
  ];

  return (
    <div className="min-h-screen bg-white font-['Outfit'] text-[#1a2e52] selection:bg-orange-100 overflow-x-hidden select-none">
      <NavBar />
      
      {/* 1. HERO SECTION */}
      <section className="relative px-6 pt-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-blue-50 rounded-full blur-[140px] -z-10 opacity-60" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-orange-50 rounded-full blur-[140px] -z-10 opacity-60" />

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center min-h-[80vh] gap-8 pb-16 lg:grid-cols-[1fr_1.2fr] xl:grid-cols-[1fr_1.4fr]">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-50">
                <Cpu size={16} className="text-[#0077cc]" />
                <span className="text-xs font-bold tracking-widest text-[#0077cc] uppercase">Smart Content Optimization</span>
              </div>
              <h1 className="mb-5 text-4xl md:text-7xl font-black tracking-tight leading-[1.1] font-jakarta">
                Turn Weak Points into <br /><span className="text-[#0077cc]">Power Phrases.</span>
              </h1>
              <p className="max-w-xl mx-auto mb-8 text-lg md:text-xl text-gray-500 lg:mx-0">
                Our AI re-writes your boring job duties into metric-driven achievements that land more interviews instantly.
              </p>
              <button onClick={() => navigate("/register")} className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#e65100] to-[#f4511e] text-white rounded-xl font-bold text-lg shadow-lg hover:-translate-y-1 transition-all">
                Enhance My Content <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center lg:justify-end">
              <img src={AiEnhancement} alt="AI Enhancement" className="hidden md:block w-full max-w-[820px] drop-shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS AI ENHANCEMENT */}
      <AnimatedSection className="px-8 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What is AI Enhancement?</h2>
          <div className="mb-12 space-y-6 text-lg text-center text-gray-600 md:text-left">
            <p>AI Enhancement uses Natural Language Processing (NLP) to analyze your existing resume bullets and upgrade them for maximum impact, focusing on <strong>action verbs</strong> and <strong>quantifiable results</strong>.</p>
            <p>Hiring managers want to see what you <strong>achieved</strong>. Our engine suggests high-performance alternatives tailored to your specific industry.</p>
          </div>

          <div className="bg-[#f0f7ff] border-l-4 border-[#0077cc] rounded-2xl p-8 shadow-sm hover:translate-y-[-4px] transition-transform">
            <h3 className="text-xl font-bold mb-6">Our AI Optimizer Scans for:</h3>
            <ul className="space-y-4">
              {scanItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#0077cc] mt-1 shrink-0" />
                  <p className="text-gray-700"><span className="font-bold">{item.title}:</span> {item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* 3. FEATURE GRID */}
      <AnimatedSection className="px-8 py-16 bg-gray-50/50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black text-[#1a2e52] mb-4 font-jakarta">AI Powered <span className="text-[#e65100]">Refinement</span></h2>
            <p className="font-medium text-gray-500">How our engine fine-tunes your professional story.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {refinementFeatures.map((feature, i) => (
              <div key={i} className="p-6 md:p-10 rounded-[2.5rem] border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-2 transition-all group">
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mb-6 bg-blue-50 rounded-2xl group-hover:bg-[#0077cc] transition-colors">
                  <feature.icon size={24} className="text-[#0077cc] group-hover:text-white transition-colors" />
                </div>
                <h4 className="mb-3 text-lg md:text-xl font-bold group-hover:text-[#0077cc] transition-colors">{feature.t}</h4>
                <p className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors">{feature.d}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 4. CTA SECTION */}
      <AnimatedSection className="relative px-8 py-24 bg-white text-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50 rounded-full blur-[120px] -z-10 opacity-60" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60" />
        
        <h2 className="mb-6 text-4xl md:text-6xl font-black text-[#1a2e52] tracking-tighter font-jakarta leading-tight">
          Ready to Upgrade Your <span className="text-[#0077cc]">Content?</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-xl font-medium text-gray-500">
          Let AI do the hard work of writing. Start landing more interviews with perfectly architected bullet points.
        </p>

        <button onClick={() => navigate("/register")} className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#e65100] to-[#f4511e] text-white rounded-xl font-bold text-lg shadow-lg hover:-translate-y-1 transition-all">
          <Sparkles size={18} className="fill-white" />
          <span>Start Enhancing Now</span>
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
        </button>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default AIEnhancementPage;