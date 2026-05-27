import axios from 'axios'

// Laravel バックエンドの API ベース URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

// axios インスタンス
const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

// リクエストインターセプター: ローカルストレージのトークンを自動付与
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// レスポンスインターセプター: 401エラー時にトークンを削除
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token')
    }
    return Promise.reject(error)
  }
)

export default api
