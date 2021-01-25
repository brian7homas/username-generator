import React, { useEffect } from "react"
var randomWords = require('random-words');

function Buttons({generateSuffix, numberClick, clear}) {
  
  
  return (
    <>
        <div className="button-generate button-generate__suffix">
                <button onClick={generateSuffix} type="submit">Generate suffix</button>
        </div>
    </>
  )
}

export default Buttons