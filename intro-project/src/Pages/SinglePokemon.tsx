import { useParams } from "react-router-dom";
import useSinglePokemon from "../api/hooks/SinglePokemon";
import { Card } from "@streets-heaver/shui2";
import ToggleFav from "../Components/ToggleFav/ToggleFav";
import PokemonListBtn from "../Components/utils/PokemonListBtn";

type Ability = {
  ability: {
    name: string;
    url: string;
  };
};

type Stat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

const SinglePokemon = () => {
  const params = useParams();
  const pokemonName = params.name;

  const { data, status, error } = useSinglePokemon({ name: pokemonName! });

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>{error?.message}</div>;
  }

  return (
    <div>
      <PokemonListBtn />
      {data && (
        <Card>
          <ToggleFav name={pokemonName} />
          <h4>Species- {data.name}</h4>
          <p>Weight- {data.weight}</p>
          <p>Height- {data.height}</p>
          <h5>Type- {data.types[0].type.name}</h5>
          <div>
            Abilities-
            {data.abilities?.map((ability: Ability, index: number) => {
              return <div key={index}>{ability.ability.name}</div>;
            })}
          </div>
          <img src={data.sprites.front_default} alt="pokemon pic" />
          <h6>Stats:</h6>
          {data?.stats?.map((stat: Stat, index: number) => (
            <div key={index}>
              <div>{stat.stat.name}</div>
              <div>{stat.base_stat}</div>
            </div>
          ))}
        </Card>
      )}
    </div>
  );
};

export default SinglePokemon;
