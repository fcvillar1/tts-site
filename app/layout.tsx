import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TTS Company",
  description: "Soluções em informática para empresas, revendas e órgãos públicos",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}