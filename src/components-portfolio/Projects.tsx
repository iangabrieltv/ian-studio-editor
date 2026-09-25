import { useState, useRef, useEffect } from "react";
import { ArrowRight, X, Sparkles, CheckCircle2 } from "lucide-react";

// Imagens da Categoria 1: Apresentações Comerciais (Mantidas intactas)
import herculanoImg from "@/assets/images/herculano_tech_cover.png";
import distribuicaoImg from "@/assets/images/goiabada_popular_cover.png";
import mediakitImg from "@/assets/images/mediakit_karateca_cover.png";
import propostaImg from "@/assets/images/proposta_scale_visual_cover.png";

// Imagens da Categoria 2: Posts & Stories (La Vera Pizzaria e Redes Sociais)
import post1Img from "@/assets/images/post_la_vera_1.webp";
import post2Img from "@/assets/images/post_la_vera_2.webp";
import post3Img from "@/assets/images/post_la_vera_3.webp";
import post4Img from "@/assets/images/post_la_vera_4.png";
import post5Img from "@/assets/images/post_la_vera_5.webp";
import post6Img from "@/assets/images/post_la_vera_6.webp";
import post7Img from "@/assets/images/post_la_vera_7.webp";
import post8Img from "@/assets/images/post_la_vera_8.webp";

// Imagens da Categoria 3: Projetos da Agência (Exatamente 6 trabalhos na ordem fornecida)
import agencia1Asset from "@/assets/agency/projeto-agencia-1.webp";
import agencia2Asset from "@/assets/agency/projeto-agencia-2.webp";
import agencia3Asset from "@/assets/agency/projeto-agencia-3.webp";
import agencia4Asset from "@/assets/agency/projeto-agencia-4.webp";
import agencia5Asset from "@/assets/agency/projeto-agencia-5.webp";
import agencia6Asset from "@/assets/agency/projeto-agencia-6.webp";

const agencia1Img = agencia1Asset;
const agencia2Img = agencia2Asset;
const agencia3Img = agencia3Asset;
const agencia4Img = agencia4Asset;
const agencia5Img = agencia5Asset;
const agencia6Img = agencia6Asset;

// Imagens da Categoria 4: Identidade Visual — Aura Estética (Exatamente 8 trabalhos na ordem fornecida)
import aura1Asset from "@/assets/aura/aura-estetica-1.webp";
import aura2Asset from "@/assets/aura/aura-estetica-2.png";
import aura3Asset from "@/assets/aura/aura-estetica-3.webp";
import aura4Asset from "@/assets/aura/aura-estetica-4.png";
import aura5Asset from "@/assets/aura/aura-estetica-5.webp";
import aura6Asset from "@/assets/aura/aura-estetica-6.webp";
import aura7Asset from "@/assets/aura/aura-estetica-7.webp";
import aura8Asset from "@/assets/aura/aura-estetica-8.webp";

const aura1Img = aura1Asset;
const aura2Img = aura2Asset;
const aura3Img = aura3Asset;
const aura4Img = aura4Asset;
const aura5Img = aura5Asset;
const aura6Img = aura6Asset;
const aura7Img = aura7Asset;
const aura8Img = aura8Asset;

// Imagens da Categoria 4: Identidade Visual — Composição Assimétrica (Gabs, Gira Sol, Fabiana)
import gabsAsset from "@/assets/identity/gabs-identidade.webp.asset.json";
import girasolAsset from "@/assets/identity/girasol-identidade.png.asset.json";
import fabianaAsset from "@/assets/identity/fabiana-identidade.png.asset.json";

const gabsImg = gabsAsset.url;
const girasolImg = girasolAsset.url;
const fabianaImg = fabianaAsset.url;

export interface IdentityShowcaseItem {
  id: string;
  name: string;
  category: string;
  image: string;
  position: "left" | "right-top" | "right-bottom";
  alt: string;
}

