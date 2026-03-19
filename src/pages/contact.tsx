import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './contact.module.css';

const LINKS = [
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/fad-ouro-agoro',
    href: 'https://www.linkedin.com/in/fad-ouro-agoro/',
    desc: 'Connect professionally',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/fadoul1',
    href: 'https://github.com/fadoul1',
    desc: 'Browse my code',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'fadouro@gmail.com',
    href: 'mailto:fadouro@gmail.com',
    desc: 'Direct message',
  },
];

const OPEN_TO = [
  {icon: '🏢', label: 'Senior / Lead Engineering Roles'},
  {icon: '🔬', label: 'Technical Consulting'},
  {icon: '🤝', label: 'Open Source Collaboration'},
  {icon: '🎤', label: 'Conference Talks & Mentoring'},
];

export default function Contact(): ReactNode {
  return (
    <Layout title="Contact · Fad Ouro Agoro" description="Get in touch with Fad Ouro Agoro">
      <section className={styles.hero}>
        <div className="container">
          <div className="port-badge" style={{marginBottom: '1.5rem'}}>Get in touch</div>
          <h1 className={styles.heroTitle}>
            Let's <span className={styles.accent}>connect</span>
          </h1>
          <p className={styles.heroSub}>
            I'm always happy to chat about software architecture, distributed systems, or potential
            opportunities. Reach out via any of the channels below.
          </p>
        </div>
      </section>

      <section className="port-section port-section-alt">
        <div className="container">
          <div className={styles.layout}>
            {/* ── Contact Links ──────────────────────────────── */}
            <div>
              <h2 className="port-section-title">Contact</h2>
              <p className="port-section-subtitle">Pick your preferred channel</p>
              <div className={styles.links}>
                {LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={clsx('port-card', styles.linkCard)}
                  >
                    <span className={styles.linkIcon}>{l.icon}</span>
                    <div className={styles.linkBody}>
                      <div className={styles.linkLabel}>{l.label}</div>
                      <div className={styles.linkValue}>{l.value}</div>
                      <div className={styles.linkDesc}>{l.desc}</div>
                    </div>
                    <span className={styles.linkArrow}>→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* ── Open To ───────────────────────────────────── */}
            <div>
              <h2 className="port-section-title">Open To</h2>
              <p className="port-section-subtitle">What I'm currently considering</p>
              <div className={styles.openToList}>
                {OPEN_TO.map((o) => (
                  <div key={o.label} className={clsx('port-card', styles.openToCard)}>
                    <span className={styles.openToIcon}>{o.icon}</span>
                    <span className={styles.openToLabel}>{o.label}</span>
                  </div>
                ))}
              </div>

              <div className={clsx('port-card', styles.availCard)}>
                <div className={styles.availDot} />
                <div>
                  <div className={styles.availTitle}>Currently available</div>
                  <div className={styles.availDesc}>
                    Open to new opportunities starting Q2 2026. Response time is usually within 24 hours.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
