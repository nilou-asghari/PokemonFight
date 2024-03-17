import { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "../components/AllPokemons.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const AllPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const galleryRef = useRef(null);
  const cardsRef = useRef([]);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=30"
        );
        setPokemons(res.data.results);
        console.log(res.data.results);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };
    fetchPokemons();
  }, []);

  const handleCardClick = (pokemon) => {
    console.log("the card is clicked", pokemon);
  };
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.wrapper}`}>
        <h3>Choose your Pokemon</h3>
        <Splide
          options={{
            type: "loop",
            arrows: false,
            drag: "free",
            gap: "1rem",
            autoScroll: {
              speed: 2,
              pauseOnHover: false,
            },
          }}
        >
          {pokemons.map((pokemon, index) => (
            <SplideSlide
              key={index}
              className={`${styles.cards}`}
              onClick={() => handleCardClick(pokemon)}
            >
              <div className={`${styles.image}`}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                  }.png`}
                  alt={pokemon.name}
                />
              </div>
              <div className={`${styles.content}`}>
                <p>{pokemon.name}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default AllPokemons;
