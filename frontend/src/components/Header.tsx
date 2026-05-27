// ヘッダーコンポーネント
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-rose-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ロゴ */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">💍</span>
          <span className="text-xl font-bold text-rose-500">Liaison</span>
        </div>

        {/* ナビゲーション */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          <a href="#features" className="hover:text-rose-500 transition-colors">特徴</a>
          <a href="#how" className="hover:text-rose-500 transition-colors">使い方</a>
          <a href="#safe" className="hover:text-rose-500 transition-colors">安全性</a>
        </nav>

        {/* ボタン */}
        <div className="flex items-center gap-3">
          <button className="text-sm text-gray-500 hover:text-rose-500 transition-colors">
            ログイン
          </button>
          <button className="bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors">
            無料登録
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
