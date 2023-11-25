import { InputHTMLAttributes, ReactNode } from 'react';

interface InputIconComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode;
}

export default InputIconComponentProps;