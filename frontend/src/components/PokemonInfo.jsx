import styles from "../components/PokemonInfo.module.css";

export default function PokemonInfo() {
  return (
    <div className={styles.pokemonPage}>
      <div className={styles.pageUp}>
        <div className={styles.info}>
          <p>attack: 55 | defence: 28 | speed: 55</p>
        </div>
        <div className={styles.img}>
          <img src="https://media.cnn.com/api/v1/images/stellar/prod/210226040722-01-pokemon-anniversary-design.jpg?q=w_1920,h_1080,x_0,y_0,c_fill" />
          <h2>Name</h2>
        </div>
      </div>

      <div className={styles.selectButton}>
        <button>Select to Fight</button>
      </div>
    </div>
  );
}
