    import React from 'react'
    import { useState } from 'react'
    const Devinettes = () => {
        const [rep, setRep] = useState(Math.floor(Math.random() * 100) +1);
        const [essais, setEssais] = useState("")
        const[message, setMessage] = useState("")

        const handleChange = (e) =>{
            setEssais(e.target.value)
        }
        const handleSubmit = (e) =>{
            e.preventDefault();
            if(essais < rep){
                setMessage('votre nombre est trop petit')
            } else if (essais > rep){
                setMessage("votre nombre est trop grand")
            } else{
                setMessage("bravo tu as trouvé")
                
            }
        }
    return (
        <div>
            <form onSubmit={handleSubmit} >
            <input 
            type="text"
            value={essais}
            onChange={handleChange}
            placeholder="entre ton nombre"
                />
            <p>{message}</p>
            <button type='submit'>Verif</button>
            </form>

        </div>
    )
}
    
    export default Devinettes