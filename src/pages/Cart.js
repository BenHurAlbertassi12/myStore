import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ToContext from '../context/TodoContext';
import Header from '../components/Header';

import '../Css/Cart.css';

function Cart() {
    const { details, cart, updateCart, price, removedCart } = useContext(ToContext); 
    let { sumTotal, subtractTotal } = useContext(ToContext);

    function renderCart() {
        return cart.map((element, index) => {
            return (
                <div key={index} className="cart">
                    <img src={element.imagem} alt={element.title}></img>
                    <p>{element.title}</p>
                    <p>{element.price}</p>
                    {element.quant > 0 &&
                    <Link 
                        onClick={ () => { updateCart(element.title, element.quant - 1); subtractTotal(element.price) } }>
                        <p>-</p>                    
                    </Link>
                    }                   
                    <p>{element.quant}</p>                    
                    <Link onClick={ () => { updateCart(element.title, element.quant + 1); sumTotal(element.price) } }>
                        <p>+</p>                    
                    </Link>
                    <h3>{element.price * element.quant}</h3> 
                    <button 
                        onClick={ () => { removedCart(index); subtractTotal(element.price * element.quant); } }>
                        Excluir
                    </button>                
                </div>
            )
        })
    }

    return (
        <div>
            <Header />
            <div className="container-cart">                
                { renderCart() }
                <div className="cart-vazio">
                    {details.length === 0 && price === 0 && <h5>O seu carrinho está vazio</h5>}
                    <Link to="/">Continuar comprando</Link>
                </div>           
                <div className="cart-finalizar">
                    <h2>Total da compra: R$ {price.toFixed(2)}</h2>
                    <Link to="/finished">
                        <button>Finalizar compra</button>                    
                    </Link>
                </div>      
            </div>                
        </div>
    )
}

export default Cart;