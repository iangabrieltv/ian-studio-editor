import { ArrowRight, Mail, Instagram, Linkedin, Send } from "lucide-react";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const WHATSAPP_URL = "https://wa.me/5582999509049?text=Ol%C3%A1%2C%20Ian!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.";

export function Contact() {
  return (
    <section
      id="contato"
      className="relative isolate overflow-hidden px-6 py-20 md:py-28 lg:py-32"
      aria-labelledby="contact-heading"
    >
      {/* Background glow & subtle ambient light matching site identity */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#4F6FFF]/6 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        {/* Main 3-zone layout */}
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-10 lg:gap-8 xl:gap-12">
          
          {/* ÁREA 1 — TEXTO DE CONTATO */}
          <div className="flex-1 flex flex-col justify-center max-w-xl">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-[#4F6FFF] uppercase">
              ENTRE EM CONTATO
            </span>

            <h2
              id="contact-heading"
              className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Vamos
              <br />
              <span className="text-[#4F6FFF]">conversar?</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-md">
              Se você gostou do meu trabalho e busca um designer freelancer para novos
              projetos ou para somar ao seu time, será um prazer conversarmos sobre
              novas oportunidades.
            </p>
          </div>

          {/* DIVISÃO VERTICAL (Desktop/Notebook) */}
          <div
            className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-[#4F6FFF]/25 to-transparent self-stretch my-2"
            aria-hidden="true"
          />

          {/* ÁREA 2 — INFORMAÇÕES DE CONTATO */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-7">
              {/* Contato 01: E-mail */}
              <a
                href="mailto:iangabrieltv@gmail.com"
                className="group flex items-center gap-4 text-left p-2 rounded-xl transition-all duration-200 hover:bg-white/[0.03]"
                aria-label="E-mail: iangabrieltv@gmail.com"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#4F6FFF]/40 bg-[#4F6FFF]/10 text-[#4F6FFF] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#4F6FFF] group-hover:bg-[#4F6FFF]/20 group-hover:shadow-[0_0_16px_rgba(79,111,255,0.35)]">
                  <Mail size={20} strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                    E-mail
                  </span>
                  <span className="block text-sm sm:text-base font-semibold text-white transition-colors group-hover:text-[#4F6FFF] truncate">
                    iangabrieltv@gmail.com
                  </span>
                </div>
              </a>

              {/* Contato 02: WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-left p-2 rounded-xl transition-all duration-200 hover:bg-white/[0.03]"
                aria-label="WhatsApp: (82) 99950-9049"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#4F6FFF]/40 bg-[#4F6FFF]/10 text-[#4F6FFF] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#4F6FFF] group-hover:bg-[#4F6FFF]/20 group-hover:shadow-[0_0_16px_rgba(79,111,255,0.35)]">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                    WhatsApp
                  </span>
                  <span className="block text-sm sm:text-base font-semibold text-white transition-colors group-hover:text-[#4F6FFF]">
                    (82) 99950-9049
                  </span>
                </div>
              </a>

              {/* Contato 03: LinkedIn */}
              <a
                href="https://www.linkedin.com/in/iangabrieltv"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-left p-2 rounded-xl transition-all duration-200 hover:bg-white/[0.03]"
                aria-label="LinkedIn: www.linkedin.com/in/iangabrieltv"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#4F6FFF]/40 bg-[#4F6FFF]/10 text-[#4F6FFF] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#4F6FFF] group-hover:bg-[#4F6FFF]/20 group-hover:shadow-[0_0_16px_rgba(79,111,255,0.35)]">
                  <Linkedin size={20} strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                    LinkedIn
                  </span>
                  <span className="block text-sm sm:text-base font-semibold text-white transition-colors group-hover:text-[#4F6FFF]">
                    Ian Gabriel TV
                  </span>
                </div>
              </a>

              {/* Contato 04: Instagram */}
              <a
                href="https://www.instagram.com/iangabriell._/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-left p-2 rounded-xl transition-all duration-200 hover:bg-white/[0.03]"
                aria-label="Instagram: @iangabriell._"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#4F6FFF]/40 bg-[#4F6FFF]/10 text-[#4F6FFF] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#4F6FFF] group-hover:bg-[#4F6FFF]/20 group-hover:shadow-[0_0_16px_rgba(79,111,255,0.35)]">
                  <Instagram size={20} strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                    Instagram
                  </span>
                  <span className="block text-sm sm:text-base font-semibold text-white transition-colors group-hover:text-[#4F6FFF]">
                    @iangabriell._
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* ÁREA 3 — CARD DE CONTATO */}
          <div className="flex-1 lg:max-w-md w-full">
            <div className="h-full rounded-2xl md:rounded-3xl border border-[#4F6FFF]/35 bg-gradient-to-b from-[#091024]/90 via-[#060B1A]/95 to-[#040814]/98 p-7 sm:p-8 flex flex-col justify-between shadow-[0_12px_36px_rgba(0,0,0,0.45),0_0_24px_rgba(79,111,255,0.08)] backdrop-blur-sm transition-all duration-300 hover:border-[#4F6FFF]/50">
              
              <div>
                {/* Ícone de envio/avião de papel no topo */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#4F6FFF]/15 border border-[#4F6FFF]/40 text-[#4F6FFF] shadow-[0_0_20px_rgba(79,111,255,0.22)] mb-5">
                  <Send size={20} strokeWidth={2} className="translate-x-[-1px] translate-y-[1px]" />
                </div>

                {/* Texto de destaque */}
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">
                  Fale comigo
                </h3>

                {/* Texto de apoio */}
                <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                  Vamos transformar ideias
                  <br />
                  em grandes resultados.
                </p>
              </div>

              {/* Botão de envio de mensagem com brilho rotativo, fundo preto e animação suave */}
              <div className="mt-8 pt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-action button-swaying w-full justify-center gap-3 py-3.5 px-6 font-semibold text-sm group"
                >
                  <span>Enviar mensagem</span>
                  <ArrowRight
                    size={17}
                    strokeWidth={2}
                    className="action-arrow transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
