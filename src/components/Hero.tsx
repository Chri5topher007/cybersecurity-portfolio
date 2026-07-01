"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Cybersecurity Engineer",
  "IT Auditor",
  "Compliance Specialist",
  "Cloud Security Architect",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout: NodeJS.Timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    } else {
      const speed = deleting ? 40 : 80;
      timeout = setTimeout(() => {
        setText(deleting ? current.slice(0, -1) : current.slice(0, text.length + 1));
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#00F5FF]/3 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 w-full max-w-4xl px-6 text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="mx-auto mb-10 h-[1px] w-24 origin-center bg-gradient-to-r from-transparent via-[#00F5FF] to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-xs font-medium tracking-[0.3em] text-[#64748B] uppercase"
        >
          Cybersecurity Professional
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="text-gradient">LIJO DOMINIC</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12 flex items-center justify-center gap-2"
        >
          <span className="h-[1px] w-6 bg-[#00F5FF]/50" />
          <span className="text-base text-[#94A3B8] sm:text-lg">
            {text}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="ml-0.5 text-[#00F5FF]"
            >
              |
            </motion.span>
          </span>
          <span className="h-[1px] w-6 bg-[#00F5FF]/50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() =>
              document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn btn-primary"
          >
            View Portfolio
          </button>
          <a
            href="https://www.linkedin.com/in/lijodominic/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-[#94A3B8] hover:text-white hover:border-[#94A3B8]/50"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium tracking-[0.2em] text-[#64748B]">
            SCROLL
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-[#00F5FF] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
