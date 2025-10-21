// src/app/subscribe/page.tsx
'use client'; // 因為需要處理表單輸入和狀態，所以必須是 Client Component

import Link from 'next/link';
import { useState, FormEvent } from 'react';

// 整個訂閱頁面
export default function SubscribePage() {
  // 使用 React State 來管理表單的輸入值
  const [email, setEmail] = useState('');
  const [market, setMarket] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // 處理市場核取方塊的變動
  const handleMarketChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setMarket((prev) => [...prev, value]);
    } else {
      setMarket((prev) => prev.filter((item) => item !== value));
    }
  };

  // 處理表單提交的函式
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    setIsError(false);

  // 從環境變數讀取 API URL 和金鑰
  const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!apiEndpoint || !apiKey) {
    console.error("API 端點或金鑰未設定！");
    setMessage("系統設定錯誤，請稍後再試。");
    setIsError(true);
    setIsSubmitting(false);
    return;
  }

    try {
      // 使用 fetch API 向我們的後端發送 POST 請求
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify({
          email: email,
          market: market,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        // 如果 API 回傳錯誤狀態 (例如 400, 500)
        throw new Error(result.message || '發生未知的錯誤');
      }

      // 訂閱成功
      setMessage(`感謝訂閱！確認信已寄至 ${email}`);
      setEmail('');
      setMarket([]);
      // 取消所有已勾選的核取方塊
      document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        (checkbox as HTMLInputElement).checked = false;
      });

    } catch (error) {
      // 處理網路錯誤或 API 回傳的錯誤
      console.error('訂閱失敗:', error);
      setIsError(true);
      setMessage((error as Error).message || '無法連接到伺服器，請稍後再試。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      {/* 導覽列 */}
      <header className="fixed top-0 w-full p-4 flex justify-between items-center bg-gray-800 shadow-lg z-10">
        <h1 className="text-3xl font-bold text-sky-400">LAZYNEWS<span className="text-white">AI</span></h1>
        <nav>
          <Link href="/" className="text-lg font-medium text-white hover:text-sky-400 transition duration-300 px-4 py-2 rounded-lg">
            回首頁 (Home)
          </Link>
        </nav>
      </header>

      {/* 訂閱區塊 */}
      <main className="flex flex-col items-center justify-center text-center mt-20">
        <h2 className="text-5xl font-extrabold mb-4 text-white">
          訂閱您的 <span className="text-amber-300">AI 報告</span>
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl">
          訂閱後，每日 AI 報告連結將透過電子報發送到您的信箱。
        </p>

        <div className="bg-gray-800 p-10 rounded-xl shadow-2xl w-full max-w-lg">
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">Email 地址</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="輸入您的 Email 地址"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>
            <div>
              <label className="block text-md font-medium text-gray-300 text-left mb-3">關注的市場 (可複選)</label>
              <div className="space-y-2 text-left">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" value="TW" checked={market.includes('TW')} onChange={handleMarketChange} className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-sky-500 focus:ring-sky-500" />
                  <span className="text-gray-300">台灣 (TW)</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" value="US" checked={market.includes('US')} onChange={handleMarketChange} className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-sky-500 focus:ring-sky-500" />
                  <span className="text-gray-300">美國 (US)</span>
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-lg text-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '訂閱中...' : '立即訂閱'}
              </button>
            </div>
          </form>
          {/* 根據成功或失敗顯示不同顏色的訊息 */}
          {message && <p className={`mt-6 text-lg ${isError ? 'text-red-400' : 'text-green-400'}`}>{message}</p>}
        </div>
      </main>
    </div>
  );
}