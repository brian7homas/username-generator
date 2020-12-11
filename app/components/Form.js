import React, { useEffect } from "react"
import Fromgroup from './Formgroup'
import Checkboxes from './Checkboxes'

import Buttons from './Buttons'




function Form({search, log}) {
  
  return (
    <form>
      <Fromgroup 
        label="The start of your username" 
        placeholder="Prefix"
        search={search}
        log ={log}
        />
      <Fromgroup label="The end of your username" placeholder="Suffix"/>
      <Fromgroup label="Optional number to make it more unique" placeholder="Number" />

      <Checkboxes label="camelCase"/>
      <Checkboxes label="Hyphens"/>
      <Checkboxes label="Underscores"/>
      
      <Buttons/>
    </form>
  )
}

export default Form