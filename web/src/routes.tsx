import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';
import Page404 from './pages/Erro/Page404';

const Routes: React.FC = () => {
  return (
        <BrowserRouter>
            <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cadastro/video" component={CadastroVideo} exact />
            <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
            <Route component={Page404}/>
            </Switch>
        </BrowserRouter>
  );
}

export default Routes;