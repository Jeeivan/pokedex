import FavPokemon from "../../Components/FavPokemon/FavPokemon.tsx";
import PokemonSearch from "../../Components/PokemonSearch/PokemonSearch.tsx";
import { useState } from "react";
import classes from './Pokemon.module.scss'
import PokemonList from "../PokemonList/PokemonList.tsx";

interface Pokemon {
  name: string;
  url: string;
}

const Pokemon = () => {
  const [showFavourites, setShowFavourites] = useState(false);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
      <PokemonList />
      </div>
      <PokemonSearch
        filteredPokemon={filteredPokemon}
        setFilteredPokemon={setFilteredPokemon}
      />
      <FavPokemon
        showFavourites={showFavourites}
        setShowFavourites={setShowFavourites}
      />
    </div>
  );
};

export default Pokemon;
