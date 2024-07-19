import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "@streets-heaver/shui2";
import useAllPokemon from "../../api/hooks/AllPokemon";
import PokemonImg from "../PokemonImg/PokemonImg";
import classes from "./PokemonSearch.module.scss";

interface Pokemon {
  name: string;
  url: string;
}

type PokemonSearchProps = {
  filteredPokemon: Pokemon[];
  setFilteredPokemon: (value: Pokemon[]) => void;
};

const PokemonSearch = ({
  filteredPokemon,
  setFilteredPokemon,
}: PokemonSearchProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState<string>(searchParams.get("pokemon") || "");
  const [searchClicked, setSearchClicked] = useState(false);

  const { data } = useAllPokemon();

  function filterPokemon() {
    const filteredPokemon = data?.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(input.toLowerCase())
    );

    setFilteredPokemon(filteredPokemon);
  }

  const handleSearch = () => {
    setSearchParams({ pokemon: input });
    filterPokemon();
    setSearchClicked(true);
  };

  const handleReset = () => {
    setInput("");
    setSearchParams("");
    setFilteredPokemon([]);
    setSearchClicked(false);
  };

  return (
    <div className={classes.searchContainer}>
      <input
        type="text"
        placeholder="Pokémon Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className={classes.btnContainer}>
        <Button
          type="primary"
          className={classes.searchBtn}
          onClick={handleSearch}
        >
          Search
        </Button>
        <Button
          type="secondary"
          className={classes.searchBtn}
          onClick={handleReset}
        >
          Clear Search
        </Button>
      </div>
      {searchClicked && filteredPokemon.length < 1 && <h3>No Pokémon Found</h3>}
      <div className={classes.pokemonSearchContainer}>
        {filteredPokemon.map((pokemon: Pokemon) => (
          <PokemonImg key={pokemon?.name} name={pokemon?.name} />
        ))}
      </div>
    </div>
  );
};

export default PokemonSearch;
