import React from 'react';
import styles from './style.module.css'

function Menu({ selectedMenu, onMenuSelection }) {
  const menuTitles = ['departments', 'employees'];
  const renderMenuOptions = () => {
    return menuTitles.map((title, index) => {
      const isSelected = selectedMenu === title ? styles['selected'] : '';
      return (
        <div key={index} className={`${styles['menu-option']} ${isSelected}`}
          onClick={() => onMenuSelection(title)}>All {title}
        </div>
      );
    });
  }
  
  return (
    <div className={styles['menu-container']}>
      {renderMenuOptions()}
    </div>
  );
}

export default Menu;
