import { Card } from "@streets-heaver/shui2";
import useSinglePokemon from "../../api/hooks/SinglePokemon";
import { Link } from "react-router-dom";

type PokemonImgProps = {
  name: string;
};

const PokemonImg = ({ name }: PokemonImgProps) => {
  const { data, status, error } = useSinglePokemon({ name: name });

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>{error?.message}</div>;
  }

  return (
    <div>
      {data && (
        <Link to={`/singlepokemon/${name}`}>
          <Card>
            <h4>{name}</h4>
            <img src={data.sprites.front_default} alt="pokemon pic" />
          </Card>
        </Link>
      )}
    </div>
  );
};

export default PokemonImg;
