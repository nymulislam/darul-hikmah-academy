"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { ArrowRight } from "@gravity-ui/icons";

// ── Data ───────────────────────────────────────────────────
const FEATURES = [
  {
    icon: "🎓",
    title: "Ijazah-Certified Tutors",
    desc: "Every instructor holds a verified chain of Quranic transmission (Sanad) going back to the Prophet ﷺ.",
    stat: "20+",
    statLabel: "Tutors",
  },
  {
    icon: "🌍",
    title: "Global Community",
    desc: "Students from 15+ countries learn together on a single platform, united by one Book.",
    stat: "500+",
    statLabel: "Students",
  },
  {
    icon: "📅",
    title: "Flexible Scheduling",
    desc: "Morning, evening, or weekend — book sessions around your life, in any timezone.",
    stat: "24/7",
    statLabel: "Available",
  },
  {
    icon: "👩‍🏫",
    title: "Female-Only Classes",
    desc: "Qualified female instructors provide a private, comfortable environment for sisters and children.",
    stat: "100%",
    statLabel: "Private",
  },
  {
    icon: "📺",
    title: "Live, Not Recorded",
    desc: "Every session is live and one-on-one. Real-time Tajweed correction — no pre-recorded substitutes.",
    stat: "1-on-1",
    statLabel: "Always",
  },
  {
    icon: "🏆",
    title: "Proven Results",
    desc: "From first-time reciters to Hifz graduates — our 99% success rate speaks for itself.",
    stat: "99%",
    statLabel: "Success",
  },
];

// ── Feature Card ───────────────────────────────────────────
const FeatureCard = ({ feature, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative overflow-hidden rounded-[20px] border-[1.5px] p-8 cursor-default
        transition-all duration-300
        ${hovered
          ? "bg-primary border-primary shadow-2xl shadow-primary/20 -translate-y-2"
          : "bg-white border-secondary/10 hover:border-secondary/25 shadow-sm"
        }
      `}
    >
      {/* Decorative orb on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
        className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-secondary/20 pointer-events-none"
      />

      {/* Stat Badge */}
      <div
        className={`
          inline-flex items-baseline gap-1 rounded-full px-3 py-1 mb-5
          transition-colors duration-300
          ${hovered ? "bg-secondary/20" : "bg-secondary/10"}
        `}
      >
        <span
          className={`text-[15px] font-black transition-colors duration-300 ${hovered ? "text-indigo-300" : "text-secondary"}`}
        >
          {feature.stat}
        </span>
        <span
          className={`text-[11px] font-semibold transition-colors duration-300 ${hovered ? "text-indigo-400/70" : "text-secondary/80"}`}
        >
          {feature.statLabel}
        </span>
      </div>

      {/* Emoji */}
      <motion.div
        animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? 5 : 0 }}
        transition={{ duration: 0.25 }}
        className="text-3xl mb-3 w-fit"
      >
        {feature.icon}
      </motion.div>

      {/* Title */}
      <h3
        className={`text-base font-extrabold mb-2 transition-colors duration-300 ${hovered ? "text-white" : "text-primary"}`}
      >
        {feature.title}
      </h3>

      {/* Desc */}
      <p
        className={`text-[13.5px] leading-relaxed transition-colors duration-300 ${hovered ? "text-white/65" : "text-gray-500"}`}
      >
        {feature.desc}
      </p>

      {/* Bottom accent line */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-secondary origin-left rounded-b-[20px]"
      />
    </motion.div>
  );
};

// ── Section ────────────────────────────────────────────────
const WhyChooseUs = () => {
  return (
    <section className="bg-background py-24 px-6">
      <div className="container mx-auto max-w-[1120px]">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-secondary">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl md:text-[42px] font-black text-primary leading-[1.15]">
            Everything You Need to{" "}
            <span className="text-secondary italic underline decoration-primary/30">
              Master the Quran
            </span>
          </h2>

          <p className="mt-4 text-[15px] text-gray-500 max-w-[500px] leading-relaxed">
            Darul Hikmah combines traditional Islamic scholarship with flexible
            modern learning — built for every Muslim, everywhere.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} feature={f} index={i} />
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mt-14 overflow-hidden rounded-[24px] bg-gradient-to-br from-primary via-[#2D2FAA] to-primary px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-secondary -translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative z-10">
            <p className="text-xl font-extrabold text-white">
              Start with a free trial class
            </p>
            <p className="text-white/60 text-sm mt-1">
              No commitment. Experience the quality before enrolling.
            </p>
          </div>

          <Button
            size="lg"
            className="relative z-10 bg-secondary text-white font-bold px-8 rounded-full shadow-lg shadow-secondary/30 hover:scale-105 transition-all active:scale-95 shrink-0"
            endContent={<ArrowRight className="size-4" />}
          >
            Book Free Trial
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;