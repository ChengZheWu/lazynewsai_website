// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer"; // 1. 引入我們的新頁腳

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LazyNews AI",
  description: "AI 驅動的自動化新聞總結",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 2. 我們將共用的背景和文字顏色移到 <body> 標籤 */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        {/* 3. 我們用 flex-col 結構確保頁腳能被推到底部 */}
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <Footer /> {/* 4. 在 main 之後、body 結束前放置頁腳 */}
        </div>
      </body>
    </html>
  );
}
