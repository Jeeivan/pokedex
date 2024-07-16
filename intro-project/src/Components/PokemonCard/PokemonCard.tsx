import { Card } from "@streets-heaver/shui2";
import { Link } from "react-router-dom";

type PokemonCardProps = {
  name: string
}

const PokemonCard = ({ name }: PokemonCardProps)  => {


  return (
    <Card>
      <Link to={`/singlepokemon/${name}`} key={name}>
      <h3>{name}</h3>
      </Link>
    </Card>
  )
};

export default PokemonCard
