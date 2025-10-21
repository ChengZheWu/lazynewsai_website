// src/app/terms/page.tsx
import Link from 'next/link';

// 共用一個簡單的頁首，保持網站風格一致
const LegalHeader = () => (
  <header className="fixed top-0 w-full p-4 flex justify-between items-center bg-gray-800 shadow-lg z-10">
    <Link href="/" className="text-3xl font-bold text-sky-400">LAZYNEWS<span className="text-white">AI</span></Link>
    <nav>
      <Link href="/subscribe" className="text-lg font-medium text-white hover:text-sky-400 transition duration-300 px-4 py-2 rounded-lg">
        訂閱 (Subscribe)
      </Link>
    </nav>
  </header>
);

export default function TermsOfServicePage() {
  return (
    <>
      <LegalHeader />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-5xl font-extrabold mb-8 text-white">服務條款 (Terms of Service)</h1>
        
        <div className="space-y-6 text-gray-300 text-lg text-left">
          <p><strong>最後更新日期：2025年10月21日</strong></p>
          
          <p>
            歡迎您使用 LazyNewsAI電子報（以下簡稱「本服務」）。本服務係由 LazyNewsAI（以下簡稱「我們」）所開發與營運。
          </p>
          <p>
            為確保我們與訂閱者（以下簡稱「您」或「訂閱者」）之權益，爰訂定本服務條款（以下簡稱「本條款」）。在您註冊或使用本服務前，請詳細閱讀本條款之內容。
          </p>
          <p>
            當您使用或註冊本服務時，即代表您已經閱讀、了解並同意接受本條款的所有內容。您同意我們有權隨時修訂本條款，修訂後之內容將公布於本網站，自公告時起生效。如您在修訂後繼續使用本服務，即視為您已同意修訂後之條款。
          </p>

          <h2 className="text-3xl font-semibold text-sky-400 mt-8 mb-4">一、服務內容</h2>
          <p>
            本服務是一個自動化新聞彙整平台。我們使用 AI 技術自動抓取、整理公開的新聞資訊，並生成新聞摘要報告（包含 .md 檔案與 .mp3 語音檔），每日透過電子郵件發送給訂閱者。
          </p>
          <p>
            我們保留隨時新增、修改或終止本服務任何功能的權利，恕不另行通知。
          </p>

          <h2 className="text-3xl font-semibold text-sky-400 mt-8 mb-4">二、訂閱者與註冊</h2>
          <p>
            1. 當您訂閱本服務時，您應提供正確且即時的電子郵件位址 (Email) 及市場偏好 (Market) 資料。
          </p>
          <p>
            2. 您保證您所提交的電子郵件位址是您合法擁有且有權使用的。
          </p>
          <p>
            3. 本服務目前採用無密碼訂閱制，您的電子郵件位址即為您的主要識別符。
          </p>
          <p>
            4. 關於我們如何處理您的個人資料，請參閱我們的<Link href="/privacy" className="text-sky-400 hover:underline">《隱私權政策》</Link>。該政策亦構成本條款的一部分。
          </p>

          <h2 className="text-3xl font-semibold text-sky-400 mt-8 mb-4">三、付款 (未來適用)</h2>
          <p>
            本服務目前提供免費訂閱。我們保留未來針對部分或全部服務內容導入付費方案的權利。任何付費方案的詳情、費用和付款條件，將於本網站另行公布。
          </p>

          <h2 className="text-3xl font-semibold text-sky-400 mt-8 mb-4">四、智慧財產權</h2>
          <p>
            1. 本服務之軟體、程式、網站架構、介面設計及所有內容，包括但不限於 LOGO、商標、文字等，其智慧財產權均屬我們所有。
          </p>
          <p>
            2. 本服務所產生之 AI 摘要報告（.md 及 .mp3 檔案），其智慧財產權亦屬我們所有。我們授權您基於「個人非商業用途」使用這些報告。
          </p>
          <p>
            3. 您不得使用、修改、重製、公開傳輸、改作、散布、發行或公開發表本服務或其產生的內容，亦不得對本服務進行還原工程（reverse engineering）。
          </p>
          <p>
            4. 本服務所彙整之原始新聞內容，其版權歸原新聞發布機構或作者所有。
          </p>

          <h2 className="text-3xl font-semibold text-sky-400 mt-8 mb-4">五、使用規範與責任</h2>
          <p>
            您同意並保證絕不利用本服務從事違法或損害他人權益之行為，包括但不限於：
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>提交不實的 Email 資料或冒用他人名義訂閱。</li>
            <li>嘗試破解、攻擊或癱瘓本服務的後端系統 (API、Lambda、資料庫等)。</li>
            <li>將本服務提供的 AI 報告用於任何非法、誹謗、侵權或商業營利之目的。</li>
            <li>違反本條款或<Link href="/privacy" className="text-sky-400 hover:underline">《隱私權政策》</Link>的任何約定。</li>
          </ul>

          <h2 className="text-3xl font-semibold text-sky-400 mt-8 mb-4">六、免責聲明</h2>
          <p>
            1. **內容準確性**：本服務提供的所有 AI 生成內容僅供資訊參考，我們不對其準確性、完整性、即時性或可靠性作出任何明示或暗示的保證。AI 摘要可能存在錯誤或疏漏，您不應將其視為專業的財務、法律或投資建議。
          </p>
          <p>
            2. **服務狀態**：我們係「按原樣」(As-is) 及「按提供狀況」(As-available) 提供本服務。我們不保證服務絕無錯誤或絕不會中斷。
          </p>
          <p>
            3. **第三方連結**：本服務的報告中可能包含前往第三方網站的連結。我們對任何第三方網站的內容、條款或隱私權政策概不負責。
          </p>

          <h2 className="text-3xl font-semibold text-sky-400 mt-8 mb-4">七、服務終止</h2>
          <p>
            若您違反本條款之任一約定，我們有權不經事前通知，隨時暫停或永久終止向您提供本服務。
          </p>

          <h2 className="text-3xl font-semibold text-sky-400 mt-8 mb-4">八、準據法與管轄法院</h2>
          <p>
            本條款之解釋與適用，以中華民國法令為準據法。因本服務所生之任何爭議，雙方同意以台灣台北地方法院為第一審管轄法院。
          </p>
          
          <h2 className="text-3xl font-semibold text-sky-400 mt-8 mb-4">九、聯絡我們</h2>
          <p>
            若您對於本條款有任何指教或疑義，請洽詢我們的客服信箱：
            <br />
            andy_wu@lazynewsai.com
          </p>
        </div>
      </div>
    </>
  );
}