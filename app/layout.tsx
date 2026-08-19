import type { Metadata } from "next";
import { Inter, Figtree, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Plataforma de Alta Performance",
  description: "Desenvolvimento de software e landing pages modernas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${figtree.variable} ${ibmPlexMono.variable} antialiased bg-[#0e111b] text-white selection:bg-[#625fff] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}