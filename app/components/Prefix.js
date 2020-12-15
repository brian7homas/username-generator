import React from "react"
import {useForm} from 'react-hook-form'

function Prefix({prefixPlaceholder, prefix, generate}) {
  
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
    </>
  )
}

export default Prefix