import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './menu.css';
import {ButtonStyles} from './components/Button/';

function Menu () {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="RocketFlix" />
      </Link>

      <ButtonStyles as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </ButtonStyles>
    </nav>
  )

}

export default Menu;