export async function FetchCategories() {
  const response = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories'
  );
  const results = await response.json();
  return results;
}

export async function FetchCategoriesId(categoryId, item) {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${item}`
  );
  const results = await response.json();
  return results;
}

export async function FetchProducts(id) {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const results = await response.json();
  return results;
}
