import React, { useEffect } from "react"
import Checkboxes from './Checkboxes'
function Underscore({label, underscore}) {
  return (
    <div>  
      <label htmlFor="">{label}</label>
      <input className="input__container-checkboxes-checkbox" onChange={underscore} value="" type="checkbox" name="underscore" id=""></input>
    </div>
  )
}

export default Underscore