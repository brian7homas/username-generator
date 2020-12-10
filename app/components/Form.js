import React, { useEffect } from "react"
import Fromgroup from './Formgroup'
import Checkboxes from './Checkboxes'
import Display from './Display'
import Buttons from './Buttons'


function Form({search}) {
  return (
    <form>
      <Fromgroup 
        label="The start of your username" 
        placeholder="Prefix"
        search={search}
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