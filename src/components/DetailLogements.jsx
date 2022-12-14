import "../styles/components/DetailLogements.css";
import starFull from "../assets/starFull.svg";
import starEmpty from "../assets/starEmpty.svg";

// Affichage des informations des pages logement
function DetailLogements({ info }) {
  return (
    <div className="lodgingDetails">
      <div className="lodgingDetailsInfos">
        <h1>{info.title}</h1>
        <p>{info.location}</p>
        <div className="tags"></div>
      </div>
      <div className="lodgingDetailsHost">
        <div className="lodgingDetailsHostName">
          <p>{info.host.name}</p>
          <img src={info.host.picture} alt="host" />
        </div>
      </div>
    </div>
  );
}

export default DetailLogements;
