import React, { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

interface IFormTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string; 
  label: string; 
  name: string;
}


const FormTextArea:React.FC<IFormTextArea> = ({ id, label, name, placeholder, onChange }) => {
  return (
    <Container>
        <label> {label} </label>
        <textarea id={id} name={name} placeholder={placeholder} onChange={onChange}/>       
    </Container>
  );
}

export default FormTextArea;