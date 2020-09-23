import React from 'react';
import styles from './style.module.css'

function Menu({ selectedMenu, onMenuSelection }) {
  const menuTitles = ['departments', 'employees'];
  const renderMenuOptions = () => {
    return menuTitles.map(title => {
      const isSelected = selectedMenu === title ? styles['selected'] : '';
      return (
        <div className={`${styles['menu-option']} ${isSelected}`}
          onClick={() => onMenuSelection(title)}>{title}
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
