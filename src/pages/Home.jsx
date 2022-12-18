import "../styles/pages/Home.css";
import logements from "../data/logements.json";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Banner />
      <div className="logement_main">
        {logements &&
          logements.map((lodge) => (
            <Link key={lodge.id} to={`/detail/${lodge.id}`}>
              <div className="card_img">
                <img
                  className="image"
                  src={lodge.cover}
                  alt="entreaperçu de le location"
                />
              </div>
              <div className="card_title">
                <p className="title">{lodge.title}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Home;
