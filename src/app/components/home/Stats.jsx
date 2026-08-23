"use client";

import { Users, GraduationCap, Globe, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    id: 1,
    label: "Trusted Students",
    value: "500+",
    icon: <Users className="size-6" />,
  },
  {
    id: 2,
    label: "Certified Tutors",
    value: "20+",
    icon: <GraduationCap className="size-6" />,
  },
  {
    id: 3,
    label: "Countries Reached",
    value: "15+",
    icon: <Globe className="size-6" />,
  },
  {
    id: 4,
    label: "Success Rate",
    value: "99%",
    icon: <ShieldCheck className="size-6" />,
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1,
                }}
              >
                <div className="flex flex-col items-center p-8 rounded-[2.5rem] bg-white border border-secondary/5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(99,102,241,0.1)] hover:border-secondary/25 hover:-translate-y-1.5 transition-all duration-500 group cursor-default">
                  {/* Icon */}
                  <div className="p-4 rounded-2xl bg-secondary/10 text-secondary mb-5 group-hover:bg-secondary group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {stat.icon}
                  </div>

                  {/* Value */}
                  <h3 className="text-4xl font-extrabold text-primary mb-1 tracking-tight">
                    {stat.value}
                  </h3>

                  {/* Label */}
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] text-center">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;