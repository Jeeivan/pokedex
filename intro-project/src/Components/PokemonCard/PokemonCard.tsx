import { Button, Card } from "@streets-heaver/shui2";

type PokemonCardProps = {
  name: string
}

const PokemonCard = ({ name }: PokemonCardProps)  => {
  

  const addFavourite = () => {
    const favPokemon = localStorage.getItem('fav-pokemon')
    // console.log(favPokemon);
    const pokemonArr: string[] = favPokemon ? JSON.parse(favPokemon) : []
    // console.log(pokemonArr);

    if (!favPokemon?.includes(name)) {
      pokemonArr.push(name)
      localStorage.setItem('fav-pokemon', JSON.stringify(pokemonArr))
    }
  }

  return (
    <Card>
      <h3>{name}</h3>
      <Button onClick={addFavourite}>
        ☆
      </Button>
    </Card>
  )
};

export default PokemonCard
