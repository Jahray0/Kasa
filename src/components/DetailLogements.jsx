import "../styles/components/DetailLogements.css";

import starFullP2 from "../assets/starFullP2.svg";
import starEmptyP2 from "../assets/starEmptyP2.svg";

// Affichage des informations des pages logement
function DetailLogements({ data }) {
  return (
    <div>
      {/*<div className="photo__logement">*/}
      {/*A remplacer par le composant carousel*/}
      {/*<img src={data.pictures[0]} alt="appartement" />*/}
      {/*} </div>*/}
      <div className="detail__logement">
        <div className="detail__logement__name_adress">
          <h1>{data.title}</h1>
          <p>{data.location}</p>
          {/*parcourir la liste de tag : ok*/}
          <div className="detail__logement__tags">
            {data.tags.map((tag, index) => (
              <div key={index} className="detail__logement__tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="detail__logement__proprio__content">
          <div className="detail__logement__proprio__name">
            <p>{data.host.name}</p>
            <img src={data.host.picture} alt="Portraît du propriétaire" />
          </div>
          <div className="detail__logement__proprio__stars">
            {(() => {
              switch (data.rating) {
                case "1":
                  return (
                    <div className="detail__logement__all_stars">
                      <img src={starFullP2} alt="étoile pleine" />
                      <img src={starEmptyP2} alt="étoile vide" />
                      <img src={starEmptyP2} alt="étoile vide" />
                      <img src={starEmptyP2} alt="étoile vide" />
                      <img src={starEmptyP2} alt="étoile vide" />
                    </div>
                  );
                case "2":
                  return (
                    <div className="detail__logement__all_stars">
                      <img src={starFullP2} alt="étoile pleine" />
                      <img src={starFullP2} alt="étoile pleine" />
                      <img src={starEmptyP2} alt="étoile vide" />
                      <img src={starEmptyP2} alt="étoile vide" />
                      <img src={starEmptyP2} alt="étoile vide" />
                    </div>
                  );
                case "3":
                  return (
                    <div className="detail__logement__all_stars">
                      <img src={starFullP2} alt="étoile pleine" />
                      <img src={starFullP2} alt="étoile pleine" />
                      <img src={starFullP2} alt="étoile pleine" />
                      <img src={starEmptyP2} alt="étoile vide" />
                      <img src={starEmptyP2} alt="étoile vide" />
                    </div>
                  );
                case "4":
                  return (
                    <div className="detail__logement__all_stars">
                      <img src={starFullP2} alt="étoile pleine" />
                      <img src={starFullP2} alt="étoile pleine" />
                      <img src={starFullP2} alt="étoile pleine" />
                      <img src={starFullP2} alt="étoile pleine" />
                      <img src={starEmptyP2} alt="étoile vide" />
                    </div>
                  );
                case "5":
                  return (
                    <div className="detail__logement__all_stars">
                      <img src={starFullP2} alt="étoile pleine" />
                      <img src={starFullP2} alt="étoile pleine" />
                      <img src={starFullP2} alt="étoile pleine" />
                      <img src={starFullP2} alt="étoile pleine" />
                      <img src={starFullP2} alt="étoile pleine" />
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
