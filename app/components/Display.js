import React, { useEffect } from "react"

import DisplayPre from './DisplayPre'
import DisplaySuff from './DisplaySuff'
import DisplayCamelCase from './DisplayCamelCase'


function Display({ prefix, suffix, camelCase }) {
  // console.log("this is word: >>.")
  // console.log(suffix)
  // console.log(camelCase)
  
  return (
    <div className="input__container-display">
      {
      <h1>
        <DisplayPre prefix={prefix}/>
        <DisplaySuff suffix={suffix}/>
        <DisplayCamelCase camelCase={camelCase}/>
      
      </h1>
      }
        
    </div>
    
  )
}

export default Display