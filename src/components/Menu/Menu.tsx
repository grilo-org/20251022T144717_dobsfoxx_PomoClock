import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';
import styles from './Menu.module.css';
import { useState, useEffect } from 'react';

import RouterLink from '../RouterLink/RouterLink';

type AvaliableThemes = 'dark' | 'light';

export default function Menu() {
  const [theme, setTheme] = useState<AvaliableThemes>(() => {
    const savedTheme =
      (localStorage.getItem('theme') as AvaliableThemes) || 'dark';
    return savedTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    e.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink
        className={styles.menu__link}
        href='/'
        aria-label='Ir para a página inicial.'
        title='Página Inicial'
      >
        <HouseIcon />
      </RouterLink>

      <RouterLink
        className={styles.menu__link}
        href='/history'
        aria-label='Ver Histórico'
        title='Histórico'
      >
        <HistoryIcon />
      </RouterLink>

      <RouterLink
        className={styles.menu__link}
        href='/settings'
        aria-label='Ir para a página de configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </RouterLink>

      <a
        className={styles.menu__link}
        aria-label='Mudar tema dark/light'
        title='Tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
