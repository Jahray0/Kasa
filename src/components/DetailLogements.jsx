import "../styles/components/DetailLogements.css";

import starFull from "../assets/starFull.svg";
import starEmpty from "../assets/starEmpty.svg";

// Affichage des informations des pages logement
function DetailLogements({ data }) {
  return (
    <div>
      <div className="photo__logement">
        {/*A remplacer par le composant carousel*/}
        <img src={data.pictures[0]} alt="appartement" />
      </div>
      <div className="detail__logement">
        <div className="detail__logement__name_adress">
          <h1>{data.title}</h1>
          <p>{data.location}</p>
          {/*parcourir la liste de tag : ok*/}
          <div className="tags">
            {data.tags.map((tag, index) => (
              <div key={index} className="tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="detail__logement__proprio__content">
          <div className="detail__logement__proprio__name">
            <p>{data.host.name}</p>
            <img src={data.host.picture} alt="host" />
          </div>
          <div className="detail__logement__proprio__stars">
            {data.rating}
            {(() => {
              switch (data.rating) {
                case "1":
                  return (
                    <div className="detail__logement__all_stars">
                      <img src={starFull} alt="étoile pleine" />
                      <img src={starEmpty} alt="étoile vide" />
                      <img src={starEmpty} alt="étoile vide" />
                      <img src={starEmpty} alt="étoile vide" />
                      <img src={starEmpty} alt="étoile vide" />
                    </div>
                  );
                case "2":
                  return (
                    <div className="detail__logement__all_stars">
                      <img src={starFull} alt="étoile pleine" />
                      <img src={starFull} alt="étoile pleine" />
                      <img src={starEmpty} alt="étoile vide" />
                      <img src={starEmpty} alt="étoile vide" />
                      <img src={starEmpty} alt="étoile vide" />
                    </div>
                  );
                case "3":
                  return (
                    <div className="detail__logement__all_stars">
                      <img src={starFull} alt="étoile pleine" />
                      <img src={starFull} alt="étoile pleine" />
                      <img src={starFull} alt="étoile pleine" />
                      <img src={starEmpty} alt="étoile vide" />
                      <img src={starEmpty} alt="étoile vide" />
                    </div>
                  );
                case "4":
                  return (
                    <div className="detail__logement__all_stars">
                      <img src={starFull} alt="étoile pleine" />
                      <img src={starFull} alt="étoile pleine" />
                      <img src={starFull} alt="étoile pleine" />
                      <img src={starFull} alt="étoile pleine" />
                      <img src={starEmpty} alt="étoile vide" />
                    </div>
                  );
                case "5":
                  return (
                    <div className="detail__logement__all_stars">
                      <img src={starFull} alt="étoile pleine" />
                      <img src={starFull} alt="étoile pleine" />
                      <img src={starFull} alt="étoile pleine" />
                      <img src={starFull} alt="étoile pleine" />
                      <img src={starFull} alt="étoile pleine" />
                    </div>
                  );
                default:
                  return <div>Aucune note fournie</div>;
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailLogements;
