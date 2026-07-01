"use client";

import { motion } from "framer-motion";

const groups = [
  {
    name: "Security Operations",
    skills: [
      { name: "SOC Monitoring", level: 92 },
      { name: "Incident Response", level: 88 },
      { name: "Threat Analysis", level: 85 },
      { name: "Wazuh SIEM", level: 90 },
    ],
  },
  {
    name: "Compliance & Audit",
    skills: [
      { name: "ISO 27001", level: 95 },
      { name: "IT Audit", level: 92 },
      { name: "Risk Assessment", level: 88 },
      { name: "Control Validation", level: 90 },
    ],
  },
  {
    name: "Cloud Security",
    skills: [
      { name: "AWS Security", level: 85 },
      { name: "OCI Security", level: 88 },
      { name: "DevSecOps", level: 78 },
      { name: "IAM & Encryption", level: 82 },
    ],
  },
  {
    name: "Vulnerability Management",
    skills: [
      { name: "Nessus", level: 90 },
      { name: "OpenVAS", level: 85 },
      { name: "VAPT", level: 82 },
      { name: "Remediation", level: 86 },
    ],
  },
  {
    name: "Threat Intelligence",
    skills: [
      { name: "MITRE ATT&CK", level: 84 },
      { name: "Threat Hunting", level: 80 },
      { name: "IOC Analysis", level: 82 },
      { name: "Threat Feeds", level: 78 },
    ],
  },
  {
    name: "Networking",
    skills: [
      { name: "Network Security", level: 80 },
      { name: "Firewalls & IDS/IPS", level: 78 },
      { name: "TCP/IP", level: 82 },
      { name: "Zero Trust", level: 75 },
    ],
  },
];

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-xs text-[#94A3B8]">{name}</span>
        <span className="text-xs text-[#64748B]">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#030712]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 + index * 0.05, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[#00F5FF] to-[#00FF88]"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header"
        >
          <h2 className="text-gradient">Skills</h2>
          <p>Technical expertise across cybersecurity domains.</p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className="card p-5"
            >
              <h3 className="mb-4 text-xs font-semibold tracking-[0.1em] text-[#00F5FF] uppercase">
                {group.name}
              </h3>
              <div className="space-y-3">
                {group.skills.map((skill, j) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={j} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
