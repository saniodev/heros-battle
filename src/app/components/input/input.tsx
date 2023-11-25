import React from 'react';
import InputTextComponentProps from "../../interfaces/inputTextComponentProps/InputTextComponentProps";

const InputTextComponent: React.FC<InputTextComponentProps> = ({ label, ...inputProps }) => {
    return (
      <div>
        {label && <label htmlFor={inputProps.id}>{label}</label>}
        <input {...inputProps} />
      </div>
    );
  };
  
  export default InputTextComponent;