const translations = {
  en: {
    navAbout:'About',navWork:'Work',navEvidence:'Evidence',navJourney:'Journey',navContact:'Contact',
    heroEyebrow:'SOFTWARE ENGINEER · BASED IN JAPAN',heroHello:"Hello, I'm Taegwan Hong.",heroLine1:'Engineering',heroLine2:'what matters.',
    heroDescription:'Backend engineering with a focus on architecture, data pipelines, real-time systems, and reliability. I turn hands-on work—from enterprise software to AI prototypes—into tested, understandable systems.',
    exploreWork:'Explore my work',floatSignal:'SIGNAL DETECTED',proofOne:'Professional engineering role',proofTwo:'Selected public projects',proofThree:'JPHACKS Audience Award',scroll:'SCROLL TO EXPLORE',
    sectionAbout:'ABOUT ME',aboutHead1:'A builder at heart.',aboutHead2:'A systems thinker by choice.',
    aboutLead:"I'm a backend-focused software engineer in Japan. I care about why a system is designed a certain way, how its data flows, and what happens when things fail.",
    aboutBody:'My public work covers real-time WebSocket states, reproducible radar-data analysis, backend APIs, and team-built products. I learn by making small, reviewable changes, measuring their behavior, and writing tests before claiming improvement.',
    aboutLink:'See the engineering trail on GitHub',pillarOneTitle:'Backend & architecture',pillarOneText:'C#/.NET, Java, TypeScript, SQL, clean boundaries, persistence, and testing.',
    pillarTwoTitle:'Data & reliability',pillarTwoText:'Python data pipelines, quality checks, Parquet schemas, signal analysis, and reproducible evaluation.',
    pillarThreeTitle:'Real-time product systems',pillarThreeText:'React, TypeScript, WebSocket connection states, alarms, and clear feedback for users.',workingWith:'WORKING WITH',
    sectionProjects:'SELECTED WORK',projectsHead:'Ideas, engineered.',projectsSub:"A few things I've helped bring to life—each with a different problem worth solving.",
    ibukiAward:'TEAM AWARD',ibukiCategory:'AI / IoT · TEAM PROJECT',ibukiDesc:'A camera-free 60 GHz radar breathing-monitoring prototype from JPHACKS 2026—not a clinically validated device.',viewCase:'VIEW CASE STUDY',
    aiCategory:'APPLIED ML / FULL STACK',aiDesc:'Rebuilding an AI-assisted CRM prototype with reproducible models and privacy-safe synthetic data.',
    eatCategory:'FULL-STACK / SOCIAL PLATFORM',eatDesc:'A social dining platform built with a separate web frontend, backend API, and AI service.',
    tsunaCategory:'WEB / HUMAN CONNECTION',tsunaDesc:'Asynchronous video communication to help seniors and family members stay connected.',
    projectFoot:'Curious about the implementation details?',allRepos:'Browse all repositories',
    sectionEvidence:'ENGINEERING EVIDENCE',evidenceHead:'Beyond the demo.',evidenceSub:'Actual artifacts from IBUKI: where real-time interfaces, signal processing, and reliability meet.',evidenceRepo:'Explore the source',evidenceTrailLabel:'SELECTED IMPLEMENTATION TRAIL',
    evidenceDashboardTitle:'Monitoring dashboard',evidenceDashboardDesc:'Recorded data playback, not a live infant-monitoring claim.',evidenceAlarmTitle:'Alarm & recovery states',evidenceAlarmDesc:'A clear response flow, with Windows-native alarm playback.',evidenceSignalTitle:'Signal analysis',evidenceSignalDesc:'Adult-test breathing signal; not medical validation.',
    evidenceLayer1:'Real-time state, made legible',evidenceLayer1Body:'React and WebSocket interfaces that distinguish connecting, stale, and disconnected states.',evidenceLayer2:'Data you can inspect',evidenceLayer2Body:'Offline radar parsing, quality checks, Parquet export, STFT views, and shareable reports.',evidenceLayer3:'Explain the invisible',evidenceLayer3Body:'2D Radar Explorer and conceptual 3D crib scenes to make sensing behavior understandable.',
    recognitionLabel:'OPEN CONTRIBUTION / XERJ CORPUS HUB',recognitionHead:'A public trail of shipped work.',recognitionBody:'The XERJ contributor profile records the Windows launcher and native alarm playback commit, with attributable changes.',recognitionLink:'View contribution',evidenceCaveat:'Engineering artifacts are from the JPHACKS team prototype. Tests documented in the repository were conducted on adults, not infants. IBUKI is not a medical device.',
    sectionJourney:'THE JOURNEY',journeyHead1:'Always building.',journeyHead2:'Always learning.',
    journeySub:'A path shaped by team projects, hands-on engineering, and learning in new environments.',journeyQuote:'Build. Find a limitation. Understand. Improve. Test. Review. Repeat.',
    dateTis:'2026 — PRESENT',tisTitle:'Software Engineer · TIS West Japan',tisBody:'Working on enterprise software with C#/.NET and web technologies, developing practical experience in system design and performance improvement. Client details are intentionally omitted.',typeWork:'PROFESSIONAL EXPERIENCE',
    dateJphacks:'OCTOBER 2026',jphacksTitle:'JPHACKS 2026 · Hack Day Audience Award',jphacksBody:'Our IBUKI team received the Hiroshima venue Audience Award. I contributed to user-facing dashboards and the Windows launch/alarm experience.',typeAward:'TEAM ACHIEVEMENT',
    degreeProgressDate:'2026 — 2028 (EXPECTED)',degreeProgressTitle:'Bachelor’s studies · AI Engineering',degreeProgressBody:'Korea National Open University, Prime College · Division of Advanced Engineering (AI). Currently enrolled; expected graduation February 2028.',degreeProgressType:'EDUCATION IN PROGRESS',
    dateDegree:'FEBRUARY 2026',degreeTitle:'Associate Degree of Engineering',degreeBody:'Yeungjin College · Division of Computer Information (Cloud / Japan IT). Micro Degree in AI + Japan IT.',typeEdu:'EDUCATION',
    dateGlobal:'EARLIER EXPERIENCES',globalTitle:'Learning beyond borders',globalBody:'AI training in Germany, an international internship in Uzbekistan, and cultural experience across Japan, Korea, and Europe.',typeGlobal:'INTERNATIONAL EXPERIENCE',
    sectionPerspective:'PERSPECTIVE',globalHeading:'Rooted in engineering.<br>Open to the world.',globalText:"From software engineering in Japan to AI training in Germany, each new setting has taught me to communicate, adapt, and solve unfamiliar problems. I'm building toward teams where deep technical work meets global collaboration.",languageLabel:'LANGUAGES',languageLevels:'한국어 · Native  /  日本語 · JLPT N1  /  English · B2',
    globalExpLabel:'WORK & LEARNING ACROSS BORDERS',globalExpJapan:'Japan',globalExpJapanBody:'Enterprise software engineering · 2026–present',globalExpGermany:'Germany',globalExpGermanyBody:'One-month intensive AI training and team hackathon · Ulm',globalExpUzbekistan:'Uzbekistan',globalExpUzbekistanBody:'One-week international internship · cross-cultural work',globalExpRomania:'Romania',globalExpRomaniaBody:'One-month independent stay · language and daily life',
    sectionContact:'GET IN TOUCH',contactStatus:'OPEN TO MEANINGFUL CONVERSATIONS',contactHead1:"Let's build",contactHead2:"what's next.",contactBody:"Interested in engineering, thoughtful products, or cross-border collaboration? I'd love to connect.",contactCta:'Connect on GitHub',footerTag:'Built with curiosity. Based in Japan.',footerNote:'Public projects and personal contributions are identified separately.',
    modalRole:'MY ROLE',modalProblem:'TECHNICAL PROBLEM',modalImplementation:'IMPLEMENTATION',modalOutcome:'VERIFIED OUTCOME',modalSources:'SOURCE EVIDENCE',modalRepo:'VIEW REPOSITORY',caseDetails:'View details',navOpen:'Open navigation',navClose:'Close navigation'
  },
  ja: {
    navAbout:'自己紹介',navWork:'制作実績',navEvidence:'実装の記録',navJourney:'これまでの歩み',navContact:'お問い合わせ',
    heroEyebrow:'ソフトウェアエンジニア · 日本在住',heroHello:'はじめまして、ホン・テグァン（Taegwan Hong）です。',heroLine1:'技術で、',heroLine2:'価値をつくる。',
    heroDescription:'アーキテクチャ、データパイプライン、リアルタイムシステム、信頼性を重視するバックエンドエンジニアです。業務システムからAI試作品まで、検証可能で理解しやすい仕組みをつくります。',
    exploreWork:'制作実績を見る',floatSignal:'信号を検知',proofOne:'実務でのエンジニア経験',proofTwo:'公開プロジェクト',proofThree:'JPHACKS オーディエンス賞',scroll:'スクロールして見る',
    sectionAbout:'自己紹介',aboutHead1:'つくることが好き。',aboutHead2:'設計することにこだわる。',
    aboutLead:'日本で働くバックエンド志向のエンジニアです。設計の理由、データの流れ、障害時の振る舞いまで理解することを大切にしています。',
    aboutBody:'公開開発ではWebSocketの接続状態、再現可能なレーダーデータ解析、バックエンドAPI、チームプロダクトに取り組んできました。小さな変更をレビュー可能にし、挙動を確かめ、テストを通じて改善を検証します。',
    aboutLink:'GitHubで開発の過程を見る',pillarOneTitle:'バックエンドとアーキテクチャ',pillarOneText:'C#/.NET、Java、TypeScript、SQLを中心に、責務分離・データ永続化・テストに取り組んでいます。',
    pillarTwoTitle:'データと信頼性',pillarTwoText:'Pythonのデータ処理、品質診断、Parquetスキーマ、信号解析、再現性のある評価。',
    pillarThreeTitle:'リアルタイムなプロダクト開発',pillarThreeText:'React、TypeScript、WebSocketの接続状態、警報、ユーザーに伝わるフィードバック。',workingWith:'使用・学習技術',
    sectionProjects:'制作実績',projectsHead:'アイデアを、形に。',projectsSub:'それぞれ異なる課題に向き合った、チーム開発と個人学習の記録です。',
    ibukiAward:'チーム受賞',ibukiCategory:'AI / IoT · チーム開発',ibukiDesc:'JPHACKS 2026で開発した60 GHzミリ波レーダーによる非接触の呼吸モニタリング試作品。臨床検証済みの機器ではありません。',viewCase:'詳細を見る',
    aiCategory:'応用機械学習 / フルスタック',aiDesc:'再現可能な機械学習モデルとプライバシーに配慮した合成データで、AI支援型CRMを再構築中。',
    eatCategory:'フルスタック / ソーシャルサービス',eatDesc:'Webフロントエンド、バックエンドAPI、AIサービスを分離した食事交流プラットフォーム。',
    tsunaCategory:'Web / コミュニケーション',tsunaDesc:'高齢者と家族をつなぐ、非同期動画コミュニケーションWebアプリ。',
    projectFoot:'実装の詳細が気になりますか？',allRepos:'公開リポジトリ一覧',
    sectionEvidence:'実装の記録',evidenceHead:'デモの、その先へ。',evidenceSub:'IBUKIの実際の成果物。リアルタイムUI・信号処理・信頼性の工夫を紹介します。',evidenceRepo:'ソースを見る',evidenceTrailLabel:'主な実装PR',
    evidenceDashboardTitle:'モニタリング画面',evidenceDashboardDesc:'記録済みデータの再生画面であり、乳児のリアルタイム監視実績を示すものではありません。',evidenceAlarmTitle:'警報と復帰の画面',evidenceAlarmDesc:'Windowsネイティブの警報再生を含む、わかりやすい対応フロー。',evidenceSignalTitle:'信号の解析',evidenceSignalDesc:'成人を対象に測定した呼吸信号。医療的な有効性を示すものではありません。',
    evidenceLayer1:'状態を伝えるリアルタイムUI',evidenceLayer1Body:'React・WebSocketを用い、接続中・データ停滞・切断を区別するインターフェース。',evidenceLayer2:'検証できるデータパイプライン',evidenceLayer2Body:'レーダーデータの解析、品質検査、Parquet出力、STFT可視化、共有可能なレポート。',evidenceLayer3:'見えない動きを可視化',evidenceLayer3Body:'2D Radar Explorerと概念的な3Dベビーベッド表示でセンシング動作を説明。',
    recognitionLabel:'公開貢献 / XERJ CORPUS HUB',recognitionHead:'実装の足跡を、公開記録に。',recognitionBody:'Windowsランチャーとネイティブアラーム再生のコミットがXERJのコントリビューターページに掲載されています。',recognitionLink:'記録を見る',evidenceCaveat:'JPHACKSのチーム試作品による成果物です。公開リポジトリに記載された試験は成人を対象としており、乳児で検証されたものではありません。医療機器ではありません。',
    sectionJourney:'これまでの歩み',journeyHead1:'つくり続ける。',journeyHead2:'学び続ける。',
    journeySub:'チーム開発、実務経験、新しい環境での挑戦によって形づくられてきた歩み。',journeyQuote:'つくる。課題を見つける。理解する。改善する。テストする。レビューする。そして繰り返す。',
    dateTis:'2026年 — 現在',tisTitle:'ソフトウェアエンジニア · TIS西日本',tisBody:'C#/.NETやWeb技術を用いた企業向けシステム開発に携わり、設計や性能改善の実務経験を積んでいます。守秘義務に配慮し、顧客情報は掲載していません。',typeWork:'実務経験',
    dateJphacks:'2026年10月',jphacksTitle:'JPHACKS 2026 · Hack Day Audience Award',jphacksBody:'チーム作品「IBUKI」で広島会場オーディエンス賞を受賞。WebダッシュボードやWindowsランチャー・アラームの体験設計と実装に貢献しました。',typeAward:'チーム受賞',
    degreeProgressDate:'2026年 — 2028年2月（卒業予定）',degreeProgressTitle:'AI工学分野で学士課程在学中',degreeProgressBody:'韓国放送通信大学 Prime College · 先端工学部 AI専攻。現在在学中、2028年2月卒業予定。',degreeProgressType:'学士課程・在学中',
    dateDegree:'2026年2月',degreeTitle:'Associate Degree of Engineering',degreeBody:'Yeungjin College · Division of Computer Information（Cloud / Japan IT）。AI + Japan IT マイクロディグリー。',typeEdu:'学歴',
    dateGlobal:'これまでの経験',globalTitle:'国境を越えて学ぶ',globalBody:'ドイツでのAI研修、ウズベキスタンでの国際インターン、日本・韓国・欧州での異文化経験。',typeGlobal:'海外経験',
    sectionPerspective:'視点',globalHeading:'技術を深く。<br>視野を広く。',globalText:'日本でのソフトウェア開発やドイツでのAI研修など、異なる環境での経験を通じて、伝える力・適応力・未知の課題に向き合う姿勢を学びました。技術の深さと国際的な協働が両立するチームを目指しています。',languageLabel:'言語',languageLevels:'한국어 · 母語  /  日本語 · JLPT N1  /  English · B2',
    globalExpLabel:'国境を越えた仕事と学び',globalExpJapan:'日本',globalExpJapanBody:'企業向けソフトウェア開発 · 2026年〜現在',globalExpGermany:'ドイツ',globalExpGermanyBody:'ウルムでの1か月集中AI研修とチームハッカソン',globalExpUzbekistan:'ウズベキスタン',globalExpUzbekistanBody:'1週間の国際インターン · 異文化環境での協働',globalExpRomania:'ルーマニア',globalExpRomaniaBody:'1か月の個人滞在 · 言語学習と日常生活',
    sectionContact:'お問い合わせ',contactStatus:'技術や協働について、ぜひお話ししましょう',contactHead1:'次の可能性を、',contactHead2:'一緒につくる。',contactBody:'エンジニアリング、プロダクト開発、国際的な協働について、気軽にご連絡ください。',contactCta:'GitHubでつながる',footerTag:'好奇心を原動力に。日本から。',footerNote:'チームの成果と個人の担当範囲を分けて記載しています。',
    modalRole:'私の担当',modalProblem:'技術的な課題',modalImplementation:'実装したこと',modalOutcome:'根拠を確認できる成果',modalSources:'確認できる資料',modalRepo:'リポジトリを見る',caseDetails:'詳細を見る',navOpen:'ナビゲーションを開く',navClose:'ナビゲーションを閉じる'
  }
};

