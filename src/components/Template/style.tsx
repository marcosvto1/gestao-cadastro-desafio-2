import styled from "styled-components";

const Wrapper = styled.div`
  display: relative;
`;

const WrapperContent = styled.div`
  margin: 37px 37px;
`

const ASide = styled.div`
  display: relative;
  height: 100vh;
  background-color: #F0F0F0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eee;

  a {
    text-decoration: none;
    margin: 8px 0;
    font-size: 1rem;
    color: #b550ce;
  }
`;

export default {
  Wrapper,
  WrapperContent,
  ASide
};
