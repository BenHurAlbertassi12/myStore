import React, { useState, useContext } from 'react';
import StoreContext from '../context/StoreContext';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const { searchBar } = useContext(StoreContext);
  const [product, setProduct] = useState('');
  const pathName = useHistory.pathName;

  function renderSearch() {
    return (
      <div>
        {pathName === '/' ? (
          <div>
            <input
              type='text'
              value={product}
              onChange={({ target }) => setProduct(target.value)}
              placeholder='Buscar produtos'
            />
            <div>
              <button
                onClick={() => {
                  searchBar(product);
                  setProduct('');
                }}
              />
            </div>
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    );
  }
  return <div> {renderSearch()}</div>;
}
