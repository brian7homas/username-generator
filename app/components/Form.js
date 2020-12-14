import React, { useEffect } from "react"
import Fromgroup from './Formgroup'
import Checkboxes from './Checkboxes'
import CamelCase from './CamelCase'
import Hyphen from './Hyphen'
import Underscore from './Underscore'
import { useForm } from 'react-hook-form'
import Buttons from './Buttons'




function Form({search, prefix, suffix, camelCase}) {
  
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data)
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          watch={watch}
          camelCase={camelCase}
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