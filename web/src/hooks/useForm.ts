import { useState } from 'react';

function useForm(initialValues: any){
  let [values, setValues] = useState(initialValues);
  
  function setValue(key : any, value : any){
    setValues({ ...values, [key]: value });
  }
  
  function handleChange(event : any){
    setValue(event.target.getAttribute('name'),event.target.value);
  }

  function clearForm(){
    setValues(initialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
