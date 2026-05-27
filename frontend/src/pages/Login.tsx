import { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'

// ログインページ
const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const { login, isLoading, error, clearError, token } = useAuthStore()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const oauthError = searchParams.get('error')

  // バックエンドのURL
  const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

  // すでにログイン済みならマイページへ
  useEffect(() => {
    if (token) navigate('/mypage', { replace: true })
  }, [token, navigate])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    clearError()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(form.email, form.password)
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

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f0f1a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>

        {/* ロゴ */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '28px' }}>💍</span>
            <span style={{ fontSize: '24px', fontWeight: 800, color: '#ff6b8a' }}>Liaison</span>
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '14px', marginTop: '8px', letterSpacing: '0.05em' }}>アカウントにログイン</p>
        </div>

        <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '40px' }}>

          {/* エラーメッセージ */}
          {(error || oauthError) && (
            <div style={{ backgroundColor: 'rgba(255,107,138,0.1)', border: '1px solid rgba(255,107,138,0.3)', borderRadius: '10px', padding: '12px 16px', marginBottom: '20px', color: '#ff6b8a', fontSize: '13px' }}>
              {oauthError === 'oauth_failed' ? 'SNSログインに失敗しました。もう一度お試しください。' : error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={labelStyle}>メールアドレス</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="example@email.com" style={inputStyle} />
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label style={labelStyle}>パスワード</label>
                  <a href="#" style={{ color: '#ff6b8a', fontSize: '12px', textDecoration: 'none' }}>パスワードを忘れた方</a>
                </div>
                <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="パスワードを入力" style={inputStyle} />
              </div>

              <button
                type="submit"
                disabled={!form.email || !form.password || isLoading}
                style={{
                  width: '100%',
                  backgroundColor: form.email && form.password && !isLoading ? '#ff6b8a' : 'rgba(255,255,255,0.08)',
                  color: form.email && form.password && !isLoading ? '#fff' : 'rgba(255,255,255,0.3)',
                  fontWeight: 700,
                  fontSize: '15px',
                  padding: '16px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: form.email && form.password && !isLoading ? 'pointer' : 'not-allowed',
                  letterSpacing: '0.05em',
                  marginTop: '4px',
                }}
              >
                {isLoading ? 'ログイン中...' : 'ログイン'}
              </button>
            </div>
          </form>

          {/* 区切り */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '28px 0' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.08)' }} />
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>または</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.08)' }} />
          </div>

          {/* SNSログイン */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href={`${apiBase}/api/auth/google`}
              style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px', color: 'rgba(255,255,255,0.7)', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', letterSpacing: '0.02em', textDecoration: 'none' }}
            >
              <span style={{ fontSize: '16px', fontWeight: 700 }}>G</span>
              Googleでログイン
            </a>
            <a
              href={`${apiBase}/api/auth/twitter`}
              style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px', color: 'rgba(255,255,255,0.7)', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', letterSpacing: '0.02em', textDecoration: 'none' }}
            >
              <span style={{ fontSize: '16px', fontWeight: 700 }}>𝕏</span>
              X（Twitter）でログイン
            </a>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '11px', textAlign: 'center', marginTop: '24px', lineHeight: 1.8, letterSpacing: '0.02em' }}>
            ログインすることで<a href="#" style={{ color: 'rgba(255,107,138,0.7)' }}>利用規約</a>および<a href="#" style={{ color: 'rgba(255,107,138,0.7)' }}>プライバシーポリシー</a>に同意したものとみなされます。
          </p>
        </div>

        <p style={{ textAlign: 'center', fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginTop: '28px', letterSpacing: '0.02em' }}>
          まだ会員登録がお済みでない方は
          <Link to="/register" style={{ color: '#ff6b8a', fontWeight: 600, textDecoration: 'none', marginLeft: '4px' }}>無料で登録</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
