import Image from "next/image";

const Card = ({ pokemon }) => {
  return (
    <li>
      <h2>{pokemon.name}</h2>
      <Image href={pokemon.sprites.dream_world.front_default}></Image>
    </li>
  );
};
