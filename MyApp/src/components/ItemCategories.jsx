import { useEffect, useState } from 'react';

function ApiCategories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ApiCategories = async () => {
      const response = await fetch(
        'https://api.mercadolibre.com/sites/MLB/categories'
      );
      const results = await response.json();
      setData(results);
      console.log(results);
    };
    ApiCategories();
  }, [setData]);

  const arrayCategory = data.filter((index) => index);

  return (
    <div>
      <section>
        {arrayCategory.map((category) => (
          <ul>
            <div>
              <input type='checkbox' />
              <li key={category.id}>{category.name}</li>
            </div>
          </ul>
        ))}
      </section>
    </div>
  );
}
export default ApiCategories;
