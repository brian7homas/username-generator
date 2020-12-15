import React, { useEffect } from "react"
import Checkboxes from './Checkboxes'
function Underscore({label, underscore}) {
  return (
    <>
        
            <label htmlFor="">{label}</label>
            <input className="input__container-checkboxes-checkbox" onChange={underscore} value="" type="checkbox" name="" id=""></input>
        
    </>
  )
}

export default Underscore