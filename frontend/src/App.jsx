import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AllPokemons from "./components/AllPokemons";
import PokemonInfo from "./components/PokemonInfo";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";

export default function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const params = useParams();

  useEffect(() => {
    const pokemonApi =
      "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json";

    async function getPokemon() {
      try {
        const res = await fetch(pokemonApi);
        const resData = await res.json();
        setPokemonData(resData);
      } catch (error) {
        console.log(error);
      }
    }

    getPokemon();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllPokemons />} />
          {pokemonData.map((pokemon) => (
            <Route
              key={pokemon.id}
              path={`/${pokemon.id}`}
              element={<PokemonInfo pokemon={pokemon} />}
            />
          ))}
          <Route path="/fight" />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}
