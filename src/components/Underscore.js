import React, { useEffect } from "react"
import Checkboxes from './Checkboxes'
function Underscore({label, underscore}) {
  return (
    <div className="checkbox">  
      
      <input className="input__container-checkboxes-checkbox" onChange={underscore} value="" type="checkbox" name="underscore" id="underscore"></input>
      <label htmlFor="underscore">{label}</label>
    </div>
  )
}

export default Underscore