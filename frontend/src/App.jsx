import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllPokemons from "./components/AllPokemons";
import PokemonInfo from "./components/PokemonInfo";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllPokemons />} />
        <Route path="/:id" element={<PokemonInfo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
