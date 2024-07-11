import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import AllPokemon from "../../api/hooks/AllPokemon";
import { Button } from "@streets-heaver/shui2";
import PokemonCard from "../PokemonCard/PokemonCard";

interface Pokemon {
  name: string;
  url: string;
}

type PokemonSearchProps = {
    showInfiniteScroll: boolean;
    setShowInfiniteScroll: (value: boolean) => void
    setShowFavourites: (value: boolean) => void;
    filteredPokemon: Pokemon[];
    setFilteredPokemon: (value: Pokemon[]) => void
}

const PokemonSearch = ({ setShowInfiniteScroll, setShowFavourites, filteredPokemon, setFilteredPokemon }: PokemonSearchProps) => {
    
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState("");

  const { data } = AllPokemon();

  function filterPokemon() {
    const filteredPokemon = data?.data.results.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredPokemon(filteredPokemon);
    console.log(filteredPokemon);
    
  }

  const handleSearch = () => {
    setSearchParams({ pokemon: input });
    filterPokemon();
    setShowInfiniteScroll(false)
    setShowFavourites(false)
  };

  const handleReset = () => {
    setInput("");
    setSearchParams("");
    setFilteredPokemon([]);
    setShowInfiniteScroll(true)
    setShowFavourites(false)
  };

  return (
    <div>
      <input
        type="text"
        placeholder="pokemon name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
      <Button onClick={handleReset}>Reset</Button>
      {filteredPokemon && (
        <div>
          {filteredPokemon.map((pokemon: Pokemon) => (
            <PokemonCard key={pokemon?.name} name={pokemon?.name}/>
        ))}
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;
