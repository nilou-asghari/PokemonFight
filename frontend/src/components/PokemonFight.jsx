import { useEffect, useMemo, useState } from "react";
import styles from "../components/PokemonFight.module.css";

const PokemonFight = ({ pokemon, pokemonList }) => {
  const [outcomeText, setOutcomeText] = useState("");
  const [isActive, setIsActive] = useState(false);

  const number = useMemo(() => Math.floor(Math.random() * 30), []);
  const randomPokemon = pokemonList[number];

  const fightLogic = (event, pokemon, randomPokemon) => {
    setIsActive(true);

    const randomNumber1 = Math.floor(Math.random() * 50);
    const randomNumber2 = Math.floor(Math.random() * 50);

    if (randomNumber1 > randomNumber2) {
      setOutcomeText(`${pokemon} won !`);
    } else if (randomNumber2 > randomNumber1) {
      setOutcomeText(`${randomPokemon} won !`);
    } else {
      setOutcomeText("DOPPEL K.O. !!");
    }
  };

  useEffect(() => {}, [outcomeText]);

  const resetLogic = () => {
    setIsActive(false);
    setOutcomeText("");
  };

  return (
    <div className={styles.background}>
      <div className={styles.pageUp}>
        {/* <div className={styles.info}>
          <h3>
            Attack: {pokemon.base.Attack} <br /> Defence:{pokemon.base.Defense}{" "}
            <br /> Speed:{pokemon.base.Speed}
          </h3>
        </div> */}
        <div className={`${styles.img} ${isActive ? styles.fightStarted : ""}`}>
          <img
            className={styles.faceRight}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
          />
          <h2>{pokemon.name.english}</h2>
        </div>
        <div className={styles.selectButton}>
          <button
            disabled={isActive}
            onClick={() =>
              fightLogic(
                event,
                pokemon.name.english,
                randomPokemon.name.english
              )
            }
          >
            {" "}
            Fight!
          </button>
          <h1>{outcomeText}</h1>
          {isActive ? (
            <button onClick={() => resetLogic()} className={styles.reset}>
              Reset
            </button>
          ) : null}
        </div>
        <div className={`${styles.img} ${isActive ? styles.fightStarted : ""}`}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemon.id}.png`}
            alt={pokemon.name}
          />
          <h2>{randomPokemon.name.english}</h2>
        </div>
      </div>
    </div>
  );
};

export default PokemonFight;
