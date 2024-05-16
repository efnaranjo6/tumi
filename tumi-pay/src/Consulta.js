import React, { useState, useEffect, useRef } from 'react';
import './css/consulta.css'
const Consulta = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/persona/0/5');
                if (response.ok) {
                    const data = await response.json();
                    setUsuarios(data);
                    setResultados(data); // Inicialmente, mostrar todos los usuarios
                } else {
                    throw new Error('Error al obtener los datos');
                }
            } catch (error) {
                console.error('Error de red:', error);
            }
        };

        fetchUsuarios();
    }, []);

    const handleBusqueda = (e) => {
        const valorBusqueda = e.target.value;
        setBusqueda(valorBusqueda);

        // Filtrar usuarios en función de la búsqueda
        const resultadosFiltrados = usuarios.filter((usuario) =>
            usuario.nombre.toLowerCase().includes(valorBusqueda.toLowerCase()),
          
        );

        setResultados(resultadosFiltrados);
    };

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <input
                type="text"
                placeholder="Buscar usuarios..."
                value={busqueda}
                onChange={handleBusqueda}
            />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Empresa</th>
                        <th>correo</th>
                        <th>area</th>
                        <th>nivel</th>
                        {/* Puedes agregar más columnas según la estructura de datos */}
                    </tr>
                </thead>
                <tbody>
                    {resultados.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.empresa}</td>
                            <td>{usuario.correo}</td>
                            <td>{usuario.area}</td>
                            <td>{usuario.nivel}</td>
                            {/* Agrega más celdas según la estructura de datos */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default Consulta;