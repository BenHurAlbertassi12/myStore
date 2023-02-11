import React, { useContext } from 'react';
import ToContext from '../context/TodoContext';
import { Link, Redirect } from 'react-router-dom';
import Header from '../components/Header';

import '../Css/Details.css';

function ProductDetails() {
    const { details, createCart, cart } = useContext(ToContext);

    function renderCart() {
        return details.map((element, index) => {
            return (
                <div key={index} className="container-details">
                    <div className="details">
                        <img src={element.imagem} alt={element.title}></img>
                        <h2>{element.title}</h2>
                        <h4>{element.price}</h4>
                        <p>Especificações:</p>
                        <p>Marca: {element.marca}</p>
                        <p>Estado de conservação: {element.estado}</p>
                        <p>Cidade: {element.city}</p> 
                        {cart.filter(e => e.title === element.title).length > 0 
                        ? <Redirect to="/cart" />
                        : <Link to="/cart">
                            <button onClick={ () => createCart(element.imagem, element.title, element.price, 0 ) }>Adicionar ao Carrinho</button>  
                          </Link>
                        }                    
                    </div>              
                </div>
            )
        })
    }

    return(
        <div>  
            <Header />  
            { renderCart() }       
        </div>
    )
}

export default ProductDetails;