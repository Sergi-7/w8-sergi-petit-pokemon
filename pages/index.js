import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <nav>
        <Link href="/Pokemon/Index">Pokemon</Link>
        <Link href="/PokemonSSR/Index">Pokemon SSR</Link>
        <Link href="/PokemonSSG/Index">Pokemon SSG</Link>
        <Link href="/PokemonISR/Index">Pokemon ISR</Link>
      </nav>
    </>
  );
}
