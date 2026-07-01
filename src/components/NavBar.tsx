import { useState, useEffect } from "react";
import { navLinks } from "../lib/constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const gradients = [
    "linear-gradient(135deg, #1e3a5f, #3b82f6)",
    "linear-gradient(135deg, #0f4c3a, #10b981)",
    "linear-gradient(135deg, #4c1d95, #a855f7)",
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo flex flex-col leading-tight gap-1 relative pl-5">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-12 rounded-full bg-gradient-to-b from-cyber via-purple-400 to-[#ff2a6d] shadow-[0_0_10px_rgba(0,245,255,0.5)]" />
          <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyber via-purple-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,245,255,0.3)]">
            LIJO DOMINIC
          </span>
          <span className="text-base md:text-lg font-semibold tracking-wider leading-none" style={{ color: "#00f5ff" }}>Cyber Security Engineer</span>
          <span className="text-base md:text-lg font-semibold tracking-wider leading-none" style={{ color: "#ff2a6d" }}>IS & IT Auditor</span>
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }, i) => (
              <li key={name} className="group perspective-[800px]">
                <a
                  href={link}
                  className="relative block rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                  onMouseEnter={(e) => e.currentTarget.style.filter = `drop-shadow(0 0 12px rgba(255,255,255,0.15))`}
                  onMouseLeave={(e) => e.currentTarget.style.filter = "none"}
                >
                  <div
                    className="px-5 py-2 rounded-lg transition-opacity duration-300 group-hover:opacity-90"
                    style={{ background: gradients[i] }}
                  >
                    <span className="text-white font-medium tracking-wide text-sm">
                      {name}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="contact-btn group">
          <div className="inner" style={{ background: "linear-gradient(135deg, #00f5ff, #ff2a6d)" }}>
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