const IDENTITY_ASYMMETRIC_ITEMS: IdentityShowcaseItem[] = [
  {
    id: "identity-gabs",
    name: "Gabs",
    category: "Gabs • Identidade Visual",
    image: gabsImg,
    position: "left",
    alt: "Identidade Visual Gabs",
  },
  {
    id: "identity-girasol",
    name: "Gira Sol",
    category: "Gira Sol • Identidade Visual",
    image: girasolImg,
    position: "right-top",
    alt: "Identidade Visual Gira Sol",
  },
  {
    id: "identity-fabiana",
    name: "Fabiana",
    category: "Fabiana • Identidade Visual",
    image: fabianaImg,
    position: "right-bottom",
    alt: "Identidade Visual Fabiana",
  },
];

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  deliverables: string[];
}

export interface PostItem {
  id: string;
  image: string;
  title: string;
  category: string;
}

export interface PortfolioCategory {
  id: string;
  name: string;
  description: string;
  type: "presentations" | "posts" | "agency" | "identity";
  projects?: ProjectItem[];
  posts?: PostItem[];
  projectBadge?: string;
}

// Estrutura modular preparada para receber futuras categorias (ex: Sites, Identidade Visual)
const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: "apresentacoes-comerciais",
    name: "APRESENTAÇÕES COMERCIAIS",
    description:
      "Apresentações desenvolvidas para comunicar ideias, propostas e informações de forma estratégica, clara e visualmente profissional.",
    type: "presentations",
    projects: [
      {
        id: "proj-1",
        slug: "herculano-tech",
        title: "Herculano Tech",
        category: "Apresentação da Marca",
        image: herculanoImg,
        description:
          "Apresentação visual institucional e corporativa da marca Herculano Tech, conectando identidade industrial, autoridade no segmento de ar-condicionado e climatização com design marcante e sofisticado.",
        deliverables: [
          "Apresentação Institucional da Marca",
          "Identidade Visual & Branding",
          "Manual de Aplicação & Diretrizes",
          "Composições de Alto Impacto",
        ],
      },
      {
        id: "proj-2",
        slug: "apresentacao-distribuicao-comercial",
        title: "Distribuição Comercial",
        category: "Apresentação Comercial",
        image: distribuicaoImg,
        description:
          "Apresentação estratégica comercial com modelagem e diagramação do processo de distribuição de produtos no atacado, com destaque visual realista e hierarquia assertiva.",
        deliverables: [
          "Diagramação Comercial de Distribuição",
          "Mockups 3D de Embalagem & Produto",
          "Estruturação de Rota Comercial",
          "Lâminas para Negociações em Varejo",
        ],
      },
      {
        id: "proj-3",
        slug: "media-kit-atleta",
        title: "Media Kit Atleta",
        category: "Media Kit Esportivo",
        image: mediakitImg,
        description:
          "Media Kit esportivo premium desenvolvido para captação de patrocínios, com visual dark dinâmico, energia visual e valorização do atleta no cenário esportivo.",
        deliverables: [
          "Media Kit para Captação de Patrocínio",
          "Estatísticas, Conquistas & Biografia",
          "Linguagem Visual Dinâmica & Dark",
          "Formatos para Envio Digital e Impresso",
        ],
      },
      {
        id: "proj-4",
        slug: "proposta-comercial-agencia",
        title: "Proposta Comercial Agência",
        category: "Proposta Comercial",
        image: propostaImg,
        description:
          "Proposta comercial refinada com estética glassmorphism moderna e iluminação de palco em tons azul cobalto, ideal para fechamento de projetos de alto ticket.",
        deliverables: [
          "Design de Proposta Comercial Premium",
          "Detalhamento de Escopo & Metodologia",
          "Estética Moderna com Glassmorphism",
          "Lâminas de Apresentação & Fechamento",
        ],
      },
    ],
  },
  {
    id: "posts-stories",
    name: "POSTS & STORIES",
    description:
      "Conteúdos visuais desenvolvidos para redes sociais, campanhas e comunicação de marcas.",
    type: "posts",
    posts: [
      {
        id: "post-1",
        image: post1Img,
        title: "Vamos Pedir Pizza • Campanha Delivery",
        category: "Pizzaria • Social Media",
      },
      {
        id: "post-2",
        image: post2Img,
        title: "Tudo Acaba em Pizza • Criativo Institucional",
        category: "Pizzaria • Social Media",
      },
      {
        id: "post-3",
        image: post3Img,
        title: "Sábado da Pizza • Engajamento & Vendas",
        category: "Pizzaria • Social Media",
      },
      {
        id: "post-4",
        image: post4Img,
        title: "Promoção do Dia • Oferta Especial",
        category: "Pizzaria • Social Media",
      },
      {
        id: "post-5",
        image: post5Img,
        title: "A Melhor da Região • Posicionamento",
        category: "Pizzaria • Social Media",
      },
      {
        id: "post-6",
        image: post6Img,
        title: "Pizzadizza Mascote • Criativo de Marca",
        category: "Pizzaria • Social Media",
      },
      {
        id: "post-7",
        image: post7Img,
        title: "Pizza Artesanal • Destaque de Produto",
        category: "Pizzaria • Social Media",
      },
      {
        id: "post-8",
        image: post8Img,
        title: "Combo Família • Campanha Promocional",
        category: "Pizzaria • Social Media",
      },
    ],
  },
  {
    id: "projetos-da-agencia",
    name: "PROJETOS DA AGÊNCIA",
    description:
      "Projetos desenvolvidos para a comunicação e presença digital da agência.",
    type: "agency",
    posts: [
      {
        id: "proj-agencia-01",
        image: agencia1Img,
        title: "Projeto Agência 01",
        category: "Projetos da Agência",
      },
      {
        id: "proj-agencia-02",
        image: agencia2Img,
        title: "Projeto Agência 02",
        category: "Projetos da Agência",
      },
      {
        id: "proj-agencia-03",
        image: agencia3Img,
        title: "Projeto Agência 03",
        category: "Projetos da Agência",
      },
      {
        id: "proj-agencia-04",
        image: agencia4Img,
        title: "Projeto Agência 04",
        category: "Projetos da Agência",
      },
      {
        id: "proj-agencia-05",
        image: agencia5Img,
        title: "Projeto Agência 05",
        category: "Projetos da Agência",
      },
      {
        id: "proj-agencia-06",
        image: agencia6Img,
        title: "Projeto Agência 06",
        category: "Projetos da Agência",
      },
    ],
  },
  {
    id: "identidade-visual",
    name: "IDENTIDADE VISUAL",
    description:
      "Identidades visuais completas e sofisticadas para marcas e clínicas de alto padrão.",
    type: "identity",
    projectBadge: "Aura Estética",
    posts: [
      {
        id: "aura-estetica-01",
        image: aura1Img,
        title: "Aura Estética 01",
        category: "Aura Estética • Identidade Visual",
      },
      {
        id: "aura-estetica-02",
        image: aura2Img,
        title: "Aura Estética 02",
        category: "Aura Estética • Identidade Visual",
      },
      {
        id: "aura-estetica-03",
        image: aura3Img,
        title: "Aura Estética 03",
        category: "Aura Estética • Identidade Visual",
      },
      {
        id: "aura-estetica-04",
        image: aura4Img,
        title: "Aura Estética 04",
        category: "Aura Estética • Identidade Visual",
      },
      {
        id: "aura-estetica-05",
        image: aura5Img,
        title: "Aura Estética 05",
        category: "Aura Estética • Identidade Visual",
      },
      {
        id: "aura-estetica-06",
        image: aura6Img,
        title: "Aura Estética 06",
        category: "Aura Estética • Identidade Visual",
      },
      {
        id: "aura-estetica-07",
        image: aura7Img,
        title: "Aura Estética 07",
        category: "Aura Estética • Identidade Visual",
      },
      {
        id: "aura-estetica-08",
        image: aura8Img,
        title: "Aura Estética 08",
        category: "Aura Estética • Identidade Visual",
      },
    ],
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedPost, setSelectedPost] = useState<PostItem | null>(null);

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
      { threshold: 0.08 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Fechar com tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        setSelectedPost(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projetos"
      className={`projects-section ${isVisible ? "is-visible" : ""}`}
      aria-labelledby="projects-title"
    >
      {/* Atmosfera sutil de fundo */}
      <div className="projects-ambient-glow" aria-hidden="true" />
      <div className="projects-grid-overlay" aria-hidden="true" />

      <div className="projects-container">
        {/* Cabeçalho principal com hierarquia requerida */}
        <header className="projects-header">
          <div className="projects-header-left">
            <div className="projects-kicker">
              <span>PORTFÓLIO</span>
              <span className="projects-kicker-line" aria-hidden="true" />
            </div>

            <h2 id="projects-title" className="projects-title">
              Meus <span>projetos</span>
            </h2>

            <p className="projects-subtitle">
              Confira alguns dos projetos que desenvolvi, com foco em criatividade, estratégia e
              resultados.
            </p>
          </div>
        </header>

        {/* Categorias do Portfólio (Galeria Profissional) */}
        {PORTFOLIO_CATEGORIES.map((category) => (
          <div key={category.id} className="projects-category-block">
            {/* Cabeçalho da Categoria */}
            <div className="projects-category-header">
              <div className="projects-category-title-wrap">
                <span className="projects-category-badge-dot" aria-hidden="true" />
                <h3 className="projects-category-title">{category.name}</h3>
              </div>
              <p className="projects-category-desc">{category.description}</p>
            </div>

            {/* Categoria 1: APRESENTAÇÕES COMERCIAIS (Grid de 2 colunas com cards de capa e dados) */}
            {category.type === "presentations" && category.projects && (
              <div className="projects-gallery-grid">
                {category.projects.map((project) => (
                  <article
                    key={project.id}
                    className="projects-card-shell group"
                    onClick={() => setSelectedProject(project)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Ver apresentação: ${project.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedProject(project);
                      }
                    }}
                  >
                    <div className="projects-card-inner">
                      {/* Imagem de capa original sem distorção e sem filtros */}
                      <div className="projects-card-media">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="projects-card-img"
                          loading="lazy"
                            decoding="async"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Categoria 2: POSTS & STORIES (Galeria visual limpa onde as imagens são protagonistas) */}
            {category.type === "posts" && category.posts && (
              <div className="posts-gallery-grid">
                {category.posts.map((post) => (
                  <article
                    key={post.id}
                    className="posts-card-shell group"
                    onClick={() => setSelectedPost(post)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Ampliar arte: ${post.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedPost(post);
                      }
                    }}
                  >
                    <div className="posts-card-media">
                      {/* A própria imagem como protagonista absoluta */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="posts-card-img"
                        loading="lazy"
                          decoding="async"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Categoria 3: PROJETOS DA AGÊNCIA (Grid de 3 colunas desktop, 2 tablet, 1 mobile) */}
            {category.type === "agency" && category.posts && (
              <div className="agency-gallery-grid">
                {category.posts.map((post) => (
                  <article
                    key={post.id}
                    className="agency-card-shell group"
                    onClick={() => setSelectedPost(post)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Ampliar arte: ${post.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedPost(post);
                      }
                    }}
                  >
                    <div className="agency-card-media">
                      {/* Imagem original com proporções preservadas e foco absoluto */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="agency-card-img"
                        loading="lazy"
                          decoding="async"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Categoria 4: IDENTIDADE VISUAL */}
            {category.type === "identity" && (
              <div className="identity-section-wrap">
                {/* Composição Assimétrica: Gabs à esquerda, Girasol superior direito, Fabiana inferior direito */}
                <div className="identity-asymmetric-composition">
                  <div className="identity-asymmetric-grid">
                    {/* Imagem da Esquerda: GABS */}
                    {IDENTITY_ASYMMETRIC_ITEMS.filter((item) => item.position === "left").map((item) => (
                      <article
                        key={item.id}
                        className="identity-asymmetric-card identity-card-left group"
                        onClick={() =>
                          setSelectedPost({
                            id: item.id,
                            title: item.name,
                            category: item.category,
                            image: item.image,
                          })
                        }
                        tabIndex={0}
                        role="button"
                        aria-label={`Ampliar identidade visual: ${item.name}`}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setSelectedPost({
                              id: item.id,
                              title: item.name,
                              category: item.category,
                              image: item.image,
                            });
                          }
                        }}
                      >
                        <div className="identity-card-media identity-media-left">
                          <img
                            src={item.image}
                            alt={item.alt}
                            className="identity-card-img"
                            loading="lazy"
                              decoding="async"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </article>
                    ))}

                    {/* Coluna Direita: GIRASOL (superior) e FABIANA (inferior) */}
                    <div className="identity-asymmetric-right-stack">
                      {IDENTITY_ASYMMETRIC_ITEMS.filter((item) => item.position !== "left").map((item) => (
                        <article
                          key={item.id}
                          className={`identity-asymmetric-card ${
                            item.position === "right-top"
                              ? "identity-card-right-top"
                              : "identity-card-right-bottom"
                          } group`}
                          onClick={() =>
                            setSelectedPost({
                              id: item.id,
                              title: item.name,
                              category: item.category,
                              image: item.image,
                            })
                          }
                          tabIndex={0}
                          role="button"
                          aria-label={`Ampliar identidade visual: ${item.name}`}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setSelectedPost({
                                id: item.id,
                                title: item.name,
                                category: item.category,
                                image: item.image,
                              });
                            }
                          }}
                        >
                          <div className="identity-card-media identity-media-right">
                            <img
                              src={item.image}
                              alt={item.alt}
                              className="identity-card-img"
                              loading="lazy"
                              decoding="async"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Aura Estética */}
                {category.posts && (
                  <div className="aura-section-wrap">
                    {category.projectBadge && (
                      <div className="aura-project-badge">
                        <Sparkles size={14} className="text-[#4F6FFF]" />
                        <span>{category.projectBadge}</span>
                      </div>
                    )}
                    <div className="aura-gallery-grid">
                      {category.posts.map((post) => (
                        <article
                          key={post.id}
                          className="aura-card-shell group"
                          onClick={() => setSelectedPost(post)}
                          tabIndex={0}
                          role="button"
                          aria-label={`Ampliar arte: ${post.title}`}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setSelectedPost(post);
                            }
                          }}
                        >
                          <div className="aura-card-media">
                            {/* Imagem original mantendo proporção e sem cortes ou distorções */}
                            <img
                              src={post.image}
                              alt={post.title}
                              className="aura-card-img"
                              loading="lazy"
                              decoding="async"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal interativo para visualização de Apresentações Comerciais */}
      {selectedProject && (
        <div
          className="projects-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="projects-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar */}
            <button
              type="button"
              className="projects-modal-close"
              aria-label="Fechar detalhes do projeto"
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} strokeWidth={2} />
            </button>

            {/* Imagem em destaque no modal */}
            <div className="projects-modal-media">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="projects-modal-img"
                referrerPolicy="no-referrer"
              />
              <div className="projects-modal-img-gradient" aria-hidden="true" />
              <span className="projects-modal-badge">{selectedProject.category}</span>
            </div>

            {/* Informações completas do projeto */}
            <div className="projects-modal-body">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#4F6FFF] uppercase">
                <Sparkles size={14} />
                <span>Apresentação Comercial</span>
              </div>

              <h3 id="modal-project-title" className="projects-modal-title">
                {selectedProject.title}
              </h3>

              <p className="projects-modal-desc">{selectedProject.description}</p>

              {/* Itens entregues / escopo de valor */}
              <div className="projects-modal-deliverables">
                <h4 className="projects-modal-deliverables-heading">Escopo e entregáveis</h4>
                <div className="projects-modal-tags-grid">
                  {selectedProject.deliverables.map((item, index) => (
                    <div key={index} className="projects-modal-tag">
                      <CheckCircle2 size={16} className="text-[#4F6FFF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ação de contato direta */}
              <div className="projects-modal-footer">
                <a
                  href="#contato"
                  onClick={() => setSelectedProject(null)}
                  className="projects-modal-cta"
                >
                  <span>Solicitar projeto semelhante</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal exclusivo para visualização em alta resolução de POSTS & STORIES */}
      {selectedPost && (
        <div
          className="posts-lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPost.title}
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="posts-lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar */}
            <button
              type="button"
              className="posts-lightbox-close"
              aria-label="Fechar visualização"
              onClick={() => setSelectedPost(null)}
            >
              <X size={20} strokeWidth={2.2} />
            </button>

            {/* Imagem em alta resolução sem deformações */}
            <div className="posts-lightbox-img-wrapper">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="posts-lightbox-img"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Legenda limpa no rodapé do lightbox */}
            <div className="posts-lightbox-caption">
              <span className="font-semibold text-white tracking-wide">{selectedPost.title}</span>
              <span className="text-xs text-[#4F6FFF] font-medium tracking-wider uppercase">
                {selectedPost.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
