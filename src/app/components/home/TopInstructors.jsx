"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TopInstructors = () => {
  const [active, setActive] = useState(0);

  const instructors = [
    { name: "Sheikh Abdullah Al-Masri", role: "Quran & Tajweed Specialist", bio: "Hafiz with a verified Sanad from Al-Azhar University. Specializing in Hafs 'an 'Asim recitation.", tags: ["Tajweed", "Hifz", "Makhaarij"], students: 320, rating: "4.9", exp: "12 yrs", initials: "AA", color: "#1A1B5F", light: "#EEF0FF", languages: ["Arabic", "English"] },
    { name: "Ustadha Fatima Yusuf", role: "Female Quran Instructor", bio: "Dedicated instructor with Ijazah. Expert in teaching beginners and children in a private setting.", tags: ["Recitation", "Tafsir", "Children"], students: 210, rating: "5.0", exp: "8 yrs", initials: "FY", color: "#5B50C8", light: "#EDEAFF", languages: ["Arabic", "Urdu", "English"] },
    { name: "Qari Mahmoud Hassan", role: "Hifz Program Director", bio: "Directed 400+ students to full memorization. Expert in structured revision and motivation.", tags: ["Hifz", "Revision", "Tajweed"], students: 415, rating: "4.8", exp: "15 yrs", initials: "MH", color: "#3B45A3", light: "#E8EAFF", languages: ["Arabic", "English"] },
    { name: "Dr. Aisha Rahman", role: "Arabic & Islamic Studies", bio: "PhD in Islamic Sciences. Combines academic grounding with practical lessons for global students.", tags: ["Arabic", "Fiqh", "Tafsir"], students: 180, rating: "4.9", exp: "10 yrs", initials: "AR", color: "#6366F1", light: "#EEF0FF", languages: ["Arabic", "English", "French"] },
  ];

  const inst = instructors[active];

  return (
    <section className="container mx-auto bg-[#F4F5FC] py-24 px-6">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 rounded-full px-4 py-1 mb-3">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
              <span className="text-[10px] font-bold tracking-widest text-indigo-600 uppercase">Meet The Team</span>
            </div>
            <h2 className="text-4xl font-black text-[#1A1B5F]">Top Instructors</h2>
          </div>
          <button className="text-indigo-600 font-bold flex items-center gap-2 group text-sm">
            View All Instructors
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Card */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="bg-white rounded-[32px] overflow-hidden border border-indigo-50 shadow-xl"
              >
                <div style={{ background: inst.color }} className="p-10 pb-0 flex gap-6 items-end">
                  <div className="w-24 h-24 rounded-2xl bg-white/20 border-2 border-white/30 flex items-center justify-center text-3xl font-black text-white mb-[-20px] shadow-lg">
                    {inst.initials}
                  </div>
                  <div className="pb-8">
                    <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full">★ {inst.rating} Rating</span>
                    <h3 className="text-2xl font-black text-white mt-2">{inst.name}</h3>
                    <p className="text-white/70 text-sm">{inst.role}</p>
                  </div>
                </div>

                <div className="p-10 mt-5">
                  <p className="text-gray-500 leading-relaxed text-[15px] mb-8 italic">&quot;{inst.bio}&quot;</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {inst.tags.map(t => (
                      <span key={t} style={{ background: inst.light, color: inst.color }} className="px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider">{t}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-0.5 bg-indigo-50 rounded-2xl overflow-hidden mb-8">
                    <div className="bg-[#F9FAFF] p-4 text-center">
                      <p className="text-lg font-black text-[#1A1B5F]">{inst.students}+</p>
                      <p className="text-[10px] uppercase font-bold text-gray-400">Students</p>
                    </div>
                    <div className="bg-[#F9FAFF] p-4 text-center">
                      <p className="text-lg font-black text-[#1A1B5F]">{inst.exp}</p>
                      <p className="text-[10px] uppercase font-bold text-gray-400">Experience</p>
                    </div>
                    <div className="bg-[#F9FAFF] p-4 text-center">
                      <p className="text-lg font-black text-[#1A1B5F]">{inst.languages.length}</p>
                      <p className="text-[10px] uppercase font-bold text-gray-400">Languages</p>
                    </div>
                  </div>
                  <button style={{ background: inst.color }} className="w-full py-4 rounded-2xl text-white font-black text-sm hover:opacity-90 transition-opacity">
                    Book a Class with {inst.name.split(' ')[1]}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* List Side */}
          <div className="flex flex-col gap-3">
            {instructors.map((instructor, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`p-4 rounded-2xl flex items-center gap-4 transition-all border ${active === i ? 'bg-[#1A1B5F] border-[#1A1B5F] shadow-lg' : 'bg-white border-indigo-50'}`}
              >
                <div style={{ background: active === i ? 'rgba(255,255,255,0.1)' : instructor.light, color: active === i ? '#fff' : instructor.color }} className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-xs">
                  {instructor.initials}
                </div>
                <div className="text-left flex-1">
                  <p className={`text-sm font-bold ${active === i ? 'text-white' : 'text-[#1A1B5F]'}`}>{instructor.name}</p>
                  <p className={`text-[11px] ${active === i ? 'text-white/60' : 'text-gray-400'}`}>{instructor.role}</p>
                </div>
                <span className={`text-[11px] font-black ${active === i ? 'text-yellow-400' : 'text-indigo-600'}`}>★ {instructor.rating}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;