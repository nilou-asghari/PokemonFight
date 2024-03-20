import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllPokemons from "./components/AllPokemons";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllPokemons />} />
      </Routes>
    </>
  );
}

export default App;
