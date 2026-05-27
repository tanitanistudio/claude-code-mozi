// ユーザー型定義
export interface User {
  id: number
  name: string
  email: string
  nickname: string | null
  gender: 'male' | 'female' | null
  age: number | null
  prefecture: string | null
  bio: string | null
  avatar: string | null
  provider: string | null
  is_verified: boolean
  created_at: string
  updated_at: string
}

// プロフィール更新リクエスト型
export interface ProfileUpdatePayload {
  nickname?: string
  gender?: 'male' | 'female'
  age?: number
  prefecture?: string
  bio?: string
}
