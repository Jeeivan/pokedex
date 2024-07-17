import { Button } from "@streets-heaver/shui2";
import PokemonImg from "../PokemonImg/PokemonImg";
import { useState } from "react";
import { screen } from "@testing-library/react";

interface Pokemon {
    name: string;
    url: string;
  }
  
  type PokemonFavProps = {
    setShowFavourites: (value: boolean) => void;
    setFilteredPokemon: (value: Pokemon[]) => void
  }

const testFavPokemonArr = ['mewtwo', 'charizard-mega-x']

export const TestFavPokemon = ({  setShowFavourites, setFilteredPokemon }: PokemonFavProps) => {
    const [pokemonArr, setPokemonArr] = useState<string[]>(['No favourite pokemon selected'])

    const getFavourite = () => {
        setShowFavourites(true)
        setPokemonArr(testFavPokemonArr)
        setFilteredPokemon([])
    }

    const clearFavourite = () => {
      setPokemonArr(['No favourite pokemon selected'])
    }    
    
 return (
    <div>
        <Button automationId="get-fav-btn" onClick={getFavourite}>
            Favourites
        </Button>
        <Button onClick={clearFavourite}>
            Clear Favourites
        </Button>
        <div data-testid={"container"}>
            <div data-testid={"fav-pokemon-container"}>
          {pokemonArr.map((pokemon, index) => (
              pokemon != "No favourite pokemon selected" ?
              <PokemonImg name={pokemon} key={index}/> :
              <h3 key={index}>No favourite pokemon selected</h3>
            ))}
          </div>
        </div>
    </div>
  )
}

const TestFavPokemonElements  = {
    getFavouriteBtn: () => screen.getByTestId('get-fav-btn'),

    pokemonContainer: () => screen.getByTestId('fav-pokemon-container'),

    container: () => screen.getByTestId('container')
}

export default TestFavPokemonElements