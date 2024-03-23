import styles from "../components/PokemonFight.module.css";

const PokemonFight = ({ pokemon, pokemonList }) => {
  const randomNumber = Math.floor(Math.random() * 30);
  console.log(randomNumber);

  const randomPokemon = pokemonList[randomNumber];
  console.log(randomPokemon);

  return (
    <div className={styles.background}>
      <div className={styles.pageUp}>
        {/* <div className={styles.info}>
          <h3>
            Attack: {pokemon.base.Attack} <br /> Defence:{pokemon.base.Defense}{" "}
            <br /> Speed:{pokemon.base.Speed}
          </h3>
        </div> */}
        <div className={styles.img}>
          <img src="https://media.cnn.com/api/v1/images/stellar/prod/210226040722-01-pokemon-anniversary-design.jpg?q=w_1920,h_1080,x_0,y_0,c_fill" />
          <h2>{pokemon.name.english}</h2>
        </div>
        <div className={styles.img}>
          <img src="https://media.cnn.com/api/v1/images/stellar/prod/210226040722-01-pokemon-anniversary-design.jpg?q=w_1920,h_1080,x_0,y_0,c_fill" />
          <h2>{randomPokemon.name.english}</h2>
        </div>
      </div>
    </div>
  );
};

export default PokemonFight;
