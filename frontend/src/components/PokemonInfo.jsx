import styles from "../components/PokemonInfo.module.css";

export default function PokemonInfo({ pokemon }) {
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
          <img src="https://media.cnn.com/api/v1/images/stellar/prod/210226040722-01-pokemon-anniversary-design.jpg?q=w_1920,h_1080,x_0,y_0,c_fill" />
          <h2>{pokemon.name.english}</h2>
        </div>
      </div>

      <div className={styles.selectButton}>
        <button>Select to Fight</button>
      </div>
    </div>
  );
}
