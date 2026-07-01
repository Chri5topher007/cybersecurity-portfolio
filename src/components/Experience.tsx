"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "HTIC Global",
    role: "IT Auditor Executive",
    period: "Present",
    active: true,
    items: [
      "Information Security Audits",
      "Security Gap Assessments",
      "Risk Evaluation & Control Validation",
      "Compliance Management",
    ],
  },
  {
    company: "ZH Healthcare",
    role: "Compliance Analyst",
    period: "2024 - 2025",
    items: [
      "ISO 27001 Internal Audit",
      "Risk Register & Treatment",
      "Healthcare Compliance",
      "Evidence Collection & Control Validation",
    ],
  },
  {
    company: "GramPro Business Services",
    role: "Information Security Engineer",
    period: "2022 - 2024",
    items: [
      "SOC Monitoring & Incident Response",
      "Wazuh SIEM Administration",
      "Vulnerability Assessment (Nessus, OpenVAS)",
      "Threat Analysis & Reporting",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header"
        >
          <h2 className="text-gradient">Experience</h2>
          <p>Professional career progression in cybersecurity and IT audit.</p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12 }}
              className="card group p-6"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white">{exp.company}</h3>
                  <p className="mt-0.5 text-sm text-[#00F5FF]">{exp.role}</p>
                </div>
                <span className={`shrink-0 rounded-full px-3 py-0.5 text-xs ${
                  exp.active
                    ? "bg-[#00FF88]/10 text-[#00FF88]"
                    : "bg-[#64748B]/10 text-[#64748B]"
                }`}>
                  {exp.period}
                </span>
              </div>

              {exp.active && (
                <div className="mb-4 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00FF88] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00FF88]" />
                  </span>
                  <span className="text-xs text-[#00FF88]">Active</span>
                </div>
              )}

              <ul className="space-y-2">
                {exp.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#00F5FF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
