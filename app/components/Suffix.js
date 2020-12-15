import React from "react"
import { useForm } from 'react-hook-form'

function Suffix({suffixPlaceholder, suffix}) {
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
    </>
  )
}

export default Suffix