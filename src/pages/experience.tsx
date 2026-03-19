import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './experience.module.css';

type Role = {
  title: string;
  company: string;
  period: string;
  location: string;
  type: 'full-time' | 'contract' | 'freelance';
  summary: string;
  achievements: string[];
  stack: string[];
};

const EXPERIENCE: Role[] = [
  {
    title: 'Senior .NET Developer Analyst',
    company: 'Accenture',
    period: 'Nov 2025 – Present',
    location: 'Mauritius · Hybrid',
    type: 'full-time',
    summary:
      'Promoted to senior analyst role — driving technical design and delivery of enterprise .NET solutions for large-scale clients.',
    achievements: [
      'Lead technical design and architecture decisions for complex .NET application modules',
      'Collaborate with cross-functional teams to translate business requirements into scalable solutions',
      'Establish development standards and best practices across project teams',
      'Mentor junior and mid-level developers through code reviews and knowledge-sharing sessions',
    ],
    stack: ['.NET', 'ASP.NET Core', 'SQL Server', 'T-SQL', 'Azure', 'GitHub Actions', 'React', 'Blazor', 'Microsoft Power Automate'],
  },
  {
    title: '.NET Developer Analyst',
    company: 'Accenture',
    period: 'Mar 2023 – Nov 2025',
    location: 'Mauritius · Hybrid',
    type: 'full-time',
    summary:
      'Delivered enterprise .NET applications at scale, working across backend services, database layer, and CI/CD pipelines.',
    achievements: [
      'Developed and maintained enterprise-grade .NET applications serving mission-critical business processes',
      'Designed and optimized complex T-SQL queries and stored procedures for high-volume data processing',
      'Built RESTful APIs with ASP.NET Core integrated with SQL Server and Azure services',
      'Contributed to CI/CD pipeline automation, reducing deployment cycles and improving release reliability',
    ],
    stack: ['.NET', 'ASP.NET Core', 'SQL Server', 'T-SQL', 'Azure', 'GitHub Actions', 'React', 'Blazor'],
  },
  {
    title: 'Application Development Team Lead',
    company: 'Monetics SA',
    period: 'Feb 2021 – Mar 2022',
    location: 'Lomé, Togo',
    type: 'full-time',
    summary:
      'Led the application development team — coordinating task assignments, code reviews, and delivery timelines for the engineering group.',
    achievements: [
      'Managed and coordinated the development team, assigning tasks and ensuring on-time delivery',
      'Introduced structured code review processes to improve code quality and knowledge sharing',
      'Liaised between business stakeholders and the engineering team to align priorities',
      'Drove adoption of modern development practices within the team',
    ],
    stack: ['.NET', 'SQL Server', 'T-SQL', 'Azure'],
  },
  {
    title: '.NET Developer',
    company: 'Pro Consulting',
    period: 'Sep 2019 – Feb 2023',
    location: 'Lomé, Togo',
    type: 'full-time',
    summary:
      'Full-cycle .NET development — from requirements analysis and system design to implementation and database modeling.',
    achievements: [
      'Performed analysis, design, and implementation of .NET applications across multiple client projects',
      'Designed and maintained relational database schemas and wrote optimized T-SQL for complex business logic',
      'Assigned and tracked developer tasks, ensuring alignment with project milestones',
      'Built modular, maintainable codebases following clean architecture principles',
    ],
    stack: ['.NET', 'ASP.NET', 'SQL Server', 'T-SQL', 'Entity Framework'],
  },
  {
    title: 'Web Developer',
    company: 'Eltimar',
    period: 'Aug 2018 – Sep 2018',
    location: 'Lomé, Togo',
    type: 'freelance',
    summary:
      'Short-term web development engagement delivering a client-facing web application.',
    achievements: [
      'Designed and developed a responsive web application from scratch',
      'Collaborated directly with the client to gather requirements and iterate on deliverables',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
];

const EDUCATION = [
  {
    degree: "Bachelor's in Computer Science",
    institution: 'University',
    period: '2015 – 2019',
    notes: 'Focus on distributed systems and software engineering.',
  },
];

const CERTIFICATIONS = [
  { name: 'Microsoft Azure Developer Associate (AZ-204)', issuer: 'Microsoft', year: '2023' },
  { name: 'Microsoft Azure Fundamentals (AZ-900)', issuer: 'Microsoft', year: '2022' },
];

const TYPE_COLORS: Record<Role['type'], string> = {
  'full-time': '#22c55e',
  'contract': '#f59e0b',
  'freelance': '#a78bfa',
};

function RoleCard({ role }: { role: Role }) {
  return (
    <div className={clsx('port-card', styles.roleCard)}>
      <div className={styles.roleHeader}>
        <div>
          <h3 className={styles.roleTitle}>{role.title}</h3>
          <div className={styles.roleMeta}>
            <strong>{role.company}</strong>
            <span className={styles.dot}>·</span>
            <span>{role.location}</span>
            <span className={styles.dot}>·</span>
            <span
              className={styles.roleType}
              style={{ color: TYPE_COLORS[role.type] }}
            >
              {role.type}
            </span>
          </div>
        </div>
        <div className={styles.rolePeriod}>{role.period}</div>
      </div>

      <p className={styles.roleSummary}>{role.summary}</p>

      <ul className={styles.achievements}>
        {role.achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>

      <div className={styles.tags}>
        {role.stack.map((t) => (
          <span key={t} className="port-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Experience(): ReactNode {
  return (
    <Layout title="Experience · Fad Ouro Agoro" description="Professional experience of Fad Ouro Agoro">
      <section className={styles.hero}>
        <div className="container">
          <div className="port-badge" style={{ marginBottom: '1.5rem' }}>Career</div>
          <h1 className={styles.heroTitle}>Experience</h1>
          <p className={styles.heroSub}>
            7 years delivering production software — from leading development teams in Togo
            to building enterprise solutions at Accenture in Mauritius.
          </p>
        </div>
      </section>

      {/* ── Work History ──────────────────────────────────────── */}
      <section className="port-section port-section-alt">
        <div className="container">
          <h2 className="port-section-title">Work History</h2>
          <p className="port-section-subtitle">Roles that shaped my engineering perspective</p>
          <div className={styles.timeline}>
            {EXPERIENCE.map((r, i) => (
              <div key={r.company + r.period} className={styles.timelineItem}>
                <div className={styles.timelineLine}>
                  <div className={styles.timelineDot} />
                  {i < EXPERIENCE.length - 1 && <div className={styles.timelineTrack} />}
                </div>
                <div className={styles.timelineContent}>
                  <RoleCard role={r} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education & Certs ─────────────────────────────────── */}
      <section className="port-section">
        <div className="container">
          <div className={styles.eduGrid}>
            <div>
              <h2 className="port-section-title">Education</h2>
              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {EDUCATION.map((e) => (
                  <div key={e.degree} className={clsx('port-card', styles.eduCard)}>
                    <h3 className={styles.eduDegree}>{e.degree}</h3>
                    <div className={styles.eduMeta}>
                      <span>{e.institution}</span>
                      <span className={styles.dot}>·</span>
                      <span>{e.period}</span>
                    </div>
                    {e.notes && <p className={styles.eduNotes}>{e.notes}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="port-section-title">Certifications</h2>
              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {CERTIFICATIONS.map((c) => (
                  <div key={c.name} className={clsx('port-card', styles.certCard)}>
                    <div className={styles.certIcon}>🏅</div>
                    <div>
                      <div className={styles.certName}>{c.name}</div>
                      <div className={styles.certMeta}>{c.issuer} · {c.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
