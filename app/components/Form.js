import React, { useEffect } from "react"
import Fromgroup from './Formgroup'
import Checkboxes from './Checkboxes'
import CamelCase from './CamelCase'
import Hyphen from './Hyphen'
import Underscore from './Underscore'

import Buttons from './Buttons'




function Form({search, prefix, suffix}) {
  
  return (
    <form>
      <Fromgroup 
        label="The start of your username" 
        prefixPlaceholder="Prefix"
        suffixPlaceholder="Suffix"
        prefix={prefix}
        suffix={suffix}
        
        />
      

      <Checkboxes>
        <CamelCase 
          label="CamelCase"
        />
        <Hyphen 
          label="Hyphen"
        />
        <Underscore 
          label="UnderScore"
        />
      </Checkboxes>
      
      <Buttons/>
    </form>
  )
}

export default Form