import React from "react"

function Suffix({suffixPlaceholder, suffix}) {
  return (
    <>
        <input 
            className="input__text" 
            type="text"  
            placeholder={suffixPlaceholder}
            onChange={suffix}
        />
    </>
  )
}

export default Suffix