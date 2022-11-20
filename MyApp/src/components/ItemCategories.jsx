import React, { useContext } from 'react';
import StoreContext from '../context/StoreContext';

function ItemCategories() {
  const { categories } = useContext(StoreContext);

  function listCategories() {
    return categories.map((item, index) => {
      return (
        <div key={index}>
          <input
            type='radio'
            id={item.name}
            value={item.name}
            name='Categories'
          />
          <label htmlFor={item.name}>{item.name}</label>
        </div>
      );
    });
  }
  return <div>{listCategories()}</div>;
}

export default ItemCategories;
