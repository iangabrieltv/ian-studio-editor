import { Layers3, Megaphone, Monitor, Palette, Presentation, Smartphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SKILLS = [
  {
    title: "Criativos para Ads",
    description: "Imagens e vídeos.",
    icon: Megaphone,
  },
  {
    title: "Posts e Stories",
    description: "Para Instagram.",
    icon: Smartphone,
  },
  {
    title: "Carrosséis",
    description: "Para Redes Sociais.",
    icon: Layers3,
  },
  {
    title: "Sites e Landing Pages",
    description: "Design e estrutura.",
    icon: Monitor,
  },
  {
    title: "Identidade Visual",
    description: "Logo e marca.",
    icon: Palette,
  },
  {
    title: "Apresentações",
    description: "Comerciais.",
    icon: Presentation,
  },
] as const;

function SkillCard({ title, description, icon: Icon }: (typeof SKILLS)[number]) {
  return (
    <article className="skills-card-shell">
      <span className="skills-card-depth" aria-hidden="true" />
      <span className="skills-card-ambient-glow" aria-hidden="true" />
      <span className="skills-card-border" aria-hidden="true" />

      <div className="skills-card">
        <div className="skills-card-highlight" aria-hidden="true" />

        <div className="skills-card-content">
          <Icon className="skills-card-icon" aria-hidden="true" strokeWidth={1.7} />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}

export function Skills() {
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
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="habilidades"
      className={`skills-section ${isVisible ? "is-visible" : ""}`}
      aria-labelledby="skills-title"
    >
      <div className="skills-grid-overlay" aria-hidden="true" />
      <div className="skills-background-glow" aria-hidden="true" />

      <div className="skills-container">
        <header className="skills-heading">
          <div className="skills-kicker">
            <span>MINHAS HABILIDADES</span>
            <span className="skills-kicker-line" aria-hidden="true" />
          </div>

          <h2 id="skills-title" className="skills-title">
            O que eu <span className="text-[#4F6FFF]">faço</span>
          </h2>
        </header>

        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
