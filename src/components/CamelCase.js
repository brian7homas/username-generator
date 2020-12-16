import React, { useEffect } from "react"
import { useForm } from 'react-hook-form'
function CamelCase({label, camelCase, props}) {
  const { register, handleSubmit, watch, errors } = useForm();
  return (
    <>
      <label htmlFor="">{label}</label>
      <input ref={register({watch: camelCase})} onChange={camelCase} className="input__container-checkboxes-checkbox" value="" type="checkbox" name="camelCase" id=""/>
    </>
  )
}

export default CamelCase