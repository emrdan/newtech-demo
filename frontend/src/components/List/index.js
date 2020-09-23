import React from 'react';
import styles from './style.module.css';
import EmptyBox from '../EmptyBox';

function List({ title, items, itemComponent }) {
  const renderList = () => {
    const Item = itemComponent;
    if (items.length === 0) {
      return <EmptyBox title={title}/>;
    } else {
      return items.map((item, index) => {
        return <Item key={index} index={index + 1} data={item}/>
      });
    }
  }

  return (
    <div className={styles['list']}>
      {renderList()}
    </div>
  );
}

export default List;
