"use client";

import Link from "next/link";
import { useState } from "react";


export default function ContatoPage() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    cnpj: "",
    tipo: "",
    telefone: "",
    mensagem: "",
  });

  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSucesso(false);
    setErro("");

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Falha ao enviar formulário");
      }

      setSucesso(true);
      setForm({
        nome: "",
        empresa: "",
        cnpj: "",
        tipo: "",
        telefone: "",
        mensagem: "",
      });
    } catch {
      setErro("Não foi possível enviar sua mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
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
      <Link href="/" className="block">
        <img
          src="/logo-tts.png"
          alt="Logo TTS Company"
          className="h-32 w-32 rounded-2xl object-contain shadow-lg md:h-36 md:w-36"
        />
      </Link>

      <Link href="/" className="block">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            TTS Company
          </h1>
          <p className="text-sm text-slate-300">
            Soluções em informática para empresas, revendas e órgãos públicos
          </p>
        </div>
      </Link>
    </div>

    <div className="flex items-center gap-3">
      <Link
        href="/"
        className="rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-white/10"
      >
        Início
      </Link>

      <Link
        href="/empresa"
        className="rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-white/10"
      >
        A Empresa
      </Link>

      <Link
        href="/contato"
        className="rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-white/15"
      >
        Contato
      </Link>
    </div>
  </div>
</header>

        <main>
          <section className="mx-auto max-w-6xl px-6 py-20">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Atendimento comercial
              </p>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Solicitar atendimento
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Preencha o formulário abaixo para solicitar contato da nossa equipe
                comercial. Atendemos empresas privadas, revendas e órgãos públicos
                com foco em agilidade, confiança e atendimento consultivo.
              </p>

              {sucesso && (
                <div className="mt-8 rounded-2xl border border-green-400/20 bg-green-500/10 px-4 py-3 text-green-300">
                  Mensagem enviada com sucesso! Em breve nossa equipe entrará em contato.
                </div>
              )}

              {erro && (
                <div className="mt-8 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-red-300">
                  {erro}
                </div>
              )}

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="nome"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      Nome
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      value={form.nome}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="empresa"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      value={form.empresa}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cnpj"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      CNPJ
                    </label>
                    <input
                      id="cnpj"
                      name="cnpj"
                      type="text"
                      value={form.cnpj}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="tipo"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      Perfil de atendimento
                    </label>
                    <select
                      id="tipo"
                      name="tipo"
                      value={form.tipo}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none"
                      required
                    >
                      <option value="" disabled className="text-gray-500">
                        Selecione o perfil de atendimento
                      </option>
                      <option value="governo" className="text-black">
                        Órgão Público
                      </option>
                      <option value="privada" className="text-black">
                        Empresa Privada / Corporativo
                      </option>
                      <option value="revenda" className="text-black">
                        Revendedor / Canal
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="telefone"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="text"
                      value={form.telefone}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensagem"
                      className="mb-2 block text-sm font-medium text-slate-200"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={form.mensagem}
                      onChange={handleChange}
                      rows={5}
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                    />
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg transition hover:opacity-90 disabled:opacity-60"
                    >
                      {loading ? "Enviando..." : "Enviar"}
                    </button>

                    <Link
                      href="/"
                      className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
                    >
                      Cancelar
                    </Link>
                  </div>
                </form>
              </div>

              

                <div className="mt-4 space-y-3 text-slate-200">
                  
                  <p>
                    <span className="font-semibold text-white">Atendimento:</span>{" "}
                    Segunda a sexta, das 09h00 às 18h00
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
  );
}