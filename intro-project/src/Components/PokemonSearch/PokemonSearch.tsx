import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "@streets-heaver/shui2";
import useAllPokemon from "../../api/hooks/AllPokemon";
import PokemonImg from "../PokemonImg/PokemonImg";

interface Pokemon {
  name: string;
  url: string;
}

type PokemonSearchProps = {
    setShowFavourites: (value: boolean) => void;
    filteredPokemon: Pokemon[];
    setFilteredPokemon: (value: Pokemon[]) => void
}

const PokemonSearch = ({ setShowFavourites, filteredPokemon, setFilteredPokemon }: PokemonSearchProps) => {
    
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState<string>(searchParams.get('pokemon') || '');

  const { data } = useAllPokemon()

  function filterPokemon() {
    const filteredPokemon = data?.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredPokemon(filteredPokemon);
    
  }

  const handleSearch = () => {
    setSearchParams({ pokemon: input });
    filterPokemon();
    setShowFavourites(false)
  };

  const handleReset = () => {
    setInput("");
    setSearchParams("");
    setFilteredPokemon([]);
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
      <Button onClick={handleReset}>Clear Search</Button>
      {filteredPokemon && (
        <div>
          {filteredPokemon.map((pokemon: Pokemon) => (
            <PokemonImg key={pokemon?.name} name={pokemon?.name}/>
        ))}
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;
