import { create } from 'zustand'
import api from '../utils/api'
import type { User, ProfileUpdatePayload } from '../types/user'

// 認証ストアの状態型
interface AuthState {
  user: User | null
  token: string | null
  isLoading: boolean
  error: string | null

  // アクション
  register: (data: {
    email: string
    password: string
    nickname: string
    gender: string
    age: string
    prefecture: string
  }) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  fetchMe: () => Promise<void>
  updateProfile: (data: ProfileUpdatePayload) => Promise<void>
  setTokenFromOAuth: (token: string) => Promise<void>
  clearError: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('auth_token'),
  isLoading: false,
  error: null,

  // 会員登録
  register: async (data) => {
    set({ isLoading: true, error: null })
    try {
      const res = await api.post('/register', data)
      const { user, token } = res.data
      localStorage.setItem('auth_token', token)
      set({ user, token, isLoading: false })
    } catch (err: unknown) {
      const message = getErrorMessage(err)
      set({ error: message, isLoading: false })
      throw err
    }
  },

  // ログイン
  login: async (email, password) => {
    set({ isLoading: true, error: null })
    try {
      const res = await api.post('/login', { email, password })
      const { user, token } = res.data
      localStorage.setItem('auth_token', token)
      set({ user, token, isLoading: false })
    } catch (err: unknown) {
      const message = getErrorMessage(err)
      set({ error: message, isLoading: false })
      throw err
    }
  },

  // ログアウト
  logout: async () => {
    try {
      await api.post('/logout')
    } catch {
      // サーバーエラーでもクライアント側はログアウトさせる
    }
    localStorage.removeItem('auth_token')
    set({ user: null, token: null })
  },

  // ログイン中ユーザー取得
  fetchMe: async () => {
    const token = localStorage.getItem('auth_token')
    if (!token) return
    set({ isLoading: true })
    try {
      const res = await api.get('/me')
      set({ user: res.data, isLoading: false })
    } catch {
      localStorage.removeItem('auth_token')
      set({ user: null, token: null, isLoading: false })
    }
  },

  // プロフィール更新
  updateProfile: async (data) => {
    set({ isLoading: true, error: null })
    try {
      const res = await api.patch('/profile', data)
      set({ user: res.data, isLoading: false })
    } catch (err: unknown) {
      const message = getErrorMessage(err)
      set({ error: message, isLoading: false })
      throw err
    }
  },

  // OAuth コールバック時にトークンをセット
  setTokenFromOAuth: async (token) => {
    localStorage.setItem('auth_token', token)
    set({ token })
    try {
      const res = await api.get('/me')
      set({ user: res.data })
    } catch {
      localStorage.removeItem('auth_token')
      set({ user: null, token: null })
    }
  },

  clearError: () => set({ error: null }),
}))

// エラーメッセージを取得するヘルパー
function getErrorMessage(err: unknown): string {
  if (
    err &&
    typeof err === 'object' &&
    'response' in err
  ) {
    const response = (err as { response?: { data?: { message?: string; errors?: Record<string, string[]> } } }).response
    if (response?.data?.errors) {
      const firstKey = Object.keys(response.data.errors)[0]
      return response.data.errors[firstKey][0]
    }
    if (response?.data?.message) {
      return response.data.message
    }
  }
  return '予期しないエラーが発生しました。'
}
