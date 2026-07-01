import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { experienceCards } from "../lib/constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100, opacity: 0, transformOrigin: "left left",
        duration: 1, ease: "power2.inOut",
        scrollTrigger: { trigger: card, start: "top 80%" },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom", ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline", start: "top center", end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", { scaleY: 1 - self.progress });
        },
      },
    });

    gsap.utils.toArray<HTMLElement>(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0, xPercent: 0, duration: 1, ease: "power2.inOut",
        scrollTrigger: { trigger: text, start: "top 60%" },
      });
    });

    countersRef.current.forEach((counter, index) => {
      if (!counter) return;
      const items = [
        { label: "Years in Cyber Security", value: 4 },
        { label: "Audits Completed", value: 20 },
        { label: "Tools Mastered", value: 15 },
      ];
      const numEl = counter.querySelector(".counter-number");
      if (!numEl) return;
      gsap.set(numEl, { innerText: "0" });
      gsap.to(numEl, {
        innerText: items[index].value,
        duration: 2.5, ease: "power2.out", snap: { innerText: 1 },
        scrollTrigger: { trigger: "#counter", start: "top center" },
        onComplete: () => {
          numEl.textContent = `${items[index].value}+`;
        },
      });
    });
  }, []);

  return (
    <section id="experience" className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Professional Experience" sub="💼 My Career Journey" />

        <div ref={counterRef} id="counter" className="padding-x-lg mt-20">
          <div className="mx-auto grid-3-cols mb-20">
            {[
              { label: "Years in Cyber Security", value: 4 },
              { label: "Audits Completed", value: 20 },
              { label: "Tools Mastered", value: 15 },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => { countersRef.current[index] = el; }}
                className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center text-center"
              >
                <div className="counter-number text-cyber text-5xl font-bold mb-2">0+</div>
                <div className="text-white-50 text-lg">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {experienceCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <div className="timeline-card card card-border rounded-xl p-10">
                    <div className="glow" />
                    <div className="flex items-center justify-center h-32">
                      <span className="text-6xl font-bold text-cyber opacity-30">{card.logo}</span>
                    </div>
                  </div>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <span className="text-xl font-bold text-cyber">{card.logo}</span>
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="text-cyber text-sm mt-1">{card.company}</p>
                        <p className="my-5 text-white-50">🗓️&nbsp;{card.date}</p>
                        <p className="text-[#839CB5] italic">Responsibilities</p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((r, i) => (
                            <li key={i} className="text-lg">{r}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
