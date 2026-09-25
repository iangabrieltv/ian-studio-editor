import { useState, useEffect } from "react";
import { X } from "lucide-react";
import siteAsset from "@/assets/websites/site-dra-gabryella.png.asset.json";
import schedulingAsset from "@/assets/websites/barbara-agendamento.webp.asset.json";
import linksAsset from "@/assets/websites/barbara-links.webp.asset.json";

const siteImg = siteAsset.url;
const linkbio1Img = schedulingAsset.url;
const linkbio2Img = linksAsset.url;

interface WebsiteProjectItem {
  id: string;
  image: string;
  alt: string;
  position: "left" | "center" | "right";
}

const WEBSITE_PROJECTS: WebsiteProjectItem[] = [
  {
    id: "site-dra-gabryella",
    image: siteImg,
        alt: "Site da Dra. Gabryella Nunes",
    position: "left",
  },
  {
    id: "linkbio-barbara-cardoso-1",
    image: linkbio1Img,
        alt: "Página de agendamento da Bárbara Cardoso",
    position: "center",
  },
  {
    id: "linkbio-barbara-cardoso-2",
    image: linkbio2Img,
        alt: "Página de links da Bárbara Cardoso",
    position: "right",
  },
];

export function Websites() {
  const [selectedProject, setSelectedProject] = useState<WebsiteProjectItem | null>(null);

  // Fechar modal via tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section
      id="sites"
      className="relative isolate overflow-hidden px-6 py-16 md:py-24"
      aria-labelledby="websites-heading"
    >
      {/* Background glow sutil */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#4F6FFF]/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        {/* Título da Seção */}
        <div className="mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#4F6FFF] shadow-[0_0_8px_#4F6FFF]" aria-hidden="true" />
            <span className="text-xs md:text-sm font-semibold tracking-wider text-[#4F6FFF] uppercase">
              PORTFÓLIO
            </span>
          </div>

          <h2
            id="websites-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight"
          >
            PROJETOS DE <span className="text-[#4F6FFF]">SITES</span>
          </h2>
        </div>

        {/* Composição Horizontal no Desktop: SITE (~56%), LINK BIO 1 (~22%), LINK BIO 2 (~22%) */}
        {/* Cards de vidro transparente, compactos, sem textos internos ou botões de aumentar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.927fr_0.269fr_0.562fr] gap-4 sm:gap-5 lg:gap-6 items-start">
          {WEBSITE_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative flex w-full items-start justify-center overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.5),0_0_24px_rgba(79,111,255,0.2)] cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label="Clique para visualizar a imagem"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              {/* Imagem com transparência ao redor e proporção original preservada */}
              <div className="flex w-full items-start justify-center overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="block h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal com efeito de vidro */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#020614]/92 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.alt}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex items-center justify-center rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/15 backdrop-blur-xl shadow-[0_28px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(79,111,255,0.25)] overflow-hidden p-3 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar */}
            <button
              type="button"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#030814]/80 border border-white/20 text-slate-200 flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[#4F6FFF] hover:text-white hover:scale-110"
              aria-label="Fechar visualização"
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} strokeWidth={2.2} />
            </button>

            {/* Imagem Expandida em alta resolução */}
            <div className="relative w-full max-h-[calc(92vh-32px)] flex items-center justify-center overflow-auto">
              <img
                src={selectedProject.image}
                alt={selectedProject.alt}
                className="max-h-[calc(92vh-40px)] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
