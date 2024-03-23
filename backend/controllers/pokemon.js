const pokeData = require("../schemas/Pokemon");

const getAllPokemons = () => {
  const res = pokeData.map((item) => {
    let zeros = "";
    if (item.id < 10) {
      zeros = "00";
    } else if (item.id > 10 && item.id < 100) {
      zeros = "0";
    }

    let image_url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zeros}${item.id}.png`;
    return { ...item, image: image_url };
  });
  return res;
};

const getById = (id) => {
  const filtered = getAllPokemons().filter((item) => item.id == id);
  return filtered[0];
};

const getInfoById = (id, info) => {
  const item = getAllPokemons().filter((item) => item.id == id)[0];
  // const maped = { ...item, name: item.name.english };
  return item[info];
};

module.exports = { getAllPokemons, getById, getInfoById };
