import React from "react";
import "./style.scss";

import { Location } from "../../assets/icons/index";
import Button from "../Button";

function Publication() {

  const selectedPublication = {
    name: 'Julia Borger',
    date: '19/10, 12:45',
    address: 'Cabo Frio, RJ',
    description: 'Imagens feitas por GoPro 6 do Coral Sol.',
  };

  return (
    <div className="publicationWrapper">
      <div className="publication">
        <div className="name">
          <h2>{selectedPublication.name}</h2>
          <div className="locationWrapper">
            <Location /> <span>{selectedPublication.address}</span>
          </div>
          <p>{selectedPublication.date}</p>
        </div>
        <div className="desc">
          <b>Descrição</b>
          <p>{selectedPublication.description}</p>
        </div>
        <div className="actions">
          <Button text="Baixar Arquivo" />
        </div>
      </div>
      <div className="divider"></div>
      <div className="coral3D">
        <div class="sketchfab-embed-wrapper">
          <iframe
            title="A 3D model"
            width="100%"
            height="480"
            src="https://sketchfab.com/models/b2a7aef9f4814de09d42546c1a974cd0/embed"
            frameborder="0"
            allow="autoplay; fullscreen; vr"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Publication;
