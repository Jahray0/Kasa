import React from "react";
import "../styles/pages/About.css";
//import AboutImage from "../../components/Images/AboutImage";
import Collapse from "../components/Collapse";
import BannerAbout from "../components/BannerAbout";

// Affichage des informations de la page à propos
function About() {
  const content = [
    {
      id: "1",
      titre: "Fiabilité",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      id: "2",
      titre: "Respect",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: "3",
      titre: "Service",
      description:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: "4",
      titre: "Sécurité",
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div className="about__main">
      <BannerAbout />
      <div className="about__content">
        {content.map((element) => (
          <Collapse
            className="collapse__container__about"
            key={element.id}
            title={element.titre}
            description={element.description}
          />
        ))}
      </div>
    </div>
  );
}

export default About;

//import styles from "./About.module.scss";
/*import BannerAbout from "../components/BannerAbout";
import "../styles/pages/About.css";
import Acordeon from "../components/Acordeon";
import "../styles/components/Acordeon.css";

function About() {
  return (
    <div>
      <BannerAbout />
      <div className="about__container">
        <Acordeon
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. 
                 Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <Acordeon
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                 Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Acordeon
          title="Sécurité"
          content="
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
        En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}

export default About;*/
