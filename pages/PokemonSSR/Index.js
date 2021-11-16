import Link from "next/link";

const PokemonSSR = ({ pokemonList }) => {
  return (
    <>
      <h2>Pokemon SSR</h2>
      <Link href="/">Home</Link>
      <ul>
        {pokemonList.map((pokemon) => {
          return (
            <li key={pokemon.url}>
              <Link href={`PokemonSSR/${pokemon.id}`}>{pokemon.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch("https://pokeapi-menchu.herokuapp.com/pokemon");
  const pokemonList = await response.json();
  return { props: { pokemonList } };
}

export default PokemonSSR;
