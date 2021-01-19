import React, { useEffect, useState } from "react"

import DisplayPre from './DisplayPre'
import DisplaySuff from './DisplaySuff'
import DisplayCamelCase from './DisplayCamelCase'



function Display({ prefix, suffix, camelCase, submit, generate, numberClick }) {
  // console.log("this is word: >>.")
  // console.log(suffix)
  // console.log(camelCase)
  // console.log(generate)
  
  return (
    <div className="input__container-display" >
      <span>
        <h1 className="generated">
          {generate}
        </h1>
        <div className="hyphen-container"></div>
        <h1 className="prefix">
            <DisplayPre 
              prefix={prefix}
            />
        </h1>
        <div className="hyphen-container"></div>
        <h1 className="suffix">
          <DisplaySuff suffix={suffix}/>
        </h1>
        
        <h1 className="camelCase">
          <DisplayCamelCase camelCase={camelCase}/>
        </h1>
        <h1 className="number">
          {
            numberClick
          }
        </h1>
      </span>
    
      
          
    </div>
    
  )
}

export default Display