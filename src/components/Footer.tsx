// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    // 我們使用和您頁首 (Header) 相同的色系來保持風格一致
    <footer className="w-full bg-gray-800 text-gray-400 p-8 mt-20">
      <div className="max-w-5xl mx-auto text-center flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* 版權宣告 */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} lazynewsai. All rights reserved.
        </p>
        
        {/* 法規頁面連結 */}
        <nav className="flex space-x-6">
          <Link href="/terms" className="text-sm hover:text-white transition-colors">
            服務條款 (Terms of Service)
          </Link>
          <Link href="/privacy" className="text-sm hover:text-white transition-colors">
            隱私權政策 (Privacy Policy)
          </Link>
        </nav>
      </div>
    </footer>
  );
}