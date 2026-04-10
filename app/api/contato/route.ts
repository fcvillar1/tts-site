import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await req.json();

    const nome = data.nome || "";
    const empresa = data.empresa || "";
    const cnpj = data.cnpj || "";
    const tipo = data.tipo || "";
    const telefone = data.telefone || "";
    const mensagem = data.mensagem || "";

    if (!nome || !empresa || !tipo || !telefone) {
      return NextResponse.json(
        { error: "Preencha os campos obrigatórios." },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: "Site TTS <contato@send.ttscompany.com.br>",
      to: "comercial@ttscompany.com.br",
      subject: "Novo atendimento solicitado pelo site",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Novo contato recebido pelo site</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Empresa:</strong> ${empresa}</p>
          <p><strong>CNPJ:</strong> ${cnpj}</p>
          <p><strong>Tipo de empresa:</strong> ${tipo}</p>
          <p><strong>Telefone / WhatsApp:</strong> ${telefone}</p>
          <p><strong>Mensagem:</strong><br/>${mensagem}</p>
        </div>
      `,
    });

    console.log("RESEND RESULT:", result);

    if (result.error) {
      return NextResponse.json(
        { error: result.error.message || "Resend recusou o envio do email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, data: result.data });
  } catch (error) {
    console.error("ERRO GERAL AO ENVIAR EMAIL:", error);

    return NextResponse.json(
      { error: "Erro ao enviar e-mail." },
      { status: 500 }
    );
  }
}