import "./Home.css";
import logements from "../../data/logements.json";
import Banner from "../../components/Banner";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Banner />
      <div className="logement">
        {logements &&
          logements.map((lodge) => (
            <Link key={lodge.id} to={`/logement/${lodge.id}`}>
              <div className="card_img">
                <img src={lodge.cover} alt="entreaperçu de le location" />
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
