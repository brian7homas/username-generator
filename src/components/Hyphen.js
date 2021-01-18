import React, { useEffect } from "react"

function Hyphen({label, hyphen}) {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input className="input__container-checkboxes-checkbox" onChange={hyphen} value="" type="checkbox" name="" id=""></input>  
    </div>
  )
}

export default Hyphen