import React from 'react';
import styles from './style.module.css';

function EmptyBox({title}) {
  return (
    <div className={styles['empty-box']}>
      You don't have any <span>{title}</span> just yet. Start by creating one.
    </div>
  );
}

export default EmptyBox;
