import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Page404() {
  return (
      <>
          <Container>
            <h1>404 - Página não encontrada</h1>
            <Link to="/">Voltar para Home</Link>
          </Container>
      </>
  );
}

export default Page404;