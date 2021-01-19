import React, { useEffect } from "react"
import Fromgroup from './Formgroup'
import Checkboxes from './Checkboxes'
import CamelCase from './CamelCase'
import Hyphen from './Hyphen'
import Underscore from './Underscore'
import { useForm, forewardRef } from 'react-hook-form'
// import Buttons from './Buttons'

var randomWords = require('random-words');




function Form({numberClick, prefix, suffix, camelCase, hyphen, underscore, generate, click}) {
  
  const { register, handleSubmit, watch, errors } = useForm();
  // console.log(generate)  
  const onSubmit = (data) => {
    
    return randomWords()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="myForm">
    <div className="form-group-container">
        <Fromgroup
          label="The start of your username" 
          prefixPlaceholder="Prefix"
          suffixPlaceholder="Suffix"
          prefix={prefix}
          suffix={suffix}
          generate={generate}
          />
        

        <Checkboxes>
          <CamelCase 
            label="CamelCase"
            watch={watch}
            camelCase={camelCase}
          />
          <Hyphen 
            label="Hyphen"
            hyphen={hyphen}
          />
          <Underscore 
            label="UnderScore"
            underscore={underscore}
            
          />
        </Checkboxes>
      </div>
      
    </form>
  )
}

export default Form