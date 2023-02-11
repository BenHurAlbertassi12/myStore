import React from 'react';
import '../Css/Finished.css';
import * as FiIcons from 'react-icons/fi';

function Finished() {   
    return(
        <div className="container-finished">
            <FiIcons.FiShoppingBag />
            <h1>Parabéns, sua compra foi finalizada com sucesso!</h1>
            <p>Número da operação: 6254588558904</p>
        </div>
    )
}

export default Finished;