let currentLang = 'en';
const $ = selector => document.querySelector(selector);

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (dict[key] === undefined) return;
    if (key === 'globalHeading') element.innerHTML = dict[key];
    else element.textContent = dict[key];
  });
  document.querySelectorAll('.lang-button').forEach(button => {
    const selected = button.dataset.lang === lang;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  document.querySelectorAll('button[data-project]').forEach(button => {
    const name = projects[button.dataset.project]?.[lang]?.title;
    if (name) button.setAttribute('aria-label', lang === 'ja' ? `${name}の詳細を見る` : `View ${name} details`);
  });
  const menuOpen = $('.menu-toggle')?.getAttribute('aria-expanded') === 'true';
  $('.menu-toggle')?.setAttribute('aria-label',dict[menuOpen ? 'navClose' : 'navOpen']);
  renderProjectSummaries();
  $('.dialog-close')?.setAttribute('aria-label',lang==='ja'?'詳細を閉じる':'Close project details');
  if ($('#project-dialog').open) renderDialog($('#project-dialog').dataset.project);
  try { localStorage.setItem('portfolio-lang',lang); } catch (_) { /* preference is optional */ }
}

function renderProjectSummaries() {
  const labels = translations[currentLang];
  document.querySelectorAll('[data-project-story]').forEach(story => {
    const project = projects[story.dataset.projectStory];
    if (!project) return;
    Object.entries(project[currentLang].summary).forEach(([field, value]) => {
      story.querySelector(`[data-case-value="${field}"]`).textContent = value;
      story.querySelector(`[data-case-label="${field}"]`).textContent = labels[`modal${field[0].toUpperCase()}${field.slice(1)}`];
    });
  });
  document.querySelectorAll('[data-project-cover]').forEach(figure => {
    const media = projects[figure.dataset.projectCover].media[currentLang];
    figure.querySelector('img').alt = media.alt;
    figure.querySelector('figcaption').textContent = media.caption;
  });
  document.querySelectorAll('[data-case-details]').forEach(label => label.textContent = labels.caseDetails);
}

function renderDialog(key) {
  const project = projects[key]; if (!project) return;
  const copy = project[currentLang];
  $('#dialog-category').textContent = copy.category;
  $('#dialog-title').textContent = copy.title;
  $('#dialog-intro').textContent = copy.intro;
  for (const field of ['role', 'problem', 'implementation', 'outcome']) {
    $(`#dialog-${field}-label`).textContent = translations[currentLang][`modal${field[0].toUpperCase()}${field.slice(1)}`];
    $(`#dialog-${field}`).replaceChildren(...copy[field].map(makeListItem));
  }
  $('#dialog-image').src = project.media.src;
  $('#dialog-image').alt = project.media[currentLang].alt;
  $('#dialog-image-caption').textContent = project.media[currentLang].caption;
  $('#dialog-media').dataset.media = key;
  $('#dialog-sources-label').textContent = translations[currentLang].modalSources;
  $('#dialog-sources').replaceChildren(...project.sources.map(source => {
    const link = document.createElement('a');
    link.textContent = `${source.label} ↗`;
    link.href = source.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    return link;
  }));
  $('#dialog-stack').replaceChildren(...project.stack.map(item => {const el=document.createElement('span');el.textContent=item;return el;}));
  $('#dialog-link').href = project.link;
  $('#dialog-link-text').textContent = translations[currentLang].modalRepo;
  $('#dialog-disclaimer').textContent = copy.disclaimer;
  $('#project-dialog').dataset.project = key;
}
function makeListItem(content){const el=document.createElement('li');el.textContent=content;return el;}

document.querySelectorAll('.lang-button').forEach(button => button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
const dialog = $('#project-dialog');
document.querySelectorAll('button[data-project]').forEach(button => button.addEventListener('click',()=>{
  renderDialog(button.dataset.project); dialog.showModal(); document.body.classList.add('dialog-open');
}));
$('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog) dialog.close();});
dialog.addEventListener('close',()=>document.body.classList.remove('dialog-open'));

const menuToggle=$('.menu-toggle');const mobileNav=$('#mobile-nav');
function setMenuOpen(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', translations[currentLang][open ? 'navClose' : 'navOpen']);
  mobileNav.hidden = !open;
}
menuToggle.addEventListener('click', () => setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true'));
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) { setMenuOpen(false); menuToggle.focus(); }
});
const desktopLayout = window.matchMedia('(min-width: 761px)');
desktopLayout.addEventListener('change', event => { if (event.matches) setMenuOpen(false); });

const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});
},{threshold:.11,rootMargin:'0px 0px -20px 0px'}) : null;
document.querySelectorAll('.reveal').forEach(element=>{if(observer)observer.observe(element);else element.classList.add('is-visible');});

const navLinks = [...document.querySelectorAll('.desktop-nav a')];
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting)navLinks.forEach(link=>link.classList.toggle('active',link.hash===`#${entry.target.id}`));});
  },{rootMargin:'-30% 0px -55% 0px'});
  document.querySelectorAll('main section[id]').forEach(section=>sectionObserver.observe(section));
}
$('#year').textContent = String(new Date().getFullYear());
let storedLang = null;try{storedLang=localStorage.getItem('portfolio-lang');}catch(_){}
setLanguage(storedLang==='ja'?'ja':'en');
