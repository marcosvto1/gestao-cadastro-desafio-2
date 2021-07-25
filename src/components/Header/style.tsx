import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background-color: #ffd9FF;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 1px 0px rgba(46, 46, 46, 0.2);
`;

const Logo = styled.div`
  font-size: 1.2rem;
  color: #b550ce;
  margin: 10px 30px;
`;

const Menu = styled.nav`
  justify-content: center;
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: #cc5f5f;
  margin: 0 20px;
  &:hover {
    cursor: pointer;
    color: #6b3f3f;
  }
`;

export {
  Wrapper,
  Logo,
  Menu,
  MenuLink,
};
