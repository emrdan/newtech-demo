import React from 'react';
import styles from './style.module.css';
import { ReactComponent as TrashIcon } from '../../assets/icons/delete.svg';

function DepartmentItem({ index, data }) {
  return (
    <div className={styles['department-item']}>
      <div className={styles['position']}>{index}</div>
      <div className={styles['department-info']}>
        <p className={styles['department-title']}>{data.title}</p>
      </div>
      <div className={styles['see-members-button']}>Members</div>
      <div className={styles['see-members-button']}>Edit</div>
      <div title="Delete" className={styles['delete-button']}>
        <TrashIcon />
      </div>
    </div>
  );
}

export default DepartmentItem;
