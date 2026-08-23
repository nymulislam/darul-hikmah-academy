"use client";
import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Register & Choose Your Goal",
      desc: "Create your free account in under 2 minutes. Select your level — beginner Tajweed, Hifz memorization, Arabic Grammar, or advanced Tafsir. We tailor the experience to you.",
      detail: ["Free account setup", "Choose your learning path", "Set your availability"],
      // হেক্স কোডগুলো সরাসরি রাখছি যাতে /10 স্লাইস ব্যবহার করা যায়
      baseColor: "#4F46E5",
      colorClass: "bg-[#4F46E5]",
      opacityBg: "bg-[#4F46E5]/10",
      borderClass: "border-[#4F46E5]/20",
      bgIcon: "📝",
    },
    {
      num: "02",
      title: "Book a Free Trial Class",
      desc: "Schedule a complimentary 30-minute session with one of our certified instructors. Experience live teaching, ask questions, and see if Darul Hikmah is right for you.",
      detail: ["Matched with a certified tutor", "30-minute live session", "Zero obligation to continue"],
      baseColor: "#6366F1",
      colorClass: "bg-[#6366F1]",
      opacityBg: "bg-[#6366F1]/10",
      borderClass: "border-[#6366F1]/20",
      bgIcon: "📅",
    },
    {
      num: "03",
      title: "Learn Live, One-on-One",
      desc: "Your sessions are live, private, and personal. Your instructor corrects your Tajweed in real time, tracks your progress, and adjusts pace to your learning style.",
      detail: ["Live Zoom/Meet sessions", "Real-time Tajweed correction", "Personalized pace & curriculum"],
      baseColor: "#7C3AED",
      colorClass: "bg-[#7C3AED]",
      opacityBg: "bg-[#7C3AED]/10",
      borderClass: "border-[#7C3AED]/20",
      bgIcon: "🎥",
    },
    {
      num: "04",
      title: "Progress & Get Certified",
      desc: "Complete milestones, earn certificates, and celebrate your achievement. Share your Ijazah-pathway progress with family and your community.",
      detail: ["Track milestones weekly", "Earn completion certificates", "Share your achievement"],
      baseColor: "#1A1B5F",
      colorClass: "bg-[#1A1B5F]",
      opacityBg: "bg-[#1A1B5F]/10",
      borderClass: "border-[#1A1B5F]/20",
      bgIcon: "🏆",
    },
  ];

  return (
    <section className="container mx-auto bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-50 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-indigo-600">
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1B5F] mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 max-w-md mx-auto font-medium">
            Four simple steps to begin your Quranic journey with Darul Hikmah.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12 md:gap-20 mb-16 last:mb-0`}
            >
              {/* Text Side */}
              <div className="flex-1 space-y-5">
                <div className="text-7xl md:text-8xl font-black text-indigo-100 leading-none mb-[-20px] select-none">
                  {s.num}
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#1A1B5F]">
                  {s.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-lg font-medium italic">
                  {s.desc}
                </p>
                <ul className="space-y-3">
                  {s.detail.map((d, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-semibold text-sm tracking-tight">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Divider (Only Desktop) */}
              <div className="hidden md:block w-px self-stretch bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

              {/* Icon Side */}
              <div className="flex-1 flex justify-center items-center">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                  className={`relative w-64 h-64 md:w-72 md:h-72 rounded-[3rem] ${s.opacityBg} ${s.borderClass} border-2 backdrop-blur-sm flex flex-col items-center justify-center gap-4 overflow-hidden group transition-all duration-500 shadow-sm hover:shadow-xl`}
                >
                  <span className="text-7xl md:text-8xl group-hover:scale-110 transition-transform duration-500 drop-shadow-md">
                    {s.bgIcon}
                  </span>
                  <div className={`${s.colorClass} text-white rounded-full px-6 py-2 text-xs font-black tracking-widest shadow-lg`}>
                    STEP {s.num}
                  </div>
                  
                  {/* Decorative Corner Orb */}
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full ${s.colorClass} opacity-10`} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;