import * as React from 'react';
import styled from 'styled-components';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  color?: string;
}

export default function Button (props: IButtonProps) {

  if (props.color === 'primary' || !props.color) {
    return (
      <BtnPrimary {...props} >
        { props.children }
      </BtnPrimary>
    );
  } else {
    return (
      <BtnDanger {...props}>
        { props.children }
      </BtnDanger>
    );
  }


}

const BtnPrimary = styled.button<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  border: none;
  background-color: #DB9AEB;
  padding: 0.6rem;
  border-radius: 5px;
  transition: 0.3s ease;
  color: #ffffff;
  &:hover {
    background-color: #b550ce;
    cursor: pointer;
  }
`;

const BtnDanger = styled.button<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  border: none;
  background-color: #CF6879;
  padding: 0.6rem;
  border-radius: 5px;
  transition: 0.3s ease;
  color: #ffffff;
  &:hover {
    background-color: #702633;
    cursor: pointer;
  }
`;