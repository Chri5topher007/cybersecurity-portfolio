import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/Button";
import { heroWords } from "../lib/constants";
import HeroScene from "../components/models/HeroScene";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 z-10">
        <div className="w-screen h-screen bg-gradient-to-br from-[#030712] via-black to-[#0a0a1a] opacity-60" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Cyber
                <span className="slide">
                  <span className="wrapper">
                    {heroWords.map((word, i) => (
                      <span key={i} className="flex items-center md:gap-3 gap-1 pb-2">
                        <span className="text-cyber">{word}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Security Professional</h1>
              <h1>Protecting Digital Assets</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none max-w-xl">
              IT Auditor Executive at HTIC Global. Passionate about threat detection,
              compliance frameworks, and building resilient security infrastructure.
            </p>

            <Button text="Explore My Work" className="md:w-80 md:h-16 w-60 h-12" id="counter" />
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout opacity-70">
            <HeroScene />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
