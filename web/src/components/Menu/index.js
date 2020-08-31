import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/formflix.png';
import { Container } from './styles';
import Button from './Button';

function Menu() {
  return (
      <>
      <Container>
          <Link to="/">
            <img src={Logo} alt="FormFlix"></img>
          </Link>
          <Link to="/cadastro/video">
            <Button>Novo vídeo</Button>
          </Link>
      </Container>
      </>
  );
}

export default Menu;