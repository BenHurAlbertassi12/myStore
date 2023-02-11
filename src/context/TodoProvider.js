import React, { useState, useEffect } from 'react';
import TodoContext from './TodoContext';
import { getItem, getCategory, getCategoryAndItem } from '../services/MercadoLivreApi';

function TodoProvider({ children }) {
    const [items, setItems] = useState([]);
    const [busca, setBusca] = useState('');
    const [category, setCategory] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [details, setDetails] = useState({});
    const [cart, setCart] = useState([]);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        getItem(busca)
            .then(data => {
                setItems(data.results);
            })
            .catch((error) => {
                alert('Ocorreu um error ao buscar os items');
            });
    }, [busca]);

    useEffect(() => {
        getCategory()
            .then(data => {
                setCategory(data);
            })
            .catch((error) => {
                alert('Ocorreu um error ao buscar as categorias');
            });
    }, []);

    useEffect(() => {
        getCategoryAndItem(id, name)
            .then(data => {
                setItems(data.results);
            })
            .catch((error) => {
                alert('Ocorreu um error ao buscar os items por categoria');
            });
    }, [id, name]);

    const createDetails = ({ imagem, title, price, marca, estado, city }) => {
        setDetails({ imagem, title, price, marca, estado, city });
    };

    const createCart = ({ imagem, title, price, quant }) => {
        setCart([...cart, { imagem, title, price, quant }]);
    };

    const removedCart = index => {
        setCart(cart.slice(0, index).concat(cart.slice(index + 1)));
    };

    const updateCart = (title, newQuant) => {
        setCart(cart.map(element => element.title === title ? { ...element, quant: newQuant } : element));
    };

    const sumTotal = sum => {
        setPrice(price + sum)
    };

    const subtractTotal = sum => {
        setPrice(price - sum)
    };

    const contextValue = {
        items,
        setBusca,
        busca,
        category,
        setId,
        setName,
        details,
        createDetails,
        createCart,
        cart,
        updateCart,
        price,
        sumTotal,
        subtractTotal,
        removedCart,
    }

    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;