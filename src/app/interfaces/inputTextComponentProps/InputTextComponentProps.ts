import { InputHTMLAttributes } from 'react';

interface InputTextComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default InputTextComponentProps;