import React from "react"
import Prefix from "./Prefix"
import Suffix from "./Suffix"
function Formgroup({label, suffixPlaceholder, prefixPlaceholder, prefix, suffix, generate, generatePrefix, generateSuffix}) {
  
  return (
    <div className="form-group">
        <label htmlFor="">{label}</label>
        <Prefix 
          prefixPlaceholder={prefixPlaceholder}
          prefix={prefix}
          generate={generate}
          generatePrefix={generatePrefix}
        />
        <Suffix 
          suffixPlaceholder={suffixPlaceholder}
          suffix={suffix}
          generateSuffix={generateSuffix}
        />
          
    </div>
  )
}

export default Formgroup