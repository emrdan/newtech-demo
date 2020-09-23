import React from 'react';
import styles from './style.module.css';
import { ReactComponent as TrashIcon } from '../../assets/icons/delete.svg';

const picStyle = {
  backgroundImage: "url('https://imagizer.imageshack.com/v2/100x75q90/922/a8pt32.jpg')",
  backgroundSize: 'contain'
}

function EmployeeItem({ index, data }) {
  return (
    <div className={styles['employee-item']}>
      <div className={styles['position']}>1</div>
      <div style={picStyle} className={styles['profile-pic']}></div>
      <div className={styles['employee-info']}>
        <p className={styles['name']}>Daniel Méndez</p>
        <p className={styles['email']}>emrdan@gmail.com</p>
       {/*<p className={styles['phone']}>829-380-5371</p>*/}
      </div>
      <div className={styles['edit-button']}>Edit</div>
      <div title="Delete" className={styles['delete-button']}>
        <TrashIcon />
      </div>
    </div>
  );
}

export default EmployeeItem;
