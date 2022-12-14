import "../styles/components/DetailLogements.css";

//import starFull from "../assets/starFull.svg";
//import starEmpty from "../assets/starEmpty.svg";

// Affichage des informations des pages logement
function DetailLogements({ data }) {
  return (
    <div>
      <div className="photo__logement">
        {/*A remplacer par le carousel*/}
        <img src={data.pictures[0]} alt="appartement" />
      </div>
      <div className="detail__logement">
        <div className="detail__logement__name_adress">
          <h1>{data.title}</h1>
          <p>{data.location}</p>
          {/*parcourir la liste de tag*/}
          <div className="tags">Tag {data.tags[0]}</div>
        </div>
        <div className="detail__logement__proprio__content">
          <div className="detail__logement__proprio__name">
            <p>{data.host.name}</p>
            <img src={data.host.picture} alt="host" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailLogements;
