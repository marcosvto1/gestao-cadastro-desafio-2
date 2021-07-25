import * as React from 'react';
import * as Styles from './style';
export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {
  return (
    <Styles.Wrapper>
      <Styles.Logo>
        Administrativo
      </Styles.Logo>
      <div style={{marginRight: '20px'}}>
        Sair
      </div>
    </Styles.Wrapper>
  );
}
