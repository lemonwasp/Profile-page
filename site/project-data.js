/* Content checked against the linked public READMEs and implementation artifacts. */
const projects = {
  ibuki: {
    link: 'https://github.com/jphacks/hs_2605',
    readme: 'https://github.com/jphacks/hs_2605/blob/main/README.md',
    stack: ['60 GHz mmWave', 'React', 'TypeScript', 'Python', 'WebSocket', 'Parquet'],
    media: {
      src: 'assets/ibuki-dashboard.png',
      en: {alt: 'IBUKI dashboard with recorded respiratory data and sensor status', caption: 'Repository screenshot · recorded-data playback'},
      ja: {alt: '記録済みの呼吸データとセンサー状態を表示するIBUKIダッシュボード', caption: 'リポジトリの実画面 · 記録済みデータの再生'}
    },
    sources: [
      {label: 'README', href: 'https://github.com/jphacks/hs_2605/blob/main/README.md'},
      {label: 'Windows · PR #66', href: 'https://github.com/jphacks/hs_2605/pull/66'},
      {label: 'Data pipeline · PR #112', href: 'https://github.com/jphacks/hs_2605/pull/112'}
    ],
    en: {
      category: '01 / AI · IoT · TEAM PROJECT', title: 'IBUKI — 息吹',
      intro: 'A camera-free breathing-monitoring prototype using 60 GHz radar, built by the hs_2605 team for JPHACKS 2026.',
      summary: {
        role: 'Dashboard, Windows launcher and alarm, offline data analysis.',
        problem: 'Make sensor states, startup and recorded radar data easier to inspect.',
        implementation: 'WebSocket state UI, native audio, quality checks and Parquet / HTML reports.',
        outcome: 'Hiroshima Audience Award (team); Windows and data work traceable in public PRs.'
      },
      role: ['Contributed to the React / TypeScript dashboard and its WebSocket connection states.', 'Built the Windows launcher and native alarm playback.', 'Built offline recording analysis, quality diagnostics, standard datasets and report tooling.'],
      problem: ['Starting the prototype involved multiple tools, while connection loss and stale data needed clear user feedback.', 'Recorded radar data needed a consistent format and quality diagnostics before analysis.'],
      implementation: ['Added a one-command Windows launch path and repeatable native alarm playback.', 'Distinguished connecting, stale-data and disconnected states in the dashboard.', 'Implemented source-preserving parsing, schema-v1 Parquet ingestion, STFT views and standalone HTML reports.'],
      outcome: ['The IBUKI team received the JPHACKS 2026 Hiroshima Hack Day Audience Award.', 'Windows support and offline ingestion are documented in merged PRs #66 and #112.', 'The labeled evaluation tool exists; independent validation CSV / JSON pairs were unavailable in the documented environment, so no denoising accuracy gain is claimed.'],
      disclaimer: 'Hackathon prototype. Repository tests used adults; infant or clinical performance has not been validated.'
    },
    ja: {
      category: '01 / AI · IoT · チーム開発', title: 'IBUKI — 息吹',
      intro: 'JPHACKS 2026でhs_2605チームが開発した、60 GHzレーダーによるカメラ不要・非接触の呼吸見守り試作品です。',
      summary: {
        role: 'ダッシュボード、Windows起動・警報、オフライン解析。',
        problem: 'センサーの状態、起動手順、録画データをわかりやすくする。',
        implementation: 'WebSocket状態表示、音声警報、品質診断、Parquet・HTMLレポート。',
        outcome: '広島会場オーディエンス賞（チーム）。Windows・解析の実装は公開PRで確認可能。'
      },
      role: ['React / TypeScriptのダッシュボードとWebSocket接続状態の表示に貢献。', 'Windowsランチャーとネイティブアラーム再生を実装。', '録画解析、品質診断、標準データセット、レポート出力を開発。'],
      problem: ['起動時に複数の準備が必要で、接続断やデータ停滞も利用者へ明確に伝える必要がありました。', '解析前の録画データに統一形式と品質診断が必要でした。'],
      implementation: ['Windowsのワンコマンド起動と繰り返し再生する警報を実装。', '接続中・データ停滞・切断を区別するUIを整備。', '元録画を保つパーサー、schema v1のParquet取込、STFT表示、単体HTMLレポートを開発。'],
      outcome: ['JPHACKS 2026広島会場Hack Day Audience Awardをチームで受賞。', 'Windows対応と標準データ化はマージ済みPR #66・#112で確認できます。', 'ラベル付き評価ツールは実装済みですが、記載環境に独立した検証用CSV / JSONペアがなく、ノイズ除去による精度改善は未測定です。'],
      disclaimer: 'ハッカソンの試作品です。公開試験は成人対象で、乳児・臨床での性能は未検証です。'
    }
  },
  ai: {
    link: 'https://github.com/lemonwasp/ai-lead-conversion-platform',
    readme: 'https://github.com/lemonwasp/ai-lead-conversion-platform/blob/2fa312d22ea0224a04776fff8268c4559dad9fc7/README.md',
    stack: ['Python', 'FastAPI', 'XGBoost', 'scikit-learn', 'React', 'TypeScript'],
    media: {
      src: 'assets/ai-lead-flow.svg',
      en: {alt: 'Illustration of synthetic CRM data, 18-feature modeling, and the model API, with a separate review and draft workflow', caption: 'Explanatory illustration · based on the README'},
      ja: {alt: '合成CRMデータ、18特徴量のモデル、APIと、別系統のレビュー・文面作成を示す説明図', caption: '説明用イラスト · READMEの処理フローを図解'}
    },
    sources: [
      {label: 'README', href: 'https://github.com/lemonwasp/ai-lead-conversion-platform/blob/2fa312d22ea0224a04776fff8268c4559dad9fc7/README.md'},
      {label: 'API contract tests', href: 'https://github.com/lemonwasp/ai-lead-conversion-platform/blob/2fa312d22ea0224a04776fff8268c4559dad9fc7/tests/test_historical_prediction_api.py'}
    ],
    en: {
      category: '02 / APPLIED ML · INDEPENDENT RECONSTRUCTION', title: 'AI Lead Conversion Platform',
      intro: 'An independent 2026 reconstruction of a 2024 team hackathon CRM prototype. Public aggregate statistics inform newly generated synthetic data.',
      summary: {
        role: 'Independent reconstruction across data, modeling, API and review UI.',
        problem: 'Rebuild the historical workflow without exposing private CRM records.',
        implementation: '18-feature pipeline, XGBoost / Random Forest, FastAPI and outreach drafts.',
        outcome: 'Prediction and draft endpoints implemented; API contract tests cover invalid input.'
      },
      role: ['Reconstructed the public data pipeline, modeling primitives and FastAPI boundaries.', 'Built the React / TypeScript lead-review dashboard and human-reviewed draft flow.'],
      problem: ['The original company records and proprietary source cannot be published.', 'The reconstruction needs explicit data-leakage boundaries and reproducible training / evaluation splits.'],
      implementation: ['Generated aggregate-calibrated synthetic leads and notes, then rebuilt the recovered 18-feature modeling table.', 'Added deterministic stratified splits, XGBoost / Random Forest primitives and a prediction endpoint.', 'Connected the review dashboard to the outreach-draft API with a deterministic local fallback.'],
      outcome: ['The README records implemented prediction and outreach-draft endpoints.', 'Committed API contract tests check supported predictions, wrong schemas, non-numeric / non-finite values and an unloaded model.', 'The dashboard still displays a fixture-backed prediction. Direct prediction-API integration and a consolidated experiment report remain on the roadmap.'],
      disclaimer: 'Synthetic data; reconstruction in progress. The 2024 award belongs to the original team prototype. Business conversion lift has not been measured for this reconstruction.'
    },
    ja: {
      category: '02 / 応用機械学習 · 個人での再構築', title: 'AI Lead Conversion Platform',
      intro: '2024年のチーム制作CRM試作品を2026年に個人で再構築。公開統計を参考に新しく生成した合成データを使っています。',
      summary: {
        role: 'データ・モデル・API・レビュー画面を個人で再構築。',
        problem: '非公開CRMデータを公開せず、過去の処理を再現する。',
        implementation: '18特徴量、XGBoost / Random Forest、FastAPI、営業文面ドラフト。',
        outcome: '推論・文面APIを実装。入力不正などを確認するAPI契約テストを整備。'
      },
      role: ['公開用データ処理、モデル処理、FastAPI境界を再構築。', 'React / TypeScriptのレビュー画面と、人が確認する文面作成フローを開発。'],
      problem: ['元の企業データや非公開ソースコードは公開できません。', 'データ漏洩を避け、学習と評価の境界を再現可能にする必要があります。'],
      implementation: ['公開統計に合わせた合成リード・ノートを生成し、18特徴量のモデル用テーブルを再構築。', '決定的な層化分割、XGBoost / Random Forest処理、推論APIを実装。', 'レビュー画面を文面ドラフトAPIに接続し、ローカル代替ロジックを整備。'],
      outcome: ['READMEで推論APIと文面ドラフトAPIの実装を確認できます。', '公開API契約テストは予測、スキーマ不正、非数値・非有限値、モデル未読込を対象としています。', '画面の予測値は固定データ由来です。推論APIとの直接接続と統合実験レポートは今後の課題です。'],
      disclaimer: '合成データを使う開発中の再構築版です。2024年の受賞は元のチーム試作品のものです。この再構築版の成約率改善は未測定です。'
    }
  },
  leteatgo: {
    link: 'https://github.com/YJU-5/project-leteatgo-nestjs-repo',
    readme: 'https://github.com/YJU-5/project-leteatgo-nestjs-repo/blob/main/README.md',
    stack: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'AWS S3'],
    media: {
      src: 'assets/leteatgo-readme.webp',
      en: {alt: 'Social dining photo collage used as the Let Eat Go frontend README cover', caption: 'Actual README cover image · not a product screenshot'},
      ja: {alt: 'Let Eat GoのフロントエンドREADMEで使われている食事交流の写真', caption: 'README掲載の実画像 · アプリ画面ではありません'}
    },
    sources: [
      {label: 'API README · contribution', href: 'https://github.com/YJU-5/project-leteatgo-nestjs-repo/blob/main/README.md#contribution-highlight--lemonwasp'},
      {label: 'Frontend README', href: 'https://github.com/YJU-5/project-leteatgo-nextjs-repo/blob/main/README.md'},
      {label: 'Contribution history', href: 'https://github.com/YJU-5/project-leteatgo-nestjs-repo/commits/main/?author=lemonwasp'}
    ],
    en: {
      category: '03 / SOCIAL DINING · FOUR-PERSON TEAM', title: 'Let Eat Go',
      intro: 'A four-person social dining platform for discovering, organizing and joining meals, with separate web, API and AI-service repositories.',
      summary: {
        role: 'Backend contributor: entities, authentication and album features.',
        problem: 'Keep user, chat-room and image relationships consistent across the API.',
        implementation: 'Entity relations, album backend, Comment DTO fixes and S3 deletion behavior.',
        outcome: 'These contributions are attributed in the API README and public commit history.'
      },
      role: ['Contributed to the initial entity design and authentication flow.', 'Worked on the album backend, chat-room relationships, Comment DTO fixes and S3 image deletion.'],
      problem: ['Dining events, participants, chat and community images need coherent relationships and API contracts.', 'The backend must coordinate persistent records with S3 image lifecycle behavior.'],
      implementation: ['Contributed to TypeORM entity relationships and the authentication flow in the NestJS API.', 'Developed parts of the album backend and chat-room relationships, and corrected Comment DTOs.', 'Handled parts of S3 image deletion behavior.'],
      outcome: ['The backend README explicitly attributes the listed contribution areas to @lemonwasp.', 'Public commit history provides an inspectable implementation trail within the four-person build.', 'The frontend README says the public demo and local setup are being restored; no current production traffic or performance gain is claimed.'],
      disclaimer: 'The complete platform includes work by all four team members. The original README cover is used as a project image; it is not an application screenshot.'
    },
    ja: {
      category: '03 / 食事交流 · 4名のチーム開発', title: 'Let Eat Go',
      intro: '食事会の検索・開催・参加を支援する4名のチーム開発。Web、API、AIサービスを別リポジトリで構成しています。',
      summary: {
        role: 'バックエンド担当。エンティティ、認証、アルバム機能。',
        problem: 'ユーザー・チャットルーム・画像の関連とAPIの整合性。',
        implementation: 'データ関連、アルバム、Comment DTO修正、S3画像削除。',
        outcome: 'APIのREADMEとコミット履歴に、担当した実装が明記されています。'
      },
      role: ['初期エンティティ設計と認証フローに貢献。', 'アルバム、チャットルームの関連、Comment DTO修正、S3画像削除に携わりました。'],
      problem: ['食事会、参加者、チャット、投稿画像に一貫したデータ関連とAPI契約が必要です。', 'データベースの記録とS3の画像管理を連携させる必要があります。'],
      implementation: ['NestJS APIのTypeORMエンティティ設計と認証フローに貢献。', 'アルバムの一部とチャットルームの関連を実装し、Comment DTOを修正。', 'S3画像削除処理の一部を担当。'],
      outcome: ['バックエンドREADMEのContribution Highlightに担当範囲が明記されています。', '4名のチーム開発における実装の過程を公開コミット履歴で確認できます。', 'フロントエンドREADMEでは公開デモ・ローカル手順を再整備中と記載。現時点の利用者数や性能改善値は提示していません。'],
      disclaimer: 'サービス全体は4名のチーム成果です。掲載写真は元READMEのカバー画像で、アプリ画面のスクリーンショットではありません。'
    }
  },
  tsunagaroom: {
    link: 'https://github.com/lemonwasp/tsunagaroom',
    readme: 'https://github.com/lemonwasp/tsunagaroom/blob/61edfa3c2d245a8c7fbb9a7d142dc5471184404f/README.md',
    stack: ['Java 21', 'Jakarta Servlet', 'JSP', 'JavaScript', 'MySQL 8', 'Tomcat 10'],
    media: {
      src: 'assets/tsunagaroom-flow.svg',
      en: {alt: 'Explanatory illustration of a family video playing for a senior, reaction capture, and a read-state update', caption: 'Explanatory illustration · based on the README'},
      ja: {alt: '家族の動画を高齢者が視聴し、リアクションを録画して既読を更新する流れの説明図', caption: '説明用イラスト · READMEの動画フローを図解'}
    },
    sources: [
      {label: 'README · my contributions', href: 'https://github.com/lemonwasp/tsunagaroom/blob/61edfa3c2d245a8c7fbb9a7d142dc5471184404f/README.md#my-contributions'},
      {label: 'Reaction / read-state logic', href: 'https://github.com/lemonwasp/tsunagaroom/blob/61edfa3c2d245a8c7fbb9a7d142dc5471184404f/src/main/java/logic/ReactionRecordLogic.java'}
    ],
    en: {
      category: '04 / FAMILY COMMUNICATION · TEAM TRAINING', title: 'Tsunagaroom',
      intro: 'A Java / JSP team training project for asynchronous video communication between older adults and their families.',
      summary: {
        role: 'System / interaction design and parts of recording and upload behavior.',
        problem: 'Link video playback, reaction capture and unread / read state in a simple flow.',
        implementation: 'Servlet → Logic → DAO structure, reaction storage and watched-state updates.',
        outcome: 'The source saves a reaction before updating the watched video’s read status.'
      },
      role: ['Designed the interaction between video playback and automatic reaction recording.', 'Structured Servlet → Logic → DAO flows and unread / read state rules.', 'Implemented and reviewed parts of recording / upload behavior and team integration.'],
      problem: ['Family members cannot always be online at the same time.', 'A senior user’s playback, reaction recording and watched-state update need a connected interaction flow.'],
      implementation: ['Designed a playback-driven reaction recording flow with a multipart upload.', 'Separated request handling, application logic and database access with Servlet, Logic and DAO layers.', 'Integrated reaction persistence and read-status updates.'],
      outcome: ['The README identifies personal contributions separately from the team’s work.', 'ReactionRecordLogic saves the reaction, checks the result, then updates the watched video’s read status.', 'Automated DAO / business-logic tests and CI remain future improvements in the README. No measured usability gain is claimed.'],
      disclaimer: 'Team training project. The illustration explains the documented behavior and is not a screenshot of the original application.'
    },
    ja: {
      category: '04 / 家族の動画交流 · チーム研修', title: 'Tsunagaroom',
      intro: '高齢者と家族を非同期の動画でつなぐ、Java / JSPを使ったチーム研修プロジェクトです。',
      summary: {
        role: 'システム・操作設計、録画とアップロードの一部。',
        problem: '動画再生、リアクション録画、既読・未読を簡単な操作でつなぐ。',
        implementation: 'Servlet → Logic → DAO構成、リアクション保存、既読更新。',
        outcome: 'リアクション保存の成功後に視聴済み動画を既読へ更新する実装を確認。'
      },
      role: ['動画再生とリアクション自動録画の連携を設計。', 'Servlet → Logic → DAOの構成と既読・未読のルールを整理。', '録画・アップロードの一部を実装・レビューし、チーム統合に参加。'],
      problem: ['家族全員が同じ時間にオンラインになるとは限りません。', '高齢者の動画視聴、リアクション録画、既読更新を一連の操作にまとめる必要があります。'],
      implementation: ['再生に連動したリアクション録画とmultipart送信を設計。', 'Servlet・Logic・DAOでリクエスト処理、業務処理、DB処理を分離。', 'リアクション保存と既読更新を連携。'],
      outcome: ['READMEにチーム全体と個人の担当範囲が分けて記載されています。', 'ReactionRecordLogicでリアクション保存と成否確認の後に既読を更新します。', 'DAO・業務処理の自動テストとCIは今後の改善項目です。操作性向上の実測値は提示していません。'],
      disclaimer: 'チーム研修作品です。図はREADMEの処理を説明するイラストで、元アプリのスクリーンショットではありません。'
    }
  }
};
