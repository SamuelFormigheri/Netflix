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
  input{
    border-radius: 6px;
    padding:10px 15px;
    max-width:800px;
    width:100%;
    height:50px;
    background: var(--blackLighter);
    color: var(--white);
    ::placeholder { 
      color: var(--grayLight);
    }
    &:focus:not([type="color"]){
      ::placeholder{
        transform: scale(0.8) translateY(-20px) translateX(-12%);
      }
    }
  }
`;
