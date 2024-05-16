import React, { useState, useEffect, useRef } from 'react';
import './css/header.css';
import Componente1 from './Consulta.js';
import Componente2 from './Insercion.js';
const Cabeza = () => {
    const [componenteVisible, setComponenteVisible] = useState(null);
    const mostrarComponente = (componente) => {
        setComponenteVisible(componente);
    };
    return <div>
            <header>
                <nav>
                    <li onClick={() => mostrarComponente('Componente2')}> 
                        ingresar
                    </li>
                    <li onClick={() => mostrarComponente('Componente1')}>
                        consultar
                    </li>
                </nav>
            </header>
        <div>
            {/* Mostrar el componente seleccionado */}
            {componenteVisible === 'Componente1' && <Componente1 />}
            {componenteVisible === 'Componente2' && <Componente2 />}
            
        </div>
        </div>
};

export default Cabeza;