import React, { useEffect } from "react"
var randomWords = require('random-words');

function Buttons({generate, numberClick, clear}) {
  
  
  return (
    <>
      <button className="input__container-buttons__generate" onClick={generate} type="submit">Get information about your username</button>
      <div className="input__container-buttons">      
            <button onClick={numberClick}>Number</button>
            <button onClick={clear}>Clear</button>
      </div>
      
    </>
  )
}

export default Buttons