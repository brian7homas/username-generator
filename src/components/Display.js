import React, { useEffect, useState } from "react"

import DisplayPre from './DisplayPre'
import DisplaySuff from './DisplaySuff'
import DisplayCamelCase from './DisplayCamelCase'



function Display({ prefix, suffix, camelCase, generate, numberClick, hyphenState, scoreState, generatePrefix, generateSuffix  }) {
  // console.log("this is word: >>.")
  // console.log(suffix)
  // console.log(camelCase)
  // console.log(hyphenState)
  // console.log(scoreState)
  
  return (
    <div className="input__container-display" >
      <span>
        {/* <h1 className="generated">{generate}</h1> */}
        
        <div className="hyphen-container"></div>
        <h1 className="prefix">
            <DisplayPre 
              prefix={generatePrefix ? generatePrefix : generate}
            />
        </h1>
        
        
        <div className="hyphen-container">{hyphenState ? hyphenState : scoreState}</div>
        
        <h1 className="suffix">
          <DisplaySuff suffix={generateSuffix}/>
        </h1>
        
        <h1 className="camelCase">
          <DisplayCamelCase camelCase={camelCase}/>
        </h1>
        
        
        <div className="hyphen-container">{numberClick ? hyphenState?hyphenState:scoreState : ''}</div>
        
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