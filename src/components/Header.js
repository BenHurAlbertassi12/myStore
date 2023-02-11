import React, { useState, useContext } from 'react';
import TodoContext from '../context/TodoContext';
import * as BsIcons from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

import '../Css/Header.css';

function Header() {
    const { setBusca } = useContext(TodoContext);
    const [product, setProduct] = useState('');
    const history = useHistory().location;
    const pathName = history.pathname;

    function renderBusca() {
        return (
            <div>
                {pathName === '/' ?
                <div className="container-header">
                    <input 
                    type="text"
                    value={ product }
                    placeholder="Buscar produtos, marcas e muito mais..." 
                    onChange={({ target }) => setProduct( target.value )}
                    /> 
                    <div className="header">          
                        <BsIcons.BsSearch onClick={() => { setBusca(product); setProduct('') }}/> 
                    </div>
                </div>
                : <div className="container-header" style={{padding: '41px'}} />}                                                                
            </div>
        )
    }

    return(
        <div>
          { renderBusca()}          
        </div>
    )
}

export default Header;