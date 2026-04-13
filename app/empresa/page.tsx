"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SiteHeader from "../components/SiteHeader";

export default function EmpresaPage() {
  const [contatoAberto, setContatoAberto] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    }

    setAnimarModal(false);
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
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

  const cardStyle: React.CSSProperties = {
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.10)",
    borderRadius: "24px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    padding: isMobile ? "28px" : "40px",
  };

  const gridTwoCols: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: "32px",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: isMobile ? "1.9rem" : "2rem",
    fontWeight: 700,
    color: "#ffffff",
    lineHeight: 1.2,
    margin: 0,
  };

  const textBlockStyle: React.CSSProperties = {
    marginTop: "24px",
    display: "grid",
    gap: "20px",
  };

  const paragraphStyle: React.CSSProperties = {
    color: "#cbd5e1",
    lineHeight: 1.9,
    margin: 0,
    fontSize: "1.04rem",
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-slate-100">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
        </div>

        <div className="relative">
          <SiteHeader onContatoClick={abrirContato} />

          <main>
            <section className="mx-auto max-w-6xl px-6 py-20">
              <div style={{ maxWidth: "900px" }}>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Institucional
                </p>

                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Quem somos
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  A TTS Company é uma empresa especializada na comercialização de
                  equipamentos de informática e soluções em tecnologia, com foco no
                  atendimento a empresas, revendas e órgãos públicos.
                </p>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Atuamos com abordagem consultiva, buscando compreender as necessidades
                  de cada cliente para oferecer soluções adequadas, com agilidade,
                  confiabilidade e alinhamento às exigências técnicas e comerciais de
                  cada projeto.
                </p>
              </div>
            </section>

            <section className="border-y border-white/10 bg-white/5 backdrop-blur">
              <div className="mx-auto max-w-6xl px-6 py-16">
                <div style={gridTwoCols}>
                  <div style={cardStyle}>
                    <h3 style={headingStyle}>Nossa origem</h3>

                    <div style={textBlockStyle}>
                      <p style={paragraphStyle}>
                        A empresa nasceu a partir da identificação de uma necessidade
                        recorrente no mercado público: a carência de fornecedores preparados
                        e comprometidos com a qualidade no atendimento de processos
                        licitatórios.
                      </p>

                      <p style={paragraphStyle}>
                        Com experiência prévia na participação em licitações no segmento de
                        software, a TTS Company ampliou sua atuação para o fornecimento de
                        equipamentos de informática, levando para esse mercado a mesma
                        organização, conhecimento técnico e responsabilidade já aplicados em
                        projetos anteriores.
                      </p>

                      <p style={paragraphStyle}>
                        Essa origem permite que a empresa compreenda de forma prática as
                        exigências do setor público, atuando com segurança, clareza e
                        aderência aos requisitos de cada processo.
                      </p>
                    </div>
                  </div>

                  <div style={cardStyle}>
                    <h3 style={headingStyle}>Atuação e posicionamento</h3>

                    <div style={textBlockStyle}>
                      <p style={paragraphStyle}>
                        A TTS Company atua na revenda de equipamentos de informática e
                        soluções tecnológicas, atendendo demandas de diferentes perfis,
                        incluindo empresas privadas, revendas, parceiros comerciais e órgãos
                        públicos.
                      </p>

                      <p style={paragraphStyle}>
                        Nosso portfólio contempla notebooks, desktops, tablets, periféricos e
                        soluções de infraestrutura, sempre com foco em desempenho,
                        durabilidade e adequação às necessidades de cada cliente.
                      </p>

                      <p style={paragraphStyle}>
                        Atuamos com foco em relacionamento de longo prazo, atendimento
                        consultivo e construção de soluções comerciais consistentes para
                        ambientes corporativos e demandas do setor público.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16">
              <div style={gridTwoCols}>
                <div style={cardStyle}>
                  <h3 style={headingStyle}>Parcerias e fabricantes</h3>

                  <div style={textBlockStyle}>
                    <p style={paragraphStyle}>
                      A TTS Company atua na comercialização de equipamentos e soluções de
                      tecnologia com foco em qualidade, confiabilidade e aderência às
                      necessidades do mercado corporativo e do setor público.
                    </p>

                    <p style={paragraphStyle}>
                      Como parte desse posicionamento, a empresa já opera como
                      <strong style={{ color: "#ffffff" }}>
                        {" "}
                        revendedora autorizada de marcas reconhecidas no mercado nacional
                      </strong>
                      , entre elas <strong style={{ color: "#ffffff" }}>Positivo</strong> e{" "}
                      <strong style={{ color: "#ffffff" }}>VAIO</strong>, reforçando sua
                      capacidade de atuação dentro de padrões comerciais e operacionais
                      exigidos por fabricantes relevantes do setor.
                    </p>

                    <p style={paragraphStyle}>
                      Essa base de relacionamento com fabricantes demonstra o compromisso da
                      TTS Company com a oferta de produtos confiáveis, atendimento
                      consultivo e construção de parcerias de longo prazo, sempre com foco em
                      desempenho, segurança comercial e evolução contínua do portfólio.
                    </p>

                    <p style={paragraphStyle}>
                      Nosso objetivo é ampliar continuamente a atuação junto a fabricantes
                      estratégicos, consolidando a empresa como parceira comercial preparada
                      para atender demandas corporativas, projetos sob medida e processos do
                      setor público com profissionalismo, organização e responsabilidade.
                    </p>
                  </div>
                </div>

                <div style={cardStyle}>
                  <h3 style={headingStyle}>Diferenciais</h3>

                  <div style={{ ...textBlockStyle, gap: "16px" }}>
                    <p style={paragraphStyle}>
                      • Experiência prática em processos licitatórios
                    </p>
                    <p style={paragraphStyle}>
                      • Atendimento consultivo e personalizado
                    </p>
                    <p style={paragraphStyle}>
                      • Agilidade na elaboração de propostas comerciais
                    </p>
                    <p style={paragraphStyle}>
                      • Compromisso com prazos e especificações técnicas
                    </p>
                    <p style={paragraphStyle}>
                      • Relacionamento transparente com clientes e parceiros
                    </p>
                    <p style={paragraphStyle}>
                      • Atuação voltada ao mercado corporativo e ao setor público
                    </p>
                    <p style={paragraphStyle}>
                      • Base comercial estruturada para expansão de portfólio e novas
                      parcerias estratégicas
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="border-y border-white/10 bg-white/5 backdrop-blur">
              <div className="mx-auto max-w-6xl px-6 py-16">
                <div style={{ maxWidth: "900px" }}>
                  <h3 className="text-3xl font-bold tracking-tight text-white">
                    Compromisso institucional
                  </h3>

                  <p className="mt-6 text-lg leading-8 text-slate-300">
                    Nosso compromisso é atuar de forma profissional, ética e orientada a
                    resultados, contribuindo para que nossos clientes tenham acesso a
                    soluções tecnológicas confiáveis e alinhadas às suas necessidades
                    operacionais.
                  </p>

                  <p className="mt-6 text-lg leading-8 text-slate-300">
                    Buscamos estabelecer relações comerciais de longo prazo, baseadas em
                    confiança, clareza e excelência no atendimento.
                  </p>
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16">
              <div style={cardStyle}>
                <h3 style={headingStyle}>Informações da empresa</h3>

                <div style={{ ...textBlockStyle, gap: "16px" }}>
                  <p style={{ ...paragraphStyle, color: "#e2e8f0" }}>
                    <span style={{ fontWeight: 700, color: "#ffffff" }}>
                      Razão social:
                    </span>{" "}
                    TTS Company LTDA
                  </p>
                  <p style={{ ...paragraphStyle, color: "#e2e8f0" }}>
                    <span style={{ fontWeight: 700, color: "#ffffff" }}>
                      CNPJ:
                    </span>{" "}
                    65.322.001/0001-06
                  </p>
                  <p style={{ ...paragraphStyle, color: "#e2e8f0" }}>
                    <span style={{ fontWeight: 700, color: "#ffffff" }}>
                      E-mail comercial:
                    </span>{" "}
                    comercial@ttscompany.com.br
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href="/contato"
                    className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-medium text-slate-950 shadow-lg transition hover:opacity-90"
                  >
                    Solicitar atendimento
                  </Link>

                  <Link
                    href="/"
                    className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
                  >
                    Voltar à página inicial
                  </Link>
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