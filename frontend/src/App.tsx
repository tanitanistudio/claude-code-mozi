import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import MyPage from './pages/MyPage'
import OAuthCallback from './pages/OAuthCallback'
import ProtectedRoute from './components/ProtectedRoute'

// アプリのルーティング設定
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 公開ルート */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* OAuth コールバック（Google / X からのリダイレクト先） */}
        <Route path="/oauth/callback" element={<OAuthCallback />} />

        {/* 認証済みユーザーのみアクセス可能 */}
        <Route
          path="/mypage"
          element={
            <ProtectedRoute>
              <MyPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
