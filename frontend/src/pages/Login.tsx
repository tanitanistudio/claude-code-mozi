import { useState } from 'react'
import { Link } from 'react-router-dom'

// ログインページ
const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })

  // 入力値の更新
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* ロゴ */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="text-3xl">💍</span>
            <span className="text-2xl font-bold text-rose-500">Liaison</span>
          </Link>
          <p className="text-gray-500 text-sm mt-2">アカウントにログイン</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">ログイン</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                メールアドレス
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  パスワード
                </label>
                <a href="#" className="text-xs text-rose-400 hover:underline">
                  パスワードを忘れた方
                </a>
              </div>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="パスワードを入力"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition"
              />
            </div>

            <button
              disabled={!form.email || !form.password}
              className="w-full bg-rose-500 hover:bg-rose-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold py-3 rounded-xl transition-colors mt-2"
            >
              ログイン
            </button>
          </div>

          {/* 区切り線 */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-400">または</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* SNSログイン */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 border border-gray-200 hover:border-gray-300 rounded-xl py-3 text-sm text-gray-600 transition-colors">
              <span className="text-lg">G</span>
              Googleでログイン
            </button>
            <button className="w-full flex items-center justify-center gap-3 border border-gray-200 hover:border-gray-300 rounded-xl py-3 text-sm text-gray-600 transition-colors">
              <span className="text-lg">🐦</span>
              X（Twitter）でログイン
            </button>
          </div>

          {/* 利用規約 */}
          <p className="text-xs text-gray-400 text-center mt-6">
            ログインすることで
            <a href="#" className="text-rose-400 hover:underline">利用規約</a>
            に同意したものとみなされます。
          </p>
        </div>

        {/* 会員登録へのリンク */}
        <p className="text-center text-sm text-gray-500 mt-6">
          まだ会員登録がお済みでない方は
          <Link to="/register" className="text-rose-500 font-medium hover:underline ml-1">
            無料で登録
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
