import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './WelcomePage.module.css';

const msCertifications = [
  {
    code: 'AZ-900',
    name: 'Azure Fundamentals',
    level: 'Principiante',
    levelColor: '#065f46',
    levelBg: '#ecfdf5',
    levelBorder: '#a7f3d0',
    description: 'Demuestra conocimientos fundamentales sobre los servicios en la nube y cómo se proporcionan esos servicios con Microsoft Azure.',
    url: 'https://learn.microsoft.com/es-es/credentials/certifications/azure-fundamentals/',
    icon: '☁️',
  },
  {
    code: 'AI-900',
    name: 'Azure AI Fundamentals',
    level: 'Principiante',
    levelColor: '#065f46',
    levelBg: '#ecfdf5',
    levelBorder: '#a7f3d0',
    description: 'Demuestra conceptos fundamentales de IA relacionados con el desarrollo de software y servicios de Microsoft Azure para crear soluciones de IA.',
    url: 'https://learn.microsoft.com/es-es/credentials/certifications/azure-ai-fundamentals/',
    icon: '🤖',
  },
  {
    code: 'SC-900',
    name: 'Security, Compliance & Identity Fundamentals',
    level: 'Principiante',
    levelColor: '#065f46',
    levelBg: '#ecfdf5',
    levelBorder: '#a7f3d0',
    description: 'Demuestra conocimientos básicos sobre conceptos de seguridad, cumplimiento e identidad, y soluciones basadas en la nube de Microsoft.',
    url: 'https://learn.microsoft.com/es-es/credentials/certifications/security-compliance-and-identity-fundamentals/',
    icon: '🔒',
  },
  {
    code: 'AZ-104',
    name: 'Azure Administrator Associate',
    level: 'Intermedio',
    levelColor: '#1e40af',
    levelBg: '#eff6ff',
    levelBorder: '#bfdbfe',
    description: 'Demuestra habilidades clave para configurar, administrar, proteger y gestionar funciones profesionales en Microsoft Azure.',
    url: 'https://learn.microsoft.com/es-es/credentials/certifications/azure-administrator/',
    icon: '⚙️',
  },
  {
    code: 'AI-102',
    name: 'Azure AI Engineer Associate',
    level: 'Intermedio',
    levelColor: '#1e40af',
    levelBg: '#eff6ff',
    levelBorder: '#bfdbfe',
    description: 'Diseña e implementa soluciones de IA en Azure usando Azure AI Services, Azure AI Search y Azure OpenAI. Vigente hasta junio 2026.',
    url: 'https://learn.microsoft.com/es-es/credentials/certifications/azure-ai-engineer/',
    icon: '🧠',
  },
  {
    code: 'AZ-500',
    name: 'Azure Security Engineer Associate',
    level: 'Intermedio',
    levelColor: '#1e40af',
    levelBg: '#eff6ff',
    levelBorder: '#bfdbfe',
    description: 'Demuestra las habilidades necesarias para implementar controles de seguridad, mantener la postura de seguridad e identificar y remediar vulnerabilidades.',
    url: 'https://learn.microsoft.com/es-es/credentials/certifications/azure-security-engineer/',
    icon: '🛡️',
  },
  {
    code: 'AZ-204',
    name: 'Azure Developer Associate',
    level: 'Intermedio',
    levelColor: '#1e40af',
    levelBg: '#eff6ff',
    levelBorder: '#bfdbfe',
    description: 'Construye soluciones de extremo a extremo en Microsoft Azure: Azure Functions, aplicaciones web, almacenamiento y más.',
    url: 'https://learn.microsoft.com/es-es/credentials/certifications/azure-developer/',
    icon: '💻',
  },
  {
    code: 'AZ-305',
    name: 'Azure Solutions Architect Expert',
    level: 'Experto',
    levelColor: '#7c3aed',
    levelBg: '#f5f3ff',
    levelBorder: '#ddd6fe',
    description: 'Diseña soluciones híbridas y en la nube en Azure, incluyendo cómputo, red, almacenamiento y monitoreo.',
    url: 'https://learn.microsoft.com/es-es/credentials/certifications/azure-solutions-architect/',
    icon: '🏗️',
  },
  {
    code: 'AZ-400',
    name: 'DevOps Engineer Expert',
    level: 'Experto',
    levelColor: '#7c3aed',
    levelBg: '#f5f3ff',
    levelBorder: '#ddd6fe',
    description: 'Combina experiencia en personas, procesos y productos para habilitar la entrega continua de valor en las organizaciones.',
    url: 'https://learn.microsoft.com/es-es/credentials/certifications/devops-engineer/',
    icon: '🔄',
  },
];

export default function WelcomePage() {
  const { username, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gradientOrb3} />
      </div>

      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.logoMark}>F</div>
            <span className={styles.brand}>FlowOps</span>
          </div>
          <button onClick={handleLogout} className={styles.logoutButton}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Cerrar Sesión
          </button>
        </header>

        <main className={styles.main}>
          <div className={styles.heroCard}>
            <div className={styles.heroCardInner}>
              <div className={styles.welcomeBadge}>
                <span className={styles.badgeDot} />
                En línea
              </div>
              <h1 className={styles.heading}>
                Bienvenido, <span className={styles.username}>{username}</span>
              </h1>
              <p className={styles.description}>
                Has iniciado sesión exitosamente en FlowOps. Tu panel de control está listo para usar.
              </p>
            </div>
          </div>

          <div className={styles.grid}>
            <div className={styles.statCard}>
              <div className={styles.statCardInner}>
                <div className={styles.statIcon} style={{ background: 'var(--color-secondary)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className={styles.statLabel}>Estado</div>
                <div className={styles.statValue}>Autenticado</div>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statCardInner}>
                <div className={styles.statIcon} style={{ background: 'var(--color-tertiary)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className={styles.statLabel}>Sesión</div>
                <div className={styles.statValue}>Activa</div>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statCardInner}>
                <div className={styles.statIcon} style={{ background: 'var(--color-secondary)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className={styles.statLabel}>Usuario</div>
                <div className={styles.statValue}>{username}</div>
              </div>
            </div>
          </div>

          <div className={styles.certSection}>
            <div className={styles.certSectionHeader}>
              <h2 className={styles.certSectionTitle}>Certificaciones Microsoft 2025–2026</h2>
              <p className={styles.certSectionSubtitle}>
                Impulsa tu carrera con las certificaciones más relevantes de Microsoft. Desde niveles
                básicos hasta experto, valida tus habilidades en la nube, IA y seguridad.
              </p>
            </div>
            <div className={styles.certGrid}>
              {msCertifications.map((cert) => (
                <a
                  key={cert.code}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certCard}
                >
                  <div className={styles.certCardInner}>
                    <div className={styles.certCardTop}>
                      <span className={styles.certIcon}>{cert.icon}</span>
                      <span
                        className={styles.certLevel}
                        style={{
                          color: cert.levelColor,
                          background: cert.levelBg,
                          borderColor: cert.levelBorder,
                        }}
                      >
                        {cert.level}
                      </span>
                    </div>
                    <div className={styles.certCode}>{cert.code}</div>
                    <div className={styles.certName}>{cert.name}</div>
                    <p className={styles.certDescription}>{cert.description}</p>
                    <div className={styles.certLink}>
                      Ver detalles
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
