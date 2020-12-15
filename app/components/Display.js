import React, { useEffect } from "react"

import DisplayPre from './DisplayPre'
import DisplaySuff from './DisplaySuff'
import DisplayCamelCase from './DisplayCamelCase'


function Display({ prefix, suffix, camelCase, hyphen }) {
  // console.log("this is word: >>.")
  // console.log(suffix)
  // console.log(camelCase)
  console.log(hyphen)
  return (
    <div className="input__container-display" >
      <h1 className="prefix">
          <DisplayPre prefix={prefix}/>
          
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