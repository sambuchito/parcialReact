// Card.jsx
import React from 'react';

import './Card.css'; 

function Card({ name, password }) {
  return (
    <div className="card">
      <h3>Información ingresada</h3>
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Contraseña:</strong> {password}</p>
    </div>
  );
}



export default Card;
 