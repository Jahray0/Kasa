import logements from "./logements.json";

// Récupération des données des logements
const getAllLodgings = () => {
  return logements;
};

const getOneLodging = (id) => {
  return logements.find((log) => log.id === id);
};

export const dataLodgings = {
  getAllLodgings,
  getOneLodging,
};
