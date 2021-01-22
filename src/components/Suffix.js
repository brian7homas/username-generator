import React from "react"
import { useForm } from 'react-hook-form'
import SuffixButton from './SuffixButton'

function Suffix({suffixPlaceholder, suffix, generateSuffix}) {
  const { register, handleSubmit, watch, errors } = useForm();  
  return (
    <>
        <input 
            className="input__text" 
            type="text"  
            placeholder={suffixPlaceholder}
            onChange={suffix}
            ref={register}
            name="Suffix"
        />
        < SuffixButton 
            generateSuffix={generateSuffix}
        />
    </>
  )
}

export default Suffix