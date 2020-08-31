import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface IFormField extends InputHTMLAttributes<HTMLInputElement> {
  id: string; 
  label: string; 
  name: string; 
  suggestions?: string[];
}

const FormField: React.FC<IFormField> = ({ id, label, name, type, placeholder, suggestions, onChange }) => {
  const hasSuggestions = suggestions ? Boolean(suggestions.length) : null;
  return (
    <Container>
        <label htmlFor={id}> {label} </label>
        <input id={id} name={name} type={type} placeholder={placeholder} onChange={onChange} 
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${id}` : undefined}/>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${id}`}>
              {
              suggestions && suggestions.map((suggestion) => (
                <option value={suggestion} key={`suggestionFor_${id}_option${suggestion}`}>
                  {suggestion}
                </option>
              ))
            }
            </datalist>
          )
        }
    </Container>
  );
}

export default FormField;