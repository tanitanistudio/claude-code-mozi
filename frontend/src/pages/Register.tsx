import { useState } from 'react'
import { Link } from 'react-router-dom'

// 会員登録ページ
const Register = () => {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    email: '',
    password: '',
    nickname: '',
    gender: '',
    age: '',
    prefecture: '',
  })

  // 入力値の更新
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        {/* ロゴ */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="text-3xl">💍</span>
            <span className="text-2xl font-bold text-rose-500">Liaison</span>
          </Link>
          <p className="text-gray-500 text-sm mt-2">無料会員登録</p>
        </div>

        {/* ステップインジケーター */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                step >= s ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                {s}
              </div>
              {s < 2 && <div className={`w-12 h-0.5 ${step > s ? 'bg-rose-400' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">

          {/* ステップ1：アカウント情報 */}
          {step === 1 && (
            <>
              <h2 className="text-xl font-bold text-gray-900 mb-6">アカウント情報</h2>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    パスワード
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="8文字以上"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition"
                  />
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!form.email || !form.password}
                  className="w-full bg-rose-500 hover:bg-rose-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold py-3 rounded-xl transition-colors mt-2"
                >
                  次へ進む
                </button>
              </div>
            </>
          )}

          {/* ステップ2：プロフィール */}
          {step === 2 && (
            <>
              <h2 className="text-xl font-bold text-gray-900 mb-6">プロフィール設定</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ニックネーム
                  </label>
                  <input
                    type="text"
                    name="nickname"
                    value={form.nickname}
                    onChange={handleChange}
                    placeholder="表示名（本名不要）"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    性別
                  </label>
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition bg-white"
                  >
                    <option value="">選択してください</option>
                    <option value="male">男性</option>
                    <option value="female">女性</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    年齢
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    placeholder="例：35"
                    min="18"
                    max="80"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    お住まいの都道府県
                  </label>
                  <select
                    name="prefecture"
                    value={form.prefecture}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition bg-white"
                  >
                    <option value="">選択してください</option>
                    {['北海道','青森県','岩手県','宮城県','秋田県','山形県','福島県',
                      '茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県',
                      '新潟県','富山県','石川県','福井県','山梨県','長野県','岐阜県',
                      '静岡県','愛知県','三重県','滋賀県','京都府','大阪府','兵庫県',
                      '奈良県','和歌山県','鳥取県','島根県','岡山県','広島県','山口県',
                      '徳島県','香川県','愛媛県','高知県','福岡県','佐賀県','長崎県',
                      '熊本県','大分県','宮崎県','鹿児島県','沖縄県'].map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-3 mt-2">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 border border-gray-200 hover:border-gray-300 text-gray-600 font-medium py-3 rounded-xl transition-colors"
                  >
                    戻る
                  </button>
                  <button
                    disabled={!form.nickname || !form.gender || !form.age || !form.prefecture}
                    className="flex-1 bg-rose-500 hover:bg-rose-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold py-3 rounded-xl transition-colors"
                  >
                    登録する
                  </button>
                </div>
              </div>
            </>
          )}

          {/* 利用規約 */}
          <p className="text-xs text-gray-400 text-center mt-6">
            登録することで
            <a href="#" className="text-rose-400 hover:underline">利用規約</a>
            および
            <a href="#" className="text-rose-400 hover:underline">プライバシーポリシー</a>
            に同意したものとみなされます。
          </p>
        </div>

        {/* ログインへのリンク */}
        <p className="text-center text-sm text-gray-500 mt-6">
          すでにアカウントをお持ちの方は
          <Link to="/login" className="text-rose-500 font-medium hover:underline ml-1">
            ログイン
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
