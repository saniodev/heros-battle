import { ButtonHTMLAttributes } from 'react';

interface ButtonSubmitProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export default ButtonSubmitProps;