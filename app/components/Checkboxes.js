import React, { useEffect } from "react"

function Checkboxes({label}) {
  return (
    <div className="input__container-checkboxes">
        <label htmlFor="">{label}</label>
        <input className="input__container-checkboxes-checkbox" type="checkbox" name="" id=""></input>
    </div>
  )
}

export default Checkboxes