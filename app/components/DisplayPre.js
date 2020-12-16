import React, { useEffect } from "react"

function DisplayPre({prefix,generate}) {
  // console.log(prefix)
  return (
    <>
        {
          prefix?prefix:generate 
        }
    </>
  )
}

export default DisplayPre