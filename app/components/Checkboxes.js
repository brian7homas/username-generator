import React, { Children, useEffect } from "react"


function Checkboxes(props, camelCase, watch) {
  return (
    <div className="input__container-checkboxes">
      {props.children}
    </div>
    
  )
}

export default Checkboxes