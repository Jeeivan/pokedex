import usePokemon from "../api/hooks/Pokemon";
import PokemonImg from "../Components/PokemonImg/PokemonImg";

type Pokemon = {
    name: string;
    url: string;
  }

const PokemonList = () => {
    const { data, status, error, hasNextPage, isFetchingNextPage, ref } =
    usePokemon();

  return status === "pending" ? (
    <div>Loading...</div>
  ) : status === "error" ? (
    <div>{error?.message}</div>
  ) : (
    <>
          <div>
            {data?.pages.map((page) => {
              return page.data.results.map((pokemon: Pokemon) => (
                <PokemonImg key={pokemon?.name} name={pokemon?.name}/>
              ));
            })}
          </div>

          <div ref={ref}>
            <br />
            {isFetchingNextPage ? "Loading more pokemon..." : ""}
            <br />
          </div>
          {!hasNextPage && <div>No more pokemon left!</div>}
    </>
  )
};

export default PokemonList
