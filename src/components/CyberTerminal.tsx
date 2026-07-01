"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const commands: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  about     - About me",
    "  skills    - Technical skills",
    "  experience - Work history",
    "  projects  - Security projects",
    "  certs     - Certifications",
    "  contact   - Contact info",
    "  whoami    - Display identity",
    "  clear     - Clear terminal",
    "  help      - Show this message",
  ],
  about: [
    "Lijo Dominic",
    "Cybersecurity Engineer | IT Auditor | Compliance Specialist",
    "4+ years experience in information security.",
    "SOC, Cloud Security, ISO 27001, Risk Management.",
  ],
  whoami: ["lijo_dominic", "Role: Cybersecurity Engineer", "Status: Active", "Clearance: Active"],
  skills: [
    "Security Operations: SOC, Wazuh, Incident Response",
    "Compliance: ISO 27001, IT Audit, Risk Assessment",
    "Cloud: AWS, OCI, DevSecOps",
    "Tools: Nessus, OpenVAS, Wazuh SIEM",
  ],
  experience: [
    "IT Auditor Executive @ HTIC Global (Present)",
    "Compliance Analyst @ ZH Healthcare (2024-2025)",
    "InfoSec Engineer @ GramPro (2022-2024)",
  ],
  projects: [
    "1. ISO 27001 Internal Audit Framework",
    "2. SOC Monitoring & SIEM Platform",
    "3. Cloud Security Architecture (AWS & OCI)",
  ],
  certs: [
    "ISO 27001 Lead Auditor - TÜV Rheinland",
    "OCI Architect Professional - Oracle",
    "OCI DevOps Professional - Oracle",
    "Cyber Threat Intelligence 101 - EC-Council",
    "Six Sigma Yellow Belt - IASSC",
  ],
  contact: ["LinkedIn: /in/lijodominic", "Location: Kochi, India"],
};

export default function CyberTerminal() {
  const [history, setHistory] = useState<string[]>([
    "╔══════════════════════════════════╗",
    "║  Cyber Terminal v1.0             ║",
    "║  Type 'help' for available cmds  ║",
    "╚══════════════════════════════════╝",
  ]);
  const [input, setInput] = useState("");
  const [historyStack, setHistoryStack] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    setHistoryStack((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = commands[cmd] || [`Unknown command: '${cmd}'. Type 'help'.`];
    setHistory((prev) => [...prev, `$ ${input}`, ...output]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyStack.length > 0) {
        const idx = historyIndex === -1 ? historyStack.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(idx);
        setInput(historyStack[idx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const idx = Math.min(historyStack.length - 1, historyIndex + 1);
        setHistoryIndex(idx);
        setInput(historyStack[idx]);
      } else {
        setInput("");
      }
    }
  };

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header"
        >
          <h2 className="text-gradient">Terminal</h2>
          <p>Interactive command interface to explore the portfolio.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-[#00F5FF]/10 bg-[#0A0A0A] shadow-[0_0_40px_rgba(0,245,255,0.03)]"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex items-center gap-1.5 border-b border-[#00F5FF]/10 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF3B6B]" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#00FF88]" />
            <span className="ml-3 text-xs text-[#64748B]">terminal — bash</span>
          </div>

          <div className="h-64 overflow-y-auto p-4 font-mono text-xs leading-relaxed">
            {history.map((line, i) => (
              <div
                key={i}
                className={`${
                  line.startsWith("$")
                    ? "text-[#00F5FF]"
                    : line.startsWith("╔") || line.startsWith("║") || line.startsWith("╚")
                    ? "text-[#64748B]"
                    : "text-[#94A3B8]"
                }`}
              >
                {line}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex items-center border-t border-[#00F5FF]/10 px-4 py-2.5">
            <span className="mr-2 font-mono text-xs text-[#00FF88]">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent font-mono text-xs text-white outline-none placeholder:text-[#64748B]"
              placeholder="Type a command..."
              spellCheck={false}
              autoComplete="off"
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
}
