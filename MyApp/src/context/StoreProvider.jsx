import { useEffect, useState } from 'react';
import StoreContext from './StoreContext';
import { FetchCategories } from '../services/API';

function StoreProvider({ children }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    FetchCategories((data) => {
      setCategories(data);
    });
  });

  const contextValue = {
    categories,
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
