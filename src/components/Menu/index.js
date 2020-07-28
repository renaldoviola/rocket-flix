import React from 'react';
import Logo from '../../assets/img/logo.png';
import './menu.css';
import {ButtonStyles} from './components/Button/';

function Menu () {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="RocketFlix" />
      </a>

      <ButtonStyles as="a" className="ButtonLink" href="/">
        Novo vídeo
      </ButtonStyles>
    </nav>
  )

}

export default Menu;