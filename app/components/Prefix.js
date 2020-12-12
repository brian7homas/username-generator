import React from "react"

function Prefix({prefixPlaceholder, prefix}) {
  return (
    <>
        <input 
            className="input__text" 
            type="text"  
            placeholder={prefixPlaceholder}
            onChange={prefix}
        />
    </>
  )
}

export default Prefix