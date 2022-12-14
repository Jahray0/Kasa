//import du fichier json
import logements from "./logements.json";

//fonction qui retourne tous les logements
const getAllLogement = () => {
  return logements;
};

//fonction qui retourne un logement en fonction de son id
const getOneLogement = (id) => {
  return logements.find((log) => log.id === id);
};

//Export des fonctions
export const dataLogements = {
  getAllLogement,
  getOneLogement,
};
