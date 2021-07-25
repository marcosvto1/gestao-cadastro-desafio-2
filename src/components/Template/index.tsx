import React from 'react'
import { NavLink } from 'react-router-dom';
import Grid from '../Grid';
import Header from '../Header'
import * as Styles from './style';

interface Props {
  children: any;
}

const Template = (props: Props) => {
  return (
    <>
      <Grid auto={false} cols={`280px 1fr`} >
        <Styles.ASide>
          <div style={{ padding: '1rem', textAlign: 'center', marginBottom: '1rem'}}>
            <img src="https://uploads-ssl.webflow.com/5f2d50967d364984a023dc4c/6092fbd604ec859b1408756c_logo-hc.png" width="100" alt="Hiring Coders"></img>
          </div>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/admin/produtos">Produtos</NavLink>
          <NavLink to="/admin/clientes">Clientes</NavLink>
        </Styles.ASide>
        <Styles.Wrapper>
          <Header />
          <Styles.WrapperContent>
            {props.children}
          </Styles.WrapperContent>
        </Styles.Wrapper>
      </Grid>
    </>
  )
}

export default Template;
