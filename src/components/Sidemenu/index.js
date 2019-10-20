import React from 'react';
import { About, Calendar, Contact, Location, World } from '../../assets/icons/index';
import './style.scss';
import { Link } from 'react-router-dom';

function Sidemenu() {
  return (
    <div className="sidemenu">
      <div className="logo"><Link to="/"><span>SEA</span> IS LIFE</Link></div>
      <div className="sideItems">
        <p className="title">Filtros</p>
        <div className="item">
          <div className="icon"><Location/></div>
          <span>Locais</span>
        </div>
        <div className="item">
          <div className="icon"><Calendar/></div>
          <span>Data</span>
        </div>
        <p className="title">Menu</p>
        <div className="item">
          <Link className="linkMap" to='/'>
            <div className="icon"><World/></div>
            <span>Mapa</span>
          </Link>
        </div>
        <div className="item">
          <Link className="linkPublish" to="/publication/create">
            <div className="icon"><Calendar/></div>
            <span>Publicar</span>
          </Link>
        </div>
        <div className="item">
          <div className="icon"><About/></div>
          <span>Sobre o Coral-Sol</span>
        </div>
        <div className="item">
          <div className="icon"><Contact/></div>
          <span>Contato</span>
        </div>
      </div>
    </div>
  )
}

export default Sidemenu;