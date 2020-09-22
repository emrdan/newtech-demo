import React from 'react';
import styles from './style.module.css';

function Nav() {
  return (
    <div className={styles['nav']}>
      <div className={styles['links']}>
        <a>emrdan.com</a>
        <a>GitHub Link</a>
      </div>
      <div className={styles['theme-switcher']}>
        <button></button>
      </div>
    </div>
  );
}

export default Nav;
