import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import DepartmentService from '../../services/department.service';
import Joi from 'joi';
import EmptyBox from '../EmptyBox';

const formSchema = Joi.object({
  title: Joi.string().uri().required()
})

function DepartmentForm({ id, mode, changeRender }) {
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (id && mode === 'edit') {
        let result = await DepartmentService.get({ id });
        result = result[0];
        setTitle(result.title);
      }
    };
    fetchData();
  }, []);


  const okButtonClass = `${styles['button']} ${styles['ok']}`

  const createDepartment = async () => {
    const department = { title }
    const validation = formSchema.validate(department, {
      abortEarly: false
    });

    if (!validation.error) {
      const postRequest = await DepartmentService.create(department);
      if (postRequest.status === 200) {
        changeRender('list');
      }
    }
  }

  const renderInput = (placeholder, value, onChangeFn) => {
    if (mode === 'create') {
      return (
        <input onChange={event => onChangeFn(event.target.value)} 
          className={styles['input']} 
          placeholder={placeholder} />
      )
    } else {
      return (
        <input onChange={event => onChangeFn(event.target.value)} 
          className={styles['input']} 
          placeholder={placeholder} value={value}/>
      );
    }
  } 
  
  return (
    <form className={styles['department-form']}>
      <div className={styles['buttons']}>
        { renderInput("Deparment title", title, setTitle) }
        <div onClick={() => createDepartment()} className={okButtonClass}>OK</div>
        <div onClick={() => changeRender('list')} className={styles['button']}>Cancel</div>
      </div>
      <EmptyBox message="To create a department, you only need to provide a title." />
    </form>
  );
}

export default DepartmentForm;
