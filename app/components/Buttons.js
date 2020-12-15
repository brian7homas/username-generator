import React, { useEffect } from "react"

function Buttons({ generate }) {
  return (
    <div className="input__container-buttons">
            <button onClick={generate} type="submit">Generate</button>
            <button>Number</button>
    </div>
  )
}

export default Buttons