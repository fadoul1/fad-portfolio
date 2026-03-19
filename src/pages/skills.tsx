import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './skills.module.css';

type Skill = {name: string; level: number};
type Category = {title: string; icon: string; skills: Skill[]};

const CATEGORIES: Category[] = [
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      {name: '.NET / C#', level: 95},
      {name: 'ASP.NET Core', level: 95},
      {name: 'Entity Framework Core', level: 85},
      {name: 'MediatR / CQRS', level: 90},
      {name: 'Dapper', level: 80},
      {name: 'SignalR', level: 80},
    ],
  },
  {
    title: 'Frontend',
    icon: '⚛️',
    skills: [
      {name: 'Blazor (WASM & Server)', level: 90},
      {name: 'React', level: 85},
      {name: 'TypeScript', level: 80},
      {name: 'Flutter / Dart', level: 70},
      {name: 'HTML / CSS', level: 85},
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      {name: 'Microsoft Azure', level: 90},
      {name: 'Docker & Kubernetes', level: 80},
      {name: 'GitHub Actions / CI/CD', level: 85},
      {name: 'Azure Bicep / IaC', level: 75},
      {name: 'Azure Service Bus', level: 85},
    ],
  },
  {
    title: 'Architecture & Patterns',
    icon: '🏗️',
    skills: [
      {name: 'Microservices', level: 90},
      {name: 'Saga Pattern', level: 85},
      {name: 'Outbox Pattern', level: 85},
      {name: 'Event Sourcing', level: 75},
      {name: 'Clean Architecture', level: 90},
      {name: 'DDD', level: 80},
    ],
  },
  {
    title: 'Messaging & Data',
    icon: '📬',
    skills: [
      {name: 'MassTransit', level: 85},
      {name: 'RabbitMQ', level: 80},
      {name: 'SQL Server / PostgreSQL', level: 85},
      {name: 'Redis', level: 80},
      {name: 'Azure Cosmos DB', level: 70},
    ],
  },
  {
    title: 'Observability & Testing',
    icon: '🔭',
    skills: [
      {name: 'OpenTelemetry', level: 75},
      {name: 'Serilog', level: 85},
      {name: 'xUnit / NUnit', level: 85},
      {name: 'Testcontainers', level: 75},
      {name: 'Prometheus / Grafana', level: 70},
    ],
  },
];

function SkillBar({skill}: {skill: Skill}) {
  return (
    <div className={styles.skillRow}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillLevel}>{skill.level}%</span>
      </div>
      <div className={styles.bar}>
        <div
          className={styles.barFill}
          style={{'--fill': `${skill.level}%`} as React.CSSProperties}
        />
      </div>
    </div>
  );
}

function CategoryCard({cat}: {cat: Category}) {
  return (
    <div className={clsx('port-card', styles.catCard)}>
      <div className={styles.catHeader}>
        <span className={styles.catIcon}>{cat.icon}</span>
        <h3 className={styles.catTitle}>{cat.title}</h3>
      </div>
      <div className={styles.skills}>
        {cat.skills.map((s) => <SkillBar key={s.name} skill={s} />)}
      </div>
    </div>
  );
}

const TOOLS = [
  'Visual Studio', 'VS Code', 'JetBrains Rider', 'Azure DevOps',
  'GitHub', 'Postman', 'Docker Desktop', 'k9s', 'Seq', 'Datadog',
  'Figma', 'Jira', 'Confluence', 'Notion',
];

export default function Skills(): ReactNode {
  return (
    <Layout title="Skills · Fad Ouro Agoro" description="Technical skills of Fad Ouro Agoro">
      <section className={styles.hero}>
        <div className="container">
          <div className="port-badge" style={{marginBottom: '1.5rem'}}>Tech Stack</div>
          <h1 className={styles.heroTitle}>Skills</h1>
          <p className={styles.heroSub}>
            My technical toolkit — built through 5+ years of shipping production systems across
            backend, frontend, cloud, and distributed systems.
          </p>
        </div>
      </section>

      <section className="port-section port-section-alt">
        <div className="container">
          <h2 className="port-section-title">Technical Skills</h2>
          <p className="port-section-subtitle">Proficiency across the full engineering stack</p>
          <div className={styles.grid}>
            {CATEGORIES.map((c) => <CategoryCard key={c.title} cat={c} />)}
          </div>
        </div>
      </section>

      <section className="port-section">
        <div className="container">
          <h2 className="port-section-title">Tools & Workflow</h2>
          <p className="port-section-subtitle">Software I use day-to-day</p>
          <div className={styles.tools}>
            {TOOLS.map((t) => (
              <span key={t} className={clsx('port-card', styles.toolChip)}>{t}</span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
