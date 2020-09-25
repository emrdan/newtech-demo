import React from 'react';
import styles from './style.module.css';

function EmptyBox({ message }) {
  return (
    <div className={styles['empty-box']}>
      {message}
    </div>
  );
}

export default EmptyBox;
