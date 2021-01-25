import React, { useEffect } from "react"

function Info({word, type, definition, prefix, suffix}) {
  return (
    <div className="info">
        <ul>
          <li>
            <p className="info-word">{word}</p>
          </li>
        
          <li>
          <p className="info-type">{type}</p>
          </li>
        
          <li>
            <p className="info-definition">{prefix}</p>
          </li>
          <li>
            <p className="info-definition">{suffix}</p>
          </li>
        </ul>
        
        
    </div>
  )
}

export default Info