import React, { useState } from 'react';


// componente card que muestra la info
function Card({ name, password }) {
  return (
    <div className="card">
      <h3>Información ingresada</h3>
      <p>Nombre: {name}</p>
      <p>Contraseña: {password}</p>
    </div>
  );
}

// componente ppal del form
function Form() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // reseteo msj de error

    // validacion de primer input
    if (name.length < 3 || name.startsWith(' ')) {
        setError('Por favor chequea que la información sea correcta');
        return;
      }
  
      // validacion de segundo input
      if (password.length < 6) {
        setError('Por favor chequea que la información sea correcta');
        return;
      }
  
      // if both true, then show Card
      setIsSubmitted(true);
    };
  
    return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {isSubmitted && !error && <Card name={name} password={password} />}
      </div>
    );
  }
  
  export default Form;
