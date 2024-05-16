import React, { useState, useEffect, useRef } from 'react';
import './css/insercion.css';
const Insercion = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        fecha: '',
        area: '',
        categoria: '',
        nivel: '',
        empresa: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/persona', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Respuesta del servidor:', data);
                
            } else {
                throw new Error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    };
    return <div className='dark'>
        <h2>Formulario de Contacto</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                fecha:
                <input
                    type="date"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                area:
                <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                categoria:
                <input
                    type="text"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                nivel de satisfaccion:
                <input
                    type="text"
                    name="nivel"
                    value={formData.nivel}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                nombre de la empresa:
                <input
                    type="text"
                    name="nivel"
                    value={formData.empresa}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Enviar</button>
        </form>
    </div>
}
export default Insercion;