import { Link } from 'react-router-dom'

// ヘッダーコンポーネント
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* ロゴ */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="text-xl">💍</span>
          <span className="text-lg font-bold text-rose-500">Liaison</span>
        </Link>

        {/* ナビゲーション */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          <a href="#features" className="hover:text-rose-500 transition-colors">特徴</a>
          <a href="#how" className="hover:text-rose-500 transition-colors">使い方</a>
          <a href="#safe" className="hover:text-rose-500 transition-colors">安全性</a>
        </nav>

        {/* ボタン */}
        <div className="flex items-center gap-3">
          <Link to="/login">
            <button className="text-sm text-gray-500 hover:text-rose-500 transition-colors px-3 py-2">
              ログイン
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
              無料登録
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
