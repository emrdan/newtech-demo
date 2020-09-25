import React from 'react';
import styles from './style.module.css';
import { ReactComponent as TrashIcon } from '../../assets/icons/delete.svg';

function DepartmentItem({ data, changeRender }) {
  return (
    <div className={styles['employee-item']}>
      <div className={styles['position']}>{data.id}</div>
      <div className={styles['profile-pic']}>{data.title.substring(0, 1)}</div>
      <div className={styles['employee-info']}>
        <p className={styles['name']}>{data.title}</p>
        <p className={styles['role']}>{data.membersCount} Members</p>
      </div>
      <div onClick={() => changeRender('edit')} className={styles['edit-button']}>Edit</div>
      <div title="Delete" className={styles['delete-button']}>
        <TrashIcon />
      </div>
    </div>
  );
}

export default DepartmentItem;
