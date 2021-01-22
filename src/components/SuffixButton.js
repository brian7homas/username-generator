import React, { useEffect } from "react"
var randomWords = require('random-words');

function Buttons({generateSuffix, numberClick, clear}) {
  
  
  return (
    <>
        <div className="input__container-buttons">
                <button onClick={generateSuffix} type="submit">Generate the end of your username</button>
        </div>
    </>
  )
}

export default Buttons