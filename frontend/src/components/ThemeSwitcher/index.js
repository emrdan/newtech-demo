import React, { useEffect, useState } from 'react';
import styles from './style.module.css'
import { ReactComponent as SunIcon } from '../../assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg';

function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      setCurrentTheme(savedTheme);
    }
  }, []);

  const switchTheme = () => {
    switch(currentTheme) {
      case 'light':
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        setCurrentTheme('dark')
        break;
      case 'dark':
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        setCurrentTheme('light')
        break;
      default:
        throw new Error
    }
  }

  return (
    <div onClick={() => switchTheme()} className={styles['theme-switcher']}>
      {currentTheme === 'light' && <SunIcon /> }
      {currentTheme === 'dark' && <MoonIcon /> }
    </div>
  );
}

export default ThemeSwitcher;
