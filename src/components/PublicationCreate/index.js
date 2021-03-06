import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';
import Button from '../Button';
import { BlueCalendar } from '../../assets/icons/index';

function PublicationCreate({setFeatures, features, history}) {

  const handleSubmit = function() {
    const newFeature =  [...features, {
      type: "Feature",
      properties: {
        description: `
          <div className="tooltip">
            <b>Patrick Passarella</b>
            <p>Costa Rica, RJ</p>
            <p>Coral-Sol identificado na costa próximo a Praia do Forte.</p>
            <a href="/publication">Visualizar<a>
          </div>
        `,
        icon: "coral"
      },
      geometry: {
        type: "Point",
        coordinates: [-2.449900, -22.996700]
      }
    }];
    
    setFeatures(newFeature);
    history.push('/');
  }

  return (
    <div className="publicationCreateWrapper">
      <h2>Publicar</h2>
      <div className="divider"></div>
      <div className="content">
        <div className="left">
          <h3>Selecione o arquivo de vídeo/foto</h3>
          <Button text="Selecionar arquivo" type="file" />
          <h3 className="titleMap">Local (selecione no mapa)</h3>
          <Button text="Abrir mapa" />
          <h3 className="titleMap">Data de visualização do coral</h3>
          <div className="date">
            <BlueCalendar />
            <input className="dateInput input" placeholder="dd/mm/yyyy hh:mm" />
          </div>
        </div>
        <div className="right">
          <h3>Modelo da câmera usada</h3>
          <input className="input" />
          <h3>Descrição</h3>
          <input className="description input" />
          <Button onClick={handleSubmit} text="Publicar" />
        </div>
      </div>
    </div>
  );
}

export default withRouter(PublicationCreate);