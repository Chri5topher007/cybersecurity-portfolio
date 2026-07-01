"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const widgets = [
  {
    label: "Threat Level",
    value: "LOW",
    color: "#00FF88",
    change: "-12%",
  },
  {
    label: "Critical Alerts",
    value: "3",
    color: "#FF3B6B",
    change: "+2",
  },
  {
    label: "Risk Score",
    value: "18",
    color: "#00FF88",
    change: "-5%",
  },
  {
    label: "Compliance",
    value: "96%",
    color: "#00F5FF",
    change: "+3%",
  },
  {
    label: "Cloud Security",
    value: "92%",
    color: "#00F5FF",
    change: "+1%",
  },
  {
    label: "SOC Health",
    value: "98%",
    color: "#00FF88",
    change: "Stable",
  },
  {
    label: "Vulnerability Score",
    value: "24",
    color: "#FF3B6B",
    change: "-8",
  },
  {
    label: "Incident Response",
    value: "2.4m",
    color: "#00F5FF",
    change: "-15%",
  },
];

function AnimatedValue({ value, color }: { value: string; color: string }) {
  const [display, setDisplay] = useState("0");
  const isNumeric = !isNaN(Number(value.replace(/[^0-9.]/g, "")));

  useEffect(() => {
    if (!isNumeric) {
      setDisplay(value);
      return;
    }
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    const steps = 30;
    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current >= steps) {
        setDisplay(value);
        clearInterval(interval);
      } else {
        setDisplay(Math.floor((num / steps) * current) + (value.includes("%") ? "%" : ""));
      }
    }, 50);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <span className="text-2xl font-bold" style={{ color }}>
      {display}
    </span>
  );
}

export default function SecurityDashboard() {
  return (
    <section id="dashboard" className="relative px-4 py-24">
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
          <span className="text-gradient">SECURITY DASHBOARD</span>
          <div className="mx-auto mt-2 h-[1px] w-20 bg-[#00F5FF]/50" />
        </motion.h2>
        <p className="mb-16 text-center text-sm text-[#94A3B8]">
          Live Security Operations Overview
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {widgets.map((widget, i) => (
            <motion.div
              key={widget.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-xl border border-[#00F5FF]/10 bg-[#0F172A]/60 p-5 backdrop-blur-lg transition-all duration-300 hover:border-[#00F5FF]/30"
            >
              <p className="mb-2 text-xs font-medium tracking-wider text-[#94A3B8]">
                {widget.label.toUpperCase()}
              </p>
              <AnimatedValue value={widget.value} color={widget.color} />
              <div className="mt-2 flex items-center gap-2">
                <span
                  className={`text-xs ${
                    widget.change.startsWith("+")
                      ? "text-[#FF3B6B]"
                      : widget.change.startsWith("-")
                      ? "text-[#00FF88]"
                      : "text-[#94A3B8]"
                  }`}
                >
                  {widget.change}
                </span>
                <span className="text-xs text-[#94A3B8]">vs last week</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
