import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

const Input: React.FC<InputProps> = ({
    placeholder,
    style,
    ...rest
}) => {
  return <Container 
    placeholder={placeholder}
    style={style}
    {...rest}
  />
}

export default Input;