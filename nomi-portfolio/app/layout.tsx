import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nouman Arif — Full-Stack Developer & AI Enthusiast",
  description: "Full-Stack Developer specializing in AI, web development, WordPress, and digital content creation. Currently a 6th semester BSCS student at UET Gujranwala.",
  keywords: "Full-Stack Developer, AI, Web Development, React, Next.js, Python, FastAPI, WordPress, Nouman Arif",
  authors: [{ name: "Nouman Arif", url: "https://github.com/Nomix95" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
