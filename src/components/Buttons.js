import React, { useEffect } from "react"
var randomWords = require('random-words');

function Buttons({generate, numberClick}) {
  
  
  return (
    <div className="input__container-buttons">
            <button onClick={generate} type="submit">Generate</button>
            <button onClick={numberClick}>Number</button>
    </div>
  )
}

export default Buttons