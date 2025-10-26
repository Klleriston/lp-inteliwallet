import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IntelliWallet - Planilha Financeira Gamificada",
  description: "Transforme sua gestão financeira em uma experiência gamificada. Adicione usuários, participe de desafios mensais e melhore sua economia de forma divertida.",
  keywords: "finanças, gamificação, planilha financeira, desafios, economia pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
