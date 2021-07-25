import React from 'react'
import styled from 'styled-components';

interface Props {
  bg: string;
  w: string;
  p?: number;
  children: any;
}

const Card = (props: Props) => {
  return (
    <Wrapper bg={props.bg} w={props.w} p={props.p || 1}>
     {props.children}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ bg: string, w?: string, p: number}>`
  background-color: ${p => p.bg};
  width: ${p => p.w};
  margin: 10px 10px;
  padding: ${p => p.p}px;
`; 


export default Card
