import React from 'react';
import styles from './style.module.css';

function CreateButton({ text, onClick }) {
  return (
    <div className={styles['create-button-container']}>
      <div onClick={() => onClick('create')} className={styles['create-button']}>+</div>
      <p>{text}</p>
    </div>
  );
}

export default CreateButton;
