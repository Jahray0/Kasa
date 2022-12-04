//import styles from "./About.module.scss";
import BannerAbout from "../../components/BannerAbout";
import "../../styles/About.css";

function About() {
  return (
    <div>
      <BannerAbout />
      <div className="container__about">
        <div>
          <h2>Fiabilité</h2>
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes
          </p>
        </div>
        <div>
          <h2>Respect</h2>
          <p>1</p>
        </div>
        <div>
          <h2>Service</h2>
          <p>1</p>
        </div>
        <div>
          <h2>Sécurité</h2>
          <p>1</p>
        </div>
      </div>
    </div>
  );
}

export default About;
