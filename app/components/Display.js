import React, { useEffect } from "react"

import DisplayPre from './DisplayPre'
import DisplaySuff from './DisplaySuff'

function Display({ prefix, suffix }) {
  // console.log("this is word: >>.")
  // console.log(suffix)
  // console.log(prefix)
  
  return (
    <div className="input__container-display">
      <DisplayPre 
        prefix={prefix}
      />
      
      <DisplaySuff 
        suffix={suffix}
      />
        
    </div>
    
  )
}

export default Display