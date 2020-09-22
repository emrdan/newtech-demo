import React from 'react';

function List() {
  return (
    <div className={styles['list']}>
      <p className={styles['section-title']}>{props.title}</p>
    </div>
  );
}

export default List;
