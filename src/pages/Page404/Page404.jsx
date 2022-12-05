import { Link } from "react-router-dom";
import "../../styles/Page404.css";

function Page404() {
  return (
    <div className="error__container">
      <p className="error__number">404</p>
      <p className="error__text">
        Oups ! La page que vous demandez n'existe pas
      </p>
      <Link to="/" className="link__home">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Page404;
