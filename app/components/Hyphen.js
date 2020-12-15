import React, { useEffect } from "react"

function Hyphen({label, hyphen}) {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input className="input__container-checkboxes-checkbox" onChange={hyphen} value="" type="checkbox" name="" id=""></input>  
    </>
  )
}

export default Hyphen