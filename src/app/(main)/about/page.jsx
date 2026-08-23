"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────
// ANIMATION HELPERS
// ─────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const STATS = [
  { value: "500+", label: "Students Worldwide" },
  { value: "20+", label: "Certified Instructors" },
  { value: "15+", label: "Countries Reached" },
  { value: "99%", label: "Success Rate" },
];

const CURRICULUM = [
  {
    icon: "solar:book-bold",
    title: "Qur'an Recitation & Tajweed",
    desc: "Master proper pronunciation and melodic recitation rules with certified Qurra.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: "solar:bookmark-bold",
    title: "Qur'an Memorization (Hifz)",
    desc: "Structured Hifz program with daily revision tracking and mentor accountability.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: "solar:translation-bold",
    title: "Arabic Language Studies",
    desc: "Classical Arabic grammar and vocabulary for deeper Quranic understanding.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: "solar:star-bold",
    title: "Foundational Islamic Studies",
    desc: "Aqeedah, Fiqh and Seerah taught with clarity, context, and scholarly care.",
    color: "bg-purple-50 text-purple-600",
  },
];

const EXPERIENCE_POINTS = [
  {
    icon: "solar:play-circle-bold",
    title: "Live, Interactive Classes",
    desc: "Real-time instruction with certified teachers who provide personal attention and immediate feedback.",
  },
  {
    icon: "solar:video-library-bold",
    title: "Recorded Lesson Access",
    desc: "Every session is recorded so you can review, revise, and reinforce at your own pace.",
  },
  {
    icon: "solar:notebook-bold",
    title: "Custom Practice Materials",
    desc: "Personalised worksheets and exercises designed to match your level and learning goals.",
  },
  {
    icon: "solar:user-speak-bold",
    title: "Dedicated Mentor Support",
    desc: "One-on-one mentors track your progress and guide you through every challenge.",
  },
];

const VALUES = [
  {
    arabic: "الإخلاص",
    english: "Sincerity",
    desc: "We teach with pure intention — every lesson is an act of worship and service.",
    icon: "solar:heart-bold",
  },
  {
    arabic: "الإتقان",
    english: "Excellence",
    desc: "We hold ourselves to the highest standard in scholarship, character, and care.",
    icon: "solar:star-bold",
  },
  {
    arabic: "الاتساق",
    english: "Consistency",
    desc: "Small, daily steps build the greatest journeys. We nurture lasting habits.",
    icon: "solar:refresh-bold",
  },
  {
    arabic: "الرحمة",
    english: "Compassion",
    desc: "Every student is unique. We meet each learner with patience and understanding.",
    icon: "solar:hand-heart-bold",
  },
];

const TEAM = [
  { initials: "AA", name: "Sheikh Abdullah Al-Masri", role: "Quran & Tajweed", color: "#1A1B5F" },
  { initials: "FY", name: "Ustadha Fatima Bint Yusuf", role: "Female Instructor", color: "#5B50C8" },
  { initials: "MH", name: "Qari Mahmoud Hassan", role: "Hifz Director", color: "#3B45A3" },
  { initials: "AR", name: "Dr. Aisha Rahman", role: "Arabic & Fiqh", color: "#6366F1" },
];

// ─────────────────────────────────────────────────────────────
// SECTION BADGE
// ─────────────────────────────────────────────────────────────

const SectionBadge = ({ children }) => (
  <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-5">
    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
    <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-secondary">
      {children}
    </span>
  </div>
);

// ─────────────────────────────────────────────────────────────
// 1. HERO
// ─────────────────────────────────────────────────────────────

const AboutHero = () => (
  <section className="relative overflow-hidden bg-primary pt-24 pb-32">
    {/* Decorative blobs */}
    <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
    <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

    {/* Arabic watermark */}
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04]"
      aria-hidden="true"
    >
      <span className="text-[22rem] text-white font-serif leading-none">ع</span>
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div {...fadeUp(0)}>
          <Chip
            variant="flat"
            className="px-4 py-1.5 font-bold bg-white/10 text-white/80 border border-white/20 mb-6"
          >
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase flex items-center gap-2">
              <Icon icon="solar:buildings-bold" className="text-base" />
              About Us
            </span>
          </Chip>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl font-black text-white leading-[1.08] tracking-tight"
        >
          Spreading Light,{" "}
          <span className="italic text-indigo-300 underline decoration-secondary/60">
            Shaping Character.
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-7 text-lg text-white/65 leading-relaxed max-w-xl mx-auto"
        >
          Darul Hikmah Islamic Academy is a dedicated online platform committed
          to spreading authentic Islamic knowledge and building strong character
          through quality, accessible education.
        </motion.p>

        {/* Stat strip */}
        <motion.div
          {...fadeUp(0.35)}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden"
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              className="bg-white/5 hover:bg-white/10 transition-colors duration-300 px-6 py-6 text-center"
            >
              <p className="text-3xl font-black text-white">{s.value}</p>
              <p className="text-[11px] font-semibold text-white/50 uppercase tracking-widest mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>

    {/* Wave bottom */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z"
          fill="#F8F9FC"
        />
      </svg>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────
// 2. MISSION + IMAGE
// ─────────────────────────────────────────────────────────────

const MissionSection = () => (
  <section className="bg-[#F8F9FC] py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

        {/* Image mosaic */}
        <motion.div {...fadeLeft(0)} className="relative h-[480px]">
          {/* Main image */}
          <div className="absolute top-0 left-0 w-[75%] h-[85%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-1">
            <Image
              src="https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=800"
              alt="Quran"
              fill
              className="object-cover"
            />
          </div>
          {/* Accent image */}
          <div className="absolute bottom-0 right-0 w-[50%] h-[55%] rounded-2xl overflow-hidden shadow-xl border-4 border-white -rotate-2">
            <Image
              src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=600"
              alt="Student"
              fill
              className="object-cover"
            />
          </div>
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 left-4 z-10 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white flex items-center gap-3"
          >
            <Icon icon="solar:medal-star-bold" className="text-2xl text-green-500" />
            <div>
              <p className="text-xs font-black text-gray-800">Ijazah Certified</p>
              <p className="text-[10px] text-gray-400">All Instructors</p>
            </div>
          </motion.div>
          {/* Founded badge */}
          <div className="absolute top-4 right-4 z-10 bg-primary text-white px-4 py-3 rounded-2xl shadow-lg text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">
              Est.
            </p>
            <p className="text-xl font-black">2020</p>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div {...fadeRight(0.1)} className="space-y-7">
          <SectionBadge>Our Mission</SectionBadge>
          <h2 className="text-4xl md:text-[42px] font-black text-primary leading-tight">
            Knowledge Rooted in{" "}
            <span className="text-secondary italic">Tradition,</span>
            <br />Delivered for Today.
          </h2>
          <p className="text-[15px] text-gray-500 leading-[1.85]">
            Darul Hikmah was founded with a single conviction: that authentic
            Islamic education should be accessible to every Muslim, regardless
            of where they live. We bridge centuries of scholarly tradition with
            the convenience of modern online learning.
          </p>
          <p className="text-[15px] text-gray-500 leading-[1.85]">
            Our teachers are not just instructors — they are mentors who invest
            in every student&apos;s spiritual and intellectual growth. Each class is
            a step toward stronger faith, refined character, and a deeper
            relationship with the Book of Allah.
          </p>

          {/* Quote */}
          <blockquote className="border-l-4 border-secondary pl-5 py-1">
            <p className="text-base font-bold text-primary italic leading-relaxed">
              &ldquo;The best of you are those who learn the Qur&apos;an and teach it.&rdquo;
            </p>
            <cite className="text-xs text-gray-400 font-semibold mt-1 block not-italic">
              — Prophet Muhammad ﷺ (Sahih al-Bukhari)
            </cite>
          </blockquote>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────
// 3. CURRICULUM
// ─────────────────────────────────────────────────────────────

const CurriculumSection = () => (
  <section className="bg-white py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

      <motion.div {...fadeUp(0)} className="text-center mb-16">
        <SectionBadge>What We Offer</SectionBadge>
        <h2 className="text-4xl md:text-[42px] font-black text-primary">
          Our Core Curriculum
        </h2>
        <p className="mt-4 text-[15px] text-gray-500 max-w-lg mx-auto leading-relaxed">
          Structured, comprehensive courses designed for all levels — from
          absolute beginners to advanced students.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CURRICULUM.map((item, i) => (
          <motion.div
            key={i}
            {...fadeUp(i * 0.1)}
            className="group flex gap-5 p-7 rounded-2xl border border-gray-100 bg-[#F8F9FC] hover:bg-white hover:border-secondary/20 hover:shadow-lg hover:shadow-secondary/5 hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
              <Icon icon={item.icon} className="text-xl" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-primary mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────
// 4. THE DARUL HIKMAH EXPERIENCE
// ─────────────────────────────────────────────────────────────

const ExperienceSection = () => (
  <section className="relative overflow-hidden bg-primary py-28">
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none select-none flex items-center justify-end pr-16">
      <span className="text-[28rem] text-white font-serif leading-none">ب</span>
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div {...fadeLeft(0)}>
          <SectionBadge>The Experience</SectionBadge>
          <h2 className="text-4xl md:text-[42px] font-black text-white leading-tight mb-6">
            Traditional Values,{" "}
            <span className="text-indigo-300 italic">Modern Convenience.</span>
          </h2>
          <p className="text-[15px] text-white/65 leading-[1.85] mb-10">
            We combine the time-honoured methods of Islamic learning with the
            tools and flexibility of online education. Every student receives a
            holistic, supported learning experience from day one.
          </p>

          {/* CTA */}
          <Link href="/enroll">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-secondary text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-secondary/30 transition-colors hover:bg-indigo-500"
            >
              <Icon icon="solar:play-bold" className="text-lg" />
              Start Your Journey
            </motion.button>
          </Link>
        </motion.div>

        {/* Right: feature list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {EXPERIENCE_POINTS.map((pt, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.1 + i * 0.08)}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/20 text-indigo-300 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <Icon icon={pt.icon} className="text-xl" />
              </div>
              <h3 className="text-sm font-extrabold text-white mb-2">{pt.title}</h3>
              <p className="text-[13px] text-white/55 leading-relaxed">{pt.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────
// 5. OUR PHILOSOPHY
// ─────────────────────────────────────────────────────────────

const PhilosophySection = () => (
  <section className="bg-[#F8F9FC] py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

      <motion.div {...fadeUp(0)} className="text-center mb-16">
        <SectionBadge>Our Philosophy</SectionBadge>
        <h2 className="text-4xl md:text-[42px] font-black text-primary">
          Beyond Textbooks
        </h2>
        <p className="mt-4 text-[15px] text-gray-500 max-w-xl mx-auto leading-relaxed">
          True education shapes understanding, strengthens faith, and refines
          character. Our educators focus not just on instruction, but on
          nurturing students with care, consistency, and sincerity.
        </p>
      </motion.div>

      {/* Values grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {VALUES.map((v, i) => (
          <motion.div
            key={i}
            {...fadeUp(i * 0.09)}
            className="group bg-white rounded-2xl border border-secondary/10 p-7 text-center hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5 hover:-translate-y-1.5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary group-hover:text-white group-hover:scale-110 transition-all duration-300">
              <Icon icon={v.icon} className="text-xl" />
            </div>
            {/* Arabic */}
            <p className="text-2xl font-black text-primary/20 font-serif mb-1 select-none">
              {v.arabic}
            </p>
            <h3 className="text-base font-extrabold text-primary mb-3">{v.english}</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Full-width philosophy quote */}
      <motion.div
        {...fadeUp(0.2)}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[#2D2FAA] p-12 text-center"
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <span className="text-[18rem] text-white font-serif leading-none">ن</span>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <Icon
            icon="solar:quote-up-bold"
            className="text-4xl text-secondary/60 mx-auto mb-6"
          />
          <p className="text-2xl md:text-3xl font-black text-white leading-snug italic mb-6">
            &ldquo;At Darul Hikmah, we strive to create an environment where
            knowledge becomes light, and character becomes excellence.&rdquo;
          </p>
          <p className="text-sm font-bold text-white/50 uppercase tracking-widest">
            — Darul Hikmah Islamic Academy
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────
// 6. MEET THE TEAM
// ─────────────────────────────────────────────────────────────

const TeamSection = () => (
  <section className="bg-white py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <motion.div {...fadeUp(0)} className="text-center mb-16">
        <SectionBadge>Our Educators</SectionBadge>
        <h2 className="text-4xl md:text-[42px] font-black text-primary">
          The Scholars Behind Darul Hikmah
        </h2>
        <p className="mt-4 text-[15px] text-gray-500 max-w-md mx-auto">
          Every instructor is Ijazah-certified, vetted, and committed to your
          growth as a student and as a Muslim.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {TEAM.map((t, i) => (
          <motion.div
            key={i}
            {...fadeUp(i * 0.1)}
            className="group text-center"
          >
            <div className="relative mx-auto w-24 h-24 mb-4">
              {/* Avatar */}
              <div
                className="w-full h-full rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-lg group-hover:scale-105 group-hover:rotate-2 transition-all duration-300"
                style={{ background: t.color }}
              >
                {t.initials}
              </div>
              {/* Verified dot */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-400 border-2 border-white flex items-center justify-center">
                <Icon icon="solar:check-read-bold" className="text-[10px] text-white" />
              </div>
            </div>
            <h3 className="text-sm font-extrabold text-primary leading-snug">{t.name}</h3>
            <p className="text-xs text-gray-400 mt-1">{t.role}</p>
          </motion.div>
        ))}
      </div>

      {/* View all CTA */}
      <motion.div {...fadeUp(0.3)} className="text-center mt-12">
        <Link href="/instructors">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-8 py-3.5 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Icon icon="solar:users-group-rounded-bold" className="text-lg" />
            Meet All Instructors
          </motion.button>
        </Link>
      </motion.div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────
// 7. CTA BANNER
// ─────────────────────────────────────────────────────────────

const CTASection = () => (
  <section className="bg-[#F8F9FC] py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
      <motion.div
        {...fadeUp(0)}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary via-indigo-600 to-primary p-14 text-center"
      >
        {/* Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10">
          <Chip
            className="bg-white/20 text-white border-white/30 font-bold mb-6"
            variant="flat"
          >
            <span className="text-[11px] tracking-widest uppercase">
              Begin Today
            </span>
          </Chip>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            Ready to Begin Your<br />
            <span className="italic">Quranic Journey?</span>
          </h2>
          <p className="text-white/70 text-base max-w-md mx-auto mb-10 leading-relaxed">
            Join 500+ students from around the world. Your first class is free
            — no commitment required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enroll">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white text-primary font-black px-10 py-4 rounded-full shadow-xl hover:bg-gray-50 transition-colors"
              >
                <Icon icon="solar:play-bold" className="text-secondary text-lg" />
                Start Free Trial
              </motion.button>
            </Link>
            <Link href="/courses">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white/10 text-white font-bold border border-white/30 px-10 py-4 rounded-full hover:bg-white/20 transition-colors"
              >
                Browse Courses
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────
// PAGE ROOT
// ─────────────────────────────────────────────────────────────

const AboutPage = () => (
  <main>
    <AboutHero />
    <MissionSection />
    <CurriculumSection />
    <ExperienceSection />
    <PhilosophySection />
    <TeamSection />
    <CTASection />
  </main>
);

export default AboutPage;