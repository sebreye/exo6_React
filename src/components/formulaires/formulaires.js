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

    if (!name) {
      setError('le nom est requis');
    }else if(!password){
      setError('le mot de passe est requis')
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('L\'email est invalide');
      
    }else{

    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label >Nom : </label>
        <input className='border'
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </div>

      <div>
        <label >Email : </label>
        <input className='border'
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </div>

      <div className=''>
        <label >Mot de passe : </label>
        <input className='border'
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </div>

      {error && <p className='text-red-600'>{error}</p>}

      <button className='border border-black' type="submit">S'inscrire</button>
    </form>
  );
}

export default Formulaires;