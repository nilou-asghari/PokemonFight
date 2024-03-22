import styles from "../components/AllPokemons";

export default function PokemonInfo() {
  return (
    <div className="pokemonPage">
      <div className="pokemonPageUp">
        <div className="pokemonImg">
          <img src="https://media.istockphoto.com/id/534195339/photo/pickachu-toy-character-from-pokemon-anime.jpg?s=612x612&w=0&k=20&c=IQEMX_uCVLqNAu-OcGab6QhUaU8HDbT3rNkqq8Qk9Mo=" />
        </div>
        <div className="pokeminInfo"></div>
      </div>
      <div className="selectButton">
        <button>Select to Fight</button>
      </div>
    </div>
  );
}
