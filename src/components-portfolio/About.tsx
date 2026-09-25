import portrait from "@/assets/ian-gabriel-cutout.png";
import signature from "@/assets/ian-gabriel-signature.png";
import { useEffect, useRef, useState } from "react";

function AboutSignature() {
  return (
    <div className="about-signature-wrap" title="Assinatura Ian Gabriel">
      <img
        className="about-signature-fallback"
        src={signature}
        alt="Assinatura de Ian Gabriel"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}

export function About() {
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
      { threshold: 0.12 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className={`about-section ${isVisible ? "is-visible" : ""}`}
      aria-labelledby="about-title"
    >
      <div className="about-ambient" aria-hidden="true" />

      <div className="about-copy">
        <div className="about-kicker">
          <span>SOBRE MIM</span>
          <span className="about-kicker-line" aria-hidden="true" />
        </div>

        <h2 id="about-title" className="about-title">
          Quem sou <span className="text-[#4F6FFF]">eu?</span>
        </h2>

        <div className="about-text">
          <p>
            Sou Ian Gabriel, designer gráfico e criador de conteúdo visual, apaixonado por
            transformar ideias em experiências visuais que conectam marcas e pessoas.
          </p>
          <p>
            Acredito no poder do design como ferramenta de comunicação e estratégia. Meu foco é
            criar soluções visuais que não apenas impressionam, mas também geram resultados reais
            para os meus clientes.
          </p>
        </div>

        <AboutSignature />
      </div>

      <div className="about-portrait-area" aria-hidden="true">
        <div className="about-ring" />
        <div className="about-portrait-glow" />
        <img className="about-portrait" src={portrait} alt="" loading="eager" />
      </div>

      <div className="about-edge-line" aria-hidden="true" />
    </section>
  );
}
