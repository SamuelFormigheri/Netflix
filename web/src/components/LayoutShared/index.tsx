import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';

import { Main } from './styles';

function LayoutShared(props : any) {
  return (
      <>
        <Menu />
            <Main>
                {props.children}
            </Main>
        <Footer></Footer>
      </>
  );
}

export default LayoutShared;