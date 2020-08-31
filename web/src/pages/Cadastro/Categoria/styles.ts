import styled from 'styled-components';

export const Container = styled.div`
  padding:50px;
  display:flex;
  flex-direction:column;
  margin-left:calc(20vw - 20px);
  button{
    width: 100%;
    height: 30px;
    margin-top: 40px;
    color:var(--white);
    background: var(--backEnd);
    border-radius: 10px;
    border:none;
    transition:400ms;
    max-width:800px;
    font-weight: bold;
    font-size:16px;
    &:hover{
      background: var(--primary);
      font-size:18px;
      height: 34px;
      cursor:pointer;
    }
  }
  h1 {
    display:flex;
    align-items:center;
    img{
      width:40px;
      height:40px;
      margin-right:5px;
    }
  }
  a{
    display:flex;
    align-items:center;
    max-width:800px;
    width: 160px;
    color: var(--backEnd);
    img{
      width:20px;
      height:20px;
      margin-right:5px;
    }
  }
  table{
    width: 100%;
    text-align: left;
    border-top: 1px solid;
    border-bottom: 1px solid;
    margin-bottom: 20px;
    padding:5px;
    max-width: 800px;
    thead{
      background: var(--blackAlmostDark);
    }
    img{
      opacity: 0;
      width:20px;
      height:20px;
    }
    td:last-child{
      width: 20px;
    }
    tr:hover{
      img{
        opacity: 1;
        cursor: pointer;
      }
    }
  }
  @media(max-width:800px){
    margin-left: 0;
  }
`;
