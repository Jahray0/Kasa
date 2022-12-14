import React from "react";
import { useParams } from "react-router-dom";
import { dataLodgings } from "../data/dataLogements";
import Page404 from "../pages/Page404";
import ImageSlider from "../components/ImageSlider";
import DetailLogements from "../components/DetailLogements";
import Collapse from "../components/Collapse";
import "../styles/pages/Detail.css";

// Affichage des composants des pages logement
export default function HousingPage() {
  let { id } = useParams();
  const lodging = dataLodgings.getOneLodging(id);

  if (!lodging) {
    return <Page404 />;
  } else {
    return (
      <div className="housingPage">
        <ImageSlider slides={lodging.pictures} />
        <DetailLogements info={lodging} />
        <div className="collapse">
          <Collapse
            className="collapseContainer"
            title="Description"
            description={lodging.description}
          />
          <Collapse
            className="collapseContainer"
            title="Equipements"
            description={lodging.equipments.map((equipment, index) => (
              <div key={index}>{equipment}</div>
            ))}
          />
        </div>
      </div>
    );
  }
}
