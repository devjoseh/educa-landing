import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "EducaAvalia",
    description: "Transformando a educação para pessoas com deficiência",
    keywords: ["educa avalia", "educação inclusiva", "avaliação educacional", "deficiência", "educaavalia", "escolas acessíveis", "acessibilidade", "inclusão", "deficiência física", "melhor escolha", ""],
    metadataBase: new URL("https://educaavalia.com.br"), // Adicione esta linha
    openGraph: {
        title: "EducaAvalia",
        description: "Transformando a educação para pessoas com deficiência",
        url: "https://educaavalia.com.br",
        siteName: "EducaAvalia",
        images: [
            {
                url: "/banner.png",
                width: 1200,
                height: 630,
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "EducaAvalia",
        description: "Transformando a educação para pessoas com deficiência",
        images: ["https://educaavalia.com.br/banner.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
