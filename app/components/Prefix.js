import React from "react"
import {useForm} from 'react-hook-form'

function Prefix({prefixPlaceholder, prefix}) {
  
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
            
        />
    </>
  )
}

export default Prefix