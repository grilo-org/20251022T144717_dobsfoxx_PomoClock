import styles from './Footer.module.css';
import RouterLink from '../RouterLink/RouterLink';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro'>
        Entenda como funciona a técnica de Pomodoro
      </RouterLink>
      <RouterLink href='/'>
        PomoClock &copy; {new Date().getFullYear()}{' '}
      </RouterLink>
    </footer>
  );
}
