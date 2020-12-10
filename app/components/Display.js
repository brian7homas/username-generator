import React, { useEffect } from "react"

function Display({ search}) {
  return (
    <div 
        className="input__container-display">
        <h1>{search}</h1>       
    </div>
  )
}

export default Display