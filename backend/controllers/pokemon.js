const pokeData = require("../schemas/Pokemon");

const getAllPokemons = () => {
  const res = pokeData.map((item) => {
    return { ...item, name: item.name.english };
  });
  return res;
};

const getById = (id) => {
  const filtered = pokeData.filter((item) => item.id == id);
  return filtered[0];
};

const getInfoById = (id, info) => {
  const item = pokeData.filter((item) => item.id == id)[0];
  const maped = { ...item, name: item.name.english };
  return maped[info];
};

module.exports = { getAllPokemons, getById, getInfoById };
