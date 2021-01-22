import React, { useEffect } from "react"
var randomWords = require('random-words');

function Buttons({generatePrefix, numberClick, clear}) {
  
  
  return (
    <>
        <div className="input__container-buttons">
                <button onClick={generatePrefix} type="submit">Generate the start of your username</button>
        </div>
    </>
  )
}

export default Buttons