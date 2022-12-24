//import du fichier json
import logements from "./logements.json";

//fonction qui retourne tous les logements
const getAllLogement = () => {
  return logements;
};
//fonction qui retourne un logement en fonction de son id
const getOneLogement = (id) => {
  //on parcours le tableau de logement et on retourne le logement qui a l'id correspondant
  return logements.find((log) => log.id === id);
};

//Export des fonctions
export const dataLogements = {
  getAllLogement,
  getOneLogement,
};
