import { Button } from "@streets-heaver/shui2";
import { Link } from "react-router-dom";

const PokemonListBtn = () => {
  return (
    <Link to={'/pokemonlist'}>
    <Button type="primary">
      Show Pokemon List
    </Button>
    </Link>
  )
};

export default PokemonListBtn
