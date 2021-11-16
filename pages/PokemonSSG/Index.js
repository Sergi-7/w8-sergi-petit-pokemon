import Link from "next/link";
import Card from "../../components/Card/Card";

const PokemonSSG = ({ pokemonList }) => {
  return (
    <>
      <h2>Pokemon SSG</h2>
      <Link href="/">Home</Link>
      <ul>
        {pokemonList.map((pokemon) => {
          return <Card key={pokemon.url} pokemon={pokemon} />;
        })}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`https://pokeapi-menchu.herokuapp.com/pokemon`);
  const pokemonList = await res.json();
  return {
    props: {
      pokemonList,
    },
  };
}

export default PokemonSSG;
