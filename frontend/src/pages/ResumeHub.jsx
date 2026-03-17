import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layers, Download, History, Copy, CheckCircle2, BarChart3,
  Clock, LayoutDashboard, Eye, MoreHorizontal, FileText, Zap,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

// Components
import NavBar from "../components/NavBar";
import Footer from "./Footer";
import hub from "../assets/resume-hub1.png";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

// Reusable wrapper for scroll-animated sections
const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const ResumeHubPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = typeof window !== "undefined" && !!localStorage.getItem("token");

  const handleFeatureClick = (path) => {
    if (isLoggedIn) navigate(path);
    else {
      localStorage.setItem("redirectPath", path);
      navigate("/login");
    }
  };

  const tableData = [
    { title: "Product Manager - Tech", score: 94, dl: 18, date: "14 hours ago", color: "text-green-500" },
    { title: "Senior Software Engineer", score: 88, dl: 12, date: "2 days ago", color: "text-[#0077cc]" },
    { title: "Marketing Specialist", score: 76, dl: 5, date: "Jan 12, 2026", color: "text-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-white font-['Outfit'] text-[#1a2e52] selection:bg-orange-100 overflow-x-hidden select-none">
      <NavBar />

      {/* 1. HERO SECTION */}
      <section className="relative pb-8 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-orange-50 rounded-full blur-[120px] -z-10 opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-50 rounded-full blur-[120px] -z-10 opacity-50" />
        <div className="relative mt-16 z-10 px-8 mx-auto max-w-7xl">
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-col items-center gap-4 pt-16 lg:flex-row lg:text-left -mt-12">
            <motion.div variants={fadeUp} className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full shadow-sm bg-blue-50">
                <LayoutDashboard size={14} className="text-[#0077cc]" />
                <span className="text-xs font-black tracking-widest text-[#0077cc] uppercase">Master Portfolio</span>
              </div>
              <h1 className="mb-6 text-6xl md:text-7xl font-black leading-[0.95] tracking-tighter font-jakarta">
                Your Career. <br /><span className="text-[#0077cc]">Organized.</span>
              </h1>
              <p className="max-w-xl mx-auto mb-12 text-xl font-medium text-gray-500 lg:mx-0">Manage every version and land interviews faster with your centralized career command center.</p>
              <button onClick={() => handleFeatureClick("/user/my-resumes")} className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#e65100] to-[#f4511e] text-white rounded-xl font-bold text-lg transition-all shadow-[0_10px_25px_rgba(230,81,0,0.3)] hover:-translate-y-1 active:scale-95">
                <span>Access My Hub</span><Layers size={22} className="transition-transform group-hover:rotate-12" />
              </button>
            </motion.div>
            <motion.div variants={fadeUp} className="relative flex-1 flex justify-center lg:justify-end w-full">
              <img src={hub} alt="Hub" className="hidden md:block w-full max-w-[720px] lg:max-w-[850px] h-auto drop-shadow-2xl" />
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute hidden md:flex items-center gap-3 p-4 bg-white border border-gray-100 shadow-xl rounded-2xl bottom-10 right-10">
                <div className="p-2 rounded-lg bg-green-50"><BarChart3 className="text-green-600" size={20} /></div>
                <div><p className="text-[10px] font-black text-gray-400 uppercase">Avg. AI Score</p><p className="text-lg font-black text-[#1a2e52]">92%</p></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHAT IS RESUME HUB */}
      <AnimatedSection className="px-8 py-20 bg-white">
        <div className="mx-auto w-full max-w-5xl px-4">
          <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center mb-12">What is Resume Hub?</motion.h2>
          <motion.div variants={fadeUp} className="mb-12 space-y-6 text-lg text-gray-600">
            <p>Resume Hub is your centralized command center for managing every version of your professional identity.</p>
            <p>By leveraging our intelligent version control, you can quickly duplicate and tailor documents while maintaining a master record of achievements.</p>
          </motion.div>
          <motion.div variants={fadeUp} whileHover={{ y: -5 }} className="bg-[#f0f7ff] border-l-4 border-[#0077cc] rounded-2xl p-5 shadow-xl sm:p-8">
            <h3 className="text-xl font-bold mb-6">Resume Hub Features:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["Cloud Storage", "Access documents from any device."],
                ["Version Control", "Track versions for different job roles."],
                ["One-Click Duplication", "Easily clone your best resume."],
                ["Organized Workspace", "Tag and filter by industry status."]
              ].map(([title, desc], i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#0077cc] mt-1 shrink-0" />
                  <p className="text-gray-700"><span className="font-bold">{title}:</span> {desc}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* 3. TABLE SHOWCASE */}
      <AnimatedSection className="px-8 py-20 bg-gray-50/50">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-8 border-b border-gray-50 bg-gray-50/30">
              <div className="flex gap-1.5"><div className="w-3 h-3 bg-red-400 rounded-full" /><div className="w-3 h-3 bg-yellow-400 rounded-full" /><div className="w-3 h-3 bg-green-400 rounded-full" /><span className="pl-4 text-xs font-black tracking-widest text-gray-400 uppercase border-l ml-4">Resume Command Center</span></div>
            </div>
            <div className="p-4 overflow-x-auto md:p-8">
              <table className="w-full text-left border-separate border-spacing-y-4">
                <thead>
                  <tr className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <th className="px-6 pb-2">Resume Title</th><th className="px-6 pb-2 text-center">AI Score</th><th className="px-6 pb-2 text-center">Downloads</th><th className="px-6 pb-2">Last Modified</th><th className="px-6 pb-2 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, i) => (
                    <motion.tr key={i} variants={fadeUp} className="transition-colors bg-white group/row hover:bg-blue-50/30">
                      <td className="px-6 py-5 border-l border-gray-100 rounded-l-2xl border-y font-bold">
                        <div className="flex items-center gap-3"><FileText size={20} className="text-[#0077cc]" />{row.title}</div>
                      </td>
                      <td className="px-6 py-5 text-center border-y border-gray-100 font-black"><span className={row.color}><Zap size={14} className="inline mr-1" />{row.score}/100</span></td>
                      <td className="px-6 py-5 text-center border-y border-gray-100 text-sm font-bold text-gray-500">{row.dl} DLs</td>
                      <td className="px-6 py-5 border-y border-gray-100 text-sm text-gray-400"><Clock size={14} className="inline mr-1" />{row.date}</td>
                      <td className="px-6 py-5 text-right border-r border-gray-100 rounded-r-2xl border-y text-gray-400">
                        <button className="p-2 hover:text-[#0077cc]"><Eye size={18} /></button><button className="p-2 hover:text-[#0077cc]"><Download size={18} /></button><button className="p-2 hover:text-[#0077cc]"><MoreHorizontal size={18} /></button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 4. BENTO GRID */}
      <AnimatedSection className="px-8 bg-white py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-xs font-black tracking-[0.3em] text-[#0077cc] uppercase">The Command Center</h2>
            <h3 className="text-4xl font-black text-[#1a2e52] font-jakarta">Everything you need, in one view.</h3>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { icon: <Copy />, title: "Instant Cloning", desc: "Duplicate any master resume in one click." },
              { icon: <BarChart3 />, title: "Score Tracking", desc: "Monitor 'Hire-ability' scores in real-time." },
              { icon: <History />, title: "Export History", desc: "Track every time your resume was shared." },
              { icon: <Clock />, title: "Version Control", desc: "Access and restore any previous edit." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -10 }} className="p-6 md:p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm transition-all group">
                <div className="flex items-center justify-center mb-6 text-[#0077cc] w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-[#0077cc] group-hover:text-white transition-colors">
                  {React.cloneElement(item.icon, { size: 20 })}
                </div>
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-sm font-medium text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 5. CTA SECTION */}
      <AnimatedSection className="relative px-8 pt-12 pb-24 overflow-hidden bg-white text-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50 rounded-full blur-[120px] -z-10 opacity-60" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60" />
        <motion.h2 variants={fadeUp} className="mb-6 text-4xl md:text-6xl font-black tracking-tighter">Your Career. <span className="text-[#0077cc]">Organized.</span></motion.h2>
        <motion.p variants={fadeUp} className="max-w-2xl mx-auto mb-10 text-xl font-medium text-gray-500">
          Manage every version, track real-time performance, and keep your job search organized in one location.
        </motion.p>
        <motion.button 
          variants={fadeUp} 
          whileHover={{ y: -6 }} 
          whileTap={{ scale: 0.96 }} 
          onClick={() => handleFeatureClick("/user/my-resumes")} 
          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#e65100] to-[#f4511e] text-white rounded-xl font-bold text-lg shadow-[0_10px_25px_rgba(230,81,0,0.3)]"
        >
          <span>Access My Hub Now</span><Layers size={22} className="group-hover:rotate-12 transition-transform" />
        </motion.button>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default ResumeHubPage;