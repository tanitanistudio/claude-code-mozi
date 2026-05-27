import { Link } from 'react-router-dom'
import Header from '../components/Header'

// トップページ
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ヒーローセクション */}
      <section className="pt-24 pb-20 px-6" style={{ background: 'linear-gradient(135deg, #fff1f2 0%, #ffffff 50%, #fdf2f8 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-rose-100 text-rose-600 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide">
            🎉 会員数 50,000人突破
          </span>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
            既婚者だって、<br />
            <span className="text-rose-500">理解し合える人</span>に<br />
            出会える。
          </h1>
          <p className="text-base text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">
            結婚生活に満足できない気持ちを、ひとりで抱え込まないで。<br />
            同じ立場の相手だから、本音で話せる関係が生まれます。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link to="/register">
              <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold px-10 py-4 rounded-full text-base transition-all shadow-lg shadow-rose-200 hover:shadow-rose-300 hover:-translate-y-0.5">
                無料ではじめる →
              </button>
            </Link>
            <a href="#features">
              <button className="border border-gray-200 hover:border-rose-300 text-gray-600 hover:text-rose-500 font-medium px-10 py-4 rounded-full text-base transition-all">
                詳しく見る
              </button>
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">登録無料・本人確認あり・いつでも退会可能</p>
        </div>
      </section>

      {/* 統計セクション */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-2xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { number: '50,000+', label: '登録会員数' },
              { number: '4.8', label: 'アプリ評価' },
              { number: '98%', label: '本人確認済み' },
            ].map((stat) => (
              <div key={stat.label} className="py-2">
                <div className="text-2xl font-bold text-rose-500 mb-1">{stat.number}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Liaison が選ばれる理由</h2>
            <p className="text-gray-400 text-sm">安心・安全に、大人の出会いをサポートします。</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🔒',
                title: '完全匿名・プライバシー保護',
                desc: '顔写真はぼかし表示を選択可能。既婚者同士だからこそ、プライバシーを最優先に設計しています。',
              },
              {
                icon: '✅',
                title: '既婚者限定コミュニティ',
                desc: '全会員が既婚者であることを確認済み。同じ立場だからこそ生まれる、深い共感と繋がりがあります。',
              },
              {
                icon: '💬',
                title: 'AIによる価値観マッチング',
                desc: '趣味・ライフスタイル・求める関係性などをもとに、本当に合う相手をAIがご提案します。',
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 使い方セクション */}
      <section id="how" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">かんたん3ステップ</h2>
            <p className="text-gray-400 text-sm">最短5分で出会いがスタートできます。</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: '無料登録', desc: 'メールアドレスだけで登録完了。プロフィールを設定しましょう。' },
              { step: '02', title: '本人確認', desc: '身分証明書で安全に本人確認。既婚者のみが利用できます。' },
              { step: '03', title: 'マッチング', desc: 'AIがあなたにぴったりの相手を提案。メッセージで話しかけてみましょう。' },
            ].map((item, i) => (
              <div key={item.step} className="flex flex-col items-center text-center relative">
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-rose-100" />
                )}
                <div className="w-16 h-16 bg-rose-500 text-white text-xl font-bold rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-rose-200 relative z-10">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 安全性セクション */}
      <section id="safe" className="py-20 px-6 bg-rose-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-4">🛡️</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">安全への取り組み</h2>
          <p className="text-gray-500 text-sm mb-10 leading-relaxed">
            24時間365日の監視体制、通報・ブロック機能、SSL暗号化通信など、<br />
            多層的なセキュリティで会員の皆様を守ります。
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              '24時間365日 監視・サポート体制',
              '全会員 身分証明書による本人確認',
              'SSL暗号化通信でデータ保護',
              '迷惑行為への厳正な対処',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-rose-100">
                <span className="text-rose-400 font-bold flex-shrink-0">✓</span>
                <span className="text-gray-700 text-sm text-left">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #f43f5e, #ec4899)' }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            新しい出会いを、今すぐ。
          </h2>
          <p className="text-rose-100 text-sm mb-8 leading-relaxed">
            登録は無料です。まずはプロフィールを作成してみましょう。
          </p>
          <Link to="/register">
            <button className="bg-white hover:bg-rose-50 text-rose-500 font-bold px-12 py-4 rounded-full text-base transition-all shadow-xl hover:-translate-y-0.5">
              無料で登録する
            </button>
          </Link>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-10 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">💍</span>
            <span className="text-white font-bold">Liaison</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">利用規約</a>
            <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors">お問い合わせ</a>
          </div>
          <p className="text-gray-500 text-sm">© 2026 Liaison. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
