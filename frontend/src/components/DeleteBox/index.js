import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import EmployeeService from '../../services/employee.service';
import DepartmentService from '../../services/department.service';

function DeleteBox({ id, resource, changeRender }) {
  const [textToMatch, setTextToMatch] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [didMatch, setDidMatch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const service = resource === 'departments' ? DepartmentService : EmployeeService;
      let result = await service.get({ id });
      result = result[0];
      if (resource === 'departments') {
        setTextToMatch(result['title']);
      } else {
        setTextToMatch(`${result['firstName']} ${result['lastName']}`);
        setImgUrl(result.imgUrl);
      }
    };
    fetchData();
  }, []);

  const deleteButtonClass = `${styles['button']} ${styles['delete']}`

  const picStyle = {
    backgroundColor: 'var(--menu-bg-color)',
    color: 'var(--font-color)',
    display: (resource === 'departments' ? 'flex' : 'block'),
    justifyContent: (resource === 'departments' ? 'center' : ''),
    alignItems: (resource === 'departments' ? 'center' : ''),
    backgroundImage: (resource === 'employees' ? `url('${imgUrl}')` : ''),
    backgroundSize: (resource === 'employees' ? 'contain' : ''),
    backgroundRepeat: (resource === 'employees' ? 'no-repeat' : ''),
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    margin: '20px auto 10px auto'
  }

  const enableDelete = (input) => {
    if(input === textToMatch) {
      setDidMatch(true);
    } else {
      setDidMatch(false);
    }
  }

  const deleteResource = async () => {
    if (didMatch) {
      const service = resource === 'departments' ? DepartmentService : EmployeeService;
      const deleteRequest = await service.delete(id);
      if (deleteRequest.status === 200) {
        changeRender('list');
      }
    }
  }
  
  return (
    <form className={styles['delete-form']}>
      { resource === 'employees' && <div style={picStyle}></div> }
      { resource === 'departments' && <div style={picStyle}>{textToMatch[0]}</div> }
      <p style={{ fontStyle: 'normal' }} className={styles['note']}>{textToMatch}</p>
      <div className={styles['form-control-container']}>
          <input onChange={event => enableDelete(event.target.value)} className={styles['input']}placeholder={`type in ${textToMatch} to delete`} />
      </div>
      <div className={styles['buttons']}>
        <div style={{ 
          opacity: `${didMatch === true ? '1' : '0.5'}`,
          cursor: `${didMatch === true ? 'pointer' : 'default'}` 
        }} className={deleteButtonClass} onClick={deleteResource()}>DELETE</div>
        <div onClick={() => changeRender('list')} className={styles['button']}>Cancel</div>
      </div>
    </form>
  );
}

export default DeleteBox;
