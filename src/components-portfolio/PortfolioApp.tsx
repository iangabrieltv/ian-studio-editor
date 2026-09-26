import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logoAsset from "@/assets/logo-ian-gabriel-cropped.webp";
import portraitCutout from "@/assets/ian-portrait-cutout.webp";
import { About } from "@/components-portfolio/About";
import { Contact } from "@/components-portfolio/Contact";
import { Projects } from "@/components-portfolio/Projects";
import { Skills } from "@/components-portfolio/Skills";
import { Tools } from "@/components-portfolio/Tools";
import { Websites } from "@/components-portfolio/Websites";

const NAV_ITEMS = [
  { id: "inicio", label: "INÍCIO", href: "#inicio" },
  { id: "sobre", label: "SOBRE", href: "#sobre" },
  { id: "habilidades", label: "HABILIDADES", href: "#habilidades" },
  { id: "ferramentas", label: "FERRAMENTAS", href: "#ferramentas" },
  { id: "projetos", label: "PROJETOS", href: "#projetos" },
  { id: "contato", label: "CONTATO", href: "#contato" },
] as const;

export default function App() {
  const [activeNav, setActiveNav] = useState<string>("inicio");
  const navRef = useRef<HTMLElement | null>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Imagens surgem suavemente quando chegam na tela
  useEffect(() => {
    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const img = e.target as HTMLImageElement;
          io.unobserve(img);
          const show = () => img.classList.add("img-revealed");
          if (img.complete && img.naturalWidth) show();
          else {
            img.addEventListener("load", show, { once: true });
            img.addEventListener("error", show, { once: true });
          }
        });
      },
      { rootMargin: "200px 0px" },
    );
    const scan = () =>
      document.querySelectorAll("img[loading='lazy']").forEach((img) => {
        if (seen.has(img)) return;
        seen.add(img);
        img.classList.add("img-reveal");
        io.observe(img);
      });
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      if (!navRef.current) return;
      const activeEl = navRef.current.querySelector<HTMLAnchorElement>(
        `[data-nav-id="${activeNav}"]`,
      );
      if (activeEl) {
        setIndicator({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
          opacity: 1,
        });
      }
    };

    updateIndicator();

    const hash = window.location.hash.replace("#", "");
    if (hash && NAV_ITEMS.some((item) => item.id === hash)) {
      setActiveNav(hash);
    }

    const handleHashChange = () => {
      const currentHash = window.location.hash.replace("#", "");
      if (currentHash && NAV_ITEMS.some((item) => item.id === currentHash)) {
        setActiveNav(currentHash);
      }
    };

    window.addEventListener("resize", updateIndicator);
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("resize", updateIndicator);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [activeNav]);

  return (
    <main className="hero-shell">
      <div className="hero-glow" aria-hidden="true" />

      {/* Header */}
      <header className="hero-header hero-header-anim">
        <a href="#inicio" className="brand-link" aria-label="Ian Gabriel — início">
          <img src={logoAsset} alt="Ian Gabriel" className="brand-logo" />
        </a>

        <nav ref={navRef} className="hero-nav" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <a
                key={item.id}
                data-nav-id={item.id}
                href={item.href}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                onClick={() => setActiveNav(item.id)}
              >
                {item.label}
              </a>
            );
          })}
          <span
            className="nav-indicator"
            style={{
              left: `${indicator.left}px`,
              width: `${indicator.width}px`,
              opacity: indicator.opacity,
            }}
            aria-hidden="true"
          />
        </nav>

        <a className="outline-action resume-action button-swaying" href="#contato">
          <span>Entrar em contato</span>
          <ArrowRight className="action-arrow" aria-hidden="true" size={17} strokeWidth={1.8} />
        </a>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero-content" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hero-greeting hero-fade-up" style={{ animationDelay: "100ms" }}>
            Olá, eu sou
          </p>

          <h1
            id="hero-title"
            className="hero-title hero-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            <span className="name-first">IAN</span> <span className="name-last">GABRIEL</span>
          </h1>

          <p className="hero-role hero-fade-up" style={{ animationDelay: "340ms" }}>
            Designer Gráfico &amp;
            <br />
            Criador de Conteúdo Visual
          </p>

          <p className="hero-description hero-fade-up" style={{ animationDelay: "460ms" }}>
            Transformo ideias em comunicação visual
            <br />
            e estratégias que conectam marcas e pessoas.
            <br />
            Com artes, vídeos e produções que valorizam
            <br />
            produtos, serviços e histórias.
          </p>

          <a
            className="outline-action projects-action hero-fade-up"
            style={{ animationDelay: "580ms" }}
            href="#projetos"
          >
            <span>Ver meus projetos</span>
            <ArrowRight className="action-arrow" aria-hidden="true" size={22} strokeWidth={1.8} />
          </a>
        </div>

        <div className="portrait-zone hero-portrait-zone-anim" aria-hidden="true">
          <div className="hero-arc hero-arc-pulse" />
          <img src={portraitCutout} alt="" className="hero-portrait hero-portrait-float" />
        </div>

        <aside
          className="hero-manifesto hero-manifesto-anim"
          aria-label="Criatividade, estratégia e resultados"
        >
          <span>CRIATIVIDADE</span>
          <span>ESTRATÉGIA</span>
          <span>RESULTADOS</span>
          <i aria-hidden="true" />
        </aside>
      </section>

      {/* Sections from the repository */}
      <About />
      <Skills />
      <Tools />
      <Projects />

      {/* Projetos de Sites (Sites & Link Bios) */}
      <Websites />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <div className="flex items-center gap-3">
            <img src={logoAsset} alt="Ian Gabriel" className="h-6 w-auto opacity-75" />
            <span>© {new Date().getFullYear()} Ian Gabriel. Todos os direitos reservados.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#inicio" className="hover:text-foreground transition-colors">Voltar ao topo ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
