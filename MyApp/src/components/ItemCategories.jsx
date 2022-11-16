import { useEffect, useState } from 'react';

function ApiCategories() {
  const [data, setData] = useState([]);

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
