import React from 'react'
import { useState } from 'react'
const Devises = () => {
    const [exchangeRate, setExchangeRate] = useState(1.0);
const [amount, setAmount] = useState(0.0);

return (
    <div>
<h1>Convertisseur de devises</h1>
  <p>{amount * exchangeRate}</p>    
    <form>
    <input className='border border-black' type="text" value={amount} onChange={e => setAmount(e.target.value)} />
    <select className='border' onChange={e => setExchangeRate(e.target.value)}>
        <option value={1.0}>USD</option>
        <option value={0.85}>EUR</option>
        <option value={108.35}>JPY</option>
        <option value={0.90}>GBP</option>
    </select>
    </form>

    </div>
)
}

export default Devises