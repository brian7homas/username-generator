import React, { useEffect } from "react"
var randomWords = require('random-words');

function Buttons({generate, click}) {
  
  
  return (
    <div className="input__container-buttons">
            <button onClick={generate} type="submit">Generate</button>
            <button>Number</button>
    </div>
  )
}

export default Buttons