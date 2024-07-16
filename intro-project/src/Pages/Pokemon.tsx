import FavPokemon from "../Components/FavPokemon/FavPokemon.tsx";
import PokemonSearch from "../Components/PokemonSearch/PokemonSearch.tsx";
import { useState } from "react";
import PokemonListBtn from "../Components/utils/PokemonListBtn.tsx";

interface Pokemon {
  name: string;
  url: string;
}

const Pokemon = () => {
  const [showFavourites, setShowFavourites] = useState(false);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  

  return (
    <div className="container">
      <PokemonListBtn />
      <br />
      <PokemonSearch
        setShowFavourites={setShowFavourites}
        filteredPokemon={filteredPokemon}
        setFilteredPokemon={setFilteredPokemon}
      />
      <FavPokemon
        showFavourites={showFavourites}
        setShowFavourites={setShowFavourites}
        setFilteredPokemon={setFilteredPokemon}
      />
    </div>
  );
};

export default Pokemon;
