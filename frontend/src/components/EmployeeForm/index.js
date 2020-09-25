import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import RandomImageService from '../../services/random.service';
import EmployeeService from '../../services/employee.service';
import Joi from 'joi';

const formSchema = Joi.object({
  profilePic: Joi.string().uri().required(),
  firstName: Joi.string().required().messages({
    'string.empty': `Your first name cannot be empty`,
  }),
  lastName: Joi.string().required().messages({
    'string.empty': `Your last name cannot be empty`,
  }),
  role: Joi.string().required().messages({
    'string.empty': `Your role cannot be empty`,
  }),
  departmentId: Joi.number().required().default(1)
})

function EmployeeForm({ id, mode, departments = [], changeRender }) {
  const [profilePic, setProfilePic] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [departmentId, setDepartmentId] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      if (mode === 'create') {
        const result = await RandomImageService.get();
        setProfilePic(result[0].imgUrl);
      } else {
        if (id) {
          let result = await EmployeeService.get({ id });
          result = result[0];
          setProfilePic(result.imgUrl);
          setFirstName(result.firstName);
          setLastName(result.lastName);
          setRole(result.role);
          setDepartmentId(result.departmentId);
        }
      }
    };
    fetchData();
  }, []);


  const renderOptions = () => {
      return departments.map((department, index) => {
        return (
          <option key={index} value={department.id}>{department.title}</option>
        )
      });
  }

  const okButtonClass = `${styles['button']} ${styles['ok']}`
  const picStyle = {
    backgroundImage: `url('${profilePic}')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    margin: '20px auto 10px auto'
  }

  const createOrEdit = async () => {
    const employee = { 
      profilePic,
      firstName, 
      lastName, 
      role, 
      departmentId
    }
    const validation = formSchema.validate(employee, {
      abortEarly: false
    });

    if (!validation.error) {
      const request = mode === 'create' 
        ? await EmployeeService.create(employee) 
        : await EmployeeService.update(employee);

      if (request.status === 200) {
        changeRender('list');
      }
    }
  }

  const renderSelect = (value, onChangeFn) => {
    if(mode === 'create') {
      return (
        <select onChange={event => onChangeFn(event.target.value)} 
          className={styles['input']}>
          {renderOptions()}
        </select>
      )
    } else {
      return (
        <select value={value} onChange={event => onChangeFn(event.target.value)} 
          className={styles['input']}>
          {renderOptions()}
        </select>
      )
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
    <form className={styles['employee-form']}>
      <div style={picStyle}></div>
      { mode === 'edit' && <p style={{ fontStyle: 'normal' }}className={styles['note']}>{`${firstName} ${lastName}`}</p>}
      { mode === 'create' && <p className={styles['note']}>This image was generated randomly</p>}
      <div className={styles['form-control-container']}>
        <div className={styles['form-control']}>
          { renderInput("First name", firstName, setFirstName) }
        </div>
        <div className={styles['form-control']}>
          { renderInput("Last name", lastName, setLastName) }
        </div>
      </div>
      <div className={styles['form-control']}>
        { renderInput("Role at the company", role, setRole) }
      </div>
      <div className={styles['form-control']}>
        { renderSelect(departmentId, setDepartmentId) }
      </div>
      <div className={styles['buttons']}>
        <div onClick={() => createOrEdit()} className={okButtonClass}>OK</div>
        <div onClick={() => changeRender('list')} className={styles['button']}>Cancel</div>
      </div>
      { mode === 'create' && <p className={styles['required-note']}>All fields are required.</p>}
    </form>
  );
}

export default EmployeeForm;
