import styled from 'styled-components';

export const Container = styled.div`
  padding: 140px;
  display: flex;
  flex-direction: column;
  background: var(--black);
  color: var(--white);
  height:100vh;
  @media (max-width: 800px) {
      &{
        padding: 106px;
      }
    }
`;
