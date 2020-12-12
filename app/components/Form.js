import React, { useEffect } from "react"
import Fromgroup from './Formgroup'
import Checkboxes from './Checkboxes'

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
      

      <Checkboxes label="camelCase"/>
      <Checkboxes label="Hyphens"/>
      <Checkboxes label="Underscores"/>
      
      <Buttons/>
    </form>
  )
}

export default Form