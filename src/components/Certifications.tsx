"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { name: "ISO 27001 Lead Auditor", issuer: "TÜV Rheinland", year: "2025", tag: "Audit" },
  { name: "OCI Architect Professional", issuer: "Oracle", year: "2025", tag: "Cloud" },
  { name: "OCI DevOps Professional", issuer: "Oracle", year: "2025", tag: "Cloud" },
  { name: "OCI Multicloud Architect Associate", issuer: "Oracle", year: "2025", tag: "Cloud" },
  { name: "Cyber Threat Intelligence 101", issuer: "EC-Council", year: "2024", tag: "Threat" },
  { name: "Six Sigma Yellow Belt", issuer: "IASSC", year: "2024", tag: "Process" },
];

const tagColors: Record<string, string> = {
  Audit: "bg-blue-500/10 text-blue-400",
  Cloud: "bg-cyan-500/10 text-cyan-400",
  Threat: "bg-red-500/10 text-red-400",
  Process: "bg-green-500/10 text-green-400",
};

export default function Certifications() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header"
        >
          <h2 className="text-gradient">Certifications</h2>
          <p>Professional credentials and industry certifications.</p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card flex items-center gap-4 p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00F5FF]/10">
                <Award className="h-6 w-6 text-[#00F5FF]" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-white truncate">{cert.name}</h3>
                <p className="mt-0.5 text-xs text-[#64748B]">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
              <span className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-medium ${tagColors[cert.tag] || "bg-[#64748B]/10 text-[#64748B]"}`}>
                {cert.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
