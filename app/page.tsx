export const metadata = {
  title: "TTS Company",
  description: "Soluções em informática para empresas, revendas e órgãos públicos",
  icons: {
    icon: "/logo-tts.png",
    shortcut: "/logo-tts.png",
    apple: "/logo-tts.png",
  },
};


export default function CompanyLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-slate-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
      </div>

      <div className="relative">
        <header className="border-b border-white/10 bg-white/5 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
            <div className="flex items-center gap-4">
              <img
                src="/logo-tts.png"
                alt="Logo TTS Company"
                className="h-32 w-32 md:h-36 md:w-36 rounded-2xl object-contain shadow-lg"
              />
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-white">TTS Company</h1>
                <p className="text-sm text-slate-300">
                  Soluções em informática para empresas, revendas e órgãos públicos
                </p>
              </div>
            </div>
            <a
              href="mailto:comercial@ttscompany.com.br"
              className="rounded-2xl bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 shadow-lg transition hover:opacity-90"
            >
              Fale conosco
            </a>
          </div>
        </header>

        <main>
          <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Revenda de tecnologia
              </p>
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Equipamentos e soluções de TI para o mercado corporativo e público
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Atuamos na comercialização de notebooks, desktops, periféricos e soluções de tecnologia,
                oferecendo atendimento consultivo para empresas, revendas e órgãos públicos.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:comercial@ttscompany.com.br"
                  className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-medium text-slate-950 shadow-lg transition hover:opacity-90"
                >
                  Solicitar atendimento
                </a>
                <a
                  href="#contato"
                  className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur"
                >
                  Ver contato
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                <h3 className="text-lg font-semibold text-white">O que fornecemos</h3>
                <p className="mt-2 text-slate-300">
                  Notebooks, desktops, acessórios, equipamentos de informática e soluções sob demanda.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                <h3 className="text-lg font-semibold text-white">Perfil de atendimento</h3>
                <p className="mt-2 text-slate-300">
                  Empresas privadas, revendas, projetos corporativos e fornecimento para órgãos públicos.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                <h3 className="text-lg font-semibold text-white">Atendimento comercial</h3>
                <p className="mt-2 text-slate-300">
                  Propostas sob consulta, suporte comercial e relacionamento focado em agilidade e confiança.
                </p>
              </div>
            </div>
          </section>

          <section className="border-y border-white/10 bg-white/5 backdrop-blur">
            <div className="mx-auto max-w-6xl px-6 py-16">
              <h3 className="text-3xl font-bold tracking-tight text-white">Sobre a empresa</h3>
              <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
                Somos uma empresa especializada na comercialização de equipamentos de informática e soluções de TI.
                Trabalhamos com atendimento personalizado, foco em demandas corporativas e compromisso com qualidade,
                agilidade e confiabilidade nas negociações.
              </p>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-16">
            <h3 className="text-3xl font-bold tracking-tight text-white">Áreas de atuação</h3>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                <h4 className="text-lg font-semibold text-white">Equipamentos</h4>
                <p className="mt-2 text-slate-300">Notebooks, desktops, monitores e periféricos.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                <h4 className="text-lg font-semibold text-white">Projetos corporativos</h4>
                <p className="mt-2 text-slate-300">Atendimento para empresas com necessidade de compra consultiva.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                <h4 className="text-lg font-semibold text-white">Mercado público</h4>
                <p className="mt-2 text-slate-300">Suporte comercial para processos e demandas do setor público.</p>
              </div>
            </div>
          </section>

          <section id="contato" className="bg-slate-950/60">
            <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2">
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-white">Contato</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Entre em contato para cotações, propostas comerciais e parcerias.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="space-y-3 text-slate-200">
                  <p><span className="font-semibold text-white">Empresa:</span> TTS Company LTDA</p>
                  <p><span className="font-semibold text-white">CNPJ:</span> 65.322.001/0001-06</p>
                  <p><span className="font-semibold text-white">E-mail:</span> comercial@ttscompany.com.br</p>
                  <p><span className="font-semibold text-white">WhatsApp:</span> 11 94385-1140</p>
                  <p><span className="font-semibold text-white">Atendimento:</span> Segunda a sexta, das 09h00 às 18h00</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
