import React, { useEffect } from "react"

function Hyphen({label, hyphen}) {
  return (
    <div className="checkbox">
      
      <input className="input__container-checkboxes-checkbox" onChange={hyphen} value="" type="checkbox" name="hyphen" id="hyphen"></input>  
      <label htmlFor="hyphen">{label}</label>
    </div>
  )
}

export default Hyphen