import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";


function StoreProvider () {
    const [data, setData] = useState([]); // linha 23
    const [filteredData, setFilterData] = useState([])
    
    useEffect(() => {
        const fetchPlanet = async () => {
          const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=Patins`);
          const { results } = await response.json(); // teste para ver se a coluna funfa antes: const data = ...
          return results
        };
        fetchPlanet();
        console.log(fetchPlanet());
      }, []);
    
    };
export default StoreProvider