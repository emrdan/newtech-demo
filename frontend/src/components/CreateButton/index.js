import React from 'react';
import styles from './style.module.css';
import { Link } from "react-router-dom";

function CreateButton({ to }) {
  return (
    <>
      <Link to={to} className={['create-button']}>+</Link>
      <p>Create</p>
    </>
  );
}

export default CreateButton;
