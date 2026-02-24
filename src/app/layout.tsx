import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Fonte moderna e limpa
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jhonatha Nunes | Software Developer & Designer",
  description: "Portfólio profissional focado em automação, clareza e eficiência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#050505]`}>
        {children}
      </body>
    </html>
  );
}