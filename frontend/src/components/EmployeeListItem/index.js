import React from 'react';
import styles from './style.module.css';
import { ReactComponent as TrashIcon } from '../../assets/icons/delete.svg';

function EmployeeItem({ data, changeRender }) {
  const picStyle = {
    backgroundImage: `url('${data.imgUrl}')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }
  
  return (
    <div className={styles['employee-item']}>
      <div className={styles['position']}>{data.id}</div>
      <div style={picStyle} className={styles['profile-pic']}></div>
      <div className={styles['employee-info']}>
        <p className={styles['name']}>{`${data.firstName} ${data.lastName}`}</p>
        <p className={styles['role']}>{data.role}</p>
      </div>
      <div onClick={() => changeRender('edit', data.id)} className={styles['edit-button']}>Edit</div>
      <div onClick={() => changeRender('delete', data.id)} title="Delete" className={styles['delete-button']}>
        <TrashIcon />
      </div>
    </div>
  );
}

export default EmployeeItem;
