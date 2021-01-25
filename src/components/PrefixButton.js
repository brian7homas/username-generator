import React, { useEffect } from "react"
var randomWords = require('random-words');

function Buttons({generatePrefix, numberClick, clear}) {
  
  
  return (
    <>
        <div className="button-generate button-generate__prefix">
                <button onClick={generatePrefix} type="submit">Generate</button>
        </div>
    </>
  )
}

export default Buttons