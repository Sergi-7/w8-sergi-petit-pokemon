import Image from "next/image";

const Card = ({ pokemon }) => {
  return (
    <li>
      <h2>{pokemon.name}</h2>
    </li>
  );
};

export default Card;
