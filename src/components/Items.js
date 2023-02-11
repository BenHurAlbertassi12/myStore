import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import { Link } from 'react-router-dom';

import '../Css/Items.css';

function Items() {
    const { items, createDetails } = useContext(TodoContext);   
    
    function renderItems() {
        return items.map((element, index) => {
            return (
                <div key={index} className="items">
                    <Link to="/productdetails" onClick={() => (
                        createDetails(
                            element.thumbnail, 
                            element.title, 
                            element.price, 
                            element.attributes[0].value_name,
                            element.attributes[1].value_name,
                            element.address.state_name
                        ))}>
                        <img src={element.thumbnail} alt={element.title}></img>
                        <h2>{element.title}</h2>
                        <p>R$ {element.price}</p>                                         
                    </Link>                                
                </div>                
            )                    
        })
    }

    return(
        <div className="container-items">    
          { renderItems() } 
        </div>
    )
}

export default Items;