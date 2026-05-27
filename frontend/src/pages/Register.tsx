import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'

// 会員登録ページ
const Register = () => {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ email: '', password: '', nickname: '', gender: '', age: '', prefecture: '' })
  const { register, isLoading, error, clearError, token } = useAuthStore()
  const navigate = useNavigate()

  // すでにログイン済みならマイページへ
  useEffect(() => {
    if (token) navigate('/mypage', { replace: true })
  }, [token, navigate])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    clearError()
  }

  const handleSubmit = async () => {
    try {
      await register(form)
      navigate('/mypage')
    } catch {
      // エラーはストアで管理
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    padding: '14px 16px',
    fontSize: '15px',
    color: '#fff',
    outline: 'none',
    boxSizing: 'border-box',
    letterSpacing: '0.02em',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '13px',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: '8px',
    letterSpacing: '0.05em',
  }

  const prefectures = ['北海道','青森県','岩手県','宮城県','秋田県','山形県','福島県','茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県','新潟県','富山県','石川県','福井県','山梨県','長野県','岐阜県','静岡県','愛知県','三重県','滋賀県','京都府','大阪府','兵庫県','奈良県','和歌山県','鳥取県','島根県','岡山県','広島県','山口県','徳島県','香川県','愛媛県','高知県','福岡県','佐賀県','長崎県','熊本県','大分県','宮崎県','鹿児島県','沖縄県']

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f0f1a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: '440px' }}>

        {/* ロゴ */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '28px' }}>💍</span>
            <span style={{ fontSize: '24px', fontWeight: 800, color: '#ff6b8a' }}>Liaison</span>
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '14px', marginTop: '8px', letterSpacing: '0.05em' }}>無料会員登録</p>
        </div>

        {/* ステップインジケーター */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
          {[1, 2].map((s) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: step >= s ? '#ff6b8a' : 'rgba(255,255,255,0.08)', border: step >= s ? 'none' : '1px solid rgba(255,255,255,0.15)', color: step >= s ? '#fff' : 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700 }}>{s}</div>
              {s < 2 && <div style={{ width: '48px', height: '1px', backgroundColor: step > s ? '#ff6b8a' : 'rgba(255,255,255,0.1)' }} />}
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '40px' }}>

          {/* エラーメッセージ */}
          {error && (
            <div style={{ backgroundColor: 'rgba(255,107,138,0.1)', border: '1px solid rgba(255,107,138,0.3)', borderRadius: '10px', padding: '12px 16px', marginBottom: '20px', color: '#ff6b8a', fontSize: '13px' }}>
              {error}
            </div>
          )}

          {/* ステップ1: アカウント情報 */}
          {step === 1 && (
            <>
              <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '28px', letterSpacing: '-0.01em' }}>アカウント情報</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={labelStyle}>メールアドレス</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="example@email.com" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>パスワード（8文字以上）</label>
                  <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="パスワードを入力" style={inputStyle} />
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!form.email || !form.password}
                  style={{ width: '100%', backgroundColor: form.email && form.password ? '#ff6b8a' : 'rgba(255,255,255,0.08)', color: form.email && form.password ? '#fff' : 'rgba(255,255,255,0.3)', fontWeight: 700, fontSize: '15px', padding: '16px', borderRadius: '12px', border: 'none', cursor: form.email && form.password ? 'pointer' : 'not-allowed', letterSpacing: '0.05em', marginTop: '4px' }}
                >
                  次へ進む
                </button>
              </div>
            </>
          )}

          {/* ステップ2: プロフィール */}
          {step === 2 && (
            <>
              <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '28px', letterSpacing: '-0.01em' }}>プロフィール設定</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={labelStyle}>ニックネーム</label>
                  <input type="text" name="nickname" value={form.nickname} onChange={handleChange} placeholder="表示名（本名不要）" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>性別</label>
                  <select name="gender" value={form.gender} onChange={handleChange} style={{ ...inputStyle, appearance: 'none' }}>
                    <option value="" style={{ backgroundColor: '#1a1a2e' }}>選択してください</option>
                    <option value="male" style={{ backgroundColor: '#1a1a2e' }}>男性</option>
                    <option value="female" style={{ backgroundColor: '#1a1a2e' }}>女性</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>年齢</label>
                  <input type="number" name="age" value={form.age} onChange={handleChange} placeholder="例：35" min="18" max="80" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>都道府県</label>
                  <select name="prefecture" value={form.prefecture} onChange={handleChange} style={{ ...inputStyle, appearance: 'none' }}>
                    <option value="" style={{ backgroundColor: '#1a1a2e' }}>選択してください</option>
                    {prefectures.map(p => <option key={p} value={p} style={{ backgroundColor: '#1a1a2e' }}>{p}</option>)}
                  </select>
                </div>
                <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                  <button
                    onClick={() => setStep(1)}
                    style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', fontWeight: 600, fontSize: '15px', padding: '16px', borderRadius: '12px', cursor: 'pointer', letterSpacing: '0.02em' }}
                  >
                    戻る
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!form.nickname || !form.gender || !form.age || !form.prefecture || isLoading}
                    style={{ flex: 1, backgroundColor: form.nickname && form.gender && form.age && form.prefecture && !isLoading ? '#ff6b8a' : 'rgba(255,255,255,0.08)', color: form.nickname && form.gender && form.age && form.prefecture && !isLoading ? '#fff' : 'rgba(255,255,255,0.3)', fontWeight: 700, fontSize: '15px', padding: '16px', borderRadius: '12px', border: 'none', cursor: form.nickname && form.gender && form.age && form.prefecture && !isLoading ? 'pointer' : 'not-allowed', letterSpacing: '0.05em' }}
                  >
                    {isLoading ? '登録中...' : '登録する'}
                  </button>
                </div>
              </div>
            </>
          )}

          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '11px', textAlign: 'center', marginTop: '24px', lineHeight: 1.8, letterSpacing: '0.02em' }}>
            登録することで<a href="#" style={{ color: 'rgba(255,107,138,0.7)' }}>利用規約</a>および<a href="#" style={{ color: 'rgba(255,107,138,0.7)' }}>プライバシーポリシー</a>に同意したものとみなされます。
          </p>
        </div>

        <p style={{ textAlign: 'center', fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginTop: '28px', letterSpacing: '0.02em' }}>
          すでにアカウントをお持ちの方は
          <Link to="/login" style={{ color: '#ff6b8a', fontWeight: 600, textDecoration: 'none', marginLeft: '4px' }}>ログイン</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
