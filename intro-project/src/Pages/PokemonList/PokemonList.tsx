import usePokemon from "../../api/hooks/Pokemon";
import PokemonImg from "../../Components/PokemonImg/PokemonImg";
import classes from './PokemonList.module.scss'

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
          <div className={classes.pokemonListContainer}>
            <h4 className={classes.listHeading}>Scroll through all Pokémon</h4>
            {data?.pages.map((page) => {
              return page.data.results.map((pokemon: Pokemon) => (
                <PokemonImg key={pokemon?.name} name={pokemon?.name}/>
              ));
            })}

          <div ref={ref}>
            <br />
            {isFetchingNextPage ? "Loading more pokemon..." : ""}
            <br />
          </div>
          </div>
          {!hasNextPage && <div>No more pokemon left!</div>}
    </>
  )
};

export default PokemonList
