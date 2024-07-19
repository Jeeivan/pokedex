import { Card } from "@streets-heaver/shui2";
import { screen } from "@testing-library/react";
import { Link } from "react-router-dom";


type PokemonImgProps = {
    name: string;
  };

const data = {
    sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
    }
}

export const TestPokemonImg = ({ name }: PokemonImgProps) => {

      return (
        <div>
          {data && (
            <Link to={`/singlepokemon/${name}`}>
              <Card>
                <h4 data-testid={'pokemon-name'}>{name}</h4>
                <img data-testid={"pokemon-img"} src={data.sprites.front_default} alt="pokemon pic" />
              </Card>
            </Link>
          )}
        </div>
      );
}

const TestPokemonImgElements = {

    testPokemonName: () => screen.getByTestId('pokemon-name'),

    testPokemonImg: () => screen.getByTestId('pokemon-img')
}

export default TestPokemonImgElements