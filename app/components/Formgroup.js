import React, { useEffect } from "react"

function Formgroup({label, placeholder, search}) {
  
  return (
    <div className="form-group">
        <label htmlFor="">{label}</label>
        <input 
          className="input__text" 
          type="text"  
          placeholder={placeholder}
          onChange={search}
          />
          
    </div>
  )
}

export default Formgroup