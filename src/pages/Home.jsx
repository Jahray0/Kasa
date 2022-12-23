import logements from "../data/logements.json";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import banner from "../assets/banner.png";
import "../styles/pages/Home.css";

function Home() {
  return (
    <div>
      <Banner title="Chez vous, partout, et ailleur" img={banner} />
      <div className="logement_main">
        {logements.map((location) => (
          <Link key={location.id} to={`/detail/${location.id}`}>
            <div className="card_img">
              <img
                className="image"
                src={location.cover}
                alt="entreaperçu de le location"
              />
            </div>
            <div className="card_title">
              <p className="title">{location.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
