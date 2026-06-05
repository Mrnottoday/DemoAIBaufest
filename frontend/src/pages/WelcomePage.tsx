import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './WelcomePage.module.css';

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
        </main>
      </div>
    </div>
  );
}
