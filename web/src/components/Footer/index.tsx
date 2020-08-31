import React from 'react';
import Logo from '../../assets/img/form.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/SamuelFormigheri">
        <img src={Logo} alt="Form" />
      </a>
      <p>
        Desenvolvido por 
        {' '}
        <a href="https://github.com/SamuelFormigheri" style={{textDecoration:"none", color: "#00C86F"}}>
          Samuel Formigheri 
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
