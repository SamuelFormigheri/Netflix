import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px 0;
  label{
    font-size: 16px;
    font-weight:lighter;
    margin-bottom:5px;
  }
  textarea{
    border-radius: 6px;
    padding:15px 15px;
    max-width:800px;
    max-height: 200px;
    width:100%;
    height:150px;
    background: var(--blackLighter);
    color: var(--white);
    ::placeholder { 
      color: var(--grayLight);
    }
    &:focus{
      ::placeholder{
        transform: scale(0.8) translateY(-20px) translateX(-12%);
      }
    }
  }
`;
