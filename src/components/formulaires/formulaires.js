import React from 'react'
import { useState } from 'react'

const Formulaires = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setError('');

    if (!name || !email || !password) {
      setError('Tous les champs sont requis');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('L\'email est invalide');
    } else {
      // Envoyer les données au serveur
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </div>

      {error && <p>{error}</p>}

      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default Formulaires;