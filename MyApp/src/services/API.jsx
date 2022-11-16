import { useState } from 'react';

export async function FetchCategories() {
  const [data, setData] = useState([]);
  const response = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories'
  );
  const results = await response.json();
  setData(results);
  return results;
}

export async function FetchCategoriesId(categoryId, query) {
  const [idCategories, setIdCategories] = useState([]);
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`
  );
  const results = await response.json();
  setIdCategories(results);
  return results;
}

export async function FetchProducts(id) {
  const [itemId, setItemId] = useState([]);
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const results = await response.json();
  setItemId(results);
  return results;
}
