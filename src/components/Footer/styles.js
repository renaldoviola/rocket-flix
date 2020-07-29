import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--blackTopAndFooter);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;

  .Logo {
    max-width: 168px;
    width: 100%;
  }

  @media (max-width: 800px) {
    margin-bottom: 50px;

    .Logo {
      max-width: 105px;
      width: 100%;
    }
  }

`;
