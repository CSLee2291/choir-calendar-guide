// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Calendar, Clock, Smartphone, Check, Info, ChevronDown, ChevronUp } from 'lucide-react';

export default function Home() {
  const [activeStep, setActiveStep] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleStep = (stepId) => {
    setActiveStep(activeStep === stepId ? null : stepId);
  };

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const steps = [
    {
      id: 1,
      title: "前往合唱團網站",
      description: "在瀏覽器中輸入網址並訪問合唱團的專用網站",
      instruction: "開啟您的網頁瀏覽器，輸入網址：https://sites.google.com/alumni.scu.edu.tw/choir2/活動",
      icon: <Calendar className="w-8 h-8" />,
      imageUrl: "/step1.jpg",
    },
    {
      id: 2,
      title: "查看活動行事曆",
      description: "點擊「活動」選單，顯示合唱團的Google行事曆",
      instruction: "在網站頁面上方導航欄中找到並點擊「活動」選項，系統將顯示合唱團的Google行事曆",
      icon: <Clock className="w-8 h-8" />,
      imageUrl: "/step2.jpg",
    },
    {
      id: 3,
      title: "點擊添加行事曆",
      description: "在行事曆頁面右下角尋找並點擊「+」按鈕",
      instruction: "在行事曆頁面的右下角，您將看到一個「+」按鈕（如圖中紅色圈出部分所示），點擊此按鈕",
      icon: <Check className="w-8 h-8" />,
      imageUrl: "/step3.jpg",
    },
    {
      id: 4,
      title: "確認添加到個人行事曆",
      description: "按照提示確認將合唱團行事曆添加到您的Google行事曆",
      instruction: "點擊「+」按鈕後，系統會彈出確認視窗，請點擊「添加」或「確認」按鈕完成操作",
      icon: <Check className="w-8 h-8" />,
      imageUrl: "/step4.jpg",
    },
  ];

  const platforms = [
    {
      id: "ios",
      title: "iOS 設備上的操作步驟",
      steps: [
        "打開 iPhone 或 iPad 上的「行事曆」應用",
        "點擊畫面底部的「行事曆」選項",
        "向下滾動至「行事曆」部分，可以看到您已訂閱的行事曆",
        "確認合唱團行事曆已列出，並且顯示為彩色（不是灰色）以確保已啟用",
        "若沒有顯示，請先確保您已在網頁中完成上方步驟，並且使用相同的Google帳號登入行事曆應用",
        "可以點擊行事曆名稱旁的「i」按鈕管理通知設定和顯示顏色"
      ]
    },
    {
      id: "android",
      title: "Android 設備上的操作步驟",
      steps: [
        "打開 Android 設備上的「Google 行事曆」應用",
        "點擊左上角的三橫線圖示（≡）打開選單",
        "滾動至「行事曆」部分，檢查合唱團行事曆是否已顯示",
        "確保合唱團行事曆旁邊的方框已勾選，表示已啟用顯示",
        "若沒有顯示，請確保您已登入與網頁操作相同的Google帳號",
        "可以點擊行事曆名稱旁的三點選單（⋮）來管理行事曆顯示顏色和通知設定"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
      <Head>
        <title>合唱團行事曆整合指南</title>
        <meta name="description" content="將合唱團行事曆加入您的個人Google行事曆的簡易指南" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-800 mb-6">合唱團行事曆整合指南</h1>
          <p className="text-xl text-gray-700">簡單幾步，將合唱團的所有活動自動同步到您的個人行事曆</p>
        </div>

        {/* 什麼是Google行事曆 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center mb-6">
            <Calendar className="w-10 h-10 text-purple-600 mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">什麼是Google行事曆？</h2>
          </div>
          
          <p className="text-gray-700 mb-4">
            Google行事曆是Google提供的免費時間管理和日程安排網絡應用程序。它允許用戶創建和編輯活動，並與他人共享日程安排。
          </p>
          
          <div className="mt-6 bg-purple-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-700 mb-4">加入Google行事曆的好處</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "自動更新", desc: "合唱團的活動變更時，您的行事曆會自動更新" },
                { title: "活動提醒", desc: "設置練唱時間和演出的提前通知" },
                { title: "跨裝置同步", desc: "在手機、平板和電腦上隨時查看日程" },
                { title: "無需手動記錄", desc: "避免手動輸入日期和時間的麻煩" },
                { title: "整合所有活動", desc: "將合唱團活動與您的個人和工作安排一起查看" },
                { title: "共享功能", desc: "可以輕鬆與家人共享合唱團的重要活動日期" },
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* 步驟指南 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">將合唱團行事曆加入您的Google行事曆</h2>
          
          <div className="space-y-6">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: step.id * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div 
                  className={`p-6 cursor-pointer ${activeStep === step.id ? 'bg-purple-100' : ''}`}
                  onClick={() => toggleStep(step.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-700">
                        <span className="font-bold text-lg">{step.id}</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <div className="text-purple-500">
                      {activeStep === step.id ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </div>
                  </div>
                </div>
                
                {activeStep === step.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-6">
                      <div className="rounded-lg bg-gray-50 p-4 mb-4">
                        <p className="text-gray-700">{step.instruction}</p>
                      </div>
                      <div className="mt-4 flex justify-center">
                        <div className="bg-gray-200 rounded-lg overflow-hidden w-full max-w-lg h-64 flex items-center justify-center">
                          <p className="text-gray-500">[此處會顯示步驟 {step.id} 的截圖指南]</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* 平台特定指南 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">不同設備上的操作指南</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, x: platform.id === "ios" ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div 
                  className={`p-6 cursor-pointer ${activeAccordion === platform.id ? 'bg-blue-50' : ''}`}
                  onClick={() => toggleAccordion(platform.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Smartphone className="w-8 h-8 text-blue-500 mr-3" />
                      <h3 className="text-xl font-bold text-gray-800">{platform.title}</h3>
                    </div>
                    <div className="text-blue-500">
                      {activeAccordion === platform.id ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </div>
                  </div>
                </div>
                
                {activeAccordion === platform.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <ol className="list-decimal pl-5 space-y-3">
                        {platform.steps.map((step, idx) => (
                          <li key={idx} className="text-gray-700">{step}</li>
                        ))}
                      </ol>
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <div className="flex">
                          <Info className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                          <p className="text-blue-800 text-sm">
                            {platform.id === "ios" 
                              ? "請確保您的iOS設備已經與您的Google帳號同步，並且已開啟行事曆同步功能。可以在「設定」→「行事曆」→「帳號」中檢查。" 
                              : "確保您已在Android設備上登入與網頁相同的Google帳號，並在「設定」→「帳號」中啟用行事曆同步。"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* 常見問題 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">常見問題解答</h2>
          
          <div className="space-y-6">
            {[
              {
                q: "我已添加日曆，但看不到合唱團的活動怎麼辦？",
                a: "請確認您使用的是同一個Google帳號。另外，檢查您的行事曆應用中該行事曆是否被設置為可見（已勾選）。如果問題仍然存在，請嘗試刷新行事曆或重新訂閱。"
              },
              {
                q: "如何設置合唱團活動的提醒通知？",
                a: "在Google行事曆應用中，可以點擊特定活動來查看詳情，然後點擊「編輯通知」或「添加通知」來設置提醒時間。您也可以在行事曆設置中為整個合唱團行事曆設置默認通知。"
              },
              {
                q: "如何在不同裝置間同步行事曆？",
                a: "只要在所有裝置上使用相同的Google帳號登入，並確保行事曆同步功能已開啟，您的合唱團行事曆將自動同步到所有裝置。"
              },
              {
                q: "如何取消訂閱合唱團行事曆？",
                a: "在Google行事曆網頁版中，點擊左側行事曆列表中合唱團行事曆旁的三點選單，選擇「設置與共享」，然後滾動到底部找到「取消訂閱」選項。在行動裝置上，長按行事曆名稱，然後選擇取消訂閱或移除選項。"
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-5">
                <h3 className="text-lg font-medium text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 聯繫支援 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center"
        >
          <p className="text-gray-700 mb-4">
            如果您在操作過程中遇到任何問題，請聯繫合唱團技術支援：
          </p>
          <p className="text-purple-700 font-medium">choir2@alumni.scu.edu.tw</p>
        </motion.div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>© 2025 合唱團行事曆整合系統 | 使用Next.js開發</p>
        </div>
      </footer>
    </div>
  );
}
