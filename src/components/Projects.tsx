"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "ISO 27001 Audit Framework",
    desc: "Comprehensive internal audit framework for ISO 27001:2022 compliance, including risk assessment, control validation, and evidence collection across departments.",
    metrics: [
      { label: "Compliance", value: "94%" },
      { label: "Controls", value: "114" },
      { label: "Findings", value: "12" },
    ],
    tags: ["ISO 27001", "Risk Assessment", "Compliance"],
  },
  {
    title: "SOC Monitoring Platform",
    desc: "Enterprise SOC implementation with Wazuh SIEM, real-time threat detection, incident response workflows, and MITRE ATT&CK mapping.",
    metrics: [
      { label: "Alerts/Month", value: "1.2K" },
      { label: "Threats Blocked", value: "98%" },
      { label: "Response Time", value: "3m" },
    ],
    tags: ["SOC", "Wazuh", "Incident Response"],
  },
  {
    title: "Cloud Security Architecture",
    desc: "Multi-cloud security architecture on AWS and OCI with IAM policies, encryption, network segmentation, and compliance monitoring.",
    metrics: [
      { label: "Services", value: "45+" },
      { label: "Compliance", value: "96%" },
      { label: "Risk Reduction", value: "92%" },
    ],
    tags: ["AWS", "OCI", "DevSecOps"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header"
        >
          <h2 className="text-gradient">Projects</h2>
          <p>Security initiatives and technical implementations.</p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="card group p-6"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF3B6B] animate-pulse" />
                <span className="text-[10px] font-medium text-[#FF3B6B] tracking-wider">ACTIVE</span>
              </div>

              <h3 className="mb-3 text-base font-semibold text-white">{project.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-[#94A3B8]">{project.desc}</p>

              <div className="mb-5 grid grid-cols-3 gap-2">
                {project.metrics.map((m) => (
                  <div key={m.label} className="rounded-lg bg-[#030712]/60 p-2.5 text-center">
                    <div className="text-sm font-bold text-[#00F5FF]">{m.value}</div>
                    <div className="text-[10px] text-[#64748B]">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[#00F5FF]/15 px-2 py-0.5 text-[10px] text-[#00F5FF]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
