"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LearningTips = () => {
  const [active, setActive] = useState(0);

  const tips = [
    {
      num: "01",
      title: "Consistency Over Intensity",
      arabic: "المداومة خير من الانقطاع",
      content:
        "The Prophet ﷺ taught us that the most beloved deeds are those done consistently, even if small. Study 15–20 minutes daily rather than one long weekly session. Regularity builds a lasting connection with the Quran.",
      tag: "Daily Habit",
    },
    {
      num: "02",
      title: "Listen Before You Recite",
      arabic: "اسمع قبل أن تتلو",
      content:
        "Before reciting a new verse, listen to a certified Qari's recitation multiple times. The ears train the tongue. Use our live sessions to get immediate Tajweed corrections from your instructor.",
      tag: "Technique",
    },
    {
      num: "03",
      title: "Understand What You Recite",
      arabic: "تدبر القرآن الكريم",
      content:
        "Tadabbur — deep reflection on meaning — transforms recitation into a spiritual experience. Study the meanings and Tafsir of the Surahs you are memorizing or reciting for profound impact.",
      tag: "Reflection",
    },
    {
      num: "04",
      title: "Make Du'a Before Every Session",
      arabic: "رب زدني علماً",
      content:
        "Begin each study session with sincere supplication: 'Rabbi zidni ilma' (O Lord, increase me in knowledge). Seek Allah's blessings — knowledge of His Book is among the greatest gifts.",
      tag: "Spiritual",
    },
    {
      num: "05",
      title: "Review Is More Important Than New",
      arabic: "المراجعة أهم من التقدم",
      content:
        "Hifz scholars dedicate 70% of their time to reviewing what they've already memorized. For every new page you learn, spend time revising five previous pages. Consistency in review prevents forgetting.",
      tag: "Memorization",
    },
  ];

  return (
    <section className="container mx-auto relative overflow-hidden bg-gradient-to-br from-[#1A1B5F] via-[#2D2F8A] to-[#1A1B5F] py-24 px-6">
      {/* Decorative Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04]">
        <span className="text-[20rem] font-serif text-white leading-none">ﷺ</span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-[#6366F1] text-xs font-bold tracking-widest uppercase mb-4">
            Scholar&apos;s Guidance
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white italic">
            Quran Learning Tips
          </h2>
          <p className="mt-4 text-white/60 text-lg max-w-lg mx-auto font-medium">
            Timeless advice from Islamic scholars and our experienced instructors to guide your journey.
          </p>
        </div>

        {/* Layout: Sidebar + Display */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Sidebar Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {tips.map((tip, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`group w-full text-left px-6 py-5 rounded-[2rem] flex items-center gap-5 transition-all duration-300 border-2 ${
                  active === i
                    ? "bg-indigo-500/20 border-indigo-500/50 text-white shadow-xl shadow-indigo-500/10"
                    : "bg-white/5 border-transparent text-white/50 hover:bg-white/10 hover:text-white/80"
                }`}
              >
                <span className={`text-sm font-black transition-colors ${
                    active === i ? "text-[#6366F1]" : "text-white/20"
                  }`}
                >
                  {tip.num}
                </span>
                <span className="font-bold tracking-tight">{tip.title}</span>
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="flex-1 bg-white/5 border-2 border-indigo-500/20 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 flex flex-col justify-between shadow-2xl overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Arabic Quote */}
                <div className="text-3xl md:text-4xl font-bold text-right text-white/20 mb-8 pb-6 border-b border-white/5 font-serif italic rtl">
                  {tips[active].arabic}
                </div>

                <div className="space-y-6">
                  <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/30 text-indigo-200 text-xs font-bold uppercase tracking-wider">
                    {tips[active].tag}
                  </span>
                  
                  <h3 className="text-3xl font-black text-white italic">
                    {tips[active].title}
                  </h3>
                  
                  <p className="text-white/70 text-lg leading-relaxed font-medium">
                    {tips[active].content}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Indicators */}
            <div className="flex gap-3 mt-12">
              {tips.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    active === i ? "w-12 bg-indigo-500" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningTips;