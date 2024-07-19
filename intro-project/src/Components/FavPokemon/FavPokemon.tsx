import { Button } from "@streets-heaver/shui2";
import { useState } from "react";
import PokemonImg from "../PokemonImg/PokemonImg";
import classes from './FavPokemon.module.scss'

type PokemonFavProps = {
  showFavourites: boolean;
  setShowFavourites: (value: boolean) => void;
}

const FavPokemon = ({ showFavourites, setShowFavourites }: PokemonFavProps) => {
    const [pokemonArr, setPokemonArr] = useState<string[]>(['No favourite pokemon selected'])
    const [favText, setFavText] = useState(false)

    const getFavourite = () => {
        const favPokemon = localStorage.getItem('fav-pokemon')
        if (favPokemon) {
          const favPokemonArr: string[] = JSON.parse(favPokemon!)
          setPokemonArr(favPokemonArr)
        }
        setShowFavourites(!showFavourites)
        setFavText(!favText)
    }

    const clearFavourite = () => {
      localStorage.removeItem('fav-pokemon')
      setPokemonArr(['No favourite pokemon selected'])
    }   
    

  return (
    <div className={classes.container}>
      <div className={classes.btnContainer}>
        <Button type="primary" onClick={getFavourite}>
            {!favText ? "Show Favourites" : "Hide Favourties"}
        </Button>
        <Button type="secondary" onClick={clearFavourite}>
            Clear Favourites
        </Button>
      </div>
        {showFavourites && (
          <div className={classes.favPokemonContainer}>
          {pokemonArr.map((pokemon, index) => (
            pokemon != "No favourite pokemon selected" ?
            <PokemonImg name={pokemon} key={index}/> :
            <h3 key={index}>No favourite pokemon selected</h3>
          ))}
          </div>
        )}
    </div>
  )
};

export default FavPokemon
