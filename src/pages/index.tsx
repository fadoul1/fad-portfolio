import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

const FEATURED_SKILLS = [
  {icon: '⚙️', label: 'C# - .NET'},
  {icon: '🗄️', label: 'Postgres - SQL Server'},
  {icon: '⚡', label: 'Blazor'},
  {icon: '⚛️', label: 'React'},
  {icon: '☁️', label: 'Microsoft Azure'}
];

const HIGHLIGHTS = [
  {
    icon: '🏛️',
    title: 'Software Architecture',
    body: 'Designing scalable, maintainable systems with a focus on clean architecture, CQRS, and domain-driven design.',
  },
  {
    icon: '🔗',
    title: 'Distributed Systems',
    body: 'Implementing resilient microservices with Saga, Outbox, and Event Sourcing patterns on Azure.',
  },
  {
    icon: '🚀',
    title: 'Full-Stack Delivery',
    body: 'End-to-end development from REST APIs and Blazor frontends to cloud-native deployments with CI/CD.',
  },
];

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroText}>
          <div className={clsx('port-badge', styles.heroBadge)}>
            <span className={styles.heroDot} />
            Available for opportunities
          </div>

          <h1 className={styles.heroName}>
            Hi, I'm <span className={styles.heroAccent}>Fad</span>
          </h1>
          <p className={styles.heroTitle}>
            Senior .NET Developer
          </p>
          <p className={styles.heroSub}>
            7 years crafting enterprise .NET applications, from database modeling
            and T-SQL optimization to leading development teams. Currently at{' '}
            <strong>Accenture</strong>, delivering scalable solutions with{' '}
            <strong>.NET</strong>, <strong>SQL Server</strong>, and <strong>Azure</strong>.
          </p>

          <div className={styles.heroPills}>
            {FEATURED_SKILLS.map((s) => (
              <span key={s.label} className={clsx('port-tag', styles.heroPill)}>
                {s.icon} {s.label}
              </span>
            ))}
          </div>

          <div className={styles.heroCtas}>
            <Link className="button button--primary button--lg" to="/experience">
              View Experience
            </Link>
            <Link className="button button--outline button--secondary button--lg" to="/contact">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.codeCard}>
            <div className={styles.codeCardBar}>
              <span /><span /><span />
            </div>
            <pre className={styles.codeBlock}>{`// Fad Ouro Agoro
var engineer = new Developer
{
  Name     = "Fad Ouro Agoro",
  Role     = "Sr. .NET Analyst",
  Company  = "Accenture",
  Stack    = [".NET", "SQL Server",
              "Azure", "React"],
  Passions = ["Architecture",
              "Microservices",
              "Clean Code"],
  Years    = 7
};`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  return (
    <section className={clsx('port-section port-section-alt')}>
      <div className="container">
        <h2 className="port-section-title">What I do</h2>
        <p className="port-section-subtitle">Turning complex problems into elegant solutions</p>
        <div className={styles.highlightGrid}>
          {HIGHLIGHTS.map((h) => (
            <div key={h.title} className={clsx('port-card', styles.highlightCard)}>
              <div className={styles.highlightIcon}>{h.icon}</div>
              <h3 className={styles.highlightTitle}>{h.title}</h3>
              <p className={styles.highlightBody}>{h.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className={clsx('port-section', styles.ctaSection)}>
      <div className="container" style={{textAlign: 'center'}}>
        <h2 className={styles.ctaTitle}>Let's build something great</h2>
        <p className={styles.ctaSub}>
          Open to senior / lead engineering roles, consulting, and interesting side projects.
        </p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link className="button button--primary button--lg" to="/about">
            Learn About Me
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/blog">
            Read My Blog
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="Fad Ouro Agoro · Senior .NET Developer" description="Senior .NET Developer Analyst at Accenture — 7 years building enterprise applications with .NET, SQL Server, Azure, and React.">
      <HeroSection />
      <HighlightsSection />
      <CtaSection />
    </Layout>
  );
}
