import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { dataLogements } from "../data/dataLogements";
import Page404 from "../pages/Page404"; //import pages
import DetailLogements from "../components/DetailLogements"; //import components
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import "../styles/pages/Detail.css"; //import Style

// Affichage des composants des pages logement
function Detail() {
  useEffect(() => {
    const body = document.querySelector("#root");
    body.scrollIntoView({ behavior: "auto" }, 500);
  }, []);
  //récupération de l'id du logement
  let { id } = useParams();
  //récupération des informations du logement
  const logement = dataLogements.getOneLogement(id);
  //console.log(logement);

  //si le logement n'existe pas, on affiche la page 404
  if (!logement) {
    return <Page404 />;
    //sinon on affiche les informations du logement
  } else {
    return (
      <div className="detail__main">
        {/*utilisation du composant Carousel prenant en paramètre les images du logement*/}
        <Carousel images={logement.pictures} />
        {/*utilisation du composant DetailLogements prenant en paramètre les informations du logement*/}
        <DetailLogements data={logement} />
        <div className="collapse">
          <Collapse
            className="collapse__container"
            title="Description"
            description={logement.description}
          />
          <Collapse
            className="collapse__container"
            title="Equipements"
            //on parcours le tableau d'équipements et on affiche chaque équipement
            description={logement.equipments.map((equipment, index) => (
              <div key={index}>{equipment}</div>
            ))}
          />
        </div>
      </div>
    );
  }
}

export default Detail;
