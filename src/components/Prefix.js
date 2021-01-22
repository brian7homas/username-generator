import React from "react"
import {useForm} from 'react-hook-form'
import PrefixButton from './PrefixButton'
var randomWords = require('random-words');


function Prefix({prefixPlaceholder, prefix, generate, generatePrefix}) {
  
  const {register,handleSubmit, watch, errors } = useForm();  
  // console.log(watch("Prefix"))
  return (
    <>
        <input 
            className="input__text" 
            type="text"  
            placeholder={prefixPlaceholder}
            onChange={prefix}
            ref={register}
            name="Prefix"
            // value={generate}
        />
        < PrefixButton 
            generatePrefix={generatePrefix}
            
        />
    </>
  )
}

export default Prefix