import React from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';

function CartIcon() {
    return (
        <div className="cartIcon">
            <Link to="/cart">
                <AiIcons.AiOutlineShoppingCart />                
            </Link>  
        </div>
    )
}

export default CartIcon;