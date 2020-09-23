import React from 'react';
import styles from './style.module.css';

function CreateButton() {
  return (
    <>
      <div className={styles['create-button']}>+</div>
      <p>Create</p>
    </>
  );
}

export default CreateButton;
