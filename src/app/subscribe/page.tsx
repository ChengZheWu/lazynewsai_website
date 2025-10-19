// src/app/subscribe/page.tsx
import Link from 'next/link';

export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      
      {/* 導覽列 (Navigation Bar) */}
      <header className="fixed top-0 w-full p-4 flex justify-between items-center bg-gray-800 shadow-lg z-10">
        <h1 className="text-3xl font-bold text-sky-400">LAZYNEWS<span className="text-white">AI</span></h1>
        <nav>
          <Link href="/" className="text-lg font-medium text-white hover:text-sky-400 transition duration-300 px-4 py-2 rounded-lg">
            回首頁 (Home)
          </Link>
        </nav>
      </header>

      {/* 訂閱區塊 (Subscription Section) */}
      <main className="flex flex-col items-center justify-center text-center mt-20">
        <h2 className="text-5xl font-extrabold mb-4 text-white">
          選擇你的 <span className="text-amber-300">AI 報告</span> 訂閱方案
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl">
          訂閱後，每日 AI 報告連結將透過電子報發送到您的信箱。
        </p>

        {/* 訂閱表單 Placeholder */}
        <div className="bg-gray-800 p-10 rounded-xl shadow-2xl w-full max-w-lg">
          <p className="text-xl text-sky-400 mb-6">
            🛠️ <span className="font-mono">Subscription System</span> 正在建構中...
          </p>
          <div className="space-y-4">
            <input 
              type="email" 
              placeholder="輸入你的 Email 地址" 
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-sky-500 focus:border-sky-500"
              disabled
            />
            <button
              className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 rounded-lg text-lg opacity-50 cursor-not-allowed"
              disabled
            >
              即將上線！(Coming Soon)
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            我們將會在這裡整合 <span className="font-mono">AWS Cognito</span> 認證與 <span className="font-mono">Stripe</span> 金流。
          </p>
        </div>
      </main>
    </div>
  );
}