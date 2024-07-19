import { Card } from "@streets-heaver/shui2";
import useSinglePokemon from "../../api/hooks/SinglePokemon";
import { Link } from "react-router-dom";
import classes from "./PokemonImg.module.scss";
import { useState } from "react";

type PokemonImgProps = {
  name: string;
};

const PokemonImg = ({ name }: PokemonImgProps) => {
  const [imageShiny, setImageShiny] = useState(false);

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
          <Card className={classes.pokemonCard}>
            <div
              className={classes.cardContainer}
              onMouseEnter={() => setImageShiny(true)}
              onMouseLeave={() => setImageShiny(false)}
            >
              <h4 className={classes.pokemonName}>{name}</h4>
              <img
                className={classes.pokemonImg}
                src={
                  !imageShiny
                    ? data.sprites.other?.["official-artwork"].front_default
                    : data.sprites.other?.["official-artwork"].front_shiny
                }
                alt="pokemon pic"
              />
            </div>
          </Card>
        </Link>
      )}
    </div>
  );
};

export default PokemonImg;

{/* <img
  className={classes.pokemonShinyImg}
  src={data.sprites.other?.["official-artwork"].front_shiny}
  alt="shiny pokemon pic"
/> */}