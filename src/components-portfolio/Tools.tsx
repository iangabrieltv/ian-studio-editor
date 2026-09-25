import { useEffect, useRef, useState } from "react";
import canvaAsset from "@/assets/images/canva-3d.png";
import capcutAsset from "@/assets/images/capcut-3d.png";
import aiAsset from "@/assets/images/ai-3d.png";

const toolItems = [
  { name: "Canva", src: canvaAsset, floatClass: "tool-float-1" },
  { name: "CapCut", src: capcutAsset, floatClass: "tool-float-2" },
  { name: "Ferramentas de\nInteligência Artificial", src: aiAsset, floatClass: "tool-float-3" },
];

export function Tools() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ferramentas"
      className={`section-stage relative isolate overflow-hidden ${isVisible ? "is-visible" : ""}`}
      aria-labelledby="tools-title"
    >
      <div className="stage-glow" aria-hidden="true" />
      <div className="stage-beams" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 md:py-32">
        <p className="eyebrow tool-fade-in">Ferramentas</p>

        <h2
          id="tools-title"
          className="tool-fade-in mt-4 text-center text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl md:whitespace-nowrap"
          style={{ animationDelay: "120ms" }}
        >
          Softwares <span className="text-[#4F6FFF]">que domino</span>
        </h2>

        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-6 md:mt-20">
          {toolItems.map((tool, index) => (
            <div
              key={tool.name}
              className={`tool-card-wrapper flex flex-col items-center tool-stagger-${index}`}
              style={{ animationDelay: `${200 + index * 140}ms` }}
            >
              <div className={`tool-object group ${tool.floatClass}`}>
                <img
                  src={tool.src}
                  alt={tool.name.replace(/\n/g, " ")}
                  className="tool-img relative z-10 h-48 w-48 object-contain drop-shadow-none select-none transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2 md:h-60 md:w-60"
                  loading="lazy"
                  draggable={false}
                  referrerPolicy="no-referrer"
                />
                <span
                  className="tool-floor transition-all duration-500 ease-out group-hover:scale-110 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-8 max-w-[16rem] whitespace-pre-line text-center text-base font-medium leading-snug text-foreground transition-colors duration-300 group-hover:text-accent-electric md:text-lg">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
