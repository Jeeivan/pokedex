export default function addFavourite(name: string) {
    const favPokemon = localStorage.getItem('fav-pokemon')
    const pokemonArr: string[] = favPokemon ? JSON.parse(favPokemon) : []

    if (!favPokemon?.includes(name)) {
      pokemonArr.push(name)
      localStorage.setItem('fav-pokemon', JSON.stringify(pokemonArr))
    }
  }