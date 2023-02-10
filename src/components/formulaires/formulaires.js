import React from 'react'
import { useState } from 'react'

const formulaires = () => {
    let [name, setName] = useState("")
    const Handlesubmit = (e)=>{
      <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
    }
  return (
    <div>

    </div>
  )
}

export default formulaires