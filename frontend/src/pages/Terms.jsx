import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Scale,
  ChevronRight,
  AlertCircle,
} from "lucide-react";
import UpToSkillsImg from "../assets/UptoSkills.webp";
import NavBar from "../components/NavBar";
<<<<<<< HEAD
import Footer from "./Footer";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
=======
import Footer from "./Footer"

>>>>>>> b6d6a945 (Updated CV builder validation (education mandatory, certification optional))
const TermsAndConditions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-jakarta text-[#1a2e52] select-none">
      <NavBar />

      {/* Header Section */}
<<<<<<< HEAD
      <motion.header
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="px-8 pt-24 pb-12 bg-white border-b border-gray-200"
      >
=======
      <header className="px-8 pt-24 pb-12 bg-white border-b border-gray-200">
>>>>>>> b6d6a945 (Updated CV builder validation (education mandatory, certification optional))
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-4 bg-[#0077cc]/10 rounded-3xl text-[#0077cc] mb-6">
            <Scale size={40} />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="font-medium text-gray-500">
            Last updated: December 30, 2025
          </p>
        </div>
<<<<<<< HEAD
      </motion.header>

      {/* Main Content Area - Centered Layout */}
      <div className="max-w-5xl px-6 py-16 mx-auto">
        <motion.main
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-gray-100"
        >
          <div className="space-y-16">
            <motion.section
              id="acceptance"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
=======
      </header>

      {/* Main Content Area - Centered Layout */}
      <div className="max-w-5xl px-6 py-16 mx-auto">
        <main className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-gray-100">
          <div className="space-y-16">
            <section id="acceptance">
>>>>>>> b6d6a945 (Updated CV builder validation (education mandatory, certification optional))
              <h2 className="flex items-center gap-3 mb-6 text-2xl font-bold">
                <span className="w-10 h-10 bg-[#e65100]/10 text-[#e65100] flex items-center justify-center rounded-xl text-base font-black">
                  1
                </span>
                Acceptance of Terms
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
<<<<<<< HEAD
                By accessing or using the UptoSkills website and our AI Resume
                Builder, you agree to comply with and be bound by these Terms of
                Service. These terms apply to all visitors, users, and others
                who access or use the Service. If you do not agree with any part
                of these terms, you are prohibited from using this website.
              </p>
            </motion.section>
=======
              By accessing or using the UptoSkills website and our AI Resume Builder,
              you agree to comply with and be bound by these Terms of Service.
              These terms apply to all visitors, users, and others who access or use
              the Service. If you do not agree with any part of these terms, you are
              prohibited from using this website.
              </p>
            </section>
>>>>>>> b6d6a945 (Updated CV builder validation (education mandatory, certification optional))

            <section id="intellectual">
              <h2 className="flex items-center gap-3 mb-6 text-2xl font-bold">
                <span className="w-10 h-10 bg-[#e65100]/10 text-[#e65100] flex items-center justify-center rounded-xl text-base font-black">
                  2
                </span>
                Intellectual Property
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
<<<<<<< HEAD
                All content available on the UptoSkills website, including but
                not limited to text, graphics, logos, resume templates, AI
                algorithms, and software, is the exclusive property of
                UptoSkills and is protected by applicable intellectual property
                laws. You may not use, modify, reproduce, distribute, or create
                derivative works from any content without our prior written
                permission.
=======
               All content available on the UptoSkills website, including but not limited
               to text, graphics, logos, resume templates, AI algorithms, and software,
               is the exclusive property of UptoSkills and is protected by applicable
               intellectual property laws. You may not use, modify, reproduce, distribute,
               or create derivative works from any content without our prior written permission.
>>>>>>> b6d6a945 (Updated CV builder validation (education mandatory, certification optional))
              </p>
            </section>

            <section id="usage">
              <h2 className="flex items-center gap-3 mb-6 text-2xl font-bold">
                <span className="w-10 h-10 bg-[#e65100]/10 text-[#e65100] flex items-center justify-center rounded-xl text-base font-black">
                  3
                </span>
                Use of the Website
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
<<<<<<< HEAD
                You are permitted to use the UptoSkills AI Resume Builder solely
                for personal career development purposes. You agree not to
                engage in:
=======
               You are permitted to use the UptoSkills AI Resume Builder solely for
               personal career development purposes. You agree not to engage in:
>>>>>>> b6d6a945 (Updated CV builder validation (education mandatory, certification optional))
              </p>
              <ul className="pl-6 mt-6 space-y-4 text-gray-600 list-none">
                {[
                  "Automated data collection (scraping) of our resume templates.",
                  "Attempting to reverse-engineer the AI content generation engine.",
                  "Sharing account access with unauthorized third parties.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ChevronRight
                      className="text-[#0077cc] mt-1 shrink-0"
                      size={18}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* --- UPDATED SECTION 4 --- */}
            <section id="ai-content">
              <h2 className="flex items-center gap-3 mb-6 text-2xl font-bold">
                <span className="w-10 h-10 bg-[#e65100]/10 text-[#e65100] flex items-center justify-center rounded-xl text-base font-black">
                  4
                </span>
                AI Content & User Responsibility
              </h2>
              <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] relative overflow-hidden">
                <h3 className="text-lg font-bold mb-3 text-[#0077cc] flex items-center gap-2">
                  Disclaimer on AI Accuracy
                </h3>
                <p className="relative z-10 text-lg leading-relaxed text-gray-600">
<<<<<<< HEAD
                  Our AI provides suggestions based on industry patterns and
                  available data. UptoSkills does not guarantee the accuracy,
                  completeness, or reliability of AI-generated content. Users
                  are responsible for reviewing and verifying all information in
                  their resumes before submission to employers.
=======
                Our AI provides suggestions based on industry patterns and available data.
                UptoSkills does not guarantee the accuracy, completeness, or reliability
                of AI-generated content. Users are responsible for reviewing and verifying
                all information in their resumes before submission to employers.
>>>>>>> b6d6a945 (Updated CV builder validation (education mandatory, certification optional))
                </p>
              </div>
            </section>

            <section id="privacy">
              <h2 className="flex items-center gap-3 mb-6 text-2xl font-bold">
                <span className="w-10 h-10 bg-[#e65100]/10 text-[#e65100] flex items-center justify-center rounded-xl text-base font-black">
                  5
                </span>
                Privacy Policy
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
<<<<<<< HEAD
                We collect, use, and process personal data in accordance with
                our Privacy Policy to provide and improve our services. Our
                Privacy Policy explains how we collect, use, store, and protect
                your personal information, including resume data and contact
                details. By using our services, you consent to the data
                practices described in our Privacy Policy.
=======
              We collect, use, and process personal data in accordance with our Privacy Policy
              to provide and improve our services. Our Privacy Policy explains how we collect,
              use, store, and protect your personal information, including resume data and
              contact details. By using our services, you consent to the data practices
              described in our Privacy Policy.
>>>>>>> b6d6a945 (Updated CV builder validation (education mandatory, certification optional))
              </p>
            </section>

            <section id="liability">
              <h2 className="flex items-center gap-3 mb-6 text-2xl font-bold">
                <span className="w-10 h-10 bg-[#e65100]/10 text-[#e65100] flex items-center justify-center rounded-xl text-base font-black">
                  6
                </span>
                Limitation of Liability
              </h2>
              <p className="p-6 text-lg italic leading-relaxed text-gray-600 border bg-slate-50 rounded-2xl border-slate-100">
<<<<<<< HEAD
                To the fullest extent permitted by applicable law, UptoSkills
                and its affiliates shall not be liable for any direct, indirect,
                incidental, consequential, or special damages (including but not
                limited to loss of job opportunities) arising from your use of
                the platform or from any resume’s inability to secure
                employment.
=======
               To the fullest extent permitted by applicable law, UptoSkills and its affiliates
               shall not be liable for any direct, indirect, incidental, consequential, or
               special damages (including but not limited to loss of job opportunities)
               arising from your use of the platform or from any resume’s inability to
              secure employment.
>>>>>>> b6d6a945 (Updated CV builder validation (education mandatory, certification optional))
              </p>
            </section>
          </div>

          {/* Contact Support Section */}
          <div className="grid gap-6 pt-16 mt-20 border-t border-gray-100 md:grid-cols-3">
<<<<<<< HEAD
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center p-8 text-center bg-slate-50 rounded-[2rem] transition-transform hover:-translate-y-1"
            >
=======
            <div className="flex flex-col items-center p-8 text-center bg-slate-50 rounded-[2rem] transition-transform hover:-translate-y-1">
>>>>>>> b6d6a945 (Updated CV builder validation (education mandatory, certification optional))
              <Mail className="text-[#0077cc] mb-4" size={28} />
              <p className="mb-1 text-xs font-bold tracking-widest text-gray-400 uppercase">
                Email
              </p>
              <p className="text-sm font-bold">info@uptoskills.com</p>
<<<<<<< HEAD
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center p-8 text-center bg-slate-50 rounded-[2rem] transition-transform hover:-translate-y-1"
            >
=======
            </div>
            <div className="flex flex-col items-center p-8 text-center bg-slate-50 rounded-[2rem] transition-transform hover:-translate-y-1">
>>>>>>> b6d6a945 (Updated CV builder validation (education mandatory, certification optional))
              <Phone className="text-[#0077cc] mb-4" size={28} />
              <p className="mb-1 text-xs font-bold tracking-widest text-gray-400 uppercase">
                Phone
              </p>
              <p className="text-sm font-bold">+91-9319772294</p>
<<<<<<< HEAD
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center p-8 text-center bg-slate-50 rounded-[2rem] transition-transform hover:-translate-y-1"
            >
=======
            </div>
            <div className="flex flex-col items-center p-8 text-center bg-slate-50 rounded-[2rem] transition-transform hover:-translate-y-1">
>>>>>>> b6d6a945 (Updated CV builder validation (education mandatory, certification optional))
              <MapPin className="text-[#0077cc] mb-4" size={28} />
              <p className="mb-1 text-xs font-bold tracking-widest text-gray-400 uppercase">
                Office
              </p>
              <p className="text-sm font-bold">Palam, New Delhi</p>
<<<<<<< HEAD
            </motion.div>
          </div>
        </motion.main>
=======
            </div>
          </div>
        </main>
>>>>>>> b6d6a945 (Updated CV builder validation (education mandatory, certification optional))
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
