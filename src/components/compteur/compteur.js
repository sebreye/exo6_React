import React from 'react'

export const Compteur = ({_Onclick, _Click}) => {
  return (
    <div>
        
        <button onClick={_Onclick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  {_Click}
</button>
    </div>
  )
}
