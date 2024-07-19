import { Button } from "@streets-heaver/shui2";
import PokemonImg from "../PokemonImg/PokemonImg";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { screen } from "@testing-library/react";

interface Pokemon {
    name: string;
    url: string;
  }

  type PokemonSearchProps = {
    setShowFavourites: (value: boolean) => void;
    filteredPokemon: Pokemon[];
    setFilteredPokemon: (value: Pokemon[]) => void
}

export const testFilteredPokemon = [
    { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' },
    { name: 'charizard-mega-x', url: 'https://pokeapi.co/api/v2/pokemon/10034/' },
    { name: 'charizard-mega-y', url: 'https://pokeapi.co/api/v2/pokemon/10035/' },
    { name: 'charizard-gmax', url: 'https://pokeapi.co/api/v2/pokemon/10197/' }
]

export const TestPokemonSearch = ({ setShowFavourites, filteredPokemon, setFilteredPokemon }: PokemonSearchProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [input, setInput] = useState<string>(searchParams.get('pokemon') || '');

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

      function filterPokemon() {
        setFilteredPokemon(testFilteredPokemon);
      }

    return (
        <div>
          <input
            type="text"
            placeholder="pokemon name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            data-testid={"pokemon-input"}
          />
          <Button automationId="pokemon-search-btn" onClick={handleSearch}>Search</Button>
          <Button onClick={handleReset}>Clear Search</Button>
          {filteredPokemon && (
            <div data-testid={"filtered-pokemon"}>
              {filteredPokemon.map((pokemon: Pokemon) => (
                <PokemonImg key={pokemon?.name} name={pokemon?.name}/>
            ))}
            </div>
          )}
        </div>
      );
}

const TestPokemonSearchElements = {

    pokemonSearchBtn: () => screen.getByTestId('pokemon-search-btn'),

    pokemonInput: () => screen.getByTestId('pokemon-input'),

    filteredPokemonDetail: () => screen.getByTestId('filtered-pokemon')
}

export default TestPokemonSearchElements