import React, { useEffect } from "react"

import DisplayPre from './DisplayPre'
import DisplaySuff from './DisplaySuff'
import DisplayCamelCase from './DisplayCamelCase'


function Display({ prefix, suffix, camelCase, submit, generate }) {
  // console.log("this is word: >>.")
  // console.log(suffix)
  // console.log(camelCase)
  console.log(generate)
  return (
    <div className="input__container-display" >
      <h1 className="prefix">
          <DisplayPre 
            prefix={prefix?prefix:generate}
            />
            
          
      </h1>
      <div></div>
      <h1 className="suffix">
        <DisplaySuff suffix={suffix}/>
        
      </h1>
      <h1>
        <DisplayCamelCase camelCase={camelCase}/>
      </h1>
      
      
          
    </div>
    
  )
}

export default Display