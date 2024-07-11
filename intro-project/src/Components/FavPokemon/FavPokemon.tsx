import { Button, Card } from "@streets-heaver/shui2";
import { useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

type PokemonFavProps = {
  showInfiniteScroll: boolean;
  setShowInfiniteScroll: (value: boolean) => void;
  showFavourites: boolean;
  setShowFavourites: (value: boolean) => void;
  setFilteredPokemon: (value: Pokemon[]) => void
}

const FavPokemon = ({ setShowInfiniteScroll, showFavourites, setShowFavourites, setFilteredPokemon }: PokemonFavProps) => {
    const [pokemonArr, setPokemonArr] = useState<string[]>(['No favourite pokemon selected'])

    const getFavourite = () => {
        const favPokemon = localStorage.getItem('fav-pokemon')
        if (favPokemon) {
          const favPokemonArr: string[] = JSON.parse(favPokemon!)
          console.log(favPokemonArr);
          setPokemonArr(favPokemonArr)
        }
        setShowInfiniteScroll(false)
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
          <Card>
          {pokemonArr.map((pokemon, index) => (
            
              <h3 key={index}>
              {pokemon}
                </h3>
          ))}
          </Card>
        )}
    </div>
  )
};

export default FavPokemon
