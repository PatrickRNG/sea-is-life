import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import "./style.scss";
import { Download } from "../../assets/icons/index";
import coralIcon from "../../assets/img/coral.png";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

function Content({
  setPublications,
  publications,
  setSelectedPublication,
  features,
  history
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [coordinates, setCoordinates] = useState({});

  const handleOpenModal = function(e) {
    const isMap = e.target.className === "map";
    isMap && setIsOpen(!isOpen);
  };

  const handleLabelClick = function() {
    history.push('/publication');
  };

  const renderMap = function() {
    if (publications) {
      console.log(publications);
      mapboxgl.accessToken =
        "pk.eyJ1IjoicGF0cmlja3JuZyIsImEiOiJjazF6NmtpbXcwdXVqM2NvY29nYmo3a3BxIn0._I02X5D3Q713IEVImpRjvQ";
      var map = new mapboxgl.Map({
        container: "mapPlaceholder",
        style: "mapbox://styles/mapbox/streets-v11",
        zoom: 4
      });

      map.on("load", function() {
        map.loadImage(coralIcon, function(error, image) {
          if (error) throw error;
          map.addImage("coral", image);
          map.addLayer({
            id: "corals",
            type: "symbol",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features
              }
            },
            layout: {
              "icon-image": "coral",
              "icon-size": 0.1,
              "icon-allow-overlap": true
            }
          });
        });
      });

      map.on("mousemove", function(e) {
        setCoordinates(e.lngLat.wrap());
      });

      addMapIconClick(map);
    }
  };

  const addMapIconClick = function(map) {
    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on("click", "corals", function(e) {
      console.log(e);
      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = e.features[0].properties.description;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on("mouseenter", "places", function() {
      map.getCanvas().style.cursor = "pointer";
    });

    // Change it back to a pointer when it leaves.
    map.on("mouseleave", "places", function() {
      map.getCanvas().style.cursor = "";
    });
  };

  useEffect(() => {
    renderMap();
  }, []);

  const handleSelectPublication = function(publication) {
    history.push("/publication");
    setSelectedPublication(publication);
  };

  return (
    <div className="map">
      <div id="mapPlaceholder"></div>
      <div className="coordinates">
        <b>lat:</b> {coordinates.lat}, <b>long:</b> {coordinates.lng}
      </div>
    </div>
  );
}

export default withRouter(Content);
