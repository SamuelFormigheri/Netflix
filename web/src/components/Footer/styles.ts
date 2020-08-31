import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding: 8px 16px 0 16px;
  color: var(--white);
  text-align: center;

  img{
    height: 65px; 
    max-width: 168px;
  }

  @media (max-width: 800px) {
    margin-bottom: 50px;

    img {
      max-width: 105px;
    }
  }
`;
