import usePokemon from "../api/hooks/Pokemon.tsx";
import FavPokemon from "../Components/FavPokemon/FavPokemon.tsx";
import PokemonCard from "../Components/PokemonCard/PokemonCard.tsx";
import PokemonSearch from "../Components/PokemonSearch/PokemonSearch.tsx";
import { useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

const Pokemon = () => {
  const { data, status, error, hasNextPage, isFetchingNextPage, ref } =
    usePokemon();
  const [showInfiniteScroll, setShowInfiniteScroll] = useState(true);
  const [showFavourites, setShowFavourites] = useState(false);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);

  return status === "pending" ? (
    <div>Loading...</div>
  ) : status === "error" ? (
    <div>{error?.message}</div>
  ) : (
    <div className="container">
      <h3>Fetch Pokemon</h3>
      <PokemonSearch
        showInfiniteScroll={showInfiniteScroll}
        setShowInfiniteScroll={setShowInfiniteScroll}
        setShowFavourites={setShowFavourites}
        filteredPokemon={filteredPokemon}
        setFilteredPokemon={setFilteredPokemon}
      />
      <FavPokemon
        showInfiniteScroll={showInfiniteScroll}
        setShowInfiniteScroll={setShowInfiniteScroll}
        showFavourites={showFavourites}
        setShowFavourites={setShowFavourites}
        setFilteredPokemon={setFilteredPokemon}
      />
      {showInfiniteScroll && (
        <>
          <div>
            {data?.pages.map((page) => {
              return page.data.results.map((pokemon: Pokemon) => (
                <PokemonCard key={pokemon?.name} name={pokemon?.name} />
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
      )}
    </div>
  );
};

export default Pokemon;
