import React from 'react'
import styled from 'styled-components';

interface Props {
  columns?: number;
  size?: string;
  children: any;
  auto?: boolean;
  cols?: string;
  jc?: string;
  ai?: string;
  gg?: number;
}

const Grid = (props: Props) => {


  if (props.auto) {

    return (
      <WrapperAutoColumms columns={props.columns} size={props.size} gg={props.gg || 0}>
        { props.children }
      </WrapperAutoColumms>
    )
  } else {
   return <Wrapper cols={props.cols} jc={props.jc} ai={props.ai || 'normal'}>
    { props.children }
    </Wrapper>
  }

}

export default Grid

interface IWrapperAutoColumns {
  columns?: number;
  size?: string;
  gg?: number;
}

const WrapperAutoColumms = styled.div<IWrapperAutoColumns>`
  display: grid;
  grid-template-columns: repeat(${p => p.columns}, ${p => p.size});
  grid-gap: ${p => p.gg}px;
`;

interface IWrapper {
  cols?: string;
  jc?: string;
  ai?: string;
  gg?: number;
}

const Wrapper = styled.div<IWrapper>`
  display: grid;
  grid-template-columns: ${p => p.cols};
  justify-content: ${p => p.jc ?? 'normal' };
  align-items: ${p => p.jc ?? 'normal' };
  grid-gap: ${p => p.gg}px;
`;