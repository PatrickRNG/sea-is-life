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

  return (
    <Router>
      <div className="main">
        <Sidemenu />
        <Switch>
          <Route path="/publication/create" render={() => <PublicationCreate />} />
          <Route path="/publication" render={() => <Publication selectedPublication={selectedPublication} />} />
          <Route path="/"render={() => <Content setSelectedPublication={setSelectedPublication} setPublications={setPublications} publications={publications} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default Main;