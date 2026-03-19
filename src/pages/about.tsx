import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './about.module.css';

const VALUES = [
  {icon: '🎯', title: 'Pragmatic', body: 'I favour the simplest solution that meets the requirements, avoiding over-engineering.'},
  {icon: '📐', title: 'Architecture-Minded', body: 'Every system decision is made with long-term maintainability and scalability in mind.'},
  {icon: '🔁', title: 'Iterative', body: 'Ship early, gather feedback, improve. Continuous delivery over big-bang releases.'},
  {icon: '🤝', title: 'Collaborative', body: 'Great software is a team sport. I invest in code reviews, knowledge sharing, and documentation.'},
];

const INTERESTS = [
  {icon: '🏗️', label: 'Software Architecture'},
  {icon: '🔗', label: 'Microservices'},
  {icon: '📬', label: 'Saga Pattern'},
  {icon: '📦', label: 'Outbox Pattern'},
  {icon: '☁️', label: 'Azure Cloud'},
  {icon: '📱', label: 'Flutter / Mobile'},
  {icon: '⚡', label: 'Event-Driven Systems'},
  {icon: '🧪', label: 'Clean Architecture'},
];

export default function About(): ReactNode {
  return (
    <Layout title="About · Fad Ouro Agoro" description="About Fad Ouro Agoro — Senior Software Engineer">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={clsx('port-badge', styles.badge)}>About me</div>
          <h1 className={styles.heroTitle}>
            Building software that <span className={styles.accent}>matters</span>
          </h1>
          <p className={styles.heroSub}>
            Senior .NET Developer Analyst at Accenture with 7 years of experience
            delivering enterprise applications. From leading development teams to designing
            database architectures, I build reliable systems across the full Microsoft stack.
          </p>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────── */}
      <section className={clsx('port-section port-section-alt')}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div>
              <h2 className="port-section-title">My Story</h2>
              <div className={styles.storyText}>
                <p>
                  My journey started in Lomé, Togo — building web applications and quickly moving
                  into the .NET ecosystem. What began as writing simple CRUD APIs grew into a deep
                  passion for <em>well-architected enterprise systems</em>.
                </p>
                <p>
                  At <strong>Pro Consulting</strong> I spent over three years on analysis, design,
                  and database modeling — sharpening my T-SQL and system design skills. At{' '}
                  <strong>Monetics SA</strong> I stepped into a leadership role, managing the
                  application development team and coordinating deliveries across stakeholders.
                </p>
                <p>
                  Today at <strong>Accenture</strong> in Mauritius, I work as a Senior .NET Developer
                  Analyst — building complex enterprise solutions and tackling architectural challenges
                  at scale. I'm fascinated by distributed systems patterns like the{' '}
                  <strong>Saga</strong> and <strong>Outbox</strong> patterns, and I explore mobile
                  development with <strong>Flutter</strong> on the side.
                </p>
                <p>
                  When I'm not coding, I'm reading engineering blogs, experimenting with
                  architecture patterns, or building side projects to learn new tools.
                </p>
              </div>
            </div>
            <div className={styles.statsCol}>
              <div className={clsx('port-card', styles.statCard)}>
                <div className={styles.statNumber}>7</div>
                <div className={styles.statLabel}>Years of experience</div>
              </div>
              <div className={clsx('port-card', styles.statCard)}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Projects delivered</div>
              </div>
              <div className={clsx('port-card', styles.statCard)}>
                <div className={styles.statNumber}>∞</div>
                <div className={styles.statLabel}>Lines of passion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className="port-section">
        <div className="container">
          <h2 className="port-section-title">How I work</h2>
          <p className="port-section-subtitle">Principles that guide every project</p>
          <div className={styles.valuesGrid}>
            {VALUES.map((v) => (
              <div key={v.title} className={clsx('port-card', styles.valueCard)}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueBody}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interests ────────────────────────────────────────── */}
      <section className={clsx('port-section port-section-alt')}>
        <div className="container">
          <h2 className="port-section-title">Interests & Focus Areas</h2>
          <p className="port-section-subtitle">What I'm currently excited about</p>
          <div className={styles.interestGrid}>
            {INTERESTS.map((i) => (
              <div key={i.label} className={clsx('port-card', styles.interestCard)}>
                <span className={styles.interestIcon}>{i.icon}</span>
                <span className={styles.interestLabel}>{i.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="port-section" style={{textAlign: 'center'}}>
        <div className="container">
          <h2 style={{fontWeight: 800, fontSize: '1.8rem', marginBottom: '1rem'}}>
            Want to work together?
          </h2>
          <p style={{color: 'var(--port-text-muted)', marginBottom: '2rem'}}>
            I'm open to senior engineering roles, tech lead positions, and consulting.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link className="button button--primary button--lg" to="/contact">Contact Me</Link>
            <Link className="button button--outline button--secondary button--lg" to="/experience">View Experience</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
