import { Button } from "@streets-heaver/shui2";
import { useEffect, useMemo, useState } from "react";

type ToggleFavProps = {
    name: string | undefined
}

const ToggleFav = ({name}: ToggleFavProps) => {
    const [favourite, setFavourite] = useState(false)
    const favPokemon = localStorage.getItem('fav-pokemon')
    const favPokemonArr = useMemo(() => favPokemon ? JSON.parse(favPokemon) : [], [favPokemon])

        const setFav = () => {
            if (favPokemonArr.includes(name)) {
                setFavourite(false)
                const newArr = favPokemonArr.filter((arr: string) => arr !== name)
                localStorage.setItem('fav-pokemon', JSON.stringify(newArr))
            } else {
                setFavourite(true)
                favPokemonArr.push(name)
                localStorage.setItem('fav-pokemon', JSON.stringify(favPokemonArr))
            }
        }

        useEffect(() => {
            if (favPokemonArr.includes(name)) {
                setFavourite(true)
            } 
        }, [name, favPokemonArr])

  return (
    <div>
        <Button onClick={setFav}>
                {!favourite ? <div>☆</div> : <div>★</div>}
        </Button>
    </div>
  )
};

export default ToggleFav
