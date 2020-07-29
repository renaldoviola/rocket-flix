import React from 'react';
import Menu from '../../components/Menu'
import Footer from '../../components/Footer';
import styled from 'styled-components';

const Main = styled.main`
  background-color: #2e2e2e;
  color: var(--white);
  height: 100%;
  align-items: center;
  flex: 1;
  padding-left: 5%;
  padding-right: 5%;
`;

function PageDefault({ children}) {
  return (
    <>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  );
}

export default PageDefault;