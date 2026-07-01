"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2022",
    company: "GramPro Business Services",
    role: "Information Security Engineer",
    desc: "SOC operations, vulnerability assessment, incident response.",
  },
  {
    year: "2024",
    company: "ZH Healthcare",
    role: "Compliance Analyst",
    desc: "ISO 27001 audit, risk management, healthcare compliance.",
  },
  {
    year: "2026",
    company: "HTIC Global",
    role: "IT Auditor Executive",
    desc: "IT audit, security assessment, compliance validation.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative px-4 py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-3xl font-bold tracking-wider md:text-4xl"
        >
          <span className="text-gradient">TIMELINE</span>
          <div className="mx-auto mt-2 h-[1px] w-20 bg-[#00F5FF]/50" />
        </motion.h2>
        <p className="mb-16 text-center text-sm text-[#94A3B8]">
          Career Progression
        </p>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-[#00F5FF]/50 via-[#00FF88]/30 to-transparent" />

          <div className="relative space-y-24">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center gap-8 ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="flex-1" />
                <div className="absolute left-1/2 z-10 -translate-x-1/2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#00F5FF] bg-[#030712]">
                    <div className="h-2 w-2 rounded-full bg-[#00F5FF]" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="group rounded-xl border border-[#00F5FF]/10 bg-[#0F172A]/60 p-6 backdrop-blur-lg transition-all hover:border-[#00F5FF]/30">
                    <span className="mb-2 inline-block text-xs font-bold text-[#00F5FF]">
                      {item.year}
                    </span>
                    <h3 className="mb-1 text-lg font-bold text-white">
                      {item.company}
                    </h3>
                    <p className="mb-2 text-sm text-[#00FF88]">{item.role}</p>
                    <p className="text-sm text-[#94A3B8]">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
