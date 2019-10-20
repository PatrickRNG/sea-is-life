import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.scss';

import Sidemenu from '../Sidemenu';
import Content from '../Content';
import PublicationCreate from '../PublicationCreate';
import Publication from '../Publication';

function Main() {
  const [publications, setPublications] = useState([
    {
      name: "Marcello Arruda",
      address: "Rio de Janeiro, assadas",
      description: "Short description, lorem ipsum solor sit amet",
      date: "19/10/2019, 12:27",
      image: "3d.png"
    },
    {
      name: "Laís Lopes",
      address: "Rio de Janeiro, sdsd",
      description: "Short description, lorem ipsum solor sit amet",
      date: "19/10/2019, 12:27",
      image: "3d2.png"
    },
    {
      name: "Osmar Lounet",
      address: "Rio de Janeiro, rtrt",
      description: "Short description, lorem ipsum solor sit amet",
      date: "19/10/2019, 12:27",
      image: "3d3.png"
    }
  ]);
  const [selectedPublication, setSelectedPublication] = useState({});
  const [features, setFeatures] = useState([
    {
      type: "Feature",
      properties: {
        description: `
          <div className="tooltip">
            <b>${publications[0].name}</b>
            <p>${publications[0].address}</p>
            <p>${publications[0].description}</p>
            <a href="/publication">Visualizar<a>
          </div>
        `,
        icon: "coral"
      },
      geometry: {
        type: "Point",
        coordinates: [-43.189161, -22.981656]
      }
    },
    {
      type: "Feature",
      properties: {
        description: `
          <div className="tooltip">
            <b>${publications[0].name}</b>
            <p>${publications[0].address}</p>
            <p>${publications[0].description}</p>
            <a href="/publication">Visualizar<a>
          </div>
        `,
        icon: "coral"
      },
      geometry: {
        type: "Point",
        coordinates: [-35.817234, -9.737782]
      }
    },
    {
      type: "Feature",
      properties: {
        description: `
          <div className="tooltip">
            <b>${publications[0].name}</b>
            <p>${publications[0].address}</p>
            <p>${publications[0].description}</p>
            <a href="/publication">Visualizar<a>
          </div>
        `,
        icon: "coral"
      },
      geometry: {
        type: "Point",
        coordinates: [-35.090269, -8.694316]
      }
    },
    {
      type: "Feature",
      properties: {
        description: `
          <div className="tooltip">
            <b>${publications[0].name}</b>
            <p>${publications[0].address}</p>
            <p>${publications[0].description}</p>
            <a href="/publication">Visualizar<a>
          </div>
        `,
        icon: "coral"
      },
      geometry: {
        type: "Point",
        coordinates: [-35.052106, -8.605790]
      }
    },
    {
      type: "Feature",
      properties: {
        description: `
          <div className="tooltip">
            <b>${publications[0].name}</b>
            <p>${publications[0].address}</p>
            <p>${publications[0].description}</p>
            <a href="/publication">Visualizar<a>
          </div>
        `,
        icon: "coral"
      },
      geometry: {
        type: "Point",
        coordinates: [-44.488312, -23.018424]
      }
    },
    {
      type: "Feature",
      properties: {
        description: `
          <div className="tooltip">
            <b>${publications[0].name}</b>
            <p>${publications[0].address}</p>
            <p>${publications[0].description}</p>
            <a href="/publication">Visualizar<a>
          </div>
        `,
        icon: "coral"
      },
      geometry: {
        type: "Point",
        coordinates: [-44.438626, -23.002173]
      }
    },
    {
      type: "Feature",
      properties: {
        description: `
          <div className="tooltip">
            <b>${publications[0].name}</b>
            <p>${publications[0].address}</p>
            <p>${publications[0].description}</p>
            <a href="/publication">Visualizar<a>
          </div>
        `,
        icon: "coral"
      },
      geometry: {
        type: "Point",
        coordinates: [-44.449879, -22.996860]
      }
    },
    {
      type: "Feature",
      properties: {
        description: `
          <div className="tooltip">
            <b>${publications[0].name}</b>
            <p>${publications[0].address}</p>
            <p>${publications[0].description}</p>
            <a href="/publication">Visualizar<a>
          </div>
        `,
        icon: "coral"
      },
      geometry: {
        type: "Point",
        coordinates: [38.985986, -16.406004]
      }
    },
    {
      type: "Feature",
      properties: {
        description: `
          <div className="tooltip">
            <b>${publications[0].name}</b>
            <p>${publications[0].address}</p>
            <p>${publications[0].description}</p>
            <a href="/publication">Visualizar<a>
          </div>
        `,
        icon: "coral"
      },
      geometry: {
        type: "Point",
        coordinates: [-46.307941, -23.995156]
      }
    },
  ]);

  return (
    <Router>
      <div className="main">
        <Sidemenu />
        <Switch>
          <Route path="/publication/create" render={() => <PublicationCreate features={features} setFeatures={setFeatures} />} />
          <Route path="/publication" render={() => <Publication selectedPublication={selectedPublication} />} />
          <Route path="/"render={() => <Content features={features} setSelectedPublication={setSelectedPublication} setPublications={setPublications} publications={publications} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default Main;