import React, { useEffect } from "react"
import Fromgroup from './Formgroup'
import Checkboxes from './Checkboxes'
import CamelCase from './CamelCase'
import Hyphen from './Hyphen'
import Underscore from './Underscore'
import { useForm, forewardRef } from 'react-hook-form'
import Buttons from './Buttons'

var randomWords = require('random-words');




function Form({search, prefix, suffix, camelCase, hyphen, underscore, generate}) {
  
  const { register, handleSubmit, watch, errors } = useForm();
  
  const onSubmit = (data) => {
    var word = randomWords()
    console.log(word)
    return word
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Fromgroup
        label="The start of your username" 
        prefixPlaceholder="Prefix"
        suffixPlaceholder="Suffix"
        prefix={prefix}
        suffix={suffix}
        generate={onSubmit()}
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
      
      <Buttons
        // generate={generate}
      />
    </form>
  )
}

export default Form