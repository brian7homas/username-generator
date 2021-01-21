import React, { useEffect } from "react"
import { useForm } from 'react-hook-form'
function CamelCase({label, camelCase, props}) {
  const { register, handleSubmit, watch, errors } = useForm();
  return (
    <div className="checkbox">
      
      <input ref={register({watch: camelCase})} onChange={camelCase} className="input__container-checkboxes-checkbox" value="" type="checkbox" name="camelCase" id="camelCase"/>
      <label htmlFor="camelCase">{label}</label>
    </div>
  )
}

export default CamelCase