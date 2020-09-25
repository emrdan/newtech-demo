import React, { useState, useEffect} from 'react';
import styles from './style.module.css';
import EmptyBox from '../EmptyBox';

const paginationLimit = 3;

function List({ title, items, itemComponent, changeRender }) {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(paginationLimit);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setFrom(0);
    setTo(paginationLimit);
    setCurrentPage(1);
  }, [items]);

  const renderList = () => {
    const Item = itemComponent;
    if (items.length === 0) {
      const message = `You don't have any ${title.toLowerCase()} just yet. Start by creating one.`
      return <EmptyBox message={message}/>;
    } else {
      return items.slice(from, to).map((item, index) => {
        return <Item key={index} data={item} changeRender={changeRender}/>
      });
    }
  }

  const nextPage = () => {
    if(currentPage < Math.ceil(items.length / paginationLimit)) {
      setFrom(prev => prev + paginationLimit);
      setTo(prev => prev + paginationLimit);
      setCurrentPage(prev => prev + 1);
    }
  }

  const prevPage = () => {
    if(currentPage > 1) {
      setFrom(prev => prev - paginationLimit);
      setTo(prev => prev - paginationLimit);
      setCurrentPage(prev => prev - 1);
    }
  }

  const nextButtonClass = `
    ${styles['button']} 
    ${currentPage < Math.ceil(items.length / paginationLimit) ? styles['active'] : styles['disabled']}
  `

  const prevButtonClass = `
    ${styles['button']} 
    ${currentPage > 1 ? styles['active'] : styles['disabled']}
  `

  return (
    <div className={styles['list']}>
      {renderList()}
      <div className={styles['pager']}>
        <div className={prevButtonClass} onClick={() => prevPage()}>Anterior</div>
        <span>{currentPage} of {Math.ceil(items.length / paginationLimit)} </span>
        <div className={nextButtonClass} onClick={() => nextPage()}>Siguiente</div>
      </div>
    </div>
  );
}

export default List;
