import "../styles/components/DetailLogements.css";

//import starFull from "../assets/starFull.svg";
//import starEmpty from "../assets/starEmpty.svg";

// Affichage des informations des pages logement
function DetailLogements({ info }) {
  return (
    <div>
      <div className="photo__logement">
        {/*A remplacer par le carousel*/}
        <img src={info.pictures[0]} alt="appartement" />
      </div>
      <div className="detail__logement">
        <div className="detail__logement__name_adress">
          <h1>{info.title}</h1>
          <p>{info.location}</p>
          <div className="tags"></div>
        </div>
        <div className="detail__logement__proprio__content">
          <div className="detail__logement__proprio__name">
            <p>{info.host.name}</p>
            <img src={info.host.picture} alt="host" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailLogements;
