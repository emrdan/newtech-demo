import React, { useReducer, useEffect } from 'react';
import styles from './style.module.css';
import RandomImageService from '../../services/random.service';
import EmployeeService from '../../services/employee.service';
import employeeReducer from '../../reducers/employee'
import Joi from 'joi';

const formSchema = {
  profilePic: Joi.string().uri().required(),
  fullName: Joi.string().required(),
  role: Joi.string().required(),
  departmentId: Joi.number().required()
}

const initialState = {
  profilePic: null,
  fullName: null,
  role: null,
  departmentId: null
}

function EmployeeForm({ id = null, mode }) {
  const [state, dispatch] = useReducer(employeeReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      if (mode === 'create') {
        const result = await RandomImageService.get();
        dispatch({ type: 'ADD_RANDOM_IMG', payload: result[0] });
      } else {
        if (id) {
          const result = await EmployeeService.get({ id });
          dispatch({ type: 'SET_CURRENT_DATA', payload: result })
        }
      }
    };
    fetchData();
  }, []);
  
  return (
    <form className={styles['employee-form']}>
    </form>
  );
}

export default EmployeeForm;
