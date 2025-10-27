import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "./globals.css";

export const metadata: Metadata = {
  title: "IntelliWallet - Planilha Financeira Gamificada",
  description: "Transforme sua gestão financeira em uma experiência gamificada. Adicione usuários, participe de desafios mensais e melhore sua economia de forma divertida.",
  keywords: "finanças, gamificação, planilha financeira, desafios, economia pessoal",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="pt">
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
