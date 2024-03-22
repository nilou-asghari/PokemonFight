import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPokemons from "./components/AllPokemons";
import PokemonInfo from "./components/PokemonInfo";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllPokemons />} />
        <Route path="/:id" element={<PokemonInfo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
