# サイコソフィア診断 企画書

**ステータス**: ドラフト v0.1  
**作成日**: 2026-05-30  
**担当エージェント**: product-agent  
**更新履歴**:
| バージョン | 日付 | 変更内容 |
|---|---|---|
| v0.1 | 2026-05-30 | 初稿作成（product-agent） |

---

## 目次

1. [エグゼクティブサマリー](#1-エグゼクティブサマリー)
2. [市場調査](#2-市場調査--research-agent)
3. [顧客インサイト](#3-顧客インサイト--customer-insight-agent)
4. [質問設計の方針](#4-質問設計の方針--psychology-agent)
5. [結果タイプ定義](#5-結果タイプ定義--psychology-agent)
6. [LP・ビジュアル方針](#6-lpビジュアル方針--design-agent)
7. [マーケコピー](#7-マーケコピー--marketing-agent)
8. [技術仕様](#8-技術仕様)

---

## 1. エグゼクティブサマリー

### 診断概要

| 項目 | 内容 |
|---|---|
| **診断名** | サイコソフィア診断 ―あなたの「意志・感情・論理・身体」の優先順位― |
| **英語名** | Psychosophy Diagnosis |
| **URL スラッグ** | `psychosofia` |
| **ベース理論** | サイコソフィア（アファナシエフ型パーソナリティ類型、1985） |
| **タイプ数** | 24 タイプ（4 機能の順列 4! = 24） |
| **設問数** | 32 問（4 機能 × 各 8 問、4 択スライダー形式） |
| **所要時間** | 約 5 〜 7 分 |
| **対象年齢** | 16 歳以上 |
| **想定デバイス** | スマートフォン優先（モバイルファースト） |

### サイコソフィアとは

サイコソフィアはロシアの心理学者アレクサンドル・アファナシエフが提唱した性格類型論。人間の心理を **意志（Will）・感情（Emotion）・論理（Logic）・物質（Physics）** の 4 機能で捉え、各個人においてその優先順位（1位→4位）が固定されているとする。

4 機能の並び順は 24 通りあり、それぞれ歴史上の人物の名を冠したタイプ名を持つ（例: ナポレオン型 = WELF、ソクラテス型 = LEWF など）。MBTI やソシオニクスとは独立した体系だが、相互補完的に活用できる。

### KPI（ローンチ 90 日目標）

| 指標 | 目標値 | 計測方法 |
|---|---|---|
| 月間ユニーク診断完了数 | 50,000 回 | イベントトラッキング（完了画面表示） |
| 診断完了率（開始→完了） | ≥ 70 % | 開始イベント / 完了イベント |
| SNS シェア率 | ≥ 25 % | シェアボタンクリック / 完了数 |
| 平均セッション時間 | ≥ 4 分 | Analytics |
| 直帰率（診断ページ） | ≤ 40 % | Analytics |
| リピート診断率（30 日以内） | ≥ 15 % | localStorage による判定 |
| メールリスト登録率 | ≥ 10 % | 結果画面 CTA クリック |

### 差別化ポイント

- **国内初**の本格サイコソフィア日本語診断（競合ほぼゼロ）
- MBTI や ソシオニクスを既に知っているユーザーへの「次の一歩」として訴求
- 4 機能の「順位」を軸にした直感的な設問設計（自己申告 × 行動シナリオの混合）
- タイプ間の相性・対立パターンを可視化するコンテンツ展開が可能

---

## 2. 市場調査 ← research-agent

> **担当**: `@agents/research-agent.md`  
> **ステータス**: 未着手  
> **依頼内容**:

```
以下を調査・整理してください。

1. 国内外の「サイコソフィア」関連コンテンツ・競合サービスの現状
   - 日本語での認知度・検索ボリューム（キーワード候補: サイコソフィア, アファナシエフ, psychosophy）
   - 英語圏での主要コミュニティ（Reddit, YouTube, Discord など）
   - 既存の診断ツール（精度・UI・シェア状況）

2. MBTI / ソシオニクス / エニアグラム との比較
   - 各理論の国内月間検索ボリューム（概算）
   - サイコソフィアのポジショニング余地

3. ターゲット市場規模の試算
   - 国内「性格診断」市場の規模感（MAU ベース）
   - SNS 上での拡散パターン（どの層が拡散するか）

4. 参入タイミングの評価
   - トレンドの兆し（Google トレンド, X のバズ事例）
   - リスク（認知度の低さ / 理論の難解さ）

OUTPUT: マークダウン形式、セクション別にまとめること
```

---

## 3. 顧客インサイト ← customer-insight-agent

> **担当**: `@agents/customer-insight-agent.md`  
> **ステータス**: 未着手  
> **依頼内容**:

```
以下を分析・整理してください。

1. ペルソナ設計（最低 3 パターン）
   - 属性（年齢・性別・職業・SNS 利用状況）
   - 診断に来る動機（例: MBTI に飽きた / 深く自己理解したい / 友人とのトーク素材が欲しい）
   - 期待する体験・アウトプット

2. ユーザージャーニー
   - 認知 → 流入 → 診断開始 → 離脱ポイント → 完了 → シェア → リピートの各フェーズ
   - 離脱が起きやすいポイントと対策

3. バイラル動線の設計仮説
   - どのタイプ名・結果表現がシェアされやすいか
   - 「推しキャラ × サイコソフィア」「カップル相性診断」などの展開可能性

4. 既存ユーザーヒアリング設計
   - 仮説検証のためのアンケート設問（5問以内）

OUTPUT: ペルソナカード形式（表）＋ユーザージャーニーマップ（テキストベース）
```

---

## 4. 質問設計の方針 ← psychology-agent

> **担当**: `@agents/psychology-agent.md`  
> **ステータス**: 未着手  
> **依頼内容**:

```
サイコソフィア（アファナシエフ型）の理論に基づき、診断設問の設計方針を策定してください。

【前提情報】
- 4 機能: Will（意志）/ Emotion（感情）/ Logic（論理）/ Physics（物質・身体）
- 各機能は「1番機能（最強・独善）〜 4番機能（最弱・敏感）」の強弱を持つ
- 自己報告バイアス・社会的望ましさバイアスを最小化する設問設計が必要

【依頼内容】
1. 測定設計
   - 各機能を測定するための行動的指標の洗い出し（機能ごとに 10 項目以上）
   - 項目選定基準（弁別力 / 内容妥当性）

2. 設問フォーマット案
   - A: 自己評定スケール（「自分に当てはまる度合い」4 段階）
   - B: シナリオ選択（「この状況でどう行動するか」4 択）
   - C: 形容詞ペア（SD 法）
   - 推奨フォーマットとその理由

3. 設問数と構成
   - 全 32 問の割り当て案（各機能の設問数・順序のランダマイズ方針）
   - 注意・集中維持のための設問配置戦略

4. スコアリング設計
   - 各回答を機能スコアに変換するアルゴリズムの概要
   - タイ（同スコア）が発生した場合の処理方針

5. バイアス対策
   - 逆転項目の配置方針
   - 一貫性チェック設問の設計

OUTPUT: 設問設計仕様書（マークダウン）
```

---

## 5. 結果タイプ定義 ← psychology-agent

> **担当**: `@agents/psychology-agent.md`  
> **ステータス**: 未着手  
> **依頼内容**:

```
サイコソフィアの 24 タイプについて、以下を作成してください。

【24 タイプ一覧（機能順位表記: 1位機能-2位機能-3位機能-4位機能）】
W=意志、E=感情、L=論理、F=身体（Physics）

1. Napoleon   (WELF)   2. Caesar     (WELF の逆）※要確認
3. Socrates   (LEWF)   ... 以降は theory に基づき補完

【依頼内容】
1. 全 24 タイプの正式名称・機能順列・一言説明（50 字以内）の対応表

2. 各タイプの詳細プロファイル（診断結果画面に使用）
   - タイプ名（日本語訳・英語名）
   - キャッチコピー（20 字以内）
   - 強み 3 点 / 成長課題 3 点
   - 代表的な行動パターン（具体的なシーン描写）
   - 相性の良いタイプ / 摩擦が起きやすいタイプ
   - 有名人・キャラクター例（可能な範囲で）

3. タイプ間の相性マトリクス
   - 24 × 24 の相性スコア（5 段階）とその根拠
   - 特に注目すべき「最高相性」「最難関相性」ペアの解説

4. タイプのグルーピング案
   - 「意志型（W1）」「感情型（E1）」など 1 位機能別の 4 グループ
   - 診断結果の「仲間タイプ」表示に使用

OUTPUT: タイプ定義 JSON スキーマ案 ＋ マークダウン解説
```

---

## 6. LP・ビジュアル方針 ← design-agent

> **担当**: `@agents/design-agent.md`  
> **ステータス**: 未着手  
> **依頼内容**:

```
サイコソフィア診断の LP・診断 UI・結果画面のビジュアルコンセプトを策定してください。

【ブランドコンテキスト】
- AI-KNOW は「知性と自己理解の探求」をテーマにした診断プラットフォーム
- 既存コンテンツ: ソシオニクス v2（紫・宇宙系）, エニアグラム（アンバー・幾何学系）
- サイコソフィアは「哲学的・内省的」なトーンが適切

【依頼内容】
1. カラーパレット案（プライマリ / セカンダリ / アクセント / 背景 / テキスト）
   - 4 機能を表す機能カラーの定義（W / E / L / F それぞれの色）
   - ダークモード・ライトモード両対応の想定

2. タイポグラフィ方針
   - 見出し / 本文 / 強調のフォントファミリー・ウェイト
   - 日英混在時の処理方針

3. イラスト・アイコン方針
   - タイプアイコンのコンセプト（例: 幾何学的モチーフ / 肖像的 / 抽象的）
   - 4 機能のシンボルアイコン案

4. LP 構成・セクション設計
   - ファーストビュー（FV）のコピーとビジュアル方針
   - 各セクション（what / how / types / share / CTA）の内容・順序

5. 診断 UI のインタラクション設計
   - 設問画面のレイアウト案（プログレスバー / 設問文 / 回答ボタン）
   - 回答アニメーションの指針（完了感・没入感を高める）

6. 結果画面のデザイン仕様
   - タイプカードのコンポーネント設計
   - SNS シェア用 OGP 画像の仕様（1200×630px, タイプ別）

OUTPUT: デザインブリーフ（マークダウン）＋ カラー / タイポ仕様表
```

---

## 7. マーケコピー ← marketing-agent

> **担当**: `@agents/marketing-agent.md`  
> **ステータス**: 未着手  
> **依頼内容**:

```
サイコソフィア診断のマーケティングコピーを作成してください。

【ターゲット】
- メイン: 20〜30 代 / MBTI・ソシオニクス経験者 / 自己理解・人間関係改善に関心
- サブ: 心理学・哲学・スピリチュアルに興味のある層

【依頼内容】
1. キャッチコピー案（5 パターン以上）
   - LP ファーストビュー用（30 字以内）
   - X（旧 Twitter）告知ツイート用（140 字）
   - Instagram リール用テロップ（15 字以内）

2. サブコピー・ボディコピー
   - LP の各セクション向けコピー
   - 「なぜサイコソフィアか」の説明文（200 字）
   - 診断開始ボタン周辺の背中を押すマイクロコピー

3. 結果シェア文テンプレート（タイプ別）
   - X シェア用（各タイプ 140 字テンプレート）
   - LINE シェア用（各タイプ 100 字テンプレート）
   - 例: 「私はナポレオン型（WELF）でした！意志が誰より強く、感情で世界を動かす型。あなたは？→ [URL]」

4. SEO メタデータ案
   - title タグ（60 字以内）
   - meta description（120 字以内）
   - OGP タイトル・説明文

5. コンテンツマーケティング展開案
   - SNS バイラルフック（「あるあるネタ」「タイプ別◯◯」系）
   - コラボ企画アイデア（他診断との相性コンテンツ等）

OUTPUT: コピーライティング一覧（マークダウン）
```

---

## 8. 技術仕様

### 8.1 ファイル構成

```
ai-know/
└── diagnosis/
    └── psychosofia/
        ├── planning.md              # 本ファイル
        ├── questions.ts             # 設問データ（32問）
        ├── types.ts                 # 24タイプ定義・スコアリングロジック
        ├── scoring.ts               # スコア → タイプ変換アルゴリズム
        └── assets/
            ├── type-icons/          # 24タイプアイコン（SVG）
            └── ogp/                 # OGP画像（タイプ別 1200×630）

frontend/src/
├── pages/
│   ├── diagnosis/
│   │   └── psychosofia/
│   │       ├── index.tsx            # LP（診断紹介ページ）
│   │       ├── quiz.tsx             # 診断画面
│   │       └── result/
│   │           └── [typeId].tsx     # 結果画面（動的ルート）
├── components/
│   └── diagnosis/
│       └── psychosofia/
│           ├── QuestionCard.tsx     # 設問カードコンポーネント
│           ├── ProgressBar.tsx      # 進捗バー
│           ├── TypeCard.tsx         # タイプ結果カード
│           └── ShareButtons.tsx     # SNSシェアボタン群
├── hooks/
│   └── usePsychosofia.ts            # 診断ロジックカスタムフック
└── stores/
    └── psychosofiaStore.ts          # Zustand ストア（回答状態管理）
```

### 8.2 データ型定義（TypeScript）

```typescript
// 4機能の型定義
type PsychicFunction = 'W' | 'E' | 'L' | 'F';

// タイプ（機能の順列 = 4文字列）
type PsychosofiaTypeCode = string; // 例: "WELF", "LEWF", "FELW" など 24通り

// 設問
interface Question {
  id: string;
  function: PsychicFunction;       // どの機能を測定するか
  text: string;                    // 設問文
  format: 'likert' | 'scenario';  // 設問形式
  options?: string[];              // シナリオ形式の場合の選択肢
  reversed: boolean;               // 逆転項目かどうか
  weight: number;                  // スコアへの重み（デフォルト 1.0）
}

// 回答
interface Answer {
  questionId: string;
  value: 1 | 2 | 3 | 4;           // 4段階評価
}

// スコア（機能ごとの合算）
interface FunctionScores {
  W: number;
  E: number;
  L: number;
  F: number;
}

// タイプ定義
interface PsychosofiaType {
  code: PsychosofiaTypeCode;        // 例: "WELF"
  name: string;                    // 例: "ナポレオン"
  nameEn: string;                  // 例: "Napoleon"
  catchcopy: string;               // 20字以内
  strengths: string[];             // 強み 3点
  challenges: string[];            // 課題 3点
  description: string;             // 詳細説明
  compatibleTypes: PsychosofiaTypeCode[];
  tensionTypes: PsychosofiaTypeCode[];
  famousPeople?: string[];
}

// 診断セッション（localStorage保存形式）
interface DiagnosisSession {
  sessionId: string;               // UUID
  startedAt: string;               // ISO 8601
  completedAt?: string;
  answers: Answer[];
  result?: PsychosofiaTypeCode;
  isRetake: boolean;               // リピート診断フラグ
}
```

### 8.3 スコアリングアルゴリズム（方針）

```
1. 各設問への回答（1〜4）を対応機能のスコアに加算
   - 逆転項目は: score = 5 - value で変換

2. 機能ごとの合算スコアを算出
   FunctionScores = { W: number, E: number, L: number, F: number }

3. スコアの降順でランキングし、1位〜4位の機能順列を決定
   → タイプコード（例: "WELF"）を生成

4. タイえ処理（同スコアの場合）:
   - 差が 3点以内 → 「境界タイプ」フラグを立て、上位 2候補を提示
   - 差が 0点（完全同点）→ 設問重みを考慮した第2スコアで決定

5. 信頼度スコア（confidence）の算出:
   confidence = (最高スコア - 最低スコア) / 最大理論値
   → 60% 未満の場合、「境界タイプ」表示
```

### 8.4 localStorage 設計

```typescript
// キー設計
const STORAGE_KEYS = {
  SESSION: 'aiknow_psychosofia_session',        // 進行中セッション
  HISTORY: 'aiknow_psychosofia_history',        // 過去の結果履歴
  PREFERENCES: 'aiknow_psychosofia_prefs',      // UI設定（言語等）
} as const;

// 保存するデータ
// - SESSION: DiagnosisSession（診断中断時の復元用）
// - HISTORY: DiagnosisSession[] （最新 5件まで保存、古いものは削除）
// - PREFERENCES: { lang: 'ja' | 'en', theme: 'dark' | 'light' }

// プライバシー考慮事項
// - 個人を特定する情報は保存しない
// - セッションID はランダム UUID（追跡不可）
// - 30日後に自動削除する有効期限を付与
```

### 8.5 ルーティング設計（Vite + React Router 想定）

```
/diagnosis/psychosofia              → LP（診断紹介）
/diagnosis/psychosofia/quiz         → 診断画面
/diagnosis/psychosofia/result/:type → 結果画面（例: /result/WELF）
/diagnosis/psychosofia/compare      → タイプ比較・相性チェック（拡張機能）
```

### 8.6 パフォーマンス要件

| 指標 | 目標値 |
|---|---|
| LCP（Largest Contentful Paint） | ≤ 2.5 秒 |
| FID（First Input Delay） | ≤ 100 ms |
| CLS（Cumulative Layout Shift） | ≤ 0.1 |
| 診断データ初回ロード | ≤ 200 KB（gzip後） |
| OGP 画像 | ≤ 150 KB / 枚 |

### 8.7 SEO / OGP 設定

```html
<!-- 共通 -->
<title>サイコソフィア診断 | AI-KNOW</title>
<meta name="description" content="[marketing-agent が策定]">

<!-- 結果画面（タイプ別） -->
<meta property="og:title" content="私は「[タイプ名]」でした | サイコソフィア診断">
<meta property="og:description" content="[タイプ別コピー - marketing-agent が策定]">
<meta property="og:image" content="/ogp/psychosofia/[typeCode].png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
```

---

## 付録: エージェント連携フロー

```
product-agent（本企画書）
    ├── → research-agent       章2の調査を依頼
    ├── → customer-insight-agent  章3の分析を依頼
    ├── → psychology-agent     章4・5の設計を依頼
    │       ↓（完了後）
    │   questions.ts, types.ts の初稿生成
    ├── → design-agent         章6のビジュアル策定を依頼
    │       ↓（完了後）
    │   Figma / カラー・コンポーネント仕様
    └── → marketing-agent      章7のコピー作成を依頼
            ↓（完了後）
        LP コピー・シェアテキスト・OGP 文言

全エージェント完了後 → product-agent が企画書を v1.0 に更新
```

---

## 未決事項・検討課題

- [ ] タイプ名の日本語訳を確定する（歴史人物名をそのまま使うか、和名を付けるか）
- [ ] 「境界タイプ」のユーザー体験設計（2候補の表示方法）
- [ ] 有料機能（詳細レポート・相性診断）の課金設計
- [ ] 多言語対応スコープ（英語版を初期スコープに含めるか）
- [ ] 既存診断（ソシオニクス・エニアグラム）との「相互診断パッケージ」展開
- [ ] psychology-agent による理論監修フロー（設問の学術的妥当性担保）

---

*このドキュメントは `product-agent` が初稿作成。各章の `← [agent名]` セクションは、対応エージェントによって埋められます。*
