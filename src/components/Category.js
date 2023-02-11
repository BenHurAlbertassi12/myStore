import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import '../Css/Category.css';

function Category() {
    const { category, setId, setName } = useContext(TodoContext);
  
    function renderCategory() {
        return category.map((element, index) => {
            return (
                <div key={index}>
                    <input 
                      type="radio"
                      id={element.name}
                      value={element.name}
                      name="category"
                      onClick={() => { setId(element.id); setName(element.name) }}                      
                    />
                    <label htmlFor={element.name}>{element.name}</label>                    
                </div>
            )
        })
    } 

    return(
        <div className="container-category">
          { renderCategory() } 
        </div>
    )
}

export default Category;