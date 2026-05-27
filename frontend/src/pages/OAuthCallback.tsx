import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'

// Google / X OAuth コールバックページ
// バックエンドから ?token=xxx でリダイレクトされてくる
const OAuthCallback = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { setTokenFromOAuth } = useAuthStore()

  useEffect(() => {
    const token = searchParams.get('token')
    const error = searchParams.get('error')

    if (error) {
      navigate('/login?error=oauth_failed', { replace: true })
      return
    }

    if (token) {
      setTokenFromOAuth(token).then(() => {
        navigate('/mypage', { replace: true })
      })
    } else {
      navigate('/login', { replace: true })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f0f1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '28px', marginBottom: '16px' }}>💍</div>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>ログイン処理中...</p>
      </div>
    </div>
  )
}

export default OAuthCallback
