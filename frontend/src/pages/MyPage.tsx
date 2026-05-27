import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'

// マイページ（プロフィール確認・編集）
const MyPage = () => {
  const { user, updateProfile, logout, isLoading, error, clearError } = useAuthStore()
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [form, setForm] = useState({
    nickname: '',
    gender: '' as 'male' | 'female' | '',
    age: '',
    prefecture: '',
    bio: '',
  })

  const prefectures = ['北海道','青森県','岩手県','宮城県','秋田県','山形県','福島県','茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県','新潟県','富山県','石川県','福井県','山梨県','長野県','岐阜県','静岡県','愛知県','三重県','滋賀県','京都府','大阪府','兵庫県','奈良県','和歌山県','鳥取県','島根県','岡山県','広島県','山口県','徳島県','香川県','愛媛県','高知県','福岡県','佐賀県','長崎県','熊本県','大分県','宮崎県','鹿児島県','沖縄県']

  // ユーザー情報をフォームに反映
  useEffect(() => {
    if (user) {
      setForm({
        nickname: user.nickname || '',
        gender: user.gender || '',
        age: user.age ? String(user.age) : '',
        prefecture: user.prefecture || '',
        bio: user.bio || '',
      })
    }
  }, [user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSave = async () => {
    try {
      clearError()
      await updateProfile({
        nickname: form.nickname || undefined,
        gender: (form.gender as 'male' | 'female') || undefined,
        age: form.age ? parseInt(form.age) : undefined,
        prefecture: form.prefecture || undefined,
        bio: form.bio || undefined,
      })
      setIsEditing(false)
      setSaveSuccess(true)
      setTimeout(() => setSaveSuccess(false), 3000)
    } catch {
      // エラーはストアで管理
    }
  }

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '10px',
    padding: '12px 14px',
    fontSize: '14px',
    color: '#fff',
    outline: 'none',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '12px',
    color: 'rgba(255,255,255,0.45)',
    marginBottom: '6px',
    letterSpacing: '0.05em',
  }

  const genderLabel = user?.gender === 'male' ? '男性' : user?.gender === 'female' ? '女性' : '未設定'

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f0f1a', color: '#fff' }}>
      {/* ヘッダー */}
      <header style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '22px' }}>💍</span>
            <span style={{ fontSize: '20px', fontWeight: 800, color: '#ff6b8a' }}>Liaison</span>
          </Link>
          <button
            onClick={handleLogout}
            style={{ backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '8px 16px', color: 'rgba(255,255,255,0.6)', fontSize: '13px', cursor: 'pointer' }}
          >
            ログアウト
          </button>
        </div>
      </header>

      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 24px' }}>
        {/* タイトル */}
        <h1 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '32px', letterSpacing: '-0.01em' }}>マイページ</h1>

        {/* 成功メッセージ */}
        {saveSuccess && (
          <div style={{ backgroundColor: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)', borderRadius: '10px', padding: '12px 16px', marginBottom: '20px', color: '#34d399', fontSize: '14px' }}>
            ✓ プロフィールを更新しました
          </div>
        )}

        {/* エラーメッセージ */}
        {error && (
          <div style={{ backgroundColor: 'rgba(255,107,138,0.1)', border: '1px solid rgba(255,107,138,0.3)', borderRadius: '10px', padding: '12px 16px', marginBottom: '20px', color: '#ff6b8a', fontSize: '14px' }}>
            {error}
          </div>
        )}

        {/* アバターとニックネーム */}
        <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '28px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: 'rgba(255,107,138,0.15)', border: '2px solid rgba(255,107,138,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
              {user?.avatar ? (
                <img src={user.avatar} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <span style={{ fontSize: '28px' }}>👤</span>
              )}
            </div>
            <div>
              <p style={{ fontSize: '18px', fontWeight: 700, marginBottom: '4px' }}>{user?.nickname || user?.name || '名無し'}</p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>{user?.email}</p>
              {user?.provider && (
                <span style={{ display: 'inline-block', marginTop: '6px', backgroundColor: 'rgba(255,107,138,0.1)', border: '1px solid rgba(255,107,138,0.2)', borderRadius: '20px', padding: '2px 10px', fontSize: '11px', color: '#ff6b8a' }}>
                  {user.provider === 'google' ? 'Google' : 'X'} ログイン
                </span>
              )}
            </div>
          </div>

          {/* プロフィール表示 / 編集切り替え */}
          {!isEditing ? (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                {[
                  { label: '性別', value: genderLabel },
                  { label: '年齢', value: user?.age ? `${user.age}歳` : '未設定' },
                  { label: '都道府県', value: user?.prefecture || '未設定' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '14px' }}>
                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '6px' }}>{label}</p>
                    <p style={{ fontSize: '14px', fontWeight: 600 }}>{value}</p>
                  </div>
                ))}
              </div>

              {user?.bio && (
                <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '14px', marginBottom: '20px' }}>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '6px' }}>自己紹介</p>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>{user.bio}</p>
                </div>
              )}

              <button
                onClick={() => setIsEditing(true)}
                style={{ width: '100%', backgroundColor: '#ff6b8a', color: '#fff', fontWeight: 700, fontSize: '14px', padding: '14px', borderRadius: '10px', border: 'none', cursor: 'pointer', letterSpacing: '0.03em' }}
              >
                プロフィールを編集する
              </button>
            </>
          ) : (
            // 編集フォーム
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={labelStyle}>ニックネーム</label>
                <input type="text" name="nickname" value={form.nickname} onChange={handleChange} style={inputStyle} />
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
                <input type="number" name="age" value={form.age} onChange={handleChange} min="18" max="80" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>都道府県</label>
                <select name="prefecture" value={form.prefecture} onChange={handleChange} style={{ ...inputStyle, appearance: 'none' }}>
                  <option value="" style={{ backgroundColor: '#1a1a2e' }}>選択してください</option>
                  {prefectures.map(p => <option key={p} value={p} style={{ backgroundColor: '#1a1a2e' }}>{p}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>自己紹介（任意・500文字以内）</label>
                <textarea
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  rows={4}
                  maxLength={500}
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                />
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '4px', textAlign: 'right' }}>{form.bio.length} / 500</p>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                <button
                  onClick={() => { setIsEditing(false); clearError() }}
                  style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', fontWeight: 600, fontSize: '14px', padding: '14px', borderRadius: '10px', cursor: 'pointer' }}
                >
                  キャンセル
                </button>
                <button
                  onClick={handleSave}
                  disabled={isLoading}
                  style={{ flex: 1, backgroundColor: isLoading ? 'rgba(255,107,138,0.5)' : '#ff6b8a', color: '#fff', fontWeight: 700, fontSize: '14px', padding: '14px', borderRadius: '10px', border: 'none', cursor: isLoading ? 'wait' : 'pointer' }}
                >
                  {isLoading ? '保存中...' : '保存する'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyPage
