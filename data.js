// =============================================================================
// data.js — 農的ストックビジネス仮説DB サンプルデータ
// 将来的に data.json + fetch() に移行する際はこのファイルを置き換えるだけでOK
// =============================================================================

window.SAF_DATA = {

  // ---------------------------------------------------------------------------
  // 仮説データ
  // scores: 各項目 1〜5 / 満点70点
  //   価値スコア(6項目/30点): timeValue, ruralValue, educationalValue,
  //                            rarity, storyPotential, reproducibility
  //   ビジネスポテンシャル(5項目/25点): stockability, contentEase,
  //                            productEase, experienceEase, communityEase
  //   実行指標(3項目/15点): initialCost(5=低コスト), effort(5=低手間), priority
  // ---------------------------------------------------------------------------
  hypotheses: [
    {
      id: 'h001',
      title: 'アマチャ（甘茶）',
      category: '希少植物・生薬作物',
      description: '花まつりで使われる甘茶の原料植物。挿し木で安定増殖でき、乾燥茶葉は長期保存可能。仏教行事とのストーリー連携、摘み取り体験、自家ブレンドワークショップなど体験商品との親和性が高い。',
      status: '検証中',
      startDate: '2026-03-01',
      coverImage: '',
      verificationItems: [
        '挿し木の発根率確認（用土比較）',
        '苗の販売価格帯と需要調査',
        '茶葉の乾燥・加工プロセス確立',
        '甘茶体験ワークショップの企画',
        '花まつりとの連携可能性調査'
      ],
      scores: {
        timeValue: 4,
        ruralValue: 4,
        educationalValue: 5,
        rarity: 4,
        storyPotential: 5,
        reproducibility: 4,
        stockability: 5,
        contentEase: 5,
        productEase: 5,
        experienceEase: 5,
        communityEase: 4,
        initialCost: 4,
        effort: 4,
        priority: 5
      },
      monetizationPaths: ['苗販売', 'お茶販売', 'ワークショップ', 'note記事', 'YouTube'],
      notes: '山梨での栽培適性を確認。標高800m以上の環境が好適とされる。',
      observationIds: ['o003'],
      createdAt: '2026-02-15'
    },
    {
      id: 'h002',
      title: 'カラスビシャク（半夏）',
      category: '希少植物・生薬作物',
      description: '漢方生薬「半夏」の原料。山梨高冷地に自生し、珠芽・球茎・種子の3経路で増殖可能。万葉集にも登場する歴史的薬草で、ストーリー性が高い。乾燥球茎は長期保存・輸送が容易。',
      status: '検証中',
      startDate: '2026-03-15',
      coverImage: '',
      verificationItems: [
        '珠芽（むかご）による自然増殖率の計測',
        '球茎3サイズ分球の発芽率比較（大/中/小）',
        '種子発芽率と播種適期の確認',
        '乾燥球茎の市場価格調査（漢方問屋）',
        '自生地の収量推計と採取ルールの整理'
      ],
      scores: {
        timeValue: 5,
        ruralValue: 5,
        educationalValue: 4,
        rarity: 5,
        storyPotential: 5,
        reproducibility: 3,
        stockability: 4,
        contentEase: 4,
        productEase: 3,
        experienceEase: 4,
        communityEase: 3,
        initialCost: 5,
        effort: 4,
        priority: 5
      },
      monetizationPaths: ['乾燥球茎販売', 'note記事（薬草図鑑）', 'YouTube（採取動画）', '薬草ウォーキング体験'],
      notes: '薬機法上「食品」「観賞用」として販売する場合と「生薬」として販売する場合で規制が異なる。要確認。',
      observationIds: ['o001', 'o002'],
      createdAt: '2026-01-10'
    },
    {
      id: 'h003',
      title: '落ち葉コンポスト（腐葉土づくり）',
      category: '土づくり',
      description: '雑木林の落ち葉を活用した腐葉土製造。原材料費ゼロ・田舎ならではの資源活用。ノウハウのデジタルストック化（note/YouTube）と体験ワークショップへの展開が最も現実的で即効性が高い。',
      status: '継続観察',
      startDate: '2026-01-15',
      coverImage: '',
      verificationItems: [
        '落ち葉コンポストの温度変化と熟成期間計測',
        '米ぬか・鶏ふん添加による分解促進効果',
        '完成腐葉土の成分分析（EC値・pH）',
        'ワークショップ1回あたりの採算性試算',
        'note記事の反応率とSNS拡散確認'
      ],
      scores: {
        timeValue: 3,
        ruralValue: 4,
        educationalValue: 5,
        rarity: 2,
        storyPotential: 4,
        reproducibility: 5,
        stockability: 4,
        contentEase: 5,
        productEase: 3,
        experienceEase: 5,
        communityEase: 5,
        initialCost: 5,
        effort: 4,
        priority: 4
      },
      monetizationPaths: ['note記事', 'YouTube', 'ワークショップ', '電子書籍', 'コミュニティ'],
      notes: '腐葉土の販売は物より情報商品・体験商品に向いている。',
      observationIds: ['o004'],
      createdAt: '2026-01-05'
    },
    {
      id: 'h004',
      title: 'マカ（高冷地適性検証）',
      category: '希少植物・生薬作物',
      description: 'ペルー原産の高山植物。山梨の高標高環境が適地である可能性がある。「国産マカ」は希少性が極めて高く、自家採種で連作が可能。乾燥粉末・カプセル化で高付加価値商品になりうる。',
      status: '検証前',
      startDate: '',
      coverImage: '',
      verificationItems: [
        '標高800〜1200mでの栽培適性確認',
        '自家採種の成功率と発芽率',
        '乾燥・粉末化の加工フロー確立',
        '国産マカの市場価格調査',
        '薬事法・食品表示の確認'
      ],
      scores: {
        timeValue: 4,
        ruralValue: 5,
        educationalValue: 3,
        rarity: 5,
        storyPotential: 4,
        reproducibility: 4,
        stockability: 5,
        contentEase: 4,
        productEase: 4,
        experienceEase: 2,
        communityEase: 2,
        initialCost: 3,
        effort: 3,
        priority: 3
      },
      monetizationPaths: ['粉末販売', 'note記事', 'YouTube', '種子販売'],
      notes: '栽培の実績データがほぼない。先行事例として北海道の農家1件を確認。',
      observationIds: [],
      createdAt: '2026-02-01'
    },
    {
      id: 'h005',
      title: 'ミミズコンポスト（バーミカルチャー）',
      category: '土づくり',
      description: 'シマミミズによる生ごみ処理と高品質堆肥製造。子ども向け教育コンテンツとの親和性が最も高い。スターターキット販売、小学校・ホームスクール向け出張ワークショップへの展開が現実的。',
      status: '検証中',
      startDate: '2026-04-01',
      coverImage: '',
      verificationItems: [
        'シマミミズ200匹あたりの生ごみ処理速度計測',
        '温度帯別（10〜25度）の活性度比較',
        'バーミコンポストの肥料効果検証',
        'スターターキットの原価と販売価格設定',
        '小学校出張授業の実施と反応収集'
      ],
      scores: {
        timeValue: 3,
        ruralValue: 3,
        educationalValue: 5,
        rarity: 3,
        storyPotential: 4,
        reproducibility: 5,
        stockability: 4,
        contentEase: 5,
        productEase: 4,
        experienceEase: 5,
        communityEase: 5,
        initialCost: 4,
        effort: 3,
        priority: 3
      },
      monetizationPaths: ['スターターキット販売', 'note記事', 'YouTube', '体験授業', 'コミュニティ'],
      notes: '子ども教育軸で展開すると差別化しやすい。',
      observationIds: ['o005'],
      createdAt: '2026-03-20'
    },
    {
      id: 'h006',
      title: 'ギョウジャニンニク（長期栽培）',
      category: '希少植物・生薬作物',
      description: '北方系の希少山菜。種から収穫まで5〜7年かかることが逆に最大の強みになる。希少性と待つストーリーが商品価値の核。醤油漬け・ペースト加工で保存販売も可能。',
      status: '検証前',
      startDate: '',
      coverImage: '',
      verificationItems: [
        '山梨高冷地での越冬・発芽確認',
        '株分けによる増殖速度の計測',
        '醤油漬け・ペースト加工の試作',
        '希少山菜として販売可能な流通経路調査',
        '「7年物」ストーリーのコンテンツ化計画'
      ],
      scores: {
        timeValue: 5,
        ruralValue: 5,
        educationalValue: 3,
        rarity: 5,
        storyPotential: 4,
        reproducibility: 2,
        stockability: 3,
        contentEase: 4,
        productEase: 4,
        experienceEase: 3,
        communityEase: 3,
        initialCost: 4,
        effort: 3,
        priority: 4
      },
      monetizationPaths: ['苗・株販売', '加工品販売', 'note記事', 'YouTube'],
      notes: '7年待つことそのものをコンテンツ化する戦略が有効。今すぐ植えることに意味がある。',
      observationIds: [],
      createdAt: '2026-02-20'
    },
    {
      id: 'h007',
      title: '収量増加比較試験（家庭菜園）',
      category: '家庭菜園',
      description: '土の種類・堆肥・マルチ・水やり・プランターサイズなどの変数を変えた比較試験。データそのものがストック資産になる。教材化・電子書籍化で長く使えるコンテンツになりうる。',
      status: '検証中',
      startDate: '2026-04-15',
      coverImage: '',
      verificationItems: [
        '土の種類別（赤玉/腐葉土/市販培養土）収量比較',
        '自家製堆肥と市販堆肥の効果比較',
        'マルチの有無による土壌温度と収量差',
        '水やり頻度と収量・品質の相関',
        'プランターサイズ別の収量効率比較'
      ],
      scores: {
        timeValue: 2,
        ruralValue: 3,
        educationalValue: 5,
        rarity: 3,
        storyPotential: 3,
        reproducibility: 5,
        stockability: 5,
        contentEase: 4,
        productEase: 3,
        experienceEase: 3,
        communityEase: 4,
        initialCost: 4,
        effort: 2,
        priority: 2
      },
      monetizationPaths: ['note記事', '電子書籍', 'YouTube', '教材販売'],
      notes: '記録の継続がすべて。データが蓄積されるほど価値が上がる。',
      observationIds: [],
      createdAt: '2026-04-10'
    }
  ],

  // ---------------------------------------------------------------------------
  // 観察記録データ
  // ---------------------------------------------------------------------------
  observations: [
    {
      id: 'o001',
      hypothesisId: 'h002',
      title: 'カラスビシャク珠芽の自然落下・発根確認',
      content: '昨年自生していた株の周辺30cm圏内に珠芽が5〜8個落下・発根しているのを確認。葉柄上部の珠芽形成は7月以降と推定。翌年の自然増殖密度の計測を継続する。',
      date: '2026-04-10',
      location: '北斜面・標高920m',
      tags: ['珠芽', '自然増殖', '発根確認', 'カラスビシャク'],
      createdAt: '2026-04-10T09:30:00'
    },
    {
      id: 'o002',
      hypothesisId: 'h002',
      title: '球茎3サイズ分球試験・定植',
      content: '大（直径2cm以上）・中（1〜2cm）・小（1cm以下）の3サイズに分け各10球ずつプランターに定植。発芽率の差異を6月末に記録予定。用土は赤玉土6:腐葉土4。',
      date: '2026-03-20',
      location: '圃場A・プランター試験区',
      tags: ['球茎', '比較試験', '定植', 'カラスビシャク'],
      createdAt: '2026-03-20T08:00:00'
    },
    {
      id: 'o003',
      hypothesisId: 'h001',
      title: 'アマチャ挿し木・第1回発根率確認',
      content: '3月初旬に挿した40本のうち発根確認できたのは28本（発根率70%）。赤玉土+バーミキュライト1:1混合が最も発根が早く、赤玉土単用より5日早い。遮光50%が有効だった。',
      date: '2026-04-18',
      location: '畑B・アマチャ区画',
      tags: ['挿し木', '発根率', '比較', 'アマチャ'],
      createdAt: '2026-04-18T14:00:00'
    },
    {
      id: 'o004',
      hypothesisId: 'h003',
      title: '落ち葉コンポスト3ヶ月後・温度と分解状態',
      content: '1月仕込み分の内部温度が55度を維持。外層は未分解だが中心部は腐植化が進んでいる。切り返し1回実施後、全体的に均質化。米ぬか追加で分解が明らかに加速した。動画撮影済み。',
      date: '2026-04-05',
      location: '雑木林エリア・コンポストヤード',
      tags: ['温度管理', '腐植化', '3ヶ月経過', '落ち葉'],
      createdAt: '2026-04-05T10:00:00'
    },
    {
      id: 'o005',
      hypothesisId: 'h005',
      title: 'ミミズコンポスト・処理速度と適温確認',
      content: 'シマミミズ200匹に対し1日あたり約80gの野菜くずを処理。2日で跡形なし。温度15〜20度が最も活性が高く、10度以下で活動が著しく低下。子ども向け観察ノートの素材として動画撮影済み。',
      date: '2026-04-22',
      location: '室内・ミミズ箱（段ボール製）',
      tags: ['処理速度', '適温', '教育素材', 'ミミズ'],
      createdAt: '2026-04-22T16:00:00'
    }
  ]
};
