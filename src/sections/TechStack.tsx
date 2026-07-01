import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../lib/constants";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: { trigger: "#skills", start: "top center" },
      }
    );
  });

  return (
    <section id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Security Toolchain & Skills" sub="🔧 Tools of the Trade" />
        <div className="tech-grid">
          {techStackIcons.map((tech) => (
            <div
              key={tech.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <span className="text-7xl">{tech.icon}</span>
                </div>
                <div className="padding-x w-full">
                  <p>{tech.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
