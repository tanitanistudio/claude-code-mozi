import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'

interface Props {
  children: React.ReactNode
}

// 認証済みユーザーのみアクセスできるルートコンポーネント
const ProtectedRoute = ({ children }: Props) => {
  const { user, token, fetchMe, isLoading } = useAuthStore()

  useEffect(() => {
    // トークンはあるがユーザー情報がない場合は再取得
    if (token && !user) {
      fetchMe()
    }
  }, [token, user, fetchMe])

  // ローカルストレージにトークンがない場合はログインページへ
  if (!token && !localStorage.getItem('auth_token')) {
    return <Navigate to="/login" replace />
  }

  // ユーザー情報取得中
  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#0f0f1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>読み込み中...</div>
      </div>
    )
  }

  return <>{children}</>
}

export default ProtectedRoute
