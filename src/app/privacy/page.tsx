// src/app/privacy/page.tsx
import Link from 'next/link';

// 共用相同的頁首
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHeader />
      {/* 我們使用 pt-32 (padding-top) 來避免內容被 fixed 的頁首擋住 */}
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-5xl font-extrabold mb-8 text-white">隱私權政策 (Privacy Policy)</h1>
        
        <div className="space-y-6 text-gray-300 text-lg text-left">
          <p><strong>最後更新日期：2025年10月21日</strong></p>
          
          <p>
            歡迎您使用 `lazynewsai`（以下簡稱「本服務」）。本服務係由 [請填入您的公司/團隊名稱]（以下簡稱「我們」）所開發與營運。我們非常重視您的個人資料與隱私權，並承諾依據相關法律（包含但不限於中華民國「個人資料保護法」）之規定，保護您的個人資料及隱私。請您詳細閱讀以下隱私權保護政策（以下簡稱「本政策」）。
          </p>

          <h2 className="text-3xl font-semibold text-sky-400 mt-8 mb-4">一、適用範圍</h2>
          <p>
            本政策適用於您在使用本服務網站 (`lazynewsai.com`) 及訂閱、接收我們透過電子郵件發送的 AI 新聞報告時，所涉及的個人資料蒐集、處理及利用行為。
          </p>
          <p>
            本政策不適用於非我們所擁有或控制的第三方網站或服務。若您透過本服務連結至第三方網站，應另行參閱該網站之隱私權政策。
          </p>

          <h2 className="text-3xl font-semibold text-sky-400 mt-8 mb-4">二、個人資料之定義</h2>
          <p>
            本政策所稱之「個人資料」，係指得以直接或間接方式識別您個人身份的資料，包括但不限於：電子郵件位址 (Email)、您所選擇的市場偏好 (Market Preference)。
          </p>

          <h2 className="text-3xl font-semibold text-sky-400 mt-8 mb-4">三、個人資料之蒐集、處理及利用</h2>
          <p>
            1. **蒐集方式與目的**：
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>**主動提供**：當您在本服務網站上提交訂閱表單時，我們會蒐集您所提供的「電子郵件位址」及「市場偏好」。蒐集目的是為了能夠依據您的選擇，每日向您指定的 Email 發送相關市場的 AI 新聞報告。</li>
            <li>**自動記錄**：當您瀏覽本服務網站時，我們的伺服器可能會自動記錄您的裝置資訊（如 IP 位址、瀏覽器類型）、Cookie 紀錄與瀏覽行為資料。這些資訊主要用於內部統計分析、改善服務品質及網站效能，不會與您的個人身份直接連結。</li>
          </ul>
          <p>
            2. **利用期間與地區**：除法律另有規定外，我們將在您持續訂閱本服務期間及服務提供地區（主要為 AWS 雲端伺服器所在地）內利用您的個人資料。
          </p>
          <p>
            3. **利用方式**：您提供的個人資料將僅用於：
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>發送您訂閱的 AI 新聞報告電子郵件。</li>
            <li>寄送服務相關之重要通知（例如本政策或服務條款更新）。</li>
            <li>進行內部數據分析以優化服務內容（將以去識別化或匿名化方式處理）。</li>
          </ul>
          <p>
            4. **資料分享與揭露**：**我們承諾絕不**會將您的個人資料（特別是 Email）出售、出租、交換或以任何形式揭露給無關之第三方進行行銷。但在下列情況下，我們可能會在必要範圍內揭露您的個人資料：
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>取得您的明確同意。</li>
            <li>依據法律規定、法院命令或政府機關之合法要求。</li>
            <li>為維護本服務系統之正常運作及安全，或保護我們或其他使用者之合法權益所必要時。</li>
          </ul>

          <h2 className="text-3xl font-semibold text-sky-400 mt-8 mb-4">四、您對個人資料的權利</h2>
          <p>
            依據個人資料保護法之規定，您就我們所保有的您的個人資料，得行使以下權利：
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>查詢或請求閱覽。</li>
            <li>請求製給複製本。</li>
            <li>請求補充或更正。</li>
            <li>請求停止蒐集、處理或利用。</li>
            <li>請求刪除。</li>
          </ul>
          <p>
            若您欲行使上述權利，或有任何疑問，請透過本政策末尾提供的聯絡信箱與我們聯繫。我們將在確認您的身分後，儘速處理您的請求。
          </p>
          <p>
            **取消訂閱 (Unsubscribe)**：您隨時可以透過我們發送的每一封 AI 報告電子郵件底部的「取消訂閱」連結，來停止接收我們的郵件。
          </p>

          <h2 className="text-3xl font-semibold text-sky-400 mt-8 mb-4">五、Cookie 之使用</h2>
          <p>
            本服務網站可能使用 Cookie 技術，以記錄您的瀏覽偏好、提升使用體驗，並進行流量分析。Cookie 是伺服器傳送至您瀏覽器並儲存於您裝置中的小型文字檔。您可以隨時透過您的瀏覽器設定，管理或拒絕 Cookie 的使用，但部分網站功能可能會因此無法正常運作。
          </p>

          <h2 className="text-3xl font-semibold text-sky-400 mt-8 mb-4">六、資料之保護</h2>
          <p>
            我們致力於保護您的個人資料安全。本服務建立於 AWS (Amazon Web Services) 雲端平台之上，我們採用業界標準的技術與程序（例如傳輸層安全性協定 TLS/SSL 加密、資料庫靜態加密、存取權限控管等）來保護您的資料，防止未經授權的存取、洩露、竄改或毀損。
          </p>

          <h2 className="text-3xl font-semibold text-sky-400 mt-8 mb-4">七、隱私權政策修改</h2>
          <p>
            因應法規變更、技術發展或營運需求，我們將保留隨時修訂本政策之權利。任何修訂將公布於本服務網站上，並自公布時起生效，恕不另行個別通知。建議您定期查閱本政策，以確保了解最新內容。若您在修訂後繼續使用本服務，將視為您已同意修訂後之政策。
          </p>

          <h2 className="text-3xl font-semibold text-sky-400 mt-8 mb-4">八、聯絡我們</h2>
          <p>
            若您對於本隱私權政策或個人資料相關事項有任何疑問或建議，歡迎透過以下方式與我們聯繫：
            <br />
            andywu@lazynewsai.com
          </p>
        </div>
      </div>
    </>
  );
}