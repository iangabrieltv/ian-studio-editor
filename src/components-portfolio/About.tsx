import portrait from "@/assets/ian-gabriel-cutout.png";
import signature from "@/assets/ian-gabriel-signature.png";
import { useEffect, useRef, useState } from "react";

function AboutSignature() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const hasPlayedThisVisitRef = useRef(false);
  const [videoSrc, setVideoSrc] = useState<string>("/signature.mp4");
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Check if a video was previously saved or cached in localStorage for instant preview
  useEffect(() => {
    try {
      const cached = window.localStorage.getItem("ian_signature_video_url");
      if (cached) {
        setVideoSrc(cached);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleFileUpload = async (file: File) => {
    if (!file || !file.type.startsWith("video/")) return;

    try {
      // Persist permanently to public/signature.mp4 on the server
      await fetch("/api/upload-signature", {
        method: "POST",
        headers: { "Content-Type": file.type || "video/mp4" },
        body: file,
      });
    } catch (err) {
      console.warn("Could not save to /api/upload-signature:", err);
    }

    const objectUrl = URL.createObjectURL(file);
    try {
      window.localStorage.setItem("ian_signature_video_url", objectUrl);
    } catch {
      // ignore
    }

    setVideoSrc(objectUrl);
    setHasVideoError(false);
    setIsVideoLoaded(true);

    if (videoRef.current) {
      videoRef.current.src = objectUrl;
      videoRef.current.load();
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      hasPlayedThisVisitRef.current = true;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Observe the parent section #sobre for robust viewport entry/exit
    const section = document.getElementById("sobre") || containerRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // USER ENTERS "QUEM SOU EU?":
          // When section enters the viewport with real presence (ratio >= 0.15)
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
            if (!hasPlayedThisVisitRef.current) {
              hasPlayedThisVisitRef.current = true;
              video.currentTime = 0;
              const playPromise = video.play();
              if (playPromise !== undefined) {
                playPromise.catch(() => {
                  // Autoplay policy or video not ready; will play on user interaction
                });
              }
            }
          }
          // USER LEAVES "QUEM SOU EU?":
          // When section is no longer in the viewport (scrolled above or below)
          else if (!entry.isIntersecting || entry.intersectionRatio <= 0.03) {
            hasPlayedThisVisitRef.current = false;
            video.pause();
            video.currentTime = 0;
          }
        }
      },
      {
        threshold: [0, 0.05, 0.15, 0.25, 0.5],
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [videoSrc]);

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    // Stop at the final frame and remain static without looping
    video.pause();
    if (Number.isFinite(video.duration) && video.duration > 0) {
      video.currentTime = Math.max(0, video.duration - 0.02);
    }
  };

  return (
    <div
      ref={containerRef}
      className="about-signature-wrap"
      title="Assinatura Ian Gabriel"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file) handleFileUpload(file);
      }}
      onClick={() => {
        // Allow clicking to select video if not loaded or for easy file attachment
        if (hasVideoError && fileInputRef.current) {
          fileInputRef.current.click();
        }
      }}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="video/mp4,video/webm,video/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFileUpload(file);
        }}
      />

      <video
        ref={videoRef}
        className={`about-signature-video ${hasVideoError ? "hidden" : ""}`}
        src={videoSrc}
        playsInline
        muted
        preload="auto"
        loop={false}
        onLoadedData={() => {
          setIsVideoLoaded(true);
          setHasVideoError(false);
        }}
        onEnded={handleEnded}
        onError={() => {
          // If video file is not present yet in public/signature.mp4, show static PNG signature
          setHasVideoError(true);
        }}
      />

      {/* Fallback image shown if video is not yet loaded or missing */}
      {hasVideoError && (
        <img
          className="about-signature-fallback"
          src={signature}
          alt="Assinatura de Ian Gabriel"
          loading="eager"
        />
      )}
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
