"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  onContatoClick?: () => void;
};

export default function SiteHeader({ onContatoClick }: Props) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkScreen() {
      setIsMobile(window.innerWidth < 768);
    }

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const isHome = pathname === "/";
  const isEmpresa = pathname === "/empresa";
  const isContato = pathname === "/contato";

  function navButtonClass(active: boolean) {
    return active
      ? "relative overflow-hidden rounded-2xl border border-cyan-300/40 bg-cyan-400/15 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset,0_6px_18px_rgba(34,211,238,0.10)] transition-all duration-300"
      : "relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset,0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-white/25 hover:bg-white/[0.10] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_10px_26px_rgba(0,0,0,0.16)]";
  }

  return (
    <header className="border-b border-white/10 bg-white/[0.04] backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 py-5">
        <div
          style={{
            display: "flex",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: "16px",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              textDecoration: "none",
            }}
          >
            <img
              src="/logo-tts.png"
              alt="Logo TTS Company"
              className="h-32 w-32 md:h-36 md:w-36 rounded-2xl object-contain shadow-lg"
              style={{
                flexShrink: 0,
              }}
            />

            <div style={{ minWidth: 0 }}>
              <h1
                style={{
                  margin: 0,
                  fontSize: isMobile ? "1.1rem" : "1.5rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                TTS Company
              </h1>

              <p
                style={{
                  margin: "4px 0 0 0",
                  fontSize: isMobile ? "0.78rem" : "0.92rem",
                  color: "#cbd5e1",
                  lineHeight: 1.45,
                }}
              >
                Soluções em informática para empresas, revendas e órgãos públicos
              </p>
            </div>
          </Link>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <Link href="/" className={navButtonClass(isHome)}>
              <span className="relative z-10">Início</span>
            </Link>

            <Link href="/empresa" className={navButtonClass(isEmpresa)}>
              <span className="relative z-10">A Empresa</span>
            </Link>

            {onContatoClick ? (
              <button
                type="button"
                onClick={onContatoClick}
                style={{ cursor: "pointer" }}
                className={
                  isContato
                    ? navButtonClass(true)
                    : "relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_10px_28px_rgba(34,211,238,0.28)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_14px_34px_rgba(34,211,238,0.36)]"
                }
              >
                {!isContato && (
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/25 via-transparent to-transparent opacity-60" />
                )}
                <span className="relative z-10">Fale conosco</span>
              </button>
            ) : (
              <Link href="/contato" className={navButtonClass(isContato)}>
                <span className="relative z-10">Contato</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}