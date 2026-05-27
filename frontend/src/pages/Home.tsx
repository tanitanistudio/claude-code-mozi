import { Link } from 'react-router-dom'

// トップページ（カドル参考デザイン）
const Home = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f0f1a', color: '#ffffff' }}>

      {/* ヘッダー */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(15,15,26,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '22px' }}>💍</span>
            <span style={{ fontSize: '20px', fontWeight: 700, color: '#ff6b8a' }}>Liaison</span>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="#features" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none' }}>特徴</a>
            <a href="#how" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none' }}>使い方</a>
            <a href="#safe" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none' }}>安全性</a>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link to="/login" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', textDecoration: 'none', padding: '8px 12px' }}>ログイン</Link>
            <Link to="/register" style={{ backgroundColor: '#ff6b8a', color: '#fff', fontSize: '14px', fontWeight: 600, padding: '10px 24px', borderRadius: '50px', textDecoration: 'none' }}>無料登録</Link>
          </div>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section style={{ paddingTop: '160px', paddingBottom: '120px', paddingLeft: '24px', paddingRight: '24px', textAlign: 'center', background: 'radial-gradient(ellipse at 50% 0%, rgba(255,107,138,0.15) 0%, transparent 70%)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {/* バッジ */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,107,138,0.15)', border: '1px solid rgba(255,107,138,0.3)', borderRadius: '50px', padding: '8px 20px', marginBottom: '48px' }}>
            <span style={{ color: '#ff6b8a', fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em' }}>No.1 婚外恋愛マッチングアプリ</span>
          </div>

          {/* メインコピー */}
          <h1 style={{ fontSize: '56px', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.03em', marginBottom: '32px' }}>
            同じ立場だから、<br />
            <span style={{ background: 'linear-gradient(135deg, #ff6b8a, #ff8fab)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>わかりあえる。</span>
          </h1>

          {/* サブコピー */}
          <p style={{ fontSize: '18px', lineHeight: 2.0, color: 'rgba(255,255,255,0.55)', marginBottom: '56px', letterSpacing: '0.02em' }}>
            既婚者専用だからこそ、本音で話せる。<br />
            心に寄り添ってくれる相手と、ここで出会えます。
          </p>

          {/* CTAボタン */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register" style={{ backgroundColor: '#ff6b8a', color: '#fff', fontWeight: 700, fontSize: '16px', padding: '18px 48px', borderRadius: '50px', textDecoration: 'none', letterSpacing: '0.02em', boxShadow: '0 8px 30px rgba(255,107,138,0.4)' }}>
              無料ではじめる
            </Link>
            <a href="#features" style={{ backgroundColor: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)', fontWeight: 500, fontSize: '16px', padding: '18px 48px', borderRadius: '50px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>
              詳しく見る
            </a>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px', marginTop: '20px', letterSpacing: '0.05em' }}>登録無料・本人確認あり・いつでも退会可能</p>
        </div>
      </section>

      {/* 統計セクション */}
      <section style={{ padding: '60px 24px', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', textAlign: 'center' }}>
          {[
            { number: '50,000+', label: '累計会員数' },
            { number: '1,000万+', label: 'マッチング数' },
            { number: '4.8', label: 'アプリ評価' },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#ff6b8a', marginBottom: '6px', letterSpacing: '-0.02em' }}>{stat.number}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 特徴セクション */}
      <section id="features" style={{ padding: '120px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p style={{ color: '#ff6b8a', fontSize: '13px', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '16px', textTransform: 'uppercase' }}>Features</p>
            <h2 style={{ fontSize: '40px', fontWeight: 800, lineHeight: 1.3, letterSpacing: '-0.02em' }}>Liaison が選ばれる理由</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { icon: '🔒', title: '完全匿名・プライバシー保護', desc: '顔写真はぼかし表示を選択可能。既婚者同士だからこそ、プライバシーを最優先に設計しています。' },
              { icon: '✅', title: '既婚者限定コミュニティ', desc: '全会員が既婚者であることを確認済み。同じ立場だからこそ生まれる、深い共感と繋がりがあります。' },
              { icon: '💬', title: 'AIによる価値観マッチング', desc: '趣味・ライフスタイル・求める関係性などをもとに、本当に合う相手をAIが提案します。' },
            ].map((f) => (
              <div key={f.title} style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '40px 32px' }}>
                <div style={{ fontSize: '36px', marginBottom: '20px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px', lineHeight: 1.4 }}>{f.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', lineHeight: 1.9, letterSpacing: '0.02em' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ユーザーの声 */}
      <section style={{ padding: '120px 24px', backgroundColor: 'rgba(255,107,138,0.04)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p style={{ color: '#ff6b8a', fontSize: '13px', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '16px', textTransform: 'uppercase' }}>Voices</p>
            <h2 style={{ fontSize: '40px', fontWeight: 800, lineHeight: 1.3, letterSpacing: '-0.02em' }}>利用者の声</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { text: '同じ立場の人と話せるから、余計な説明が不要で気楽でした。初めてこんなに打ち解けられた気がします。', attr: '30代・女性・関東在住' },
              { text: '匿名で安心して使えました。プロフィール設定も細かく、本当に相性の良い方に出会えた気がします。', attr: '40代・男性・関西在住' },
              { text: '既婚者同士だからこそわかる悩みを共有できて、精神的にとても楽になりました。', attr: '30代・女性・九州在住' },
            ].map((v, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '36px 32px' }}>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px', lineHeight: 2.0, marginBottom: '24px', letterSpacing: '0.02em' }}>「{v.text}」</p>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', letterSpacing: '0.05em' }}>{v.attr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 使い方セクション */}
      <section id="how" style={{ padding: '120px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p style={{ color: '#ff6b8a', fontSize: '13px', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '16px', textTransform: 'uppercase' }}>How to start</p>
            <h2 style={{ fontSize: '40px', fontWeight: 800, lineHeight: 1.3, letterSpacing: '-0.02em' }}>かんたん3ステップ</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { step: '01', title: '無料登録', desc: 'メールアドレスだけで登録完了。プロフィールを設定しましょう。' },
              { step: '02', title: '本人確認', desc: '身分証明書で安全に本人確認。既婚者のみが利用できます。' },
              { step: '03', title: 'マッチング開始', desc: 'AIがあなたにぴったりの相手を提案。メッセージで話しかけてみましょう。' },
            ].map((item, i) => (
              <div key={item.step} style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', padding: '40px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: 'rgba(255,107,138,0.15)', border: '1px solid rgba(255,107,138,0.3)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 800, color: '#ff6b8a', flexShrink: 0 }}>{item.step}</div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', letterSpacing: '-0.01em' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', lineHeight: 1.9, letterSpacing: '0.02em' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 安全性セクション */}
      <section id="safe" style={{ padding: '120px 24px', backgroundColor: 'rgba(255,107,138,0.04)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#ff6b8a', fontSize: '13px', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '16px', textTransform: 'uppercase' }}>Safety</p>
          <h2 style={{ fontSize: '40px', fontWeight: 800, lineHeight: 1.3, letterSpacing: '-0.02em', marginBottom: '20px' }}>安全への取り組み</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: 2.0, marginBottom: '64px', letterSpacing: '0.02em' }}>
            24時間365日の監視体制と多層的なセキュリティで、<br />会員の皆様のプライバシーを守ります。
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {[
              { icon: '👁', text: '24時間365日 監視体制' },
              { icon: '🪪', text: '全会員 本人確認済み' },
              { icon: '🔐', text: 'SSL暗号化通信' },
              { icon: '🚫', text: '迷惑行為への厳正対処' },
              { icon: '📵', text: 'ブロック・通報機能' },
              { icon: '🛡', text: 'プライバシー最優先設計' },
            ].map((item) => (
              <div key={item.text} style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ fontSize: '22px' }}>{item.icon}</span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', letterSpacing: '0.02em', textAlign: 'left' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section style={{ padding: '120px 24px', textAlign: 'center', background: 'radial-gradient(ellipse at 50% 100%, rgba(255,107,138,0.2) 0%, transparent 70%)' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '44px', fontWeight: 800, lineHeight: 1.25, letterSpacing: '-0.03em', marginBottom: '24px' }}>
            新しい出会いを、<br />今すぐ。
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', lineHeight: 2.0, marginBottom: '48px', letterSpacing: '0.02em' }}>
            登録は完全無料。<br />まずはプロフィールを作成してみましょう。
          </p>
          <Link to="/register" style={{ display: 'inline-block', backgroundColor: '#ff6b8a', color: '#fff', fontWeight: 700, fontSize: '17px', padding: '20px 60px', borderRadius: '50px', textDecoration: 'none', letterSpacing: '0.02em', boxShadow: '0 12px 40px rgba(255,107,138,0.4)' }}>
            無料ではじめる
          </Link>
        </div>
      </section>

      {/* フッター */}
      <footer style={{ padding: '48px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '20px' }}>💍</span>
            <span style={{ fontWeight: 700, color: '#ff6b8a', fontSize: '18px' }}>Liaison</span>
          </div>
          <div style={{ display: 'flex', gap: '32px' }}>
            {['利用規約', 'プライバシーポリシー', '特定商取引法', 'お問い合わせ'].map((link) => (
              <a key={link} href="#" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', textDecoration: 'none', letterSpacing: '0.02em' }}>{link}</a>
            ))}
          </div>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px', letterSpacing: '0.05em' }}>© 2026 Liaison. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
