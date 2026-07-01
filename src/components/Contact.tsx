"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header"
        >
          <h2 className="text-gradient">Contact</h2>
          <p>Get in touch for opportunities or collaboration.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-lg"
        >
          <div className="card p-8">
            <div className="mb-8 space-y-4">
              <a
                href="mailto:lijo.dominic@example.com"
                className="flex items-center gap-3 text-sm text-[#94A3B8] hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-[#00F5FF]" />
                lijo.dominic@example.com
              </a>
              <a
                href="https://www.linkedin.com/in/lijodominic/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#94A3B8] hover:text-white transition-colors"
              >
                <ExternalLink className="h-4 w-4 text-[#00F5FF]" />
                /in/lijodominic
              </a>
              <div className="flex items-center gap-3 text-sm text-[#94A3B8]">
                <MapPin className="h-4 w-4 text-[#00F5FF]" />
                Kochi, India
              </div>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="input"
              />
              <input
                type="email"
                placeholder="Email"
                className="input"
              />
              <textarea
                placeholder="Message"
                rows={3}
                className="input resize-none"
              />
              <button
                type="submit"
                onClick={(e) => e.preventDefault()}
                className="btn btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
