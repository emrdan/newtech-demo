import React from 'react';
import styles from './style.module.css';
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

function Container({ children }) {
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <div>
          <div className={styles['logo']}>
            <LogoIcon />
          </div>
          <div className={styles['metadata']}>
            <p className={styles['project-name']}>Newtech Demo</p>
            <p className={styles['project-author']}>by Daniel Méndez @ emrdan.com</p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Container;
