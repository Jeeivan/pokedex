import { useParams } from "react-router-dom";
import useSinglePokemon from "../../api/hooks/SinglePokemon";
import { Card } from "@streets-heaver/shui2";
import ToggleFav from "../../Components/ToggleFav/ToggleFav";
import classes from "./SinglePokemon.module.scss";

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
    <div className={classes.pageContainer}>
      {data && (
        <div className={classes.cardContainer}>
          <div className={classes.pokemonDetails}>
            <Card className={classes.pokemonDetailCard}>
              <div className={classes.detailContainer}>
                <div className={classes.pokemonValue}>
                  Weight: {data.weight}
                </div>
                <div className={classes.pokemonValue}>
                  Height: {data.height}
                </div>
              </div>
            </Card>
            <Card className={classes.pokemonDetailCard}>
              <div className={classes.detailContainer}>
                <h5 className={classes.pokemonLabel}>Type:</h5>
                <div className={classes.pokemonValue}>
                  {data.types[0].type.name}
                </div>
              </div>
            </Card>
            <Card className={classes.pokemonDetailCard}>
              <div className={classes.detailContainer}>
                <h5 className={classes.pokemonLabel}>Abilities:</h5>
                {data.abilities?.map((ability: Ability, index: number) => {
                  return (
                    <div key={index} className={classes.pokemonValue}>
                      {ability.ability.name}
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
          <div className={classes.singlePokemonContainer}>
            <Card className={classes.card}>
              <ToggleFav name={pokemonName} />
              <h4 className={classes.name}>{data.name}</h4>
              <div className={classes.imgContainer}>
                <img
                  className={classes.singlePokemonImg}
                  src={data.sprites.other?.["official-artwork"].front_default}
                  alt="pokemon pic"
                />
                <img
                  className={classes.singlePokemonImgShiny}
                  src={data.sprites.other?.["official-artwork"].front_shiny}
                  alt="shiny pokemon pic"
                />
              </div>
            </Card>
          </div>
          <Card className={classes.card}>
            <div className={classes.statsContainer}>
              <h5 className={classes.pokemonLabel}>Stats:</h5>
              {data?.stats?.map((stat: Stat, index: number) => (
                <div key={index} className={classes.stats}>
                  <div className={classes.statName}>{stat.stat.name}:</div>
                  <div className={classes.statValue}>{stat.base_stat}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SinglePokemon;
