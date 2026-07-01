"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "7+", label: "Certifications" },
  { value: "3", label: "Companies" },
  { value: "50+", label: "Audits Completed" },
];

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header"
        >
          <h2 className="text-gradient">About</h2>
          <p>Cybersecurity engineer with 4+ years in information security, IT auditing, and compliance.</p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-base leading-relaxed text-[#94A3B8] md:text-lg"
          >
            Currently serving as <span className="text-white font-medium">IT Auditor Executive</span> at HTIC Global.
            Previously held security roles at ZH Healthcare and GramPro Business Services.
            Specialized in SOC operations, ISO 27001 implementation, cloud security (AWS & OCI),
            and enterprise risk management.
          </motion.p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="text-2xl font-bold text-[#00F5FF] md:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs text-[#64748B]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
