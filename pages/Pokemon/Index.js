import Link from "next/link";
import { useEffect, useState } from "react";

import Card from "../../components/Card/Card";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
      );
      const { results: pokemonList } = await response.json();
      setPokemons(pokemonList);
    })();
  }, []);

  return (
    <>
      <h2>Pokemon</h2>
      <Link href="/">Home</Link>
      <ul>
        {pokemons.map((pokemon) => {
          return <Card key={pokemon.url} pokemon={pokemon} />;
        })}
      </ul>
    </>
  );
};

export default Pokemon;
