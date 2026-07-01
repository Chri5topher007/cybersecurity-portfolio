import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { projects } from "../lib/constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1),
          scrollTrigger: { trigger: card, start: "top bottom-=100" },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="w-full mt-20 px-5 md:px-20 py-10 md:py-20">
      <TitleHeader title="Security Projects & Initiatives" sub="🛡️ Real-World Impact" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {projects.map((project, index) => (
          <div
            key={project.title}
            ref={(el) => { if (el) cardsRef.current[index] = el; }}
            className="card-border rounded-xl p-8 flex flex-col gap-6 group hover:border-cyber/30 transition-all duration-500"
          >
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-cyber animate-pulse" />
              <span className="text-xs text-cyber uppercase tracking-widest">Project {index + 1}</span>
            </div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-white-50 text-base leading-relaxed">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-black-200 text-cyber border border-cyber/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;
