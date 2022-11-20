import { useEffect, useState } from 'react';
import StoreContext from './StoreContext';
import {
  FetchCategories,
  FetchProducts,
  FetchCategoriesId,
} from '../services/API';

function StoreProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [search, searchBar] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    FetchProducts(search).then((data) => searchBar(data.results));
  }, [search]);

  useEffect(() => {
    FetchCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    FetchCategoriesId(id, name).then((data) => {
      searchBar(data);
    });
  }, [id, name]);

  const contextValue = {
    categories,
    search,
    id,
    name,
    searchBar,
    setId,
    setName,
  };
  return (
    <div>
      <StoreContext.Provider value={contextValue}>
        {children}
      </StoreContext.Provider>
    </div>
  );
}

export default StoreProvider;
