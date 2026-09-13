const links = {
  profile: "https://github.com/lemonwasp",
  tiff: "https://github.com/lemonwasp/tiff-to-pdf-performance-case-study",
  letEatGo: "https://github.com/YJU-5/project-leteatgo-nextjs-repo",
  tsunagaroom: "https://github.com/lemonwasp/tsunagaroom",
  aiLead: "https://github.com/lemonwasp/ai-lead-conversion-platform",
  dotnet: "https://github.com/lemonwasp/dotnet-study",
};

const timeline = [
  ["2023", "Yeungjin University", "Computer Information / Japan IT"],
  ["2023", "Uzbekistan", "International Internship"],
  ["2024", "Ulm, Germany", "AI Training / Hackathon"],
  ["2025", "DataX", "Internship"],
  ["2026—", "TIS West Japan", "Backend Engineer"],
  ["2026—2028", "KNOU Prime College", "Artificial Intelligence"],
];

function ArrowLink({ href, children }) {
  return (
    <a className="arrow-link" href={href} target="_blank" rel="noreferrer">
      {children}<span aria-hidden>↗</span>
    </a>
  );
}

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="Primary">
        <a className="wordmark" href="#top">TAEGWAN HONG</a>
        <div className="navlinks">
          <a href="#work">WORK</a>
          <a href="#journey">JOURNEY</a>
          <a href="#github">GITHUB</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      <section className="hero dark" id="top">
        <div className="grain" aria-hidden />
        <div className="hero-grid">
          <div>
            <p className="eyebrow">BACKEND ENGINEER / YAMAGUCHI, JAPAN</p>
            <h1 className="display hero-title">BUILD<br /><span>USEFUL</span><br />SYSTEMS.</h1>
            <p className="hero-intro">Practical backend systems, performance work, product engineering, and applied AI — grounded in real problems rather than toy demos.</p>
            <a className="button ghost" href="#work">VIEW WORK ↓</a>
          </div>
          <aside className="hero-meta">
            <div>
              <p className="micro-label">LANGUAGES</p>
              <dl className="language-list">
                <div><dt>KR</dt><dd>Native</dd></div>
                <div><dt>JP</dt><dd>Business · JLPT N1</dd></div>
                <div><dt>EN</dt><dd>Business</dd></div>
                <div><dt>DE / RO</dt><dd>Learning</dd></div>
              </dl>
            </div>
            <p className="side-note">SYSTEMS<br />PERFORMANCE<br />PRODUCT<br />APPLIED AI</p>
          </aside>
        </div>
      </section>

      <section className="section performance" id="work">
        <p className="eyebrow">01 / PERFORMANCE</p>
        <h2>TIFF → PDF</h2>
        <div className="two-col">
          <div className="project-copy">
            <h3 className="statement">DISK I/O<br />WAS THE<br />BOTTLENECK.</h3>
            <div className="metric-block">
              <p>30 pages / 1,298 KB</p>
              <strong>21.01 sec</strong>
              <small>Initial validation measurement</small>
            </div>
            <p>The first implementation wrote temporary PNG files for every page. I traced the repeated file operations, removed the intermediate disk path, and switched the conversion flow to <code>MemoryStream</code>.</p>
            <p className="fineprint">Exact post-optimization timing was not recorded, so this site does not invent a percentage or final benchmark.</p>
            <ArrowLink href={links.tiff}>VIEW CASE STUDY</ArrowLink>
          </div>
          <div className="pipeline-panel">
            <p className="micro-label">BEFORE</p>
            <div className="pipeline-row"><span>TIFF</span><b>→</b><span>BITMAP</span><b>→</b><span className="strike">TEMP PNG</span><b>→</b><span>PDF</span></div>
            <p className="micro-label">AFTER</p>
            <div className="pipeline-row"><span>TIFF</span><b>→</b><span className="accent-box">MEMORYSTREAM</span><b>→</b><span>PDF</span></div>
            <pre className="code-card">{`using var ms = new MemoryStream();\nbitmap.Save(ms, ImageFormat.Png);\nms.Position = 0;\n\nusing var image = XImage.FromStream(ms);`}</pre>
          </div>
        </div>
      </section>

      <section className="section product dark">
        <div className="grain" aria-hidden />
        <p className="eyebrow">02 / PRODUCT</p>
        <h2>LET EAT GO</h2>
        <div className="product-grid">
          <div className="real-shot-wrap">
            <img className="real-shot" src="https://raw.githubusercontent.com/YJU-5/project-leteatgo-nextjs-repo/main/public/home/socialhome.webp" alt="Let Eat Go social dining service home screen" />
            <span className="asset-label">REAL SERVICE ASSET</span>
          </div>
          <div className="project-copy light-copy">
            <h3>A social dining platform built around discovery, events, and communication.</h3>
            <p>Users can find or host dining events, communicate in real time, share photos, review experiences, and use map-based discovery.</p>
            <p>My backend contributions include initial entity design, authentication flow, album backend, chat-room relationships, Comment DTO fixes, and S3 image deletion behavior.</p>
            <div className="tags"><Tag>Next.js 15</Tag><Tag>React 18</Tag><Tag>TypeScript</Tag><Tag>NestJS 11</Tag><Tag>PostgreSQL</Tag><Tag>Socket.IO</Tag><Tag>AWS</Tag></div>
            <div className="mini-architecture">Next.js <b>→</b> NestJS <b>→</b> PostgreSQL / S3 / FastAPI AI</div>
            <ArrowLink href={links.letEatGo}>VIEW PROJECT</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section human-centered">
        <p className="eyebrow">03 / HUMAN-CENTERED SYSTEM</p>
        <div className="split-heading"><h2>TSUNAGAROOM</h2><p>Asynchronous video communication for seniors and their families.</p></div>
        <div className="two-col">
          <div className="project-copy">
            <p>Family members share short video updates. Senior users can watch when convenient, and the browser can record a natural reaction during playback. The service keeps the interaction lightweight rather than presenting itself as a medical monitoring product.</p>
            <div className="tags"><Tag>Java 21</Tag><Tag>JSP</Tag><Tag>Servlet</Tag><Tag>JavaScript</Tag><Tag>MySQL 8</Tag><Tag>Tomcat 10</Tag></div>
            <ArrowLink href={links.tsunagaroom}>VIEW PROJECT</ArrowLink>
          </div>
          <div className="flow-card">
            <p className="micro-label">CORE FLOW</p>
            <ol>
              <li><b>01</b><span>Family uploads video</span></li>
              <li><b>02</b><span>Senior watches unread video</span></li>
              <li><b>03</b><span>Reaction is recorded during playback</span></li>
              <li><b>04</b><span>Servlet → Logic → DAO → MySQL</span></li>
              <li><b>05</b><span>Read state and reaction are stored</span></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section ai dark">
        <div className="grain" aria-hidden />
        <p className="eyebrow">04 / AI + DATA</p>
        <div className="ai-grid">
          <div>
            <h2 className="statement ai-statement">WHO<br />CONVERTS<br /><span>NEXT?</span></h2>
            <p className="ai-context">AI Lead Conversion Platform</p>
            <p className="ai-context muted">Ulm, Germany / 2024 prototype<br />2026 privacy-safe reconstruction</p>
            <ArrowLink href={links.aiLead}>VIEW PROJECT</ArrowLink>
          </div>
          <div className="reconstruction-flow">
            {["Synthetic CRM data","Recovered 18-feature table","XGBoost / Random Forest","FastAPI prediction boundary","React / TypeScript review dashboard","Human-reviewed outreach draft"].map((step, i) => (
              <div className="flow-step" key={step}><span>{String(i + 1).padStart(2, "0")}</span><p>{step}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section journey" id="journey">
        <p className="eyebrow">05 / JOURNEY</p>
        <h2>DIFFERENT PLACES.<br />A CLEARER DIRECTION.</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <article className={`timeline-item ${index === 4 ? "current" : ""}`} key={`${item[0]}-${item[1]}`}>
              <p className="year">{item[0]}</p><span className="timeline-dot" /><h3>{item[1]}</h3><p>{item[2]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section repos" id="github">
        <div className="row-heading">
          <div><p className="eyebrow">06 / GITHUB</p><h2>SELECTED<br />REPOSITORIES.</h2></div>
          <p className="repo-note">No decorative contribution graph. Just repositories that show the work.</p>
        </div>
        <div className="repo-grid">
          <a href={links.tiff} target="_blank" rel="noreferrer"><strong>tiff-to-pdf-performance-case-study</strong><span>Performance case study</span><i>↗</i></a>
          <a href={links.aiLead} target="_blank" rel="noreferrer"><strong>ai-lead-conversion-platform</strong><span>AI / data reconstruction</span><i>↗</i></a>
          <a href={links.tsunagaroom} target="_blank" rel="noreferrer"><strong>tsunagaroom</strong><span>Family video communication</span><i>↗</i></a>
          <a href={links.dotnet} target="_blank" rel="noreferrer"><strong>dotnet-study</strong><span>ASP.NET / Vue engineering study</span><i>↗</i></a>
        </div>
      </section>

      <footer className="footer dark" id="contact">
        <div className="grain" aria-hidden />
        <p className="eyebrow">07 / CONTACT</p>
        <h2>LET&apos;S BUILD<br />WHAT&apos;S <span>NEXT.</span></h2>
        <p>Open to conversations about backend engineering, product systems, and globally minded teams.</p>
        <ArrowLink href={links.profile}>GITHUB</ArrowLink>
        <div className="footer-base"><span>TAEGWAN HONG</span><span>BACKEND ENGINEER / YAMAGUCHI, JAPAN</span></div>
      </footer>
    </main>
  );
}
