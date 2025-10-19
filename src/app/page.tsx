// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      
      {/* 導覽列 (Navigation Bar) */}
      <header className="fixed top-0 w-full p-4 flex justify-between items-center bg-gray-800 shadow-lg z-10">
        <h1 className="text-3xl font-bold text-sky-400">LAZYNEWS<span className="text-white">AI</span></h1>
        <nav>
          <Link href="/subscribe" className="text-lg font-medium text-white hover:text-sky-400 transition duration-300 border-2 border-sky-400 px-4 py-2 rounded-lg">
            開始訂閱 (Subscribe Now)
          </Link>
        </nav>
      </header>

      {/* 英雄區塊 (Hero Section) */}
      <main className="flex flex-col items-center justify-center text-center mt-20">
        <h2 className="text-6xl font-extrabold mb-4">
          <span className="text-sky-400">AI</span> 驅動的自動化新聞總結
        </h2>
        <p className="text-2xl text-gray-400 mb-8 max-w-3xl">
          每天自動抓取新聞、AI 整理重點，並生成 <span className="font-mono text-amber-300">.md</span> 報告與 <span className="font-mono text-amber-300">.mp3</span> 語音檔。專屬於懶人的高效資訊擷取工具。
        </p>
        
        {/* 主要行動呼籲 (Main Call to Action) */}
        <Link href="/subscribe" className="bg-sky-500 hover:bg-sky-600 text-gray-900 font-bold py-3 px-8 rounded-full text-xl transition duration-300 transform hover:scale-105 shadow-2xl">
          查看訂閱方案 &rarr;
        </Link>
      </main>

      {/* 特色/價值區塊 (Features Section) - 僅作示意 */}
      <section className="mt-20 w-full max-w-5xl grid grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl border border-sky-600/30">
          <h3 className="text-xl font-semibold text-sky-400 mb-2">Serverless Efficiency</h3>
          <p className="text-gray-400">整個系統運行在 AWS Serverless 架構，保證高可用性與極低營運成本。</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl border border-sky-600/30">
          <h3 className="text-xl font-semibold text-sky-400 mb-2">MD & MP3 Output</h3>
          <p className="text-gray-400">結構化報告 (Markdown) 與語音摘要 (MP3)，滿足所有消費情境。</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl border border-sky-600/30">
          <h3 className="text-xl font-semibold text-sky-400 mb-2">Daily Automation</h3>
          <p className="text-gray-400">一旦設定，完全自動運行，無需人工干預的自動化新聞流。</p>
        </div>
      </section>

      <footer className="mt-20 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} lazynewsai. All rights reserved.
      </footer>
    </div>
  );
}