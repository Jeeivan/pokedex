import { Button } from "@streets-heaver/shui2";
import { useState } from "react";
import PokemonImg from "../PokemonImg/PokemonImg";

interface Pokemon {
  name: string;
  url: string;
}

type PokemonFavProps = {
  showFavourites: boolean;
  setShowFavourites: (value: boolean) => void;
  setFilteredPokemon: (value: Pokemon[]) => void
}

const FavPokemon = ({ showFavourites, setShowFavourites, setFilteredPokemon }: PokemonFavProps) => {
    const [pokemonArr, setPokemonArr] = useState<string[]>(['No favourite pokemon selected'])

    const getFavourite = () => {
        const favPokemon = localStorage.getItem('fav-pokemon')
        if (favPokemon) {
          const favPokemonArr: string[] = JSON.parse(favPokemon!)
          setPokemonArr(favPokemonArr)
        }
        setFilteredPokemon([])
        setShowFavourites(true)
    }

    const clearFavourite = () => {
      localStorage.removeItem('fav-pokemon')
      setPokemonArr(['No favourite pokemon selected'])
    }
    

  return (
    <div>
        <Button onClick={getFavourite}>
            Favourites
        </Button>
        <Button onClick={clearFavourite}>
            Clear Favourites
        </Button>
        {showFavourites && (
          <>
          {pokemonArr.map((pokemon, index) => (
            pokemon != "No favourite pokemon selected" ?
            <PokemonImg name={pokemon} key={index}/> :
            <h3 key={index}>No favourite pokemon selected</h3>
          ))}
          </>
        )}
    </div>
  )
};

export default FavPokemon
