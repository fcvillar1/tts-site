"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/carrossel/slide1.jpg",
    mobilePosition: "62% center",
  },
  {
    image: "/carrossel/slide2.jpg",
    mobilePosition: "58% center",
  },
  {
    image: "/carrossel/slide3.jpg",
    mobilePosition: "60% center",
  },
  {
    image: "/carrossel/slide4.jpg",
    mobilePosition: "52% center",
  },
];

export default function CompanyLandingPage() {
  const [contatoAberto, setContatoAberto] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [slideAtual, setSlideAtual] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideAtual((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    function verificarTela() {
      setIsMobile(window.innerWidth < 768);
    }

    verificarTela();
    window.addEventListener("resize", verificarTela);

    return () => window.removeEventListener("resize", verificarTela);
  }, []);

  useEffect(() => {
    if (contatoAberto) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      const timer = setTimeout(() => {
        setAnimarModal(true);
      }, 10);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "auto";
        document.body.style.paddingRight = "0px";
      };
    } else {
      setAnimarModal(false);
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }
  }, [contatoAberto]);

  useEffect(() => {
    function handleEsc(event: KeyboardEvent) {
      if (event.key === "Escape" && contatoAberto) {
        fecharContato();
      }
    }

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [contatoAberto]);

  function abrirContato() {
    setContatoAberto(true);
  }

  function fecharContato() {
    setAnimarModal(false);

    setTimeout(() => {
      setContatoAberto(false);
    }, 360);
  }

  function irParaSlide(index: number) {
    setSlideAtual(index);
  }

  function slideAnterior() {
    setSlideAtual((prev) => (prev - 1 + slides.length) % slides.length);
  }

  function proximoSlide() {
    setSlideAtual((prev) => (prev + 1) % slides.length);
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-slate-100">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
        </div>

        <div className="relative">
        <header className="border-b border-white/10 bg-white/5 backdrop-blur">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
    <div className="flex items-center gap-6">
      <img
        src="/logo-tts.png"
        alt="Logo TTS Company"
        className="h-32 w-32 rounded-2xl object-contain shadow-lg md:h-36 md:w-36"
      />

      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">
          TTS Company
        </h1>
        <p className="text-sm text-slate-300">
          Soluções em informática para empresas, revendas e órgãos públicos
        </p>
      </div>
    </div>

    <div className="flex items-center gap-3">
      <Link
        href="/empresa"
        className="rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-white/10"
      >
        A Empresa
      </Link>

      <button
        type="button"
        onClick={abrirContato}
        style={{ cursor: "pointer" }}
        className="rounded-2xl bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 shadow-lg transition hover:opacity-90"
      >
        Fale conosco
      </button>
    </div>
  </div>
</header>

          <main>
            <section className="mx-auto max-w-6xl px-6 pt-8">
              <div
                className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
                style={{ height: isMobile ? "240px" : "430px" }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={slide.image}
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: index === slideAtual ? 1 : 0,
                      transition: "opacity 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
                      backgroundImage: `url(${slide.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: isMobile ? slide.mobilePosition : "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(2,6,23,0.10) 0%, rgba(2,6,23,0.18) 100%)",
                      }}
                    />
                  </div>
                ))}

                <button
                  type="button"
                  onClick={slideAnterior}
                  aria-label="Slide anterior"
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    left: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 30,
                    fontSize: "42px",
                    color: "white",
                    background: "transparent",
                    border: "none",
                    padding: "0",
                    lineHeight: 1,
                    textShadow: "0 2px 10px rgba(0,0,0,0.6)",
                  }}
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={proximoSlide}
                  aria-label="Próximo slide"
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    right: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 30,
                    fontSize: "42px",
                    color: "white",
                    background: "transparent",
                    border: "none",
                    padding: "0",
                    lineHeight: 1,
                    textShadow: "0 2px 10px rgba(0,0,0,0.6)",
                  }}
                >
                  ›
                </button>

                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "18px",
                    transform: "translateX(-50%)",
                    zIndex: 40,
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Ir para slide ${index + 1}`}
                      onClick={() => irParaSlide(index)}
                      style={{
                        cursor: "pointer",
                        width: index === slideAtual ? "30px" : "10px",
                        height: "10px",
                        borderRadius: "9999px",
                        border: "none",
                        background:
                          index === slideAtual ? "#22d3ee" : "rgba(255,255,255,0.72)",
                        boxShadow:
                          index === slideAtual
                            ? "0 0 12px rgba(34, 211, 238, 0.45)"
                            : "none",
                        transition: "all 260ms ease",
                      }}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Revenda de tecnologia
                </p>

                <h3 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Equipamentos e soluções de TI para o mercado corporativo e público
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Atuamos na comercialização de notebooks, desktops, periféricos e soluções de
                  tecnologia, oferecendo atendimento consultivo para empresas, revendas e órgãos
                  públicos.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contato"
                    style={{ cursor: "pointer" }}
                    className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-medium text-slate-950 shadow-lg transition hover:opacity-90"
                  >
                    Solicitar atendimento
                  </Link>

                  <button
                    type="button"
                    onClick={abrirContato}
                    style={{ cursor: "pointer" }}
                    className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
                  >
                    Ver contato
                  </button>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                  <h3 className="text-lg font-semibold text-white">O que fornecemos</h3>
                  <p className="mt-2 text-slate-300">
                    Notebooks, desktops, acessórios, equipamentos de informática e soluções sob
                    demanda.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                  <h3 className="text-lg font-semibold text-white">Perfil de atendimento</h3>
                  <p className="mt-2 text-slate-300">
                    Empresas privadas, revendas, projetos corporativos e fornecimento para órgãos
                    públicos.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                  <h3 className="text-lg font-semibold text-white">Atendimento comercial</h3>
                  <p className="mt-2 text-slate-300">
                    Propostas sob consulta, suporte comercial e relacionamento focado em agilidade e
                    confiança.
                  </p>
                </div>
              </div>
            </section>

            <section className="border-y border-white/10 bg-white/5 backdrop-blur">
              <div className="mx-auto max-w-6xl px-6 py-16">
                <h3 className="text-3xl font-bold tracking-tight text-white">Sobre a empresa</h3>
                <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
                  Somos uma empresa especializada na comercialização de equipamentos de informática e
                  soluções de TI. Trabalhamos com atendimento personalizado, foco em demandas
                  corporativas e compromisso com qualidade, agilidade e confiabilidade nas
                  negociações.
                </p>
              </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16">
              <h3 className="text-3xl font-bold tracking-tight text-white">Áreas de atuação</h3>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                  <h4 className="text-lg font-semibold text-white">Equipamentos</h4>
                  <p className="mt-2 text-slate-300">
                    Notebooks, desktops, monitores e periféricos.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                  <h4 className="text-lg font-semibold text-white">Projetos corporativos</h4>
                  <p className="mt-2 text-slate-300">
                    Atendimento para empresas com necessidade de compra consultiva.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                  <h4 className="text-lg font-semibold text-white">Mercado público</h4>
                  <p className="mt-2 text-slate-300">
                    Suporte comercial para processos e demandas do setor público.
                  </p>
                </div>
              </div>
            </section>
          </main>

          <footer className="border-t border-white/10 bg-slate-950/40">
            <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-slate-400">
              TTS Company LTDA - CNPJ: 65.322.001/0001-06 - São Paulo - SP - Todos os direitos reservados
            </div>
          </footer>
        </div>
      </div>

      {contatoAberto && (
        <div
          onClick={fecharContato}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: animarModal ? "rgba(2, 6, 23, 0.78)" : "rgba(2, 6, 23, 0)",
            backdropFilter: animarModal ? "blur(6px)" : "blur(0px)",
            WebkitBackdropFilter: animarModal ? "blur(6px)" : "blur(0px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            transition:
              "background 360ms cubic-bezier(0.22, 1, 0.36, 1), backdrop-filter 360ms cubic-bezier(0.22, 1, 0.36, 1), -webkit-backdrop-filter 360ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "560px",
              background:
                "linear-gradient(180deg, rgba(15,23,42,0.98) 0%, rgba(15,23,42,0.96) 100%)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "24px",
              boxShadow: animarModal
                ? "0 30px 80px rgba(0,0,0,0.48), 0 0 0 1px rgba(255,255,255,0.02) inset"
                : "0 18px 40px rgba(0,0,0,0.22)",
              padding: "28px",
              color: "#e2e8f0",
              opacity: animarModal ? 1 : 0,
              transform: animarModal
                ? "translateY(0px) scale(1)"
                : "translateY(28px) scale(0.94)",
              transition:
                "opacity 360ms cubic-bezier(0.22, 1, 0.36, 1), transform 360ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 360ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <button
              type="button"
              aria-label="Fechar popup"
              onClick={fecharContato}
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                width: "42px",
                height: "42px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.02)",
                color: "#cbd5e1",
                fontSize: "24px",
                lineHeight: 1,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition:
                  "background 220ms ease, color 220ms ease, transform 220ms ease, border-color 220ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.color = "#cbd5e1";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
              }}
            >
              ×
            </button>

            <div style={{ paddingRight: "44px" }}>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                Informações de contato
              </h3>

              <p
                style={{
                  marginTop: "10px",
                  fontSize: "0.95rem",
                  color: "#cbd5e1",
                  lineHeight: 1.6,
                }}
              >
                Entre em contato para cotações, propostas comerciais e parcerias.
              </p>
            </div>

            <div style={{ marginTop: "24px", display: "grid", gap: "14px" }}>
              <p style={{ margin: 0 }}>
                <span style={{ fontWeight: 700, color: "#ffffff" }}>E-mail:</span>{" "}
                comercial@ttscompany.com.br
              </p>
              <p style={{ margin: 0 }}>
                <span style={{ fontWeight: 700, color: "#ffffff" }}>WhatsApp:</span>{" "}
                11 94385-1140
              </p>
              <p style={{ margin: 0 }}>
                <span style={{ fontWeight: 700, color: "#ffffff" }}>Atendimento:</span>{" "}
                Segunda a sexta, das 09h00 às 18h00
              </p>
            </div>

            <div style={{ marginTop: "26px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link
                href="/contato"
                onClick={fecharContato}
                style={{ cursor: "pointer" }}
                className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-medium text-slate-950 shadow-lg transition hover:opacity-90"
              >
                Solicitar atendimento
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}