// Card.jsx
import React from 'react';
import PropTypes from 'prop-types';
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


// verificar las props recibidas
Card.propTypes = {
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default Card;
