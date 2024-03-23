import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllPokemons from "./components/AllPokemons";
import PokemonFight from "./components/PokemonFight";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=30"
        );
        setPokemons(res.data.results);
        console.log(res.data.results);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };
    fetchPokemons();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllPokemons />} />
        <Route path="/pokemon/fight" element={<PokemonFight />} />
      </Routes>
    </>
  );
}

export default App;
