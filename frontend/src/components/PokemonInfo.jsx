import styles from "../components/PokemonInfo.module.css";
import { useNavigate } from "react-router-dom";

export default function PokemonInfo({ pokemon }) {
  const navigate = useNavigate();
  console.log(`/${pokemon.id}`);
  return (
    <div className={styles.pokemonPage}>
      <div className={styles.pageUp}>
        <div className={styles.info}>
          <h3>
            Attack: {pokemon.base.Attack} <br /> Defence:{pokemon.base.Defense}{" "}
            <br /> Speed:{pokemon.base.Speed}
          </h3>
        </div>
        <div className={styles.img}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
          />
          <h2>{pokemon.name.english}</h2>
        </div>
      </div>

      <div className={styles.selectButton}>
        <button onClick={() => navigate(`/pokemon/fight/${pokemon.id}`)}>
          Select to fight
        </button>
      </div>
    </div>
  );
}
