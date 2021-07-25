import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components';


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  label: string;
}

const FormInput = ({name, label, ...rest }: InputProps) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label><br/>
      <Input id={name} name={name} {...rest} /> 
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  outline: none;
  border: 1px solid #ece4f0;
`;

export default FormInput;